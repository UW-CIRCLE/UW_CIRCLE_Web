import './iss.css';
import back from '../../images/back_button_icon.png';
import React from 'react';
import { useNavigate } from 'react-router-dom';


function Immunity() {
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
        <h1>Immunity</h1>
      </div>
      <main>
        <p className='iss-function'>Immunity</p>
        <p className='iss-service'>Immunization requirements</p>
      </main>
      <hr />
      <main>
        <p className='iss-subtitle'>Contact Detail</p>
        <p className='iss-name'>
          <b>Email: </b>
          <a href="mailto:immunity@uw.edu" style={{ textDecoration: 'underline' }}>immunity@uw.edu</a>
        </p>
      </main>
    </body>
  );
}


export default Immunity;