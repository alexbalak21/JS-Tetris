export default class Rectangle {
    constructor(c = null, x = 0, y = 0, w = 5, h = 5) {
        this.ctx = c;
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
    }
    fill(color = "black") {
        this.ctx.fillStyle = color;
        this.ctx.fillRect(this.x, this.y, this.w, this.h);
    }
}
