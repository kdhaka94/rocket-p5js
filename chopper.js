class Chopper {
  constructor() {
    this.pos = createVector(200, 20);
    this.vx = 10;
  }
  show() {
    fill(125);
    rect(this.pos.x - 100, this.pos.y - 25, 100, 25);
  }
  move() {
    if (this.pos.x > width) {
      this.vx = -10;
    } else if (width + this.pos.x < 0) {
      this.vx = 10;
    }
    this.pos.x += this.vx;
  }
}
