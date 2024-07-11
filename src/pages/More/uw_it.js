import './iss.css';
import back from '../../images/back_button_icon.png';
import React from 'react';
import { useNavigate } from 'react-router-dom';


function UWIT() {
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
        <h1>UW IT</h1>
      </div>
      <main>
        <p className='iss-function'>UW IT</p>
        <p className='iss-service'>UW NetID, access, 2FA authentication, Workday</p>
      </main>
      <hr />
      <main>
        <p className='iss-subtitle'>Contact Detail</p>
        <p className='iss-name'>
          <b>Website: </b>
          <a href="https://itconnect.uw.edu" style={{ textDecoration: 'underline' }}>https://itconnect.uw.edu</a>
        </p>
        <p className='iss-name'>
        {/*Comment there is no Student Portal for CIRCLE */}
          {/* <b>Student Portal: </b> 
          <a href="https://isss.uw.edu" style={{ textDecoration: 'underline' }}>https://www.washington.edu/circle/</a> */}
        </p>
        <p className='iss-name'>
          <b>Phone: </b>
          <p className='iss-info'>206-221-5000</p>
        </p>
        <p className='iss-name'>
          <b>Email: </b>
          <a href="mailto:help@uw.edu" style={{ textDecoration: 'underline' }}>help@uw.edu</a>
        </p>
        <p className='iss-name'>
          <b>Location: </b>
          <a href="https://www.washington.edu/maps/#!/oug" style={{ textDecoration: 'underline' }}>Learning Technologies Help Desks Odegaard Undergraduate Library</a>
        </p>
      </main>
    </body>
  );
}


export default UWIT;