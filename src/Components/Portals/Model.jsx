import React from 'react';
import ReactDOM from 'react-dom';

// Modal component using a portal
function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="modal-overlay">
      <div className="modal-content">
        <button onClick={onClose} className="close-btn">Close</button>
        {children}
      </div>
    </div>,
    document.getElementById('modal-root') // This is where we want to mount the modal
  );
}

export default Modal;
