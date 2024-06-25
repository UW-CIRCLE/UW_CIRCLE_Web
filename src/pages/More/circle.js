import './iss.css';
import back from '../../images/back_button_icon.png';
import React from 'react';
import { useNavigate } from 'react-router-dom';


function CIRCLE() {
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
        <h1>UW CIRCLE</h1>
      </div>
      <main>
        <p className='iss-function'>UW CIRCLE</p>
        <p className='iss-service'>A support system for international students</p>
      </main>
      <hr />
      <main>
        <p className='iss-subtitle'>Contact Detail</p>
        <p className='iss-name'>
          <b>Website: </b>
          <a href="https://www.washington.edu/circle/" style={{ textDecoration: 'underline' }}>https://www.washington.edu/circle/</a>
        </p>
        <p className='iss-name'>
        {/*Comment there is no Student Portal for CIRCLE */}
          {/* <b>Student Portal: </b> 
          <a href="https://isss.uw.edu" style={{ textDecoration: 'underline' }}>https://www.washington.edu/circle/</a> */}
        </p>
        <p className='iss-name'>
          <b>Phone: </b>
          <p className='iss-info'>206-685-4004</p>
        </p>
        <p className='iss-name'>
          <b>Email: </b>
          <a href="mailto:uwcircle@uw.edu" style={{ textDecoration: 'underline' }}>uwcircle@uw.edu</a>
        </p>
        <p className='iss-name'>
          <b>Location: </b>
          <a href="https://www.washington.edu/maps/#!/smz" style={{ textDecoration: 'underline' }}>250 Schmitz Hall</a>
        </p>
      </main>
    </body>
  );
}


export default CIRCLE;