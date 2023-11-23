import style from './modal-overlay.module.css';
import React from 'react';
import PropTypes from 'prop-types';

export default function ModalOverlay (props) {
  return (
    <div className={style.overlay} onClick={props.onClick} id={props.id}>
      {props.children}
    </div>
  );
}

ModalOverlay.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  id: PropTypes.string.isRequired,
}