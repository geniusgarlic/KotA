import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function Popup({ handleClose }) {
  return (
    <div className="popup">
      <div className="popup-content">
        <h2>Popup Content</h2>
        <button onClick={handleClose}>Close</button>
      </div>
    </div>
  );
}

function HandleClickOpenPopup() {
  const [isOpen, setIsOpen] = useState(true);

  const handleClosePopup = () => {
    setIsOpen(false);
  };

  return (
    <div>
      {isOpen &&
        ReactDOM.createPortal(
          <Popup handleClose={handleClosePopup} />,
          document.body
        )}
    </div>
  );
}

export default HandleClickOpenPopup;
