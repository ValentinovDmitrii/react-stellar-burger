import style from './order-details.module.css';
import React from "react";
import ModalOverlay from "../modal-overlay/modal-overlay";
import PropTypes from 'prop-types';

export default function OrderDetails(props) {
  return (
    <ModalOverlay title={''} onCloseButtonClick={props.onCloseButtonClick}>
      <span className={style.orderNumber}>{props.orderNumber}</span>
      <span className={style.text}>идентификатор заказа</span>
      <button className={style.button} type="submit"></button>
      <span className={style.info}>Ваш заказ начали готовить</span>
      <span className={style.wait}>Дождитесь готовности на орбитальной станции</span>
    </ModalOverlay>    
  )
}

OrderDetails.propTypes = {
  onCloseButtonClick: PropTypes.func.isRequired,
  orderNumber: PropTypes.string.isRequired,
}