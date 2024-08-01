import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from "./pages/Homepage/homepage";
import DiscoverPage from './pages/Discover/discoverpage';
import HomepageCard from './pages/Homepage/homepage_card';
import More from './pages/More/more';
import Iss from './pages/More/iss';
import CIRCLE from './pages/More/circle';
import Fyp from './pages/More/fyp';
import Admission from './pages/More/admission'
import Todo from './pages/Todo/todo';
import Registrar from './pages/More/registrar';
import UAA from './pages/More/uaa';
import HHC from './pages/More/hhc';
import Immunity from './pages/More/immunity';
import UWIT from './pages/More/uw_it';
import Abroad from './pages/More/study_abroad';
import './App.css';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/homepage/card" element={<HomepageCard />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/discover" element={<DiscoverPage />} />
        <Route path="/more" element={<More />} />
        <Route path="/more/iss" element={<Iss />} />
        <Route path="/more/circle" element={<CIRCLE/>} />
        <Route path="/more/fyp" element={<Fyp/>} />
        <Route path="/more/admission" element={<Admission/>} />
        <Route path="/more/registrar" element={<Registrar/>} />
        <Route path="/more/uaa" element={<UAA/>} />
        <Route path="/more/hhc" element={<HHC/>} />
        <Route path="/more/immunity" element={<Immunity/>} />
        <Route path="/more/uw-it" element={<UWIT/>} />
        <Route path="/more/study-abroad" element={<Abroad/>} />
      </Routes>
    </Router>
  );
}

export default App;
