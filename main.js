import Canvas from "./Canvas.js";
import Rectangle from "./Rectengle.js";

let canvas = new Canvas(500, 1000);

let rectangle = new Rectangle(canvas.ctx, 200, 0, 50, 50);
rectangle.fill("blue");

let anim = null;
function animate() {
    canvas.clear();
    rectangle.fill("blue");
    anim = requestAnimationFrame(animate);
}

//START / STOP BUTTON
let stopped = true;
let interval = null;
let button = document.querySelector("button");
button.addEventListener("click", () => {
    if (stopped) {
        console.log("Started");
        listenInput(true);
        animate();
        interval = setInterval(drop, 250);
        stopped = false;
    } else {
        console.log("stopped");
        cancelAnimationFrame(anim);
        clearInterval(interval);
        listenInput(false);
        stopped = true;
    }
});

//START / STOP LISTEN TO KEY INPUT
function listenInput(state) {
    if (state) document.addEventListener("keydown", input);
    else {
        document.removeEventListener("keydown", input);
    }
}

//KEY INPUT
function input(event) {
    if (event.key === "ArrowLeft" && rectangle.x > 0) rectangle.x -= 50;
    if (event.key === "ArrowRight" && rectangle.x < canvas.w - rectangle.w) rectangle.x += 50;
    if (event.key === "ArrowDown" && rectangle.y < canvas.h - rectangle.h) rectangle.y += 50;
    if (event.key === "ArrowUp") console.log("Key Up");
}

function drop() {
    if (rectangle.y >= canvas.h - rectangle.h) {
        generateShape();
    }
    rectangle.y += 50;
}

function generateShape() {
    rectangle = new Rectangle(canvas.ctx, 200, 0, 50, 50);
}
