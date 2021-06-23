class SamSite {
  constructor(target) {
    this.pos = createVector(width / 2, height - 20);
    this.target = target;
    this.MAX_MISSILES = 5;
    this.r = 15;
    this.missiles = [];
  }
  show() {
    //Sam platform
    fill(125);
    rect(this.pos.x, this.pos.y, 30, 5);
    fill(255);
    rect(this.pos.x + 12, this.pos.y - 15, 5, 15);
    // Sam launcher
    // translate(this.pos.x, this.pos.y);
    // rotate(PI / 7.0);

    // rotate(this.target.heading());
    // rotate(this.target.heading());
    rect(this.pos.x + 5, this.pos.y - 30, 20, 20);
  }

  showMissiles() {
    for (let i = 0; i < this.missiles.length; i++) {
      if (this.missiles[i].fuel <= 0) {
        document?.getElementById(`${i}-launch-sound`)?.remove();
        this.missiles = this.missiles.filter((_, index) => i != index);
        continue;
      }
      this.missiles[i].seek(this.target);
      this.missiles[i].update();
      this.missiles[i].show();
    }
  }
  launchMissile() {
    if (this.missiles.length < this.MAX_MISSILES) {
      this.missiles.push(
        new Missile(this.pos.x, this.pos.y, this.missiles.length)
      );
      return;
    }
  }
}
