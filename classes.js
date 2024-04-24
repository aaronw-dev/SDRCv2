class Rigidbody {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
}

class Vector2 {
    x = 0;
    y = 0;
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

class Line {
    start = new Vector2(0, 0);
    end = new Vector2(1, 0);
    normal = new Vector2(0, 1);
    constructor(start = new Vector2(0, 0), end = new Vector2(1, 0), flipnormal = false) {
        this.start = start;
        this.end = end;
        let dx = end.x - start.x;
        let dy = end.y - start.y;
        this.flipnormal = flipnormal
        if (this.flipnormal == true) {
            this.normal = normalizeVector(new Vector2(-dy, dx));
        } else {
            this.normal = normalizeVector(new Vector2(dy, -dx));
        }
    }
}
class Marker {
    constructor(anchor = new Vector2(0, 0), position = new Vector2(1, 0), color = "red", diameter = 20) {
        this.anchor = anchor;
        this.position = position;
        this.color = color;
        this.diameter = diameter;

        let marker = document.createElement("div")
        marker.className = "marker"
        marker.style.backgroundColor = color
        marker.style.zIndex = 120
        marker.style.left = `${position.x}px`
        marker.style.top = `${position.y}px`

        marker.style.width = `${diameter}px`
        marker.style.height = `${diameter}px`

        document.body.appendChild(marker)
        this.HTMLElement = marker;
    }
}