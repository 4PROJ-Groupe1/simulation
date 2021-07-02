import React, { useMemo, useRef, useState } from 'react';
import { SceneExitEvent, ScenePreExitEvent } from './Scene';
import useGame from './useGame';
import { SceneStoreProvider } from './useGameObjectStore';
import waitForMs from './utils/waitForMs';

export interface SceneManagerContextValue {
    currentScene: string;
    currentLevel: number;
    prevLevel: number;
    setScene: (sceneId: string) => Promise<void>;
    setLevel: (level: number) => Promise<void>;
    resetScene: () => Promise<void>;
    setSceneState: (key: string, value: any) => void;
    getSceneState: (key: string) => any;
}

export const SceneManagerContext = React.createContext<SceneManagerContextValue>(null);

interface Props {
    defaultScene: string;
    children: React.ReactNode;
}

export default function SceneManager({ defaultScene, children }: Props) {
    const { publish } = useGame();
    const [initialScene, initialLevel = 0] = defaultScene.split(':');
    const [currentScene, setScene] = useState(initialScene);
    const prevLevel = useRef(-1);
    const currentLevel = useRef(Number(initialLevel));
    const sceneStore = useRef(new Map<string, any>());
    const api = useMemo<SceneManagerContextValue>(
        () => ({
            currentScene,
            prevLevel: prevLevel.current,
            currentLevel: currentLevel.current,
            async setScene(nextScene) {
                let [targetScene, targetLevel = 0] = nextScene.split(':');
                targetLevel = Number(targetLevel);

                if (currentScene !== targetScene) {
                    if (currentScene !== '') {
                        await publish<ScenePreExitEvent>('scene-pre-exit', currentScene);
                        await publish<SceneExitEvent>('scene-exit', currentScene);
                        setScene('');
                        await waitForMs(100);
                    }
                    prevLevel.current = -1;
                    currentLevel.current = targetLevel;
                    setScene(targetScene);
                } else if (currentLevel.current !== targetLevel) {
                    api.setLevel(targetLevel);
                }
            },
            async setLevel(level) {
                if (level !== currentLevel.current) {
                    prevLevel.current = currentLevel.current;
                    currentLevel.current = level;
                    await api.resetScene();
                }
            },
            async resetScene() {
                const prevScene = currentScene;
                const formerCurrentLevel = currentLevel.current;
                const formerPrevLevel = prevLevel.current;
                await api.setScene('');
                await waitForMs(100);
                prevLevel.current = formerPrevLevel;
                currentLevel.current = formerCurrentLevel;
                setScene(prevScene);
            },
            setSceneState(key, value) {
                sceneStore.current.set(`${currentScene}.${key}`, value);
            },
            getSceneState(key) {
                return sceneStore.current.get(`${currentScene}.${key}`);
            },
        }),
        [currentScene, currentLevel, publish]
    );

    return (
        <SceneManagerContext.Provider value={api}>
            <SceneStoreProvider>{children}</SceneStoreProvider>
        </SceneManagerContext.Provider>
    );
}
