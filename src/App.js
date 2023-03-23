import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import MainNav from './components/MainNav/MainNav'
import Landing from './pages/landing/Landing';
import PollenField from './pages/pollen_field/PollenField';
import Sketches from './pages/sketches/Sketches';
import SketchPage from './pages/sketches/SketchPage'

function App() {
  return (
    <div className='App'>
      <Router>
        <MainNav />
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/pollen_field' element={<PollenField />} />
          <Route path='/sketches' element={<Sketches />} />
          <Route path='/sketches/:id' element={<SketchPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
