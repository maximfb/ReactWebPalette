import chroma from "chroma-js";

class useColor {
    getRandomColor() {
        return chroma.random().hex();
    }
    getLuminanceColor(deps) {
        if (!deps) return
        const luminance = chroma(deps).luminance();
        return luminance > 0.5 ? '#000000' : '#FFFFFF'
    }
}

export default new useColor();