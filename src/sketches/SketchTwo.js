import React from 'react';
import P5Wrapper from '../components/P5Wrapper/P5Wrapper';
import { moduleOne } from '../sketchModules/utils';
import { moduleTwo } from '../sketchModules/shapes';

export const SketchTwo = () => {
  const sketch = (p) => {
    let x = 0;

    p.setup = () => {
      p.createCanvas(400, 400);
      moduleOne(p);
    };

    p.draw = () => {
      p.background(220);
      moduleTwo(p, x);
      x += 1;
    };
  };

  return (
    <div>
      <p>P5sketch</p>
      <P5Wrapper sketch={sketch} />
    </div>
  );
};
