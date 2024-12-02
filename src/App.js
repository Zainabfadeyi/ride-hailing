import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LayoutHome from './layout/LayoutHome';
import Home from './landingpage/Home';
import About from './AboutUs/AboutUs';
import LayoutAbout from './layout/LayoutAbout';
import Driver from './driver/Driver';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
      <Route path="/" element={<LayoutHome />}>
            <Route path="/" element={<Home />} />
          </Route>
          <Route element={<LayoutAbout/>}>
            <Route path='/About-us' element={<About/>}/>
            <Route path='/Driver-registration' element={<Driver/>}/>
          </Route>
          </Routes>
     </div>


    </Router>
    
  );
}

export default App;
