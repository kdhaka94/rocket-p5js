class Particle {
  constructor(x, y, vx, vy) {
    this.x = x;
    this.y = y;
    this.vx = random(vx + 0.1, vx - 0.1);
    this.vy = random(vy, vy + 0.1);
    this.alpha = 255;
  }
  show() {
    // stroke(255);
    fill(255, this.alpha);
    ellipse(this.x, this.y, 6);
  }
  update() {
    this.x += this.vx;
    this.y += this.vy;
    this.alpha -= 2;
  }
}

class Smoke {
  constructor(x, y, vx, vy) {
    this.x = x;
    this.y = y;
    this.vx = vx;
    this.vy = vy;
    this.particles = [];
  }
  createSomoke() {
    let p = new Particle(this.x, this.y, this.vx, this.vy);
    this.particles.push(p);
    // console.log(this.particles);
    for (let i = 0; i < this.particles.length; i++) {
      this.particles[i].update();
      this.particles[i].show();
      if (this.particles[i].alpha == 0)
        this.particles = this.particles.filter((_, index) => index != i);
    }
  }
}
