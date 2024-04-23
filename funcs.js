function createMarker(color, diameter = 10, initialPosition = new Vector2(0, 0)) {
    let marker = document.createElement("div")
    marker.className = "marker"
    marker.style.backgroundColor = color
    marker.style.zIndex = 120
    marker.style.top = `${initialPosition.y}px`
    marker.style.left = `${initialPosition.x}px`

    marker.style.width = `${diameter}px`
    marker.style.height = `${diameter}px`

    document.body.appendChild(marker)
    return marker
}
function drawLine(line) {
    ctx.lineWidth = 2;
    ctx.strokeStyle = "#FFFFFF"
    ctx.beginPath();
    ctx.moveTo(line.start.x, line.start.y);
    ctx.lineTo(line.end.x, line.end.y);
    ctx.stroke();
}