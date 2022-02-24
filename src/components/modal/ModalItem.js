import './ModalItem.css';

const ModalItem = ({ item, index }) => {
  return (
    <div className='item-container'>
      <div className='score-box'>Pos: {index + 1}</div>
      <div className='center'>
        Name: {item.user}, Score: {item.score}
      </div>
      <img className='img img2' src={item.userImg} alt='user' />

    </div>
  );
};



export default ModalItem;
