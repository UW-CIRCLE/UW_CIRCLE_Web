import './iss.css';
import back from '../../images/back_button_icon.png';
import React from 'react';
import { useNavigate } from 'react-router-dom';


function StudyAbroad() {
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
        <h1>Study Abroad</h1>
      </div>
      <main>
        <p className='iss-function'>Study Abroad</p>
        <p className='iss-service'>Learn more Study Abroad</p>
      </main>
      <hr />
      <main>
        <p className='iss-subtitle'>Contact Detail</p>
        <p className='iss-name'>
          <b>Phone: </b>
          <p className='iss-info'>206-221-5000</p>
        </p>
        <p className='iss-name'>
          <b>Email: </b>
          <a href="mailto:studyabroad@uw.edu" style={{ textDecoration: 'underline' }}>studyabroad@uw.edu</a>
        </p>
        <p className='iss-name'>
          <b>Location: </b>
          <a href="https://www.washington.edu/maps/#!/smz" style={{ textDecoration: 'underline' }}>459 Schmitz Hall</a>
        </p>
      </main>
    </body>
  );
}


export default StudyAbroad;