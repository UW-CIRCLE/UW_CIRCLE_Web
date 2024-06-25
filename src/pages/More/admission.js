import './iss.css';
import back from '../../images/back_button_icon.png';
import React from 'react';
import { useNavigate } from 'react-router-dom';


function Admissions() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/more`);
  };


  return (
    <body>
      <div className="container">
        <button className="back-button" type="button" onClick={() => handleClick()}>
          <img className='back-icon' src={back} alt="Back" />
        </button>
        <h1>FYP</h1>
      </div>
      <main>
        <p className='iss-function'>Admissions</p>
        <p className='iss-service'>Enrollment Management, Office of Registrar</p>
      </main>
      <hr />
      <main>
        <p className='iss-subtitle'>Contact Detail</p>
        <p className='iss-name'>
          <b>Website: </b>
          <a href="https://admit.washington.edu" style={{ textDecoration: 'underline' }}>https://admit.washington.edu</a>
        </p>
        <p className='iss-name'>
          <b>Phone: </b>
          <p className='iss-info'>206-543-9686</p>
        </p>
        <p className='iss-name'>
          <b>Location: </b>
          <a href="https://www.washington.edu/maps/#!/smz" style={{ textDecoration: 'underline' }}>320 Schmitz Hall</a>
        </p>
      </main>
    </body>
  );
}


export default Admissions;