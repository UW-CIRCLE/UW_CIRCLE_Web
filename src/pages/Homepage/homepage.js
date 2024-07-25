import './homepage.css';
import search from '../../search.png';
import React, {useState} from 'react';
import quad from '../../quad.jpg'
import { Link, useNavigate } from 'react-router-dom';

function Homepage() {
  const [isFavorite, setIsFavorite] = useState(false);

  const groupNotices = [
    {
      id: 1, 
      title: '[7/15] Reminder to check HFS Room Selection Email', 
      subtitle: `Hello, international Huskies!. The Housing & Food Services (HFS) room selection is starting July 16 (Pacific Time). We urge you to check emails from hfsinfo@uw.edu to find out “Your Room Selection Appointment Time”, so you can log into your MyHFS account to select preferences on time. And you will have until July 27 to select rooms or make changes.
  
      If you want to be roommates with a friend, make sure to include their name and student number in the roommates section during your housing selection process to be assigned to the same room. Please note that both you and your roommate should list each other’s names and specify the same room and residence hall preferences.
  
      If you're part of any of the student groups listed below, you will NOT participate in room selection. Instead, HFS will manually assign your room and release it on your MyHFS after July 16, 2 pm. Not happy about your assigned room? You will have a chance to change by following instructions in the room assignment email from hfsinfo@uw.edu.
  
      - Approved for Disability Resource Services (DRS) housing accommodations
      - Athletes
      - Black Affinity Housing
      - Early Autumn Quarter Housing to 9-Month Housing Resident or Roommate
      - Gender-Inclusive Housing
      - Incoming Study Abroad or Global Connections students
  
      Check out the links below to explore room selection.
  
      MyHFS (the website for room selection): https://myhfs.housing.uw.edu/myhfs/
      How to select a room? https://sway.cloud.microsoft/fmfc7mvI2TZSqjkP?ref=Link&loc=mysways
      Room tour videos by HFS: https://www.youtube.com/playlist?list=PLRKszJxY_lvNda7lHAnSE5TMufx7ZoWgU
      Residence Hall Description: https://hfs.uw.edu/Live/Undergraduate-Communities
      No longer want to live with HFS? Here’s a link for cancelation fee: https://hfs.uw.edu/housing-agreements/Application-Cancellation-and-Deferment`
    }, 

    {
      id: 2,
      title: '[7/10] Sending your official transcript by July 15',
      subtitle: `--Best way to send transcripts is through College Board or other third-party platforms (e.g. Parchment). You can send:
      * AP via: https://apstudents.collegeboard.org/sending-scores, use Code “4854” for UW Seattle
      * IB via: rrs.ibo.org, choose “University of Washington-Seattle”
      * For A-level or AS Level, ask your high school to mail it or send it via a third party platform. When mailing, make sure the envelope is sealed. And we suggest that you keep an additional sealed copy to bring to UW just in case.
    
    --If you can’t send it via any of the options above, then your last option is to ask your school official to email it to ugatranscripts@uw.edu, using their official email (e.g.xxxx@schools.org), but NOT personal emails (e.g., xxxx@gmail.com).
    
    --How long does it take for the Office of Admissions to process it? 4-6 weeks. After that, check with Admissions via: https://admit.washington.edu/contact/have-a-question/
    
    --How do I know if my official transcript is processed? Check my.uw.edu→Academics→Unofficial Transcript. Admissions will also send you a confirmation email.
    
    --My A&O Part 2 is coming up soon, but I still didn’t see my transferred credits on the unofficial transcript. What can I do? Ask your academic advisor during your A&O Part 2 for the Override form to be manually added for eligible classes.
    
    --What if I miss the July 15 deadline? Not meeting the deadline will not impact your ability to register for autumn courses, but may impact your ability to register for winter which starts on November 17 for most freshmen.
    
    Everything about sending final transcripts is here: 
    https://www.washington.edu/newhuskies/must-do/send-your-final-transcripts/
    
    – For International students transferring from community college, how to send my official college transcript to UW? Connect with your community college to request for sending your official college transcript which includes final grades and degree, if applicable. This transcript should be sent electronically. You don’t have to send your high school unless specifically requested to do so by the Office of Admissions. 
    
    Platform for transcript request used by community college in WA:
    Green River → Parchment
    Bellevue → Parchment
    Edmonds → National Student Clearinghouse
    Shoreline → Parchment
    Whatcom → Parchment
    Pierce → Parchment`
        
    }
  ]

  const NoticeCard = ({ id, title, subtitle }) => {
    const processedContent = subtitle.split('\n').map((line, index) => {

      if (line.startsWith('--')) {
        return (
          <p key={index} style={{ marginBottom: '5px' }}>
            <strong>{line.replace('--', '')}</strong>
          </p>
        );
      } else if (line.startsWith('  *')) {
        return (
          <p key={index} style={{ marginBottom: '5px', paddingLeft: '20px' }}>
            {line.replace('  *', '•')}
          </p>
        );
      } else {
        return (
          <p key={index} style={{ marginBottom: '5px' }}>
            {line}
          </p>
        );
      }
    });
  
    return (
      <div className="info-item" key={id}>
        <h3>{title}</h3>
        <div>{processedContent}</div>
      </div>
    );
  };

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  const navigate = useNavigate();

  const handleClick = (cardName) => {
    navigate(`/homepage/${cardName}`);
  };

  const boxArray = Array(8).fill(null); 

  return (
    <div>
      <header class='.Homepage-header'>
        <h1 class="homepage-header">CIRCLE</h1>
      </header>
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
          {groupNotices.map(content => (
            <NoticeCard
                key={content.id}
                id= {content.id}
                title= {content.title}
                subtitle= {content.subtitle}      
            />
          ))}
        </div>
      </div>
      <div class="onboard">
        <h1 class="onboard-header">Onboarding Resources</h1>
        <div className ="cards-container">
          {boxArray.map((_, index) => (
            <div key={index} className = 'card-wrapper'>
                <button key = {index} className="card" type='button' onClick={() => handleClick('card')}>
                <img class="card-img" src={quad} alt="Quad" />
                <div class="card-content">
                  <h3 class="card-title">Communication is key!</h3>
                  <p class="card-subtitle">How to email professors for extensions or research opportunities?</p>
                  <span class={isFavorite ? "card-favorite active" : "card-favorite"} onClick={toggleFavorite}>&#9733;</span>
                </div>
              </button>
            </div>
          ))}
        </div>
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