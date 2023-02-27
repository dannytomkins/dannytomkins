import React, { Component } from 'react';
import P5Wrapper from '../../components/P5Wrapper/P5Wrapper';
import p5 from 'p5';
import { SketchOne } from '../../sketches/SketchOne';

class SketchPage extends Component {


  render() {
    return (
      <div>
        <SketchOne/>
      </div>
    );
  }
}

export default SketchPage;
