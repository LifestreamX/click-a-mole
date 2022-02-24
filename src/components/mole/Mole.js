import React from 'react';
import './Mole.css';
import { useDispatch, useSelector } from 'react-redux';
import { SCORE, SHOW_POP_UP, GAME_ON } from '../../actions/types';

const Mole = ({ id }) => {
  const dispatch = useDispatch();
  const { activeID, gameOn, showPopUp,  } = useSelector((state) => state.game);

  const handleClick = (e) => {
    if (e.target.className === 'box active' ) {
      dispatch({ type: SCORE });
      e.target.classList.remove('active');
    }
    if (e.target.className === 'box false' && gameOn) {
      if (!showPopUp) {
        const audio = new Audio('/laugh.mp3');
        audio.play();
        dispatch({ type: SHOW_POP_UP });
        setTimeout(() => {
          dispatch({ type: SHOW_POP_UP });
        }, 600);
      }
    }
  };

  return (
    <div
      onClick={(e) => handleClick(e)}
      className={`box ${activeID === id && 'active'}`}
    ></div>
  );
};

export default Mole;
