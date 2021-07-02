import React from 'react';
import GameObject, {GameObjectProps} from "../../@core/GameObject";
import Collider from "../../@core/Collider";
import spriteData from "../../spriteData";
import Sprite from "../../@core/Sprite";

export default function Wall(props: GameObjectProps) {
    return (
        <GameObject {...props} layer="wall">
            <Collider />
            <Sprite {...spriteData.objects} state="wall" />
        </GameObject>

        // <GameObject {...props} layer="wall">
        //     <Collider />
        //     <Sprite {...spriteData.objects} state="wall" />
        // </GameObject>

        // <GameObject key={key} {...position} layer="wall">
        //     <Collider />
        //     <Sprite {...spriteData.objects} state="wall" />
        // </GameObject>
    );
}
