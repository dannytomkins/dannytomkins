import React, { Component } from 'react';
import p5 from 'p5';

class P5Wrapper extends Component {
  shouldComponentUpdate(nextProps) {
    // Only re-render if the sketch prop has changed
    console.log("shouldComponentUpdate")
    return nextProps.sketch !== this.props.sketch;
  }

  componentDidMount() {
    console.log('P5Wrapper componentDidMount');
    if (!this.canvas) {
      this.canvas = new p5(this.props.sketch, this.wrapper);
    }
  }

  componentWillUnmount() {
    console.log('P5Wrapper componentWillUnmount');
    this.canvas.remove();
  }

  render() {
    return <div ref={wrapper => this.wrapper = wrapper}></div>;
  }
}

export default P5Wrapper;