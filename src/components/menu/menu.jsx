import React from "react";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";

import styles from './menu.module.css';

import { burger } from "../../utils/data";

function Menu () {
    return (
      <section className={styles.menu}>
        <BurgerIngredients />
        <BurgerConstructor topBun={burger.topBun} bottomBun={burger.bottomBun} burgerItems={burger.burgerItems} />
      </section>
    );
}

export default Menu;