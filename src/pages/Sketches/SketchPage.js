import React, { Component } from 'react';
import { Sketch } from '../../sketches/456'
import P5Wrapper from '../../components/P5Wrapper/P5Wrapper';

class SketchPage extends Component {
  render() {
    return (
      <div>
        <p>SketchPage</p>
        <P5Wrapper sketch={Sketch.sketch} />
      </div>
    );
  }
}

export default SketchPage;
