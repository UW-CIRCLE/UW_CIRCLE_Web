import './homepage.css';
import search from '../../search.png';
import React, {useState} from 'react';
import quad from '../../quad.jpg'
import { Link } from 'react-router-dom';

function Homepage() {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div>
      <header class='.Homepage-header'>
        <h1 class="homepage-header">CIRCLE</h1>
      </header>
      <nav className="bottom-nav">
        <Link to="/" className="nav-item">🏠 Home</Link>
        <Link to="/todo" className="nav-item">📝 Todo List</Link>
        <Link to="/account" className="nav-item">👤 Account</Link>
        <Link to="/more" className="nav-item">⚙️ More</Link>
      </nav>
      <div class="search-container">
        <form class="search-bar" action="/search" method="get">
          <button class="search-button" type="submit">
            <img class='search' src={search} alt="Search"/>
          </button>
          <input class="search-input" type="text" name="q" placeholder="Search" />
        </form>
      </div>
      <div className="attention-section">
        <h2 className="attention-header">Attention! 🚨</h2>
        <div className="content-box">
            <p>Here is some important content or alerts that you need to know!</p>
        </div>
      </div>
      <div class="onboard">
        <h1 class="onboard-header">Onboarding Resources</h1>
        <div class="card">
          <img class="card-img" src={quad} alt="Quad" />
          <div class="card-content">
              <h3 class="card-title">Communication is key!</h3>
              <p class="card-subtitle">How to email professors for extensions or research opportunities?</p>
              <span class={isFavorite ? "card-favorite active" : "card-favorite"} onClick={toggleFavorite}>&#9733;</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// Searched online:
//    The functions below can be replaced by the code above with the help of
//    React Link element. So, commented out.
//                                                                       Neil
// -----------------------------------------------------------------------------------
// function createNavigationBar() {
//     const nav = document.createElement('nav');
//     nav.className = 'bottom-nav';
  
//     const navItems = [
//         { to: '/', iconClass: 'icon-home', text: '🏠 Home' },
//         { to: '/todo', iconClass: 'icon-todo', text: '📝 Todo List' },
//         { to: '/account', iconClass: 'icon-account', text: '👤 Account' },
//         { to: '/more', iconClass: 'icon-more', text: '⚙️ More' }
//     ];
  
//     navItems.forEach(item => {
//         const link = document.createElement('a');
//         link.href = item.to;
//         link.className = 'nav-item';
//         link.addEventListener('click', function(event) {
//             event.preventDefault(); // Prevent the link from navigating directly
//             clearActiveStates(navItems);
//             this.classList.add('active');
//             // Optionally navigate manually if needed, like using window.location.href
//         });
//         const text = document.createElement('span');
//         text.textContent = item.text;
//         link.appendChild(text);
//         nav.appendChild(link);
//     });
  
//     document.body.appendChild(nav);
// }

// function clearActiveStates(navItems) {
//     navItems.forEach(item => {
//         const existingLinks = document.querySelectorAll('.nav-item');
//         existingLinks.forEach(link => {
//             link.classList.remove('active');
//         });
//     });
// }

// window.onload = createNavigationBar;

export default Homepage;