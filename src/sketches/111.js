import React from 'react';
import P5Wrapper from '../components/P5Wrapper/P5Wrapper';
import Ellipse from '../sketchModules/green_ellipses_1';
import Rain from '../sketchModules/blue_rain_1';

export const Sketch = () => {
  const sketch = (p) => {
    let ellipses = [];
    let rain;

    p.setup = function() {
      p.createCanvas(window.innerWidth, window.innerHeight);
      p.noStroke();
      for (let i = 0; i < 15; i++) {
        let size = p.random(100, 400);
        let x = p.random(-p.width/2, p.width/2);
        let y = p.random(-p.height, p.height);
        let fillColor = p.color(p.random(255), 255, p.random(255));
        let gradientColor = p.color(p.random(255), 255, p.random(255));
        let ellipseObj = new Ellipse(x, y, size, fillColor, gradientColor, p);
        ellipses.push(ellipseObj);
      }
      rain = new Rain(p);
    };    

    p.draw = function() {
      p.background(100);
      rain.update(); // Call the update method of the Rain module
      rain.display(); // Call the display method of the Rain module
      p.translate(p.width/2, p.height/2);
      for (let i = 0; i < ellipses.length; i++) {
        let ellipseObj = ellipses[i];
        ellipseObj.move();
        ellipseObj.display();
      }
    };
    
    // Ellipse class implementation removed from here
    
  };

  return (
    <div>
      <P5Wrapper sketch={sketch} />
    </div>
  );
};
