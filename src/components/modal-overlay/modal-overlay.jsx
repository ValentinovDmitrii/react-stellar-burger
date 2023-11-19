import style from './modal-overlay.module.css';
import React from 'react';
import PropTypes from 'prop-types';

export default function ModalOverlay (props) {
  return (
    <div className={style.overlay} onClick={props.onCloseButtonClick}>
      {props.children}
    </div>
  );
}

ModalOverlay.propTypes = {
  onCloseButtonClick: PropTypes.func.isRequired,
}