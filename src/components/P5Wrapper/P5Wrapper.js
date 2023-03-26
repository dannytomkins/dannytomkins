import React, { Component } from 'react';
import p5 from 'p5';

class P5Wrapper extends Component {
  constructor(props) {
    super(props);
    this.canvas = null;
  }

  componentDidMount() {
    console.log('P5Wrapper componentDidMount');
    if (!this.canvas) {
      this.canvas = new p5(this.props.sketch, this.wrapper);
    }
  }

  componentDidUpdate() {
    console.log('P5Wrapper componentDidUpdate');
    if (this.canvas) {
      this.canvas.remove();
      this.canvas = null;
    }
    this.canvas = new p5(this.props.sketch, this.wrapper);
  }

  componentWillUnmount() {
    console.log('P5Wrapper componentWillUnmount');
    if (this.canvas) {
      this.canvas.remove();
      this.canvas = null;
    }
  }

  render() {
    return <div ref={wrapper => this.wrapper = wrapper}></div>;
  }
}

export default P5Wrapper;
