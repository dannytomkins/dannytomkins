import React, { Component } from 'react';
import SketchesNav from './SketchesNav/SketchesNav';
import { useParams } from 'react-router-dom';
import { sketchData } from '../../data/sketchData';

function SketchPage() {
  const { id } = useParams();
  const sketchObject = sketchData.find(sketch => sketch.id === parseInt(id));
  if (!sketchObject) {
    return <p>Sketch not found.</p>;
  }

  const SketchComponent = () => <sketchObject.sketch />;
  
  return (
    <div>
      <SketchesNav />
      <p>SketchPage, Sketch{id}</p>
      <SketchComponent />
    </div>
  );
}

export default SketchPage;
