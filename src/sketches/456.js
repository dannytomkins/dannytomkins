import React from 'react';

export const Sketch = {
  sketch: (p) => {
    let t;
    p.setup = () => {
      p.createCanvas(400, 400);
      p.background(0);
      p.stroke(p.random(0, 255), p.random(0, 255), p.random(0, 255), 25);
      p.noFill();
      t = 0;
    };
    p.draw = () => {
      p.translate(p.width / 2, p.height / 2);
      p.rotate(p.frameCount * 0.01);
      p.beginShape();
      for (let i = 0; i < 500; i++) {
        const ang = p.map(i, 0, 500, 0, p.TWO_PI);
        const rad = 250 * p.noise(i * 0.01, t * 0.01);
        const x = rad * p.cos(ang);
        const y = rad * p.sin(ang);
        p.curveVertex(x, y);
      }
      p.stroke(p.random(0, 255), p.random(0, 255), p.random(0, 255), 25);
      p.endShape(p.CLOSE);

      t += 1;

      // clear the background every 1200 frames using mod (%) operator
      if (p.frameCount % 1200 === 0) {
        p.background(0);
      }
    };
  }
};
