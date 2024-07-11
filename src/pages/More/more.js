import './more.css';
import { Link } from 'react-router-dom';
import React from 'react';
import { useNavigate } from 'react-router-dom';


function More() {
  const navigate = useNavigate();

  const handleClick = (officeName) => {
    navigate(`/more/${officeName}`);
  };


  return (
    <div>
      <div class="Header-Section">
        <h1 class="Header">Office Directory</h1>
      </div>
      <div class="directory">
        <button class="card" type='button' onClick={() => handleClick('iss')}>
          <div class="card-content">
            <h2 class="card-title">ISS</h2>
            <p class="card-subtitle">Visa documents, I-20, OPT, CPT</p>
          </div>
        </button>
        <button class="card" type='button' onClick={() => handleClick('circle')}>
          <div class="card-content">
            <h2 class="card-title">CIRCLE</h2>
            <p class="card-subtitle">A support system for international students</p>
          </div>
        </button>
        <button class="card" type='button' onClick={() => handleClick('fyp')}>
          <div class="card-content">
            <h2 class="card-title">FYP</h2>
            <p class="card-subtitle">AO, Dawg Daze</p>
          </div>
        </button>
        <button class="card" type='button' onClick={() => handleClick('admission')}>
          <div class="card-content">
            <h2 class="card-title">Admissions</h2>
            <p class="card-subtitle">Outside transcripts, transfer credits, offer letter</p>
          </div>
        </button>
        <button class="card" type='button' onClick={() => handleClick('registrar')}>
          <div class="card-content">
            <h2 class="card-title">Office of Registrar</h2>
            <p class="card-subtitle">Registration, Grades, administrative services</p>
          </div>
        </button>
        <button class="card" type='button' onClick={() => handleClick('uaa')}>
          <div class="card-content">
            <h2 class="card-title">UAA</h2>
            <p class="card-subtitle">Undergraduate Advising</p>
          </div>
        </button>
        <button class="card" type='button' onClick={() => handleClick('hhc')}>
          <div class="card-content">
            <h2 class="card-title">Hall Health Center</h2>
            <p class="card-subtitle">Medical and Mental Health Care</p>
          </div>
        </button>
        <button class="card" type='button' onClick={() => handleClick('immunity')}>
          <div class="card-content">
            <h2 class="card-title">Immunity</h2>
            <p class="card-subtitle">Immunization requirements</p>
          </div>
        </button>
        <button class="card" type='button' onClick={() => handleClick('uw-it')}>
          <div class="card-content">
            <h2 class="card-title">UW IT</h2>
            <p class="card-subtitle">UW NetID, access, etc</p>
          </div>
        </button>
        <button class="card" type='button' onClick={() => handleClick('study-abroad')}>
          <div class="card-content">
            <h2 class="card-title">Study Abroad Office</h2>
            <p class="card-subtitle">Learn about Study Abroad</p>
          </div>
        </button>
      </div>
      <nav className="bottom-nav">
        <Link to="/" className="nav-item">🏠 Home</Link>
        <Link to="/todo" className="nav-item">📝 Todo List</Link>
        <Link to="/discover" className="nav-item">👤 Discover</Link>
        <Link to="/more" className="nav-item">⚙️ More</Link>
      </nav>
    </div>
  );
}

export default More;