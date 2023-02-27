// shapes.js
export function drawRectangle(p, x, y, width, height, color) {
    p.fill(color);
    p.rect(x, y, width, height);
  }
  
  export function drawCircle(p, x, y, radius, color) {
    p.fill(color);
    p.ellipse(x, y, radius, radius);
  }
  