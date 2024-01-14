import style from './modal.module.css';
import React, { useEffect } from 'react';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';
import ModalOverlay from '../modal-overlay/modal-overlay';
import { createPortal } from 'react-dom';

const idOverlay = 'overlay';

export default function Modal ({title, children, onClose}) {
  const modalRoot = document.getElementById("react-modals"); 

  useEffect(() => {
    const closeKey = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', closeKey);
   
    return () => window.removeEventListener('keydown', closeKey);
  });

  function handleModalClose(e){
    if (e.target.id === idOverlay) {
      onClose();
    }
  }
    
  return createPortal (
    (
    <ModalOverlay id={idOverlay} onClick={handleModalClose}>
      <div className={style.card}>
        <section className={style.header}>
          {/* <span className={style.title}>{title}</span> */}
          <section className={style.closeButton}>
            <CloseIcon type="primary" onClick={onClose} />
          </section>
        </section>
        {children}
      </div>
    </ModalOverlay>
    ), modalRoot
  );
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}
