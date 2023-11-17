import style from './modal-overlay.module.css';
import React, { useEffect } from 'react';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';

export default function ModalOverlay (props) {
  useEffect(() => {
    const close = (e) => {
      if (e.keyCode === 27) {
        props.onCloseButtonClick();
      }
    };
    window.addEventListener('keydown', close);

    return () => window.removeEventListener('keydown', close);
  });

  return (
    <div className={style.overlay} onClick={props.onCloseButtonClick}>
      <form className={style.card} onClick={(e)=>e.stopPropagation()}>
        <section className={style.header}>
          <span className={style.title}>{props.title}</span>
          <section className={style.closeButton}>
            <CloseIcon type="primary" onClick={props.onCloseButtonClick} />
          </section>
        </section>
        {props.children}
      </form>
    </div>
  );
}

ModalOverlay.propTypes = {
  onCloseButtonClick: PropTypes.func.isRequired,
}