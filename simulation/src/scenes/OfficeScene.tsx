import React, { Fragment } from 'react';
import Collider from '../@core/Collider';
import GameObject from '../@core/GameObject';
import Sprite from '../@core/Sprite';
import TileMap, { TileMapResolver } from '../@core/TileMap';
import { mapDataString } from '../@core/utils/mapUtils';
import Player from '../entities/Player';
import spriteData from '../spriteData';

const mapData = mapDataString(`
┏ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ┓
│ · . T # T · · · · · e · · · · · T ║
│ · · · · · · · · · · · · · · · · · ║
│ · · · # · · · · · · · · · · · # # ║
│ # # # # · · · · · · · · · · · T W ║
│ C C C # · · · · · · · · · · · · · ║
│ · · · · · · · · · · · · · · · · · ║
│ · · · · · · · · · · · · · · · · · ║
┗ ─ ╗ · · · ╔ ─ ─ ─ ─ ─ ╗ · · · ╔ ─ ┛
° ° │ G · g ║ ° ° ° ° ° │ G · g ║ ° °
° ° │ · · · ║ ° ° ° ° ° │ · · · ║ ° °
`);

const resolveMapTile: TileMapResolver = (type, x, y) => {
    const key = `${x}-${y}`;
    const position = { x, y };

    const floor = (
        <GameObject key={key} {...position} layer="ground">
            <Sprite {...spriteData.objects} state="floor" />
        </GameObject>
    );

    switch (type) {
        case '·':
            return floor;
        case '═':
            return (
                <GameObject key={key} {...position} layer="wall">
                    <Collider />
                    <Sprite {...spriteData.objects} state="wall" />
                </GameObject>
            );
        case '│':
            return (
                <GameObject key={key} {...position} layer="wall">
                    <Collider />
                    <Sprite {...spriteData.objects} state="wallVerticalLeft" />
                </GameObject>
            );
        case '║':
            return (
                <GameObject key={key} {...position} layer="wall">
                    <Collider />
                    <Sprite {...spriteData.objects} state="wallVerticalRight" />
                </GameObject>
            );
        case '┏':
            return (
                <GameObject key={key} {...position} layer="wall">
                    <Collider />
                    <Sprite {...spriteData.objects} state="wallVerticalTopLeft" />
                </GameObject>
            );
        case '┓':
            return (
                <GameObject key={key} {...position} layer="wall">
                    <Collider />
                    <Sprite {...spriteData.objects} state="wallVerticalTopRight" />
                </GameObject>
            );
        case '┗':
            return (
                <GameObject key={key} {...position} layer="wall">
                    <Collider />
                    <Sprite {...spriteData.objects} state="wallVerticalBottomLeft" />
                </GameObject>
            );
        case '┛':
            return (
                <GameObject key={key} {...position} layer="wall">
                    <Collider />
                    <Sprite {...spriteData.objects} state="wallVerticalBottomRight" />
                </GameObject>
            );
        case '─':
            return (
                <GameObject key={key} {...position} layer="wall">
                    <Collider />
                    <Sprite {...spriteData.objects} state="wallBorderTop" />
                </GameObject>
            );
        case '╗':
            return (
                <GameObject key={key} {...position} layer="wall">
                    <Collider />
                    <Sprite {...spriteData.objects} state="wallCornerLeft" />
                </GameObject>
            );
        case '╔':
            return (
                <GameObject key={key} {...position} layer="wall">
                    <Collider />
                    <Sprite {...spriteData.objects} state="wallCornerRight" />
                </GameObject>
            );
        case 'G':
            return (
                <Fragment key={key}>
                    {floor}
                    <GameObject key={key} {...position} layer="wall">
                        <Sprite {...spriteData.objects} state="gateLeftOff" />
                    </GameObject>
                </Fragment>
            );
        case 'g':
            return (
                <Fragment key={key}>
                    {floor}
                    <GameObject key={key} {...position} layer="wall">
                        <Sprite {...spriteData.objects} state="gateRightOff" />
                    </GameObject>
                </Fragment>
            );
        case 'e':
            return (
                <Fragment key={key}>
                    {floor}
                    <GameObject key={key} {...position} layer="obstacle">
                        <Sprite
                            {...spriteData.objects}
                            state="containerFrozenFood1"
                            offset={{ x: 0, y: 0.6 }}
                        />
                    </GameObject>
                </Fragment>
            );
        // case 'o':
        //     return (
        //         <Fragment key={key}>
        //             {floor}
        //             <PizzaPickup {...position} />
        //         </Fragment>
        //     );
        // case 'WV':
        //     return (
        //         <GameObject key={key} {...position} layer="wall">
        //             <Collider />
        //             <Sprite {...spriteData.objects} state="wall" />
        //         </GameObject>
        //     );
        // case 'W':
        //     return (
        //         <Fragment key={key}>
        //             {floor}
        //             <Workstation {...position} />
        //         </Fragment>
        //     );
        // case 'T':
        //     return (
        //         <Fragment key={key}>
        //             {floor}
        //             <Plant {...position} />
        //         </Fragment>
        //     );
        default:
            return null;
    }
};

export default function OfficeScene() {
    return (
        <>
            <GameObject name="map">
                <ambientLight />
                <TileMap data={mapData} resolver={resolveMapTile} definesMapSize />
            </GameObject>
            <Player x={6} y={3} />
        </>
    );
}
