let chopper;
let missile;
let missile2;
let missile3;
let samsite;
const locksound = document.querySelector('#locksound');
const launchsound = document.querySelector('#launchsound');
function setup() {
  createCanvas(windowWidth - 50, windowHeight - 50);
  chopper = new Chopper();
  // missile = new Missile(0, height);
  // missile2 = new Missile(width + 1000, height);
  // missile3 = new Missile(width + 1000, 0);
  samsite = new SamSite(chopper.pos);
  locksound.play();
}

function draw() {
  background(0);
  chopper.show();
  chopper.move();
  target = createVector(mouseX, mouseY);
  samsite.show(target);
  samsite.showMissiles();
}

function mouseClicked() {
  samsite.launchMissile();
}
