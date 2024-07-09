import './homepage_card.css';
import back from '../../images/back_button_icon_home.jpeg';
import React from 'react';
import { useNavigate } from 'react-router-dom';


function HomepageCard() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/`);
  };


  return (
    <body>
      <div className="home-container">
        <button className="home-back-button" type="button" onClick={() => handleClick()}>
          <img className='home-back-icon' src={back} alt="Back" />
        </button>
        <header className='home-card-header'>CIRCLE</header>
      </div>
      <main>
        <p className='home-function'>More than Just A Degree</p>
        <p className='home-subtitle'>This week, we talked about how to make your Husky journey memorable and unique with various opportunities.</p>
        <p className='home-subtitle'>We also talked about F1/J1’s eligibility to work on and off campus, and tips on applying to on-campus jobs.</p>
        <p className='home-subtitle'>
          <b>Link to slides: </b>
          <a href="https://google.com" style={{ textDecoration: 'underline' }}>slides</a>
        </p>
        <p className='home-subtitle'>
          <b>Link to recordings: </b>
          <a href="https://google.com" style={{ textDecoration: 'underline' }}>recordings</a>
        </p>
      </main>
    </body>
  );
}


export default HomepageCard;