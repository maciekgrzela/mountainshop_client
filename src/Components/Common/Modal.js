import React, { useEffect, useState } from 'react';
import { GrClose } from 'react-icons/gr';

const Modal = ({
  open,
  title,
  content,
  actions,
  styleClassName = '',
  handleClose,
}) => {
  const [openState, setOpenState] = useState(false);

  useEffect(() => {
    setOpenState(open);
  }, [open]);

  return (
    <div className={`modal ${openState && 'modal--open'} ${styleClassName}`}>
      <div className='modal__window'>
        <div className='modal__title'>
          <h2>{title}</h2>
          <GrClose
            onClick={() => {
              setOpenState(false);
              handleClose();
            }}
          />
        </div>
        <div className='modal__content'>{content}</div>
        <div className='modal__actions'>{actions}</div>
      </div>
    </div>
  );
};

export default Modal;
