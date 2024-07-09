import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from "./pages/Homepage/homepage";
import HomepageCard from './pages/Homepage/homepage_card';
import More from './pages/More/more';
import Iss from './pages/More/iss';
import CIRCLE from './pages/More/circle';
import Fyp from './pages/More/fyp';
import Admission from './pages/More/admission'
import Todo from './pages/Todo/todo';
import './App.css';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/homepage/card" element={<HomepageCard />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/more" element={<More />} />
        <Route path="/more/iss" element={<Iss />} />
        <Route path="/more/circle" element={<CIRCLE/>} />
        <Route path="/more/fyp" element={<Fyp/>} />
        <Route path="/more/admission" element={<Admission/>} />
      </Routes>
    </Router>
  );
}

export default App;
