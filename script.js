const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
ctx.canvas.width = window.innerWidth;
ctx.canvas.height = window.innerHeight;
const halfWidth = window.innerWidth / 2
const halfHeight = window.innerHeight / 2
ctx.lineWidth = 10;
ctx.strokeStyle = "#ffb10a"
ctx.lineCap = "round";
ctx.lineJoin = "round";

const marker1 = createMarker("red", 20, new Vector2(halfWidth + 120, halfHeight - 250))
ctx.moveTo(halfWidth, halfHeight)
ctx.lineTo(halfWidth + 120, halfHeight - 250)
const marker2 = createMarker("red", 20, new Vector2(halfWidth + 120, halfHeight + 250))
ctx.moveTo(halfWidth, halfHeight)
ctx.lineTo(halfWidth + 120, halfHeight + 250)
const marker3 = createMarker("red", 20, new Vector2(halfWidth - 120, halfHeight + 250))
ctx.moveTo(halfWidth, halfHeight)
ctx.lineTo(halfWidth - 120, halfHeight + 250)
const marker4 = createMarker("red", 20, new Vector2(halfWidth - 120, halfHeight - 250))
ctx.moveTo(halfWidth, halfHeight)
ctx.lineTo(halfWidth - 120, halfHeight - 250)
ctx.stroke();