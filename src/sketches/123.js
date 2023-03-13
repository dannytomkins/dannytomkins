import React from 'react';
import P5Wrapper from '../components/P5Wrapper/P5Wrapper';
import { drawRectangle, drawCircle } from '../sketchModules/shapes';
import { randomColor } from '../sketchModules/utils';

export const Sketch = () => {
  const sketch = (p) => {
    p.setup = function() {
      p.createCanvas(400, 400);
      p.background(255);
    };
    
    p.draw = function() {
      const color = randomColor();
      drawRectangle(p, 100, 100, 50, 50, color);
      drawCircle(p, 200, 200, 25, color);
    };
  };

  return (
    <div>
      <p>SketchOne</p>
      <P5Wrapper sketch={sketch} />
    </div>
  );
};
