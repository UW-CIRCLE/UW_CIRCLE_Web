import './todo.css';
import { Link } from 'react-router-dom';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import forward from '../../images/back_button_icon.png';


function Todo() {
  const navigate = useNavigate();

  const handleClick = (officeName) => {
    navigate(`/todo/${officeName}`);
  };


  return (
    <div>
      <div class="Header-Section">
        <h1 class="Header">To-Do List</h1>
      </div>
      <div class="todo-list">
        <button class="card" type='button' onClick={() => handleClick('transcript')}>
          <div class="todo-card-content">
            <div class="date">Jul<br/>15</div>
            <div class='todo-vertical'>
              <h2 class="card-title">ISS</h2>
              <p class="card-subtitle">Visa documents, I-20, OPT, CPT</p>
            </div>
            <div class="arrow">
              <img className='forward-icon' src={forward} alt="Forward" />
            </div>
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

export default Todo;