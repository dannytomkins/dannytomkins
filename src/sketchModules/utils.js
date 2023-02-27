// utils.js
export const colors = {
    red: '#FF0000',
    green: '#00FF00',
    blue: '#0000FF'
  };
  
  export function randomColor() {
    const keys = Object.keys(colors);
    const randomKey = keys[Math.floor(Math.random() * keys.length)];
    return colors[randomKey];
  }
  