import React from 'react'
import useGameObject from "../@core/useGameObject";
import Collider, {TriggerEvent} from "../@core/Collider";
import useGameObjectEvent from "../@core/useGameObjectEvent";
import GameObject, {GameObjectProps} from "../@core/GameObject";
import Sprite from "../@core/Sprite";
import spriteData from "../spriteData";

function CarteValidationScript() {
    const { getRef } = useGameObject();

    useGameObjectEvent<TriggerEvent>('trigger', other => {
        if (other.name === 'player') {
            getRef().setDisabled(true);

            const requestOptions = {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' }
            };

            fetch('https://api.brilliant-market.com/api/cart-validation', requestOptions);
        }
    });

    return null;
}

export default function CartValidation(props: GameObjectProps) {
    const name = `${props.x}-${props.y}-cartValidationFloor`;
    return (
        <GameObject name={name} persisted {...props}>
            <Sprite {...spriteData.objects} state="cartValidationFloor" />
            <Collider isTrigger />
            <CarteValidationScript />
        </GameObject>
    );
}
