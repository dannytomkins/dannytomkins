import React, { Component } from 'react';
import p5 from 'p5';

class P5Wrapper extends Component {
  componentDidMount() {
    console.log('P5Wrapper mounted');
    if (this.wrapper) {
      this.canvas = new p5(this.props.sketch, this.wrapper);
    }
  }

  componentDidUpdate() {
    console.log('P5Wrapper updated');
    this.canvas.remove();
    this.canvas = new p5(this.props.sketch, this.wrapper);
  }

  componentWillUnmount() {
    console.log('P5Wrapper unmounted');
    if (this.canvas) {
      this.canvas.remove();
    }
  }

  render() {
    return <div ref={wrapper => this.wrapper = wrapper}></div>;
  }
}


export default P5Wrapper;

