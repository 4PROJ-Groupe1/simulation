import { useCallback } from 'react';
import { ColliderRef } from './Collider';
import { Position } from './GameObject';
import useGame from './useGame';
import useGameObject from './useGameObject';

export interface CollisionTestOptions {
    walkable?: boolean;
    sight?: boolean;
    hit?: boolean;
}

export default function useCollisionTest({
    sight = false,
    hit = false,
}: CollisionTestOptions = {}) {
    const { findGameObjectsByXY } = useGame();
    const { id } = useGameObject() || {};

    return useCallback(
        (position: Position) => {
            const { x, y } = position;
            const gameObjectsAtXY = findGameObjectsByXY(x, y);

            if (!gameObjectsAtXY.length) return false;

            return gameObjectsAtXY.every(gameObject => {
                if (gameObject.id === id) return true;

                const collider = gameObject.getComponent<ColliderRef>('Collider');

                if (sight) {
                    return (
                        gameObject.layer == null ||
                        (gameObject.layer !== 'wall' &&
                            gameObject.layer !== 'obstacle') ||
                        (collider && collider.walkable)
                    );
                }
                if (hit) {
                    return (
                        gameObject.layer == null ||
                        (gameObject.layer !== 'wall' &&
                            gameObject.layer !== 'visible-wall' &&
                            gameObject.layer !== 'obstacle') ||
                        (collider && collider.walkable)
                    );
                }

                return !collider || collider.walkable;
            });
        },
        [id, findGameObjectsByXY, sight, hit]
    );
}
