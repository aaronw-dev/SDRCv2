function tick(data) {
    let ctx = data.ctx
    let canvas = data.canvas

    ctx.lineWidth = 7;
    ctx.strokeStyle = "#ffb10a"
    ctx.lineCap = "round";
    ctx.lineJoin = "round";

    ctx.clearRect(0, 0, 1920, 1080);
    ctx.beginPath();
    data.markers.forEach(marker => {
        if (marker.style.left.replace("px", "") > halfWidth) {
            ctx.moveTo(halfWidth + 40, halfHeight + 120);
        } else if (marker.style.left.replace("px", "") < halfWidth) {
            ctx.moveTo(halfWidth - 40, halfHeight + 120);
        } else {
            ctx.moveTo(halfWidth, halfHeight + 120);
        }
        ctx.lineTo(marker.style.left.replace("px", ""), marker.style.top.replace("px", ""));
    });
    let result = eulerRotation(data.rotation, 0, 140)
    let resultX = (halfWidth + (result.x))
    let resultY = (halfHeight + (result.y)) - 120
    data.scan.style.left = `${resultX}px`
    data.scan.style.top = `${resultY}px`
    ctx.moveTo(halfWidth, halfHeight - 120);
    ctx.lineTo(resultX, resultY);
    ctx.stroke();
}