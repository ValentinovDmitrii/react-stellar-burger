import React from "react";

import { ConstructorElement, CurrencyIcon, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import BurgerItems from '../burgerItems/burgerItems';

import styles from './burgerConstructor.module.css';

import { burger } from "../../utils/data";

class BurgerConstructor extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      topBun: burger.topBun,
      bottomBun: burger.bottomBun,
      burgerItems: burger.burgerItems,
    };
  };

  render () {
    const totalPrice = this.state.burgerItems.reduce((acc, p) => acc + p.price, this.state.topBun.price+this.state.bottomBun.price);
    return (
      <section className={styles.order}>
        <section className={styles.bun}>
          <ConstructorElement 
          type="top"
          isLocked={true}
          text={this.state.topBun.name + ' (верх)'}
          price={this.state.topBun.price}
          thumbnail={this.state.topBun.image_mobile}
          />
        </section>
        <section className={`${styles.burgerItems} custom-scroll`}>
          <BurgerItems>{this.state.burgerItems}</BurgerItems>
        </section>
        <section className={styles.bun}>
          <ConstructorElement
            type="bottom"
            isLocked={true}
            text={this.state.bottomBun.name + ' (низ)'}
            price={this.state.bottomBun.price}
            thumbnail={this.state.bottomBun.image_mobile}
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
  };
}

export default BurgerConstructor;