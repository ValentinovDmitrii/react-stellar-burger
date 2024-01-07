import React from "react";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";

import styles from './main.module.css';

export default function Main () {
  return (
    <section className={styles.main}>
      <BurgerIngredients />
      <BurgerConstructor />
    </section>
  );
}
