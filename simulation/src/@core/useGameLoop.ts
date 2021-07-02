import { useRef } from 'react';
import { useFrame } from 'react-three-fiber';
import useGame from './useGame';
import useGameObject from './useGameObject';

export default function useGameLoop(callback: FrameRequestCallback, condition = true) {
    const { paused } = useGame();
    const { getRef } = useGameObject() || {};
    const active = useRef(false);
    const callbackRef = useRef<FrameRequestCallback>();
    callbackRef.current = callback;
    active.current = !paused && condition;
    if (getRef && getRef().disabled) active.current = false;

    useFrame(({ clock }) => {
        const time = clock.oldTime;

        if (active.current) {
            callback(time);
        }
    });

    return active.current;
}
