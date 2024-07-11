import './iss.css';
import back from '../../images/back_button_icon.png';
import React from 'react';
import { useNavigate } from 'react-router-dom';


function Registrar() {
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
        <h1>Office of Registrar</h1>
      </div>
      <main>
        <p className='iss-function'>Registrar</p>
        <p className='iss-service'>Enrollment Management, Office of Registrar</p>
      </main>
      <hr />
      <main>
        <p className='iss-subtitle'>Contact Detail</p>
        <p className='iss-name'>
          <b>Website: </b>
          <a href="https://registrar.washington.edu" style={{ textDecoration: 'underline' }}>https://registrar.washington.edu</a>
        </p>
        <p className='iss-name'>
          <b>Location: </b>
          <a href="https://www.washington.edu/maps/#!/smz" style={{ textDecoration: 'underline' }}>260 Schmitz Hall</a>
        </p>
      </main>
    </body>
  );
}


export default Registrar;