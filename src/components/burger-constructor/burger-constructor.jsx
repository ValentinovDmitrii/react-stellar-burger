import React from "react";
import PropTypes from 'prop-types';
import { ingredientPropType } from '../../utils/prop-types';

import { DragIcon, ConstructorElement, CurrencyIcon, Button } from "@ya.praktikum/react-developer-burger-ui-components";

import styles from './burger-constructor.module.css';

function BurgerConstructor (props) {
  const bun = props.data.find(item => item.type === 'bun');
  const ingredients = props.data.filter(item => item.type !== 'bun');
  const totalPrice = ingredients.reduce((acc, p) => p.type !== 'bun' ? acc + p.price : acc, bun.price*2);
  return (
    <section className={styles.order}>
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
        <Button htmlType="button" type="primary" size="large" onClick={props.handleClick}>Оформить заказ</Button>  
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

export default BurgerConstructor;