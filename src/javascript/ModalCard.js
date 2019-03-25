import React from 'react';

const ModalCard = ({ handleClose, show, children }) => {
  const showHideClassName = show ? 'modal display-block' : 'modal display-none';

  return (
      <div className={ showHideClassName }>
        <section className="modal-main">
          { children }
          <button onClick={ handleClose }>close</button>
        </section>
      </div>
  );
};

export { ModalCard };
