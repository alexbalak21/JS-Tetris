export default class Canvas {
    canvas = document.querySelector("canvas");
    w = 100;
    h = 100;
    ctx;
    constructor(w, h) {
        (this.w = w), (this.h = h), (this.canvas.width = this.w);
        this.canvas.height = this.h;
        this.ctx = this.canvas.getContext("2d");
    }
    clear() {
        this.ctx.clearRect(0, 0, this.w, this.h);
    }
}
