import React from "react";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";

import styles from './main.module.css';

import { burger, data } from "../../utils/data";

function Main () {
  return (
    <section className={styles.main}>
      <BurgerIngredients data = {data} />
      <BurgerConstructor data={burger} />
    </section>
  );
}

export default Main;