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
      </div>
      <nav className="bottom-nav">
        <Link to="/" className="nav-item">🏠 Home</Link>
        <Link to="/todo" className="nav-item">📝 Todo List</Link>
        <Link to="/account" className="nav-item">👤 Account</Link>
        <Link to="/more" className="nav-item">⚙️ More</Link>
      </nav>
    </div>
  );
}

export default More;