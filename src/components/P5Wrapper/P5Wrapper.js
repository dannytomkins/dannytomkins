import React, { Component } from 'react';
import p5 from 'p5';

class P5Wrapper extends Component {

  componentDidMount() {
    console.log('P5Wrapper componentDidMount');
    if (!this.canvas) {
      this.canvas = new p5(this.props.sketch, this.wrapper);
    }
  }

  render() {
    return <div ref={wrapper => this.wrapper = wrapper}></div>;
  }
}

export default P5Wrapper;