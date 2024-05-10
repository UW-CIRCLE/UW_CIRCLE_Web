import './more.css';
import React from 'react';

function More() {
  return (
    <div>
      <div class="Header-Section">
        <h1 class="Header">Office Directory</h1>
      </div>
      <div class="directory">
        <div class="card0">
          <div class="card-content">
            <h2 class="card-title">ISS</h2>
            <p class="card-subtitle">Visa documents, I-20, OPT, CPT<br/>International Student Services </p>
            <p class="other-info">Email: <a href="https://iss.washington.edu/email/">ISS Website</a></p>
            <p class="other-info">Address: </p>
            <p clsas="other-info">Website: <a href="https://iss.washington.edu">ISS Website</a></p>
            <p class="other-info">Phone: 206-221-7857</p>
          </div>
        </div>
        <div class="card">
          <div class="card-content">
            <h2 class="card-title">Office</h2>
            <p class="card-subtitle">Stuff</p>
            <p class="other-info">Email: </p>
            <p class="other-info">Address: </p>
            <p class="other-info">Website: </p>
            <p class="other-info">Phone: </p>
          </div>
        </div>
        <div class="card0">
          <div class="card-content">
            <h2 class="card-title">Office</h2>
            <p class="card-subtitle">Stuff</p>
            <p class="other-info">Email: </p>
            <p class="other-info">Address: </p>
            <p class="other-info">Website: </p>
            <p class="other-info">Phone: </p>
          </div>
        </div>
        <div class="card">
          <div class="card-content">
            <h2 class="card-title">Office</h2>
            <p class="card-subtitle">Stuff</p>
            <p class="other-info">Email: </p>
            <p class="other-info">Address: </p>
            <p class="other-info">Website: </p>
            <p class="other-info">Phone: </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function createNavigationBar() {
    const nav = document.createElement('nav');
    nav.className = 'bottom-nav';

    const navItems = [
        { href: '/', iconClass: 'icon-home', text: '🏠 Home' },
        { href: '/todo', iconClass: 'icon-todo', text: '📝 Todo List' },
        { href: '/account', iconClass: 'icon-account', text: '👤 Account' },
        { href: '/more', iconClass: 'icon-more', text: '⚙️ More' }
    ];

    navItems.forEach(item => {
        const link = document.createElement('a');
        link.href = item.href;
        link.className = 'nav-item';
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent the link from navigating directly
            clearActiveStates(navItems);
            this.classList.add('active');
            // Optionally navigate manually if needed, like using window.location.href
        });
        const text = document.createElement('span');
        text.textContent = item.text;
        link.appendChild(text);
        nav.appendChild(link);
    });

    document.body.appendChild(nav);
}

function clearActiveStates(navItems) {
    navItems.forEach(item => {
        const existingLinks = document.querySelectorAll('.nav-item');
        existingLinks.forEach(link => {
            link.classList.remove('active');
        });
    });
}

window.onload = createNavigationBar;

export default More;