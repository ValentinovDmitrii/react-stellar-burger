import React from "react";
import BurgerIngredients from "../burgerIngredients/burgerIngredients";
import BurgerConstructor from "../burgerConstructor/burgerConstructor";

import styles from './menu.module.css';

class Menu extends React.Component {
  render () {
    return (
      <div className={styles.menu}>
        <BurgerIngredients />
        <BurgerConstructor />
      </div>
    );
  };
}

export default Menu;