import React, { useEffect, useState } from "react";
import { createPortal } from 'react-dom';

import classes from './Modal.module.scss'

const Modal = ({ closeModal, isOpen, children }) => {
  const [container, setContainer] = useState(null);
  useEffect(() => {
    const modalContainer = document.getElementById('modal');
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setContainer(modalContainer);
    } else {
      document.body.style.overflow = 'auto';
      setContainer(null);
    }
  }, [isOpen])

  if (!isOpen || !container) return null;

  return createPortal(
    <div className={classes.wrapper} onClick={() => closeModal()}>
      <div className={classes.window} onClick={e => e.stopPropagation()}>
        {children}
      </div>
    </div>,
    container
  )
}

export default Modal;