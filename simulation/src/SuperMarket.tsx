import React, {Fragment} from 'react';
import GameObject from './@core/GameObject';
import Sprite from './@core/Sprite';
import TileMap, { TileMapResolver } from './@core/TileMap';
import { mapDataString } from './@core/utils/mapUtils';
import Player from './entities/Player';
import spriteData from './spriteData';
import Wall from "./entities/walls/Wall";
import WallBorderTop from "./entities/walls/WallBorderTop";
import WallVerticalLeft from "./entities/walls/WallVerticalLeft";
import WallVerticalRight from "./entities/walls/WallVerticalRight";
import WallVerticalBottomRight from "./entities/walls/WallVerticalBottomRight";
import WallVerticalBottomLeft from "./entities/walls/WallVerticalBottomLeft";
import WallVerticalTopLeft from "./entities/walls/WallVerticalTopLeft";
import WallVerticalTopRight from "./entities/walls/WallVerticalTopRight";
import WallCornerLeft from "./entities/walls/WallCornerLeft";
import WallCornerRight from "./entities/walls/WallCornerRight";
import GateLeft from "./entities/gates/GateLeft";
import Floor from "./entities/Floor";
import GateRight from "./entities/gates/GateRight";
import Collider from "./@core/Collider";
import CartValidation from "./entities/CartValidation";
import useGameObjectEvent from "./@core/useGameObjectEvent";
import Interactable, {InteractionEvent} from "./@core/Interactable";

const mapData = mapDataString(`
┏ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ┓
│ t k j h i d e f g s a b c B ║
│ · · · · · · · · · · · · · 7 ║
│ u v · · · 1 · · 4 · · · · 8 ║
│ · · · · · 2 · · 5 · m · · 9 ║
│ w x · · · 3 · · 6 · · · · z ║
│ · · · · · · · · · · · C ╔ ─ ┛
┗ ─ ╗ · · · ╔ ─ ─ ╗ · · P ║ ° °
° ° │ ⧚ · ⧛ ║ ° ° │ ⧚ · ⧛ ║ ° °
° ° ┗ ╗ I ╔ ┛ ° ° │ · · · ║ ° °
`);

const resolveMapTile: TileMapResolver = (type, x, y) => {
    const key = `${x}-${y}`;
    const position = { x, y };

    const floor = (
        <Fragment key={key}>
            <Floor {...position} />
        </Fragment>
    );

    switch (type) {
        case '·':
            return floor;
        case '═':
            return (
                <Fragment key={key+`-Fragment`}>
                    <Wall {...position} />
                </Fragment>
            );
        case '│':
            return (
                <Fragment key={key+`-Fragment`}>
                    <WallVerticalLeft {...position} />
                </Fragment>
            );
        case '║':
            return (
                <Fragment key={key+`-Fragment`}>
                    <WallVerticalRight {...position} />
                </Fragment>
            );
        case '┏':
            return (
                <Fragment key={key+`-Fragment`}>
                    <WallVerticalTopLeft {...position} />
                </Fragment>
            );
        case '┓':
            return (
                <Fragment key={key+`-Fragment`}>
                    <WallVerticalTopRight {...position} />
                </Fragment>
            );
        case '┗':
            return (
                <Fragment key={key+`-Fragment`}>
                    <WallVerticalBottomLeft {...position} />
                </Fragment>
            );
        case '┛':
            return (
                <Fragment key={key+`-Fragment`}>
                    <WallVerticalBottomRight {...position} />
                </Fragment>
            );
        case '─':
            return (
                <Fragment key={key+`-Fragment`}>
                    <WallBorderTop {...position} />
                </Fragment>
            );
        case '╗':
            return (
                <Fragment key={key+`-Fragment`}>
                    <WallCornerLeft {...position} />
                </Fragment>
            );
        case '╔':
            return (
                <Fragment key={key+`-Fragment`}>
                    <WallCornerRight {...position} />
                </Fragment>
            );
        case '⧚':
            return (
                <Fragment key={key+`-Fragment`}>
                    <GateLeft {...position} />
                </Fragment>
            );
        case '⧛':
            return (
                <Fragment key={key+`-Fragment`}>
                    <GateRight {...position} />
                </Fragment>
            );
        case 'a':
            return (
                <Fragment key={key+`-Fragment`}>
                    {floor}
                    <GameObject key={key+`-GameObject`} {...position} layer="obstacle">
                        <Sprite
                            {...spriteData.objects}
                            state="meat1"
                            offset={{ x: 0, y: 0.3 }}
                        />
                        <Collider />
                        <Interactable />
                        <AddProductToCartScript productId={""}/>
                    </GameObject>
                </Fragment>
            );
        case 'b':
            return (
                <Fragment key={key+`-Fragment`}>
                    {floor}
                    <GameObject key={key+`-GameObject`} {...position} layer="obstacle">
                        <Sprite
                            {...spriteData.objects}
                            state="meat2"
                            offset={{ x: 0, y: 0.3 }}
                        />
                        <Collider />
                        <Interactable />
                        <AddProductToCartScript productId={""}/>
                    </GameObject>
                </Fragment>
            );
        case 'c':
            return (
                <Fragment key={key+`-Fragment`}>
                    {floor}
                    <GameObject key={key+`-GameObject`} {...position} layer="obstacle">
                        <Sprite
                            {...spriteData.objects}
                            state="meat3"
                            offset={{ x: 0, y: 0.3 }}
                        />
                        <Collider />
                        <Interactable />
                        <AddProductToCartScript productId={""}/>
                    </GameObject>
                </Fragment>
            );
        case 's':
            return (
                <Fragment key={key+`-Fragment`}>
                    {floor}
                    <GameObject key={key+`-GameObject`} {...position} layer="obstacle">
                        <Sprite
                            {...spriteData.objects}
                            state="scale"
                            offset={{ x: 0, y: 0.3 }}
                        />
                        <Collider />
                    </GameObject>
                </Fragment>
            );
        case 'd':
            return (
                <Fragment key={key+`-Fragment`}>
                    {floor}
                    <GameObject key={key+`-GameObject`} {...position} layer="obstacle">
                        <Sprite
                            {...spriteData.objects}
                            state="fish1"
                            offset={{ x: 0, y: 0.3 }}
                        />
                        <Collider />
                        <Interactable />
                        <AddProductToCartScript productId={""}/>
                    </GameObject>
                </Fragment>
            );
        case 'e':
            return (
                <Fragment key={key+`-Fragment`}>
                    {floor}
                    <GameObject key={key+`-GameObject`} {...position} layer="obstacle">
                        <Sprite
                            {...spriteData.objects}
                            state="fish2"
                            offset={{ x: 0, y: 0.3 }}
                        />
                        <Collider />
                        <Interactable />
                        <AddProductToCartScript productId={""}/>
                    </GameObject>
                </Fragment>
            );
        case 'f':
            return (
                <Fragment key={key+`-Fragment`}>
                    {floor}
                    <GameObject key={key+`-GameObject`} {...position} layer="obstacle">
                        <Sprite
                            {...spriteData.objects}
                            state="fish3"
                            offset={{ x: 0, y: 0.3 }}
                        />
                        <Collider />
                        <Interactable />
                        <AddProductToCartScript productId={""}/>
                    </GameObject>
                </Fragment>
            );
        case 'g':
            return (
                <Fragment key={key+`-Fragment`}>
                    {floor}
                    <GameObject key={key+`-GameObject`} {...position} layer="obstacle">
                        <Sprite
                            {...spriteData.objects}
                            state="fish4"
                            offset={{ x: 0, y: 0.3 }}
                        />
                        <Collider />
                        <Interactable />
                        <AddProductToCartScript productId={""}/>
                    </GameObject>
                </Fragment>
            );
        case '1':
            return (
                <Fragment key={key+`-Fragment`}>
                    {floor}
                    <GameObject key={key+`-GameObject`} {...position} layer="obstacle">
                        <Sprite
                            {...spriteData.objects}
                            state="shelfVertical11"
                            offset={{ x: 0, y: 0.15 }}
                        />
                        <Collider />
                        <Interactable />
                        <AddProductToCartScript productId={""}/>
                    </GameObject>
                </Fragment>
            );
        case '2':
            return (
                <Fragment key={key+`-Fragment`}>
                    {floor}
                    <GameObject key={key+`-GameObject`} {...position} layer="obstacle">
                        <Sprite
                            {...spriteData.objects}
                            state="shelfVertical12"
                            offset={{ x: 0, y: 0.15 }}
                        />
                        <Collider />
                        <Interactable />
                        <AddProductToCartScript productId={""}/>
                    </GameObject>
                </Fragment>
            );
        case '3':
            return (
                <Fragment key={key+`-Fragment`}>
                    {floor}
                    <GameObject key={key+`-GameObject`} {...position} layer="obstacle">
                        <Sprite
                            {...spriteData.objects}
                            state="shelfVertical13"
                            offset={{ x: 0, y: 0.15 }}
                        />
                        <Collider />
                        <Interactable />
                        <AddProductToCartScript productId={""}/>
                    </GameObject>
                </Fragment>
            );
        case '4':
            return (
                <Fragment key={key+`-Fragment`}>
                    {floor}
                    <GameObject key={key+`-GameObject`} {...position} layer="obstacle">
                        <Sprite
                            {...spriteData.objects}
                            state="shelfVertical21"
                            offset={{ x: 0, y: 0.15 }}
                        />
                        <Collider />
                        <Interactable />
                        <AddProductToCartScript productId={""}/>
                    </GameObject>
                </Fragment>
            );
        case '5':
            return (
                <Fragment key={key+`-Fragment`}>
                    {floor}
                    <GameObject key={key+`-GameObject`} {...position} layer="obstacle">
                        <Sprite
                            {...spriteData.objects}
                            state="shelfVertical22"
                            offset={{ x: 0, y: 0.15 }}
                        />
                        <Collider />
                        <Interactable />
                        <AddProductToCartScript productId={""}/>
                    </GameObject>
                </Fragment>
            );
        case '6':
            return (
                <Fragment key={key+`-Fragment`}>
                    {floor}
                    <GameObject key={key+`-GameObject`} {...position} layer="obstacle">
                        <Sprite
                            {...spriteData.objects}
                            state="shelfVertical23"
                            offset={{ x: 0, y: 0.15 }}
                        />
                        <Collider />
                        <Interactable />
                        <AddProductToCartScript productId={""}/>
                    </GameObject>
                </Fragment>
            );
        case '7':
            return (
                <Fragment key={key+`-Fragment`}>
                    {floor}
                    <GameObject key={key+`-GameObject`} {...position} layer="obstacle">
                        <Sprite
                            {...spriteData.objects}
                            state="shelfVertical31"
                        />
                        <Collider />
                        <Interactable />
                        <AddProductToCartScript productId={""}/>
                    </GameObject>
                </Fragment>
            );
        case '8':
            return (
                <Fragment key={key+`-Fragment`}>
                    {floor}
                    <GameObject key={key+`-GameObject`} {...position} layer="obstacle">
                        <Sprite
                            {...spriteData.objects}
                            state="shelfVertical32"
                        />
                        <Collider />
                        <Interactable />
                        <AddProductToCartScript productId={""}/>
                    </GameObject>
                </Fragment>
            );
        case '9':
            return (
                <Fragment key={key+`-Fragment`}>
                    {floor}
                    <GameObject key={key+`-GameObject`} {...position} layer="obstacle">
                        <Sprite
                            {...spriteData.objects}
                            state="shelfVertical33"
                        />
                        <Collider />
                        <Interactable />
                        <AddProductToCartScript productId={""}/>
                    </GameObject>
                </Fragment>
            );
        case 'm':
            return (
                <Fragment key={key+`-Fragment`}>
                    {floor}
                    <GameObject key={key+`-GameObject`} {...position} layer="obstacle">
                        <Sprite
                            {...spriteData.objects}
                            state="mop"
                        />
                        <Collider />
                    </GameObject>
                </Fragment>
            );
        case 'h':
            return (
                <Fragment key={key+`-Fragment`}>
                    {floor}
                    <GameObject key={key+`-GameObject`} {...position} layer="obstacle">
                        <Sprite
                            {...spriteData.objects}
                            state="shelfHorizontal1"
                            offset={{ x: 0, y: 0.3 }}
                        />
                        <Collider />
                        <Interactable />
                        <AddProductToCartScript productId={""}/>
                    </GameObject>
                </Fragment>
            );
        case 'i':
            return (
                <Fragment key={key+`-Fragment`}>
                    {floor}
                    <GameObject key={key+`-GameObject`} {...position} layer="obstacle">
                        <Sprite
                            {...spriteData.objects}
                            state="shelfHorizontal2"
                            offset={{ x: 0, y: 0.3 }}
                        />
                        <Collider />
                        <Interactable />
                        <AddProductToCartScript productId={""}/>
                    </GameObject>
                </Fragment>
            );
        case 'j':
            return (
                <Fragment key={key+`-Fragment`}>
                    {floor}
                    <GameObject key={key+`-GameObject`} {...position} layer="obstacle">
                        <Sprite
                            {...spriteData.objects}
                            state="shelfFrozenFood"
                            offset={{ x: 0, y: 0.3 }}
                        />
                        <Collider />
                        <Interactable />
                        <AddProductToCartScript productId={""}/>
                    </GameObject>
                </Fragment>
            );
        case 'k':
            return (
                <Fragment key={key+`-Fragment`}>
                    {floor}
                    <GameObject key={key+`-GameObject`} {...position} layer="obstacle">
                        <Sprite
                            {...spriteData.objects}
                            state="cake"
                            offset={{ x: 0, y: 0.3 }}
                        />
                        <Collider />
                        <Interactable />
                        <AddProductToCartScript productId={""}/>
                    </GameObject>
                </Fragment>
            );
        case 't':
            return (
                <Fragment key={key+`-Fragment`}>
                    {floor}
                    <GameObject key={key+`-GameObject`} {...position} layer="obstacle">
                        <Sprite
                            {...spriteData.objects}
                            state="crate1"
                            offset={{ x: 0, y: 0.3 }}
                        />
                        <Collider />
                        <Interactable />
                        <AddProductToCartScript productId={""}/>
                    </GameObject>
                </Fragment>
            );
        case 'u':
            return (
                <Fragment key={key+`-Fragment`}>
                    {floor}
                    <GameObject key={key+`-GameObject`} {...position} layer="obstacle">
                        <Sprite
                            {...spriteData.objects}
                            state="crate2"
                            offset={{ x: 0, y: 0.1 }}
                        />
                        <Collider />
                        <Interactable />
                        <AddProductToCartScript productId={""}/>
                    </GameObject>
                </Fragment>
            );
        case 'v':
            return (
                <Fragment key={key+`-Fragment`}>
                    {floor}
                    <GameObject key={key+`-GameObject`} {...position} layer="obstacle">
                        <Sprite
                            {...spriteData.objects}
                            state="crate3"
                            offset={{ x: 0, y: 0.1 }}
                        />
                        <Collider />
                        <Interactable />
                        <AddProductToCartScript productId={""}/>
                    </GameObject>
                </Fragment>
            );
        case 'w':
            return (
                <Fragment key={key+`-Fragment`}>
                    {floor}
                    <GameObject key={key+`-GameObject`} {...position} layer="obstacle">
                        <Sprite
                            {...spriteData.objects}
                            state="containerFrozenFood1"
                        />
                        <Collider />
                        <Interactable />
                        <AddProductToCartScript productId={""}/>
                    </GameObject>
                </Fragment>
            );
        case 'x':
            return (
                <Fragment key={key+`-Fragment`}>
                    {floor}
                    <GameObject key={key+`-GameObject`} {...position} layer="obstacle">
                        <Sprite
                            {...spriteData.objects}
                            state="containerFrozenFood2"
                        />
                        <Collider />
                        <Interactable />
                        <AddProductToCartScript productId={""}/>
                    </GameObject>
                </Fragment>
            );
        case 'B':
            return (
                <Fragment key={key+`-Fragment`}>
                    {floor}
                    <GameObject key={key+`-GameObject`} {...position} layer="obstacle">
                        <Sprite
                            {...spriteData.objects}
                            state="boxes"
                        />
                        <Collider />
                    </GameObject>
                </Fragment>
            );
        case 'C':
            return (
                <Fragment key={key+`-Fragment`}>
                    {floor}
                    <GameObject key={key+`-GameObject`} {...position} layer="obstacle">
                        <Sprite
                            {...spriteData.objects}
                            state="cart"
                        />
                        <Collider />
                    </GameObject>
                </Fragment>
            );
        case 'P':
            return (
                <Fragment key={key+`-Fragment`}>
                    {floor}
                    <GameObject key={key+`-GameObject`} {...position} layer="obstacle">
                        <Sprite
                            {...spriteData.objects}
                            state="baskets"
                        />
                        <Collider />
                    </GameObject>
                </Fragment>
            );
        case 'z':
            return (
                <Fragment key={key+`-Fragment`}>
                    {floor}
                    <GameObject key={key+`-GameObject`} {...position} layer="obstacle">
                        <Sprite
                            {...spriteData.objects}
                            state="bread"
                        />
                        <Collider />
                        <Interactable />
                        <AddProductToCartScript productId={""}/>
                    </GameObject>
                </Fragment>
            );
        case 'I':
            return (
                <Fragment key={key+`-Fragment`}>
                    {floor}
                    <CartValidation {...position} />
                </Fragment>
            );

        default:
            return null;
    }
};

//TODO Implement productId
function AddProductToCartScript(productId: any) {
    useGameObjectEvent<InteractionEvent>('interaction', () => {

        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        };

        fetch('https://api.brilliant-market.com/api/demo/add-product', requestOptions);
    });

    return null;
}

export default function SuperMarket() {
    return (
        <>
            <GameObject name="map">
                <ambientLight />
                <TileMap data={mapData} resolver={resolveMapTile} definesMapSize />
            </GameObject>
            <Player x={11} y={0} />
        </>
    );
}
