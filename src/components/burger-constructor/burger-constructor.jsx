import React, { useState } from "react";
import PropTypes from 'prop-types';
import { ingredientPropType } from '../../utils/prop-types';
import { DragIcon, ConstructorElement, CurrencyIcon, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './burger-constructor.module.css';
import OrderDetails from "../order-details/order-details";
import Modal from "../modal/modal";

export default function BurgerConstructor ({data}) {
  const bun = data.find(item => item.type === 'bun');
  const ingredients = data.filter(item => item.type !== 'bun');
  const totalPrice = React.useMemo(() => ingredients.reduce((acc, p) => acc + p.price, bun.price*2),[ingredients, bun]);
  const [showOrderDetails, setShowOrderDetails] = useState(false);

  function handleOrderClick () {
    toggleOrderDetails();
  }

  function toggleOrderDetails() {
    setShowOrderDetails(!showOrderDetails);
  }

  return (
    <section className={styles.order}>
      {showOrderDetails && 
        <Modal title={''} onClose={toggleOrderDetails}>
          <OrderDetails orderNumber={'034536'} />
        </Modal>
      }
      <section className={styles.bun}>
        <ConstructorElement 
        type="top"
        isLocked={true}
        text={bun.name + ' (верх)'}
        price={bun.price}
        thumbnail={bun.image_mobile}
        />
      </section>
      <section className={`${styles.burgerItems} custom-scroll`}>
      {ingredients.map((item) => {
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
          text={bun.name + ' (низ)'}
          price={bun.price}
          thumbnail={bun.image_mobile}
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

BurgerConstructor.propTypes = {
  data: PropTypes.arrayOf(ingredientPropType.isRequired).isRequired,
}
