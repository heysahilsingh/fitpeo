type HexColor = `#${string}`;

const getRandomHexColor = (): HexColor => {
    const randomHex = Math.floor(Math.random() * 16777215).toString(16);
    return `#${'0'.repeat(6 - randomHex.length)}${randomHex}`;
}

const interpolateColor = (start: HexColor, end: HexColor, fraction: number): HexColor => {
    const interpolateComponent = (c1: number, c2: number) =>
        Math.round(c1 + (c2 - c1) * fraction);

    const startColor = parseInt(start.substring(1), 16);
    const endColor = parseInt(end.substring(1), 16);

    const r = interpolateComponent((startColor >> 16) & 255, (endColor >> 16) & 255);
    const g = interpolateComponent((startColor >> 8) & 255, (endColor >> 8) & 255);
    const b = interpolateComponent(startColor & 255, endColor & 255);

    const interpolatedColor = (r << 16 | g << 8 | b).toString(16);

    return `#${'0'.repeat(6 - interpolatedColor.length)}${interpolatedColor}`;
}

const generateRandomColors = (count: number, range?: [HexColor, HexColor]): HexColor[] => {
    if (range) {
        const [start, end] = range;

        return Array.from({ length: count }, (_, index) => {
            const fraction = index / (count - 1);
            return interpolateColor(start, end, fraction);
        }) as HexColor[];
    } else {
        return Array.from({ length: count }, () => getRandomHexColor());
    }
}

export default generateRandomColors;
