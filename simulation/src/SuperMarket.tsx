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
                        <AddProductToCartScript props={ {
                            idRayon: "60e20562734e3a72c3a39a71",
                            idLotProduit: "60e20ed77ff53ab0f052f925",
                            prix: 4,
                            nomProduit: "beef",
                            idProduit: "60e1ee85d3b358aeb5997423",
                            company: "companyone"
                        } } />
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
                        <AddProductToCartScript props={ {
                            idRayon: "60e20562734e3a72c3a39a71",
                            idLotProduit: "60e20ef87ff53abafd52f926",
                            prix: 3,
                            nomProduit: "chicken",
                            idProduit: "60e1ee85d3b358aeb5997420",
                            company: "companythree"
                        } } />
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
                        <AddProductToCartScript props={ {
                            idRayon: "60e20562734e3a72c3a39a71",
                            idLotProduit: "60e20f65734e3a043ca39a76",
                            prix: 3,
                            nomProduit: "pork",
                            idProduit: "60e1ee85d3b358aeb5997422",
                            company: "companyone"
                        } } />
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
                        <AddProductToCartScript props={ {
                            idRayon: "60e205167ff53a33fb52f91e",
                            idLotProduit: "60e20e3b734e3a142ba39a74",
                            prix: 5,
                            nomProduit: "fish",
                            idProduit: "60e1ee85d3b358aeb5997425",
                            company: "companythree"
                        } } />
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
                        <AddProductToCartScript props={ {
                            idRayon: "60e205167ff53a33fb52f91e",
                            idLotProduit: "60e20e3b734e3a142ba39a74",
                            prix: 5,
                            nomProduit: "fish",
                            idProduit: "60e1ee85d3b358aeb5997425",
                            company: "companythree"
                        } } />
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
                        <AddProductToCartScript props={ {
                            idRayon: "60e205167ff53a33fb52f91e",
                            idLotProduit: "60e20e6c734e3a17aba39a75",
                            prix: 3,
                            nomProduit: "frozen fish",
                            idProduit: "60e1ee85d3b358aeb599744a",
                            company: "companyfive"
                        } } />
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
                        <AddProductToCartScript props={ {
                            idRayon: "60e205167ff53a33fb52f91e",
                            idLotProduit: "60e20e6c734e3a17aba39a75",
                            prix: 3,
                            nomProduit: "frozen fish",
                            idProduit: "60e1ee85d3b358aeb599744a",
                            company: "companyfive"
                        } } />
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
                        <AddProductToCartScript props={ {
                            idRayon: "60e207a57ff53a48d752f922",
                            idLotProduit: "60e211577ff53a655952f92a",
                            prix: 2,
                            nomProduit: "cat food",
                            idProduit: "60e1ee85d3b358aeb5997478",
                            company: "companythree"
                        } } />
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
                        <AddProductToCartScript props={ {
                            idRayon: "60e207a57ff53a48d752f922",
                            idLotProduit: "60e211787ff53a6c1e52f92b",
                            prix: 2,
                            nomProduit: "dog food",
                            idProduit: "60e1ee85d3b358aeb5997477",
                            company: "companyfour"
                        } } />
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
                        <AddProductToCartScript props={ {
                            idRayon: "60e207a57ff53a48d752f922",
                            idLotProduit: "60e21195734e3a6daea39a79",
                            prix: 9,
                            nomProduit: "pet care",
                            idProduit: "60e1ee85d3b358aeb5997479",
                            company: "companyone"
                        } } />
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
                        <AddProductToCartScript props={ {
                            idRayon: "60e20a357ff53a1a4952f924",
                            idLotProduit: "60e2132b7ff53a1a7e52f92c",
                            prix: 6,
                            nomProduit: "hygiene article",
                            idProduit: "60e1ee85d3b358aeb59974b0",
                            company: "companytwo"
                        } } />
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
                        <AddProductToCartScript props={ {
                            idRayon: "60e20a357ff53a1a4952f924",
                            idLotProduit: "60e21340734e3a2e89a39a7e",
                            prix: 9,
                            nomProduit: "make up remover",
                            idProduit: "60e1ee85d3b358aeb59974aa",
                            company: "companyfour"
                        } } />
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
                        <AddProductToCartScript props={ {
                            idRayon: "60e20a357ff53a1a4952f924",
                            idLotProduit: "60e2135f734e3a0f3aa39a7f",
                            prix: 8,
                            nomProduit: "male cosmetics",
                            idProduit: "60e1ee85d3b358aeb59974a9",
                            company: "companythree"
                        } } />
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
                        <AddProductToCartScript props={ {
                            idRayon: "60e2089e7ff53ab1a652f923",
                            idLotProduit: "60e211e7734e3a1182a39a7b",
                            prix: 1,
                            nomProduit: "liquor",
                            idProduit: "60e1ee85d3b358aeb5997488",
                            company: "companyone"
                        } } />
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
                        <AddProductToCartScript props={ {
                            idRayon: "60e2089e7ff53ab1a652f923",
                            idLotProduit: "60e21210734e3a2a52a39a7c",
                            prix: 10,
                            nomProduit: "red/blush wine",
                            idProduit: "60e1ee85d3b358aeb599748d",
                            company: "companyfive"
                        } } />
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
                        <AddProductToCartScript props={ {
                            idRayon: "60e2089e7ff53ab1a652f923",
                            idLotProduit: "60e211cb734e3a6af0a39a7a",
                            prix: 1,
                            nomProduit: "prosecco",
                            idProduit: "60e1ee85d3b358aeb599748e",
                            company: "companyfour"
                        } } />
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
                        <AddProductToCartScript props={ {
                            idRayon: "60e20c23734e3ad488a39a72",
                            idLotProduit: "60e213b67ff53a41c152f92d",
                            prix: 6,
                            nomProduit: "pasta",
                            idProduit: "60e1ee85d3b358aeb599745b",
                            company: "companytwo"
                        } } />
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
                        <AddProductToCartScript props={ {
                            idRayon: "60e20c23734e3ad488a39a72",
                            idLotProduit: "60e213cc734e3a91fca39a80",
                            prix: 6,
                            nomProduit: "ketchup",
                            idProduit: "60e1ee85d3b358aeb5997464",
                            company: "companyone"
                        } } />
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
                        <AddProductToCartScript props={ {
                            idRayon: "60e20c9e734e3a6368a39a73",
                            idLotProduit: "60e21426734e3a1db4a39a81",
                            prix: 10,
                            nomProduit: "snack products",
                            idProduit: "60e1ee85d3b358aeb5997493",
                            company: "companythree"
                        } } />
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
                        <AddProductToCartScript props={ {
                            idRayon: "60e20c9e734e3a6368a39a73",
                            idLotProduit: "60e2143a734e3aca43a39a82",
                            prix: 7,
                            nomProduit: "salty snack",
                            idProduit: "60e1ee85d3b358aeb5997490",
                            company: "companyfive"
                        } } />
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
                        <AddProductToCartScript props={ {
                            idRayon: "60e207257ff53a4a8a52f921",
                            idLotProduit: "60e210ce7ff53aa4d052f928",
                            prix: 9,
                            nomProduit: "root vegetables",
                            idProduit: "60e1ee85d3b358aeb599742c",
                            company: "companyfive"
                        } } />
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
                        <AddProductToCartScript props={ {
                            idRayon: "60e207257ff53a4a8a52f921",
                            idLotProduit: "60e210e47ff53a12cc52f929",
                            prix: 6,
                            nomProduit: "onions",
                            idProduit: "60e1ee85d3b358aeb599742d",
                            company: "companyfive"
                        } } />
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
                        <AddProductToCartScript props={ {
                            idRayon: "60e206f87ff53a0bba52f920",
                            idLotProduit: "60e2108d7ff53a85fd52f927",
                            prix: 8,
                            nomProduit: "tropical fruit",
                            idProduit: "60e1ee85d3b358aeb5997427",
                            company: "companythree"
                        } } />
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
                        <AddProductToCartScript props={ {
                            idRayon: "60e2067d7ff53a6b1c52f91f",
                            idLotProduit: "60e20ff5734e3a7d7ca39a77",
                            prix: 7,
                            nomProduit: "frozen chicken",
                            idProduit: "60e1ee85d3b358aeb599744b",
                            company: "companythree"
                        } } />
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
                        <AddProductToCartScript props={ {
                            idRayon: "60e2067d7ff53a6b1c52f91f",
                            idLotProduit: "60e2102b734e3a4673a39a78",
                            prix: 7,
                            nomProduit: "frozen vegetables",
                            idProduit: "60e1ee85d3b358aeb5997447",
                            company: "companythree"
                        } } />
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
                        <AddProductToCartScript props={ {
                            idRayon: "60e2089e7ff53ab1a652f923",
                            idLotProduit: "60e21256734e3ac01aa39a7d",
                            prix: 7,
                            nomProduit: "sparkling wine",
                            idProduit: "60e1ee85d3b358aeb599748f",
                            company: "companyfour"
                        } } />
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

function AddProductToCartScript(props: any) {
    useGameObjectEvent<InteractionEvent>('interaction', () => {

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({'idRayon': props.props.idRayon, 'idLotProduit': props.props.idLotProduit, 'prix': props.props.prix, 'nomProduit': props.props.nomProduit, 'idProduit': props.props.idProduit, 'company': props.props.company})
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
