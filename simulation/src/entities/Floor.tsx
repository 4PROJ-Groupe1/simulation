import React from 'react';
import Sprite from "../@core/Sprite";
import GameObject, {GameObjectProps} from "../@core/GameObject";
import spriteData from "../spriteData";

export default function Floor(props: GameObjectProps) {
    return (
        <GameObject {...props} layer="ground">
            <Sprite {...spriteData.objects} state="floor" />
        </GameObject>
    );
}
