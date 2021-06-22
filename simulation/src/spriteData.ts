import { SpriteProps } from './@core/Sprite';

const spriteData: { [index: string]: SpriteProps } = {
    ui: {
        src: './assets/ui.png',
        sheet: {
            'self-select': [
                [4, 0],
                [5, 0],
            ],
            select: [[4, 0]],
            dot: [[1, 0]],
            solid: [[0, 1]],
        },
    },
    player: {
        src: './assets/player.png',
        frameWidth: 20,
        frameHeight: 20,
        frameTime: 300,
        sheet: {
            default: [[0, 2]],
            walk: [
                [1, 2],
                [2, 2],
            ],
            action: [
                [0, 1],
                [2, 1],
            ],
        },
    },
    objects: {
        src: './assets/objects.png',
        frameWidth: 32,
        frameHeight: 32,
        sheet: {
            floor: [[0, 0]],
            wall: [[0, 3]],
            wallBorderTop: [[3, 3]],
            wallVerticalTopRight: [[1, 3]],
            wallVerticalTopLeft: [[2, 3]],
            wallVerticalBottomRight: [[6, 3]],
            wallVerticalBottomLeft: [[7, 3]],
            wallVerticalRight: [[4, 3]],
            wallVerticalLeft: [[5, 3]],
            wallCornerRight: [[8, 3]],
            wallCornerLeft: [[9, 3]],
            gateLeftOff: [[4, 0]],
            gateRightOff: [[5, 0]],
            gateLeftOn: [[6, 0]],
            gateRightOn: [[7, 0]],
            containerFrozenFood1: [[0, 4]],
            containerFrozenFood2: [[0, 5]],
            'workstation-1': [[0, 1]],
            'workstation-2': [[1, 1]],
            'coffee-machine': [[2, 1]],
            'coffee-machine-empty': [[3, 1]],
            pizza: [[4, 1]],
            plant: [[0, 2]],
        },
    },
    footstep: {
        src: './assets/footstep.png',
        sheet: {
            default: [
                [0, 0],
                [2, 0],
            ],
        },
        opacity: 0.75,
        frameTime: 150,
    },
};

export default spriteData;
