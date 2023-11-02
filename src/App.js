import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import MainNav from './components/MainNav/MainNav'
import Landing from './pages/landing/Landing';
import PollenField from './pages/pollen_field/PollenField';

function App() {
  return (
    <div className='App'>
      <Router>
        <MainNav />
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/pollen_field' element={<PollenField />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
