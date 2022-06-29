import './css/App.css';
import './css/main.css';

import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Nav from './Nav';
import About from './About';
import Home from './Home';
import Sidebar from './Sidebar';
import Contact from './Contact';
import Projects from './Projects';

function App() {
  return (
    <BrowserRouter>
      <Nav />
        <div className='wrapper'>
          <Sidebar />
            <div className="main">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="contact" element={<Contact />} />
                <Route path="projects" element={<Projects />} />
              </Routes>
            </div>
        </div>
    </BrowserRouter>
  );
}

export default App;
