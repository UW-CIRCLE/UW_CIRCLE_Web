import './iss.css';
import back from '../../images/back_button_icon.png';
import React from 'react';
import { useNavigate } from 'react-router-dom';


function FYP() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/more`);
  };


  return (
    <body>
      <div className="iss-container">
        <button className="back-button" type="button" onClick={() => handleClick()}>
          <img className='back-icon' src={back} alt="Back" />
        </button>
        <h1>FYP</h1>
      </div>
      <main>
        <p className='iss-function'>First Year Programs</p>
        <p className='iss-service'>AO, Dawg Daze, FIGs</p>
      </main>
      <hr />
      <main>
        <p className='iss-subtitle'>Contact Detail</p>
        <p className='iss-name'>
          <b>Website: </b>
          <a href="http://fyp.washington.edu" style={{ textDecoration: 'underline' }}>http://fyp.washington.edu</a>
        </p>
        <p className='iss-name'>
          <b>Phone: </b>
          <p className='iss-info'>206-543-4905</p>
        </p>
        <p className='iss-name'>
          <b>Email: </b>
          <a href="mailto:fyp@uw.edu" style={{ textDecoration: 'underline' }}>fyp@uw.edu</a>
        </p>
        <p className='iss-name'>
          <b>Location: </b>
          <a href="https://www.washington.edu/maps/#!/mgh" style={{ textDecoration: 'underline' }}>120 Mary Gates Hall</a>
        </p>
      </main>
    </body>
  );
}


export default FYP;