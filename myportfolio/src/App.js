import './App.css';
import Header from './components/Header';
import About from './components/About';
import Project from './components/Project';
import Contact from './components/Contact';
import Resume from './components/Resume';


function App() {
  return (
    <div className="app">
     <Header />
     <About />
     <Project />
     <Contact />
     <Resume />
    </div>
  );
}

export default App;
