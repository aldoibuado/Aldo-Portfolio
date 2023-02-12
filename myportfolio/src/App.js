import './App.css';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Work from './components/Work';
import ContactMe from './components/ContactMe';
import Resume from './components/Resume';


function App() {
  return (
    <div className="app">
     <Header />
     {/* <AboutMe /> */}
     <Work />
     <ContactMe />
     <Resume />
    </div>
  );
}

export default App;
