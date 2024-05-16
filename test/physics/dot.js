let canvas = document.getElementById("c");
let ctx = canvas.getContext("2d");
let CANVAS_WIDTH = window.innerWidth-5;
let CANVAS_HEIGHT = window.innerHeight-5;
canvas.width = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGHT;

class Dot {
  constructor(x, y) {
    this.pos = new Vector(x, y);
    this.oldpos = new Vector(x, y);

    this.friction = 0.97;
    this.groundFriction = 0.7;

    this.gravity = new Vector(0, 1);

    this.radius = 5;
    this.color = "#e62a4f";
    this.mass = 1;
  }

  update() {
    let vel = Vector.sub(this.pos, this.oldpos);
    vel.mult(this.friction);

    // if the point touches the ground set groundFriction
    if (this.pos.y >= CANVAS_HEIGHT - this.radius && vel.magSq() > 0.000001) {
      var m = vel.mag();
      vel.x /= m;
      vel.y /= m;
      vel.mult(m * this.groundFriction);
    }
    this.oldpos.setXY(this.pos.x, this.pos.y);
    this.pos.add(vel);
    this.pos.add(this.gravity);
  }

   constrain() {
    if (this.pos.x > CANVAS_WIDTH - this.radius) {
      this.pos.x = CANVAS_WIDTH - this.radius;
    }
    if (this.pos.x < this.radius) {
      this.pos.x = this.radius;
    }
    if (this.pos.y > CANVAS_HEIGHT - this.radius) {
      this.pos.y = CANVAS_HEIGHT - this.radius;
    }
    if (this.pos.y < this.radius) {
      this.pos.y = this.radius;
    }
  };
  
  render(ctx) {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.pos.x, this.pos.y, this.radius, 0, Math.PI * 2);
    ctx.fill();
    ctx.closePath();
  }
}

let dots = [];

for (let i = 0; i < 50; i++) {
  dots.push(new Dot(Math.random() * CANVAS_WIDTH, Math.random() * CANVAS_HEIGHT));
}

function animate() {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

  for (let d of dots) {
    d.update();
    d.constrain();
    d.render(ctx);
  }

  requestAnimationFrame(animate);
}
animate();
