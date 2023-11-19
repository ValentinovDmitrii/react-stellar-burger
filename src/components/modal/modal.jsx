import style from './modal.module.css';
import React, { useEffect } from 'react';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';
import ModalOverlay from '../modal-overlay/modal-overlay';
import { createPortal } from 'react-dom';


export default function Modal (props) {
  const modalRoot = document.getElementById("react-modals"); 
  
  useEffect(() => {
    const close = (e) => {
      if (e.keyCode === 27) {
        props.onCloseButtonClick();
      }
    };
    window.addEventListener('keydown', close);
   
    return () => window.removeEventListener('keydown', close);
  });
    
  return createPortal (
    (
    <ModalOverlay onCloseButtonClick={props.onCloseButtonClick}>
      <form className={style.card} onClick={(e)=>e.stopPropagation()}>
        <section className={style.header}>
          <span className={style.title}>{props.title}</span>
          <section className={style.closeButton}>
            <CloseIcon type="primary" onClick={props.onCloseButtonClick} />
          </section>
        </section>
        {props.children}
      </form>
    </ModalOverlay>
    ), modalRoot
  );
}

Modal.propTypes = {
  onCloseButtonClick: PropTypes.func.isRequired,
}