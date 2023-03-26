export default class Ellipse {
    constructor(x, y, size, fillColor, gradientColor, p) {
      this.x = x;
      this.y = y;
      this.size = size;
      this.fillColor = fillColor;
      this.gradientColor = gradientColor;
      this.t = p.random(1000);
      this.speed = 0.5;
      this.p = p;
    }
  
    move() {
      let xoff = this.p.map(this.p.noise(this.t), 0, 1, -this.speed, this.speed);
      let yoff = this.p.map(this.p.noise(this.t + 1000), 0, 1, -this.speed, this.speed);
      this.x += xoff;
      this.y += yoff;
      this.t += 0.01;
      if (this.x < -this.p.width/2 || this.x > this.p.width/2) {
        this.x = this.p.constrain(this.x, -this.p.width/2, this.p.width/2);
      }
      if (this.y < -this.p.height/2 || this.y > this.p.height/2) {
        this.y = this.p.constrain(this.y, -this.p.height/2, this.p.height/2);
      }
  
      // adjust the size using Perlin noise
      let sizeNoise = (this.p.noise(this.t + 20000) - 0.5) * 2; // centered around zero, multiplied by 2
      let sizeChange = sizeNoise * 1; // maximum size change is 1 pixels
      this.size += sizeChange;
      this.size = this.p.constrain(this.size, 50, 800); // constrain the size within a certain range
    }
  
    // display method remains the same
    display() {
      let xRadius = this.size / 2;
      let yRadius = this.size / 4;
      let gradient = this.p.drawingContext.createRadialGradient(
        this.x, this.y, 0, this.x, this.y, xRadius
      );
      gradient.addColorStop(0, this.fillColor);
      gradient.addColorStop(1, this.p.color(this.p.red(this.gradientColor), this.p.green(this.gradientColor), this.p.blue(this.gradientColor), 0));
      this.p.drawingContext.fillStyle = gradient;
      this.p.drawingContext.save();
      this.p.drawingContext.scale(1, yRadius / xRadius);
      this.p.ellipse(this.x, this.y, xRadius * 2, xRadius * 2);
      this.p.drawingContext.restore();
    }
  }
  