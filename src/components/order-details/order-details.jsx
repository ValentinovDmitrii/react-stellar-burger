import style from './order-details.module.css';
import React from "react";
import PropTypes from 'prop-types';

export default function OrderDetails({orderNumber}) {
  return (
    <>
      <span className={style.orderNumber}>{orderNumber}</span>
      <span className={style.text}>идентификатор заказа</span>
      <button className={style.button} type="submit"></button>
      <span className={style.info}>Ваш заказ начали готовить</span>
      <span className={style.wait}>Дождитесь готовности на орбитальной станции</span>
    </>    
  )
}

OrderDetails.propTypes = {
  orderNumber: PropTypes.string.isRequired,
}