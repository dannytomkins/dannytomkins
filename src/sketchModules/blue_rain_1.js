export default class Rain {
  constructor(p) {
    this.p = p;
    this.rainStreams = [];
    this.streamWidth = 10;
    this.streamSpacing = 5;
    this.streamSpeed = 10;
    this.streamTransparency = 80;
    this.numStreams = p.ceil(p.width / (this.streamWidth + this.streamSpacing));
    for (let i = 0; i < this.numStreams; i++) {
      let streamX = i * (this.streamWidth + this.streamSpacing);
      let streamColor = p.color(0, 100, 255, this.streamTransparency);
      this.rainStreams.push({
        x: streamX,
        color: streamColor,
        drops: []
      });
    }
  }

  update() {
    for (let i = 0; i < this.rainStreams.length; i++) {
      let stream = this.rainStreams[i];
      let drop = {
        x: stream.x,
        y: 0,
        width: this.p.random(this.streamWidth/2, this.streamWidth),
        speed: this.streamSpeed + this.p.random(-5, 5),
        color: this.p.color(this.p.random(0, 255), this.p.random(0, 255), 255, this.streamTransparency)
      };
      stream.drops.push(drop);
      for (let j = stream.drops.length - 1; j >= 0; j--) {
        let drop = stream.drops[j];
        drop.y += drop.speed;
        if (drop.y > this.p.height) {
          stream.drops.splice(j, 1);
        }
      }
    }
  }

  display() {
    this.p.noStroke();
    for (let i = 0; i < this.rainStreams.length; i++) {
      let stream = this.rainStreams[i];
      for (let j = 0; j < stream.drops.length; j++) {
        let drop = stream.drops[j];
        this.p.fill(drop.color);
        this.p.rect(drop.x, drop.y, drop.width, this.p.random(10, 30));
      }
    }
  }
}
