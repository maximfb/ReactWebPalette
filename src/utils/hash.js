export function setHash(hash = [], sep = '') {
    document.location.hash = hash.map(i => i.substring(1)).join(sep);
}
export default function getHash() {
    return document.location.hash;
}