import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { DragIcon, ConstructorElement, CurrencyIcon, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './burger-constructor.module.css';
import OrderDetails from "../order-details/order-details";
import Modal from "../modal/modal";
import { NEW_ORDER, CLEAR_ORDER } from "../../services/actions/orderDetails";

export default function BurgerConstructor () {
  const burger = useSelector(state => state.burger);
  const orderDetails = useSelector(state => state.orderDetails)
  ;
  const totalPrice = React.useMemo(() => burger.items.reduce((acc, p) => acc + p.price, (burger.bun) ? (burger.bun.price*2) : (0)),[burger]);

  const dispatch = useDispatch();

  function handleOrderClick () {
    dispatch({
      type: NEW_ORDER,
      bun: burger.bun,
      ingredients: burger.ingredients
    }, [dispatch]);
  }

  function handleOrderClose() {
    dispatch({type: CLEAR_ORDER}, [dispatch]);
  }

  return (
    <section className={styles.order}>
      {orderDetails.burgerBun && 
        <Modal title={''} onClose={handleOrderClose}>
          <OrderDetails />
        </Modal>
      }
      <section className={styles.bun}>
        <ConstructorElement 
        type="top"
        isLocked={true}
        text={(burger.bun) ? (burger.bun.name + ' (верх)') : ('(верх)')}
        price={(burger.bun) ? (burger.bun.price) : (0)}
        thumbnail={(burger.bun) ? (burger.bun.image_mobile) : ('')}
        />
      </section>
      <section className={`${styles.burgerItems} custom-scroll`}>
      {burger.items.map((item) => {
        return (
          <section className={styles.item} key={item._id}>
            <DragIcon type="primary" />
            <ConstructorElement
             text={item.name}
             price={item.price}
              thumbnail={item.image_mobile}
            />
          </section>
       );
     })};
      </section>
      <section className={styles.bun}>
        <ConstructorElement
          type="bottom"
          isLocked={true}
          text={(burger.bun) ? (burger.bun.name + ' (низ)') : ('(низ)')}
          price={(burger.bun) ? (burger.bun.price) : (0)}
          thumbnail={(burger.bun) ? (burger.bun.image_mobile) : ('')}
          />
      </section>
      <section className={styles.info}>
        <Button htmlType="button" type="primary" size="large" onClick={handleOrderClick}>Оформить заказ</Button>  
        <section className={styles.price}>
          <span className='text text_type_digits-medium'>{totalPrice}</span>
          <CurrencyIcon type="primary" />
        </section>
      </section>
    </section>
  );
}
