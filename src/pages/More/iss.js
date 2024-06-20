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
    <div class="page-hedaer">
      <button class="back-button" type="button" onClick={() => handleClick()}>
        <img class='back' src={back} alt="Back"/>
      </button>
    </div>
  );
}

export default Iss;