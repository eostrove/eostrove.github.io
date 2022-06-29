import './css/App.css';
import './css/main.css';

import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Format from './FormatTest';
import Nav from './Nav';
import About from './About';
import Home from './Home';
import Sidebar from './Sidebar';

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
              </Routes>
              {/* <Format /> */}
            </div>
        </div>
    </BrowserRouter>
  );
}

export default App;
