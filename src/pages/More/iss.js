import './iss.css';
import back from '../../images/back_button_icon.png';
import React from 'react';
import { useNavigate } from 'react-router-dom';


function Iss() {
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
        <h1>ISS</h1>
      </div>
      <main>
        <p className='iss-function'>International Student Services</p>
        <p className='iss-service'>Visa documents, I-20, OPT, CPT, travel signature...</p>
      </main>
      <hr />
      <main>
        <p className='iss-subtitle'>Contact Detail</p>
        <p className='iss-name'>
          <b>Website: </b>
          <a href="https://iss.washington.edu" style={{ textDecoration: 'underline' }}>https://iss.washington.edu</a>
        </p>
        <p className='iss-name'>
          <b>Student Portal: </b>
          <a href="https://isss.uw.edu" style={{ textDecoration: 'underline' }}>https://isss.uw.edu</a>
        </p>
        <p className='iss-name'>
          <b>Phone: </b>
          <p className='iss-info'>206-221-7857</p>
        </p>
        <p className='iss-name'>
          <b>Email: </b>
          <a href="https://iss.washington.edu/email/" style={{ textDecoration: 'underline' }}>Contact ISS Form</a>
        </p>
        <p className='iss-name'>
          <b>Location: </b>
          <a href="https://www.washington.edu/maps/#!/smz" style={{ textDecoration: 'underline' }}>459 Schmitz Hall</a>
        </p>
      </main>
    </body>
  );
}


export default Iss;