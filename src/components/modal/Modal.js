import '../../App.css';
import React from 'react';
import './Modal.css';
import { DB_SCORES, SHOW_MODAL } from '../../actions/types';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { db } from '../../firebase';
import { collection, getDocs, query, orderBy, limit } from 'firebase/firestore';
import ModalItem from './ModalItem';
 import {AiOutlineClose} from 'react-icons/ai'

const Modal = () => {
  const dispatch = useDispatch();
  const { db_scores } = useSelector((state) => state.game);

  const getData = async () => {
    const messageRef = collection(db, 'leaderboard');
    const q = query(messageRef, orderBy('score', 'desc'), limit(10));
    const queryData = await getDocs(q);
    const data = [];
    queryData.forEach((doc) => {
      data.push(doc.data());
    });
    dispatch({ type: DB_SCORES, payload: data });
  };

  // const getData = await getDocs(collection(db, 'leaderBoard'))

  const closeModal = (e) => {
    e.target.className === 'modal' && dispatch({ type: SHOW_MODAL });
    console.log(closeModal);
  };

  useEffect(() => {
    getData();
    // eslint-disable-next-line
  }, []);
  return (
    <div className='modal container' onClick={(e) => closeModal(e)}>
      <div className='modal-content'>
        <button
          className='btn3'
          onClick={() => dispatch({ type: SHOW_MODAL })}
        >
          <AiOutlineClose />
        </button>

        {db_scores?.map((item, index) => (
          <ModalItem item={item} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Modal;
