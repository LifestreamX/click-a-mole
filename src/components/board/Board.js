import React, { useEffect } from 'react';
import '../../App.css';
import './Board.css';
import { useSelector, useDispatch } from 'react-redux';
import { GAME_ON, RESET, SHOW_MODAL, ACTIVE_ID } from '../../actions/types';
import molespeech from '../../images/molespeech.png';
import Mole from '../mole/Mole';
import allActions from '../../actions/actions';
import { db, auth } from '../../firebase';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { signOut } from 'firebase/auth';
import Modal from '../modal/Modal';

const Board = () => {
  const dispatch = useDispatch();

  const { activeID, time, score, showPopUp, showModal, gameOn } = useSelector(
    (state) => state.game
  );

  const start = () => {
    dispatch(allActions.decrement(false, activeID));
    dispatch({ type: GAME_ON });
    dispatch({ type: RESET });
  };

  useEffect(() => {
    if (time === 0) {
      dispatch(allActions.decrement(true));
      dispatch({ type: GAME_ON });
      dispatch({ type: ACTIVE_ID, payload: 0 });
      submit();
    }
  }, [time]);

  useEffect(() => {
    if (score >= 15) {
      dispatch(allActions.increaseSpeed(600));
    } else if (score >= 10) {
      dispatch(allActions.increaseSpeed(700));
    }
  }, [score]);

  const submit = async () => {
    await addDoc(collection(db, 'leaderboard'), {
      score,
      timestamp: serverTimestamp(),
      user: auth.currentUser.displayName,
      userImg: auth.currentUser.photoURL,
    });
  };

  const signOutUser = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className='main'>
      {showModal && <Modal />}
      <img
        className='avatar-image'
        src={auth.currentUser.photoURL}
        alt='user'
        referrerPolicy='no-referrer'
      />
      <h1>{auth.currentUser.displayName}</h1>
      <h1>Time: {time}</h1>
      <h1>Score: {score}</h1>
      <button
        onClick={start}
        className={`${gameOn ? 'hide' : null} btn`}
        className={`${showModal ? 'hide' : null} btn`}
      >
        Start
      </button>

      <button
        onClick={signOutUser}
        className={`${gameOn ? 'hide' : null} btn`}
        className={`${showModal ? 'hide' : null} btn`}
      >
        Sign Out
      </button>

      <button
        onClick={() => dispatch({ type: SHOW_MODAL })}
        className={`${gameOn ? 'hide' : null} btn`}
        className={`${showModal ? 'hide' : null} btn`}
      >
        LeaderBoard
      </button>

      <div className='board-container'>
        <Mole id={1} />
        <Mole id={2} />
        <Mole id={3} />
        <Mole id={4} />
        <Mole id={5} />
        <Mole id={6} />
        <Mole id={7} />
        <Mole id={8} />
        <Mole id={9} />
        <Mole id={10} />
        <Mole id={11} />
        <Mole id={12} />
      </div>
      <img
        className={!showPopUp ? 'popup' : 'showPopUp'}
        src={molespeech}
        alt='pop up mole'
      />
    </div>
  );
};

export default Board;
