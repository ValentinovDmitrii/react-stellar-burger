import React from "react";
import PropTypes from 'prop-types';
import { ingredientPropType } from '../../utils/prop-types';

import { ConstructorElement, CurrencyIcon, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import BurgerItems from '../burger-items/burger-items';

import styles from './burger-constructor.module.css';

function BurgerConstructor (props) {
  const [topBun, setTopBun] = React.useState(props.topBun);
  const [bottomBun, setBottomBun] = React.useState(props.bottomBun);
  const [burgerItems, setBurgerItems] = React.useState(props.burgerItems);
    const totalPrice = burgerItems.reduce((acc, p) => acc + p.price, topBun.price+bottomBun.price);
    return (
      <section className={styles.order}>
        <section className={styles.bun}>
          <ConstructorElement 
          type="top"
          isLocked={true}
          text={topBun.name + ' (верх)'}
          price={topBun.price}
          thumbnail={topBun.image_mobile}
          />
        </section>
        <section className={`${styles.burgerItems} custom-scroll`}>
          <BurgerItems burgerItems={burgerItems}></BurgerItems>
        </section>
        <section className={styles.bun}>
          <ConstructorElement
            type="bottom"
            isLocked={true}
            text={bottomBun.name + ' (низ)'}
            price={bottomBun.price}
            thumbnail={bottomBun.image_mobile}
          />
        </section>
        <section className={styles.info}>
          <Button htmlType="button" type="primary" size="large">Оформить заказ</Button>  
          <section className={styles.price}>
            <span className='text text_type_digits-medium'>{totalPrice}</span>
            <CurrencyIcon type="primary" />
          </section>
        </section>
      </section>
    );
}

BurgerConstructor.propTypes = {
  topBun: PropTypes.objectOf(ingredientPropType),
  bottomBun: PropTypes.objectOf(ingredientPropType),
  burgerItems: PropTypes.arrayOf(ingredientPropType),
}

export default BurgerConstructor;