import './iss.css';
import back from '../../images/back_button_icon.png';
import React from 'react';
import { useNavigate } from 'react-router-dom';


function HHC() {
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
        <h1>Hall Health Center</h1>
      </div>
      <main>
        <p className='iss-function'>Husky Health Center</p>
        <p className='iss-service'>Medical and Mental Health Care to Student Body as well as Established Non-student Patients
        </p>
      </main>
      <hr />
      <main>
        <p className='iss-subtitle'>Contact Detail</p>
        <p className='iss-name'>
          <b>Website: </b>
          <a href="https://wellbeing.uw.edu/unit/hall-health/" style={{ textDecoration: 'underline' }}>https://wellbeing.uw.edu/unit/hall-health/</a>
        </p>
        <p className='iss-name'>
          <b>Phone: </b>
          <p className='iss-info'>206-685-1011</p>
        </p>
        <p className='iss-name'>
          <b>Email: </b>
          <a href="mailto:uwhhc@uw.edu" style={{ textDecoration: 'underline' }}>uwhhc@uw.edu</a>
        </p>
        <p className='iss-name'>
          <b>Location: </b>
          <a href="https://www.washington.edu/maps/#!/hll" style={{ textDecoration: 'underline' }}>4060 E. Stevens Way Northeast Campus Box 354410</a>
        </p>
      </main>
    </body>
  );
}


export default HHC;