import React, { Component } from 'react';
import PropTypes from 'prop-types';
import p5 from 'p5';
import 'p5/lib/addons/p5.sound';

class P5Wrapper extends Component {
  static propTypes = {
    sketch: PropTypes.func.isRequired,
  };

  componentDidMount() {
    console.log('P5Wrapper componentDidMount');
    this.canvas = new p5(this.props.sketch, this.wrapper);
  }

  componentDidUpdate(prevProps) {
    console.log('P5Wrapper componentDidUpdate');
    if (this.props.sketch !== prevProps.sketch) {
      this.canvas.remove();
      this.canvas = new p5(this.props.sketch, this.wrapper);
    }
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
