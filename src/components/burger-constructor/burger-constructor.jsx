import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { useDrop } from 'react-dnd';
import { v4 as uuidv4 } from 'uuid';
import { ConstructorElement, CurrencyIcon, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './burger-constructor.module.css';
import OrderDetails from "../order-details/order-details";
import Modal from "../modal/modal";
import { CLEAR_ORDER } from "../../services/actions/orderDetails";
import { getOrder } from "../../services/reducers/orderDetails";
import { ADD_ITEM } from "../../services/actions/burger";
import BurgerConstructorItem from '../burger-constructor-item/burger-constructor-item';

export default function BurgerConstructor () {
  const burger = useSelector(state => state.burger);
  const orderDetails = useSelector(state => state.orderDetails);
  const ingredients = useSelector(state => state.ingredients);

  const totalPrice = React.useMemo(() => burger.items.reduce((acc, p) => acc + (p.price*p.count), (burger.bun) ? (burger.bun.price*2) : (0)),[burger]);

  const dispatch = useDispatch();

  function handleOrderClick () {
    dispatch(getOrder(burger));
  }

  function onDropHandler(itemId) {
    const index = ingredients.ingredients.findIndex((item) => item._id === itemId.id);
    const droppedItem = JSON.parse(JSON.stringify(ingredients.ingredients.slice(index, index+1)[0]));
    droppedItem.__key = uuidv4();
    dispatch({
      type: ADD_ITEM,
      item: droppedItem
    });
  }

  const [, dropTarget] = useDrop({
    accept: "ingredient",
    drop(itemId) {onDropHandler(itemId)}
  });

  const handleCloseOrder = () => {
    dispatch({
      type: CLEAR_ORDER
    })
  }

  function renderItem (item, index) {
    return (
      <BurgerConstructorItem
        key={item.__key}
        item={item}
        index={index}
      />
    )
  };

  return (
    <section className={styles.order} ref={dropTarget}>
      {!orderDetails.loadRequest && !orderDetails.loadFailed && (orderDetails.orderNumber > 0) &&
        <Modal title={orderDetails.orderName} onClose={handleCloseOrder}>
          <OrderDetails/>
        </Modal>
      }
      <div className={styles.bun}>
        <ConstructorElement 
        type="top"
        isLocked={true}
        text={(burger.bun) ? (burger.bun.name + ' (верх)') : ('(верх)')}
        price={(burger.bun) ? (burger.bun.price) : (0)}
        thumbnail={(burger.bun) ? (burger.bun.image_mobile) : ('')}
        />
      </div>
      <div className={`${styles.burgerItems} custom-scroll`} key='burger'>
        {burger.items.map((item, index) => renderItem(item, index))}
      </div>
      <div className={styles.bun}>
        <ConstructorElement
          type="bottom"
          isLocked={true}
          text={(burger.bun) ? (burger.bun.name + ' (низ)') : ('(низ)')}
          price={(burger.bun) ? (burger.bun.price) : (0)}
          thumbnail={(burger.bun) ? (burger.bun.image_mobile) : ('')}
          />
      </div>
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
