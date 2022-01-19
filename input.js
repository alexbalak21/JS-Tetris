export function listenInput(rectangle, w, h, stoped = true) {
    let input = (event) => {};

    if (stoped) {
        document.addEventListener("keydown", input);
        stoped = false;
    } else document.removeEventListener("keydown", input);
}
