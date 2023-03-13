import React from 'react';
import P5Wrapper from '../components/P5Wrapper/P5Wrapper';

export const Sketch = () => {
  const sketch = (p) => {
    p.setup = function() {
      p.createCanvas(300, 300);
      p.background(200);
    };
    p.draw = function() {
      // add your drawing code here
    };
  }

  return (
    <div>
      <p>SketchThree</p>
      <P5Wrapper sketch={sketch} />
    </div>
  );
};