export function getColorsOfHash(hash, sep = '', index) {
    return hash.toString().substring(1).split(sep).map(i => '#' + i)[index];
}