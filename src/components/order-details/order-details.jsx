import style from './order-details.module.css';
import React from "react";
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

export default function OrderDetails() {
  const orderDetails = useSelector(state => state.orderDetails);

  return (
    <>
      <span className={style.orderNumber}>{orderDetails.orderNumber.toString().padStart(5, "0")}</span>
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