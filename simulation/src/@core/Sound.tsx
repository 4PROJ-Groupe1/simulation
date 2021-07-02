import { useEffect, useMemo, useCallback } from 'react';
import useAsset from './useAsset';

export interface SoundProps {
    src: string | string[];
    loop?: boolean;
    volume?: number;
    onStop?: () => void;
}

let canPlayAudio = false;
function handleCanPlay() {
    canPlayAudio = true;
    window.removeEventListener('click', handleCanPlay);
}
window.addEventListener('click', handleCanPlay);

const pickSrc = src => {
    const sources = Array.isArray(src) ? src : [src];
    return sources[Math.floor(sources.length * Math.random())];
};

export function useSound({ src, loop = false, volume = 1, onStop }: SoundProps) {
    const source = useMemo(() => pickSrc(src), [src]);
    const audio = useAsset(source) as HTMLAudioElement;

    const instance = audio;
    instance.currentTime = 0;
    instance.loop = loop;
    instance.volume = volume;

    useEffect(() => {
        instance.addEventListener('ended', onStop);
        return () => {
            instance.removeEventListener('ended', onStop);
            if (instance.loop) {
                instance.pause();
            }
        };
    }, [instance, onStop]);

    const play = useCallback(() => {
        if (canPlayAudio) {
            instance.play().catch(() => {});
        }
    }, [instance]);

    return play;
}

export default function Sound(props: SoundProps) {
    const play = useSound(props);
    useEffect(() => {
        const timeout = setTimeout(play, 10);
        return () => clearTimeout(timeout);
    }, [play]);
    return null;
}
