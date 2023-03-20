import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import MainNav from './components/MainNav/MainNav'
import Landing from './pages/Landing/Landing';
import Sketches from './pages/Sketches/Sketches';
import SketchPage from './pages/Sketches/SketchPage'

function App() {
  return (
    <div className='App'>
      <Router>
        <MainNav />
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/sketches' element={<Sketches />} />
          <Route path='/sketches/:id' element={<SketchPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
