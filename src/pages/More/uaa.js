import './iss.css';
import back from '../../images/back_button_icon.png';
import React from 'react';
import { useNavigate } from 'react-router-dom';


function UAA() {
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
        <h1>UAA</h1>
      </div>
      <main>
        <p className='iss-function'>Undergraduate Advising(UAA)</p>
        <p className='iss-service'></p>
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
          <p className='iss-info'>206-543-2550</p>
        </p>
        <p className='iss-name'>
          <b>Email: </b>
          <a href="mailto:advice@uw.edu" style={{ textDecoration: 'underline' }}>advice@uw.edu</a>
        </p>
        <p className='iss-name'>
          <b>Location: </b>
          <a href="https://www.washington.edu/maps/#!/mgh" style={{ textDecoration: 'underline' }}>141 Mary Gates Hall</a>
        </p>
      </main>
    </body>
  );
}


export default UAA;