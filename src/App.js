import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Landing from './pages/Landing/Landing';
import Sketches from './pages/Sketches/Sketches';
import SketchPage from './pages/Sketches/SketchPage'

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/sketches' element={<Sketches />} />
          <Route path='/sketches/1' element={<SketchPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
