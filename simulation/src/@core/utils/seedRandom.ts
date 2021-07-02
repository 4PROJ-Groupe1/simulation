/* eslint-disable no-use-before-define */
/* eslint-disable @typescript-eslint/no-use-before-define */
export type Seed = string | number;

let baseSeed: Seed = '?';

export function setSeed(seed: Seed) {
    baseSeed = seed;
}

export default function seedRandom(seed: Seed) {
    const mash = makeMash();
    return mash(`${baseSeed}${seed}`);
}

export function makeRandom(seed: Seed) {
    let i = 0;
    return function random() {
        return seedRandom(`${seed}${i++}`);
    };
}

function makeMash() {
    let n = 0xefc8249d;

    return (seed: Seed) => {
        seed = String(seed);
        for (let i = 0; i < seed.length; i++) {
            n += seed.charCodeAt(i);
            let h = 0.02519603282416938 * n;
            n = h >>> 0;
            h -= n;
            h *= n;
            n = h >>> 0;
            h -= n;
            n += h * 0x100000000;
        }
        return (n >>> 0) * 2.3283064365386963e-10;
    };
}
