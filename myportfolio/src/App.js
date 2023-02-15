import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Project from './pages/Project';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Navigation from './components/Navigation';

function App() {
  return (
   <div className='App'>
    <Router>
      <Navigation />
      <Routes>
        <Route path='/' element={<About />} />
        <Route path='/project' element={<Project />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/resume' element={<Resume />} />
      </Routes>
    </Router>
   </div>
  );
}

export default App;
