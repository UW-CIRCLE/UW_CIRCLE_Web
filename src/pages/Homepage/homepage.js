import React from 'react'
import { Link } from "react-router-dom";
import Header from "../../ui-components/Header";
import './homepage.css';

function Homepage() {
  return (
    <div className="Homepage">
      <header className="Homepage-header">
      <p className="Header"> CIRCLE </p>
      <div class="search-container">
        
      </div>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

function createNavigationBar() {
    
    const nav = document.createElement('nav');
    nav.className = 'bottom-nav';

    // Define navigation items
    const navItems = [
        { href: '/', iconClass: 'icon-home', text: 'Home' },
        { href: '/todo', iconClass: 'icon-todo', text: 'Todo List' },
        { href: '/account', iconClass: 'icon-account', text: 'Account' },
        { href: '/more', iconClass: 'icon-more', text: 'More' }
    ];

    // Iterate over each nav item data and create HTML for it
    navItems.forEach(item => {
        const link = document.createElement('a');
        link.href = item.href;
        link.className = 'nav-item';

        const icon = document.createElement('i');
        icon.className = item.iconClass;
        link.appendChild(icon);

        const text = document.createElement('span');
        text.textContent = item.text;
        link.appendChild(text);

        nav.appendChild(link);
    });

    // Append the navigation bar to the body
    document.body.appendChild(nav);
}

// Call the function when the window loads
window.onload = createNavigationBar;

export default Homepage;