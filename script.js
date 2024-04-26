const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
ctx.canvas.width = window.innerWidth;
ctx.canvas.height = window.innerHeight;
var halfWidth = window.innerWidth / 2
var halfHeight = window.innerHeight / 2

const targetFPS = 60

var scanWidth = 30
var scanAngle;
var scanFlipped;

ctx.lineWidth = 7;
ctx.strokeStyle = "#ffb10a"
ctx.lineCap = "round";
ctx.lineJoin = "round";

const marker1 = createMarker("red", 20, new Vector2(halfWidth, halfHeight + 250))
const marker2 = createMarker("green", 20, new Vector2(halfWidth + 120, halfHeight + 200))
const marker3 = createMarker("green", 20, new Vector2(halfWidth - 120, halfHeight + 200))
const marker4 = createMarker("skyblue", 20, new Vector2(halfWidth, halfHeight - 250))

ctx.stroke();
window.addEventListener("resize", () => {
    ctx.canvas.width = window.innerWidth;
    ctx.canvas.height = window.innerHeight;
    halfWidth = window.innerWidth / 2
    halfHeight = window.innerHeight / 2
})
setInterval(() => {
    requestAnimationFrame((e) => {
        tick(
            {
                "ctx": ctx,
                "canvas": canvas,
                "rotation": parseInt(document.getElementById("angle").value),
                "scan": marker4,
                "markers": [marker1, marker2, marker3]
            })
    })
},
    1000 / targetFPS
)