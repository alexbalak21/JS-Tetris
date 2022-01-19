//CANVAS DIMENTIONS
const h = 1000;
const w = 1000;

//CANVAS SET UP
const canvas = document.querySelector("canvas");
canvas.height = h;
canvas.width = w;
const ctx = canvas.getContext("2d");
const c = ctx;

//CLEARING THE FRAME / CANVAS
function clear() {
    ctx.clearRect(0, 0, w, h);
}

//RECTANGE ELEMENT
class Rectangle {
    constructor(x = 0, y = 0, w = 5, h = 5) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
    }
    fill(color = "black") {
        c.fillStyle = color;
        c.fillRect(this.x, this.y, this.w, this.h);
    }
    draw(color = "black", thick = 2) {
        // SHOULD BE DRAW
        c.strokeStyle = color;
        c.lineWidth = thick;
        c.strokeRect(this.x + thick / 2, this.y + thick / 2, this.w - thick, this.h - thick);
    }
    clear() {
        c.clearRect(this.x, this.y, this.w, this.h);
    }
}

//STARTING POINT

let x = 400;
let y = 10;

//EXEMPLE OUTPUTING RECTANGE
let rectangle = new Rectangle(x, y, 50, 50);
rectangle.fill("blue");

//ANIMATE - REFRESH FRAME
function animate() {
    clear();
    rectangle.fill("green");
    anim = requestAnimationFrame(animate);
}

//MOUVEMENT INPUT AND BASIC LIMIT
function input(rectangle) {
    document.addEventListener("keydown", (event) => {
        if (event.key === "ArrowLeft" && rectangle.x > 0) rectangle.x -= 5;
        if (event.key === "ArrowRight" && rectangle.x < w - rectangle.w) rectangle.x += 5;
        if (event.key === "ArrowDown" && rectangle.y < h - rectangle.h) rectangle.y += 5;
        if (event.key === "ArrowUp" && rectangle.y > 0) rectangle.y -= 5;
    });
}

//START / STOP BUTTON
let started = false;
let button = document.querySelector("button");
button.addEventListener("click", () => {
    if (started) {
        cancelAnimationFrame(anim);
        started = false;
    } else {
        started = true;
        input();
        animate();
    }
});
