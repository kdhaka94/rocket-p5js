class Missile {
  constructor(x, y, index) {
    this.pos = createVector(x, y);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
    this.maxSpeed = 10;
    this.maxForce = 0.3;
    this.fuel = 100;
    this.r = 16;
    this.smoke = new Smoke(this.pos.x, this.pos.y, this.vel.x, this.vel.y);
    this.launchsound = document.createElement('audio');
    this.launchsound.id = `${index}-launch-sound`;
    this.launchsound.src = 'launch-trimmed.mp3';
    this.launchsound.play();
  }
  seek(target) {
    let force = p5.Vector.sub(target, this.pos);
    force.setMag(this.maxSpeed);
    force.sub(this.vel);
    force.limit(this.maxForce);
    this.applyForce(force);
  }

  show() {
    this.smoke.createSomoke();
    if (this.fuel > 0) {
      this.smoke.x = this.pos.x;
      this.smoke.y = this.pos.y;
      stroke('red');
      strokeWeight(2);
      fill('red');
      push();
      translate(this.pos.x, this.pos.y);
      rotate(this.vel.heading());
      triangle(-this.r, -this.r / 2, -this.r, this.r / 2, this.r, 0);
      pop();
      noFill();
      noStroke();
    }
  }
  applyForce(force) {
    this.acc.add(force);
  }

  update() {
    if (this.fuel > 0) {
      this.vel.add(this.acc);
      this.vel.limit(this.maxSpeed);
      this.pos.add(this.vel);
      this.acc.set(0, 0);
      this.fuel -= 0.3;
    }
  }
}
