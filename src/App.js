import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LayoutHome from './layout/LayoutHome';
import Home from './landingpage/Home';
import About from './AboutUs/AboutUs';
import LayoutAbout from './layout/LayoutAbout';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
      <Route path="/" element={<LayoutHome />}>
            <Route path="/" element={<Home />} />
            <Route path='/About-us' element={<About/>}/>
          </Route>
          <Route path="/About-us" element={<LayoutAbout/>}>
            <Route path='/About-us' element={<About/>}/>
          </Route>
          </Routes>
     </div>


    </Router>
    
  );
}

export default App;
