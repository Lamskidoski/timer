import React from 'react';
import '../styles/TimerModeModal.css'

const TimerModeModal = ({ onClose, onSelect }) => {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Select Timer Mode</h2>
        <button onClick={() => onSelect('analog')}>Analog Timer</button>
        <button onClick={() => onSelect('digital')}>Digital Timer</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
};

export default TimerModeModal;
