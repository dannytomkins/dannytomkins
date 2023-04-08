import React, { Component } from 'react';
import SketchesNav from './SketchesNav/SketchesNav';
import { useParams } from 'react-router-dom';
import { sketchData } from '../../data/sketchData';
import './SketchPage.css'

function SketchPage() {
  const { id } = useParams();
  const sketchObject = sketchData.find(sketch => sketch.id === parseInt(id));
  if (!sketchObject) {
    return <p>Sketch not found.</p>;
  }

  const SketchComponent = React.memo(() => <sketchObject.sketch />);
  
  return (
    <div className="container">
      <SketchesNav />
      <SketchComponent key={id}/>
    </div>
  );
}

export default SketchPage;