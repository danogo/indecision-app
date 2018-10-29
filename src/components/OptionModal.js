import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#app');

const OptionModal = props => (
  <Modal
    isOpen={!!props.selectedOption}
    onRequestClose={props.onClearSelectedOption}
    contentLabel='Selected option'
  >
    <h3>Selected option</h3>
    { props.selectedOption && <p>{props.selectedOption}</p> }
    <button onClick={props.onClearSelectedOption}>Okay</button>
  </Modal>
);

export default OptionModal;