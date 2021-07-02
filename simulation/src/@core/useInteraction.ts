import { InteractionCallback, InteractionEvent } from './Interactable';
import useGameObjectEvent from './useGameObjectEvent';

export default function useInteraction(callback: InteractionCallback) {
    useGameObjectEvent<InteractionEvent>('interaction', callback, [callback]);
}
