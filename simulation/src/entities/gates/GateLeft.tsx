import React from 'react';
import GameObject, {GameObjectProps} from "../../@core/GameObject";
import Collider from "../../@core/Collider";
import spriteData from "../../spriteData";
import Sprite from "../../@core/Sprite";
import Floor from "../Floor";

export default function GateLeft(props: GameObjectProps) {
    return (
        <>
            <Floor {...props} />
            <GameObject {...props} layer="wall">
                <Collider />
                <Sprite {...spriteData.objects} state="gateLeftOff" />
            </GameObject>
        </>
    );
}
