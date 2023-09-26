import React from "react";

import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";

import '../common.css';

import styles from './burgerIngredients.module.css';

function BurgerIngredients () {
  const [current, setCurrent] = React.useState('bun');
  return (
    <div className={styles.ingredients}>
      <h1 className={`${styles.header} text text_type_main-large`} >Соберите бургер</h1>
      <div style={{ display: 'flex' }}>
        <Tab value="bun" active={current === 'bun'} onClick={setCurrent}>
          Булки
        </Tab>
        <Tab value="sauce" active={current === 'sauce'} onClick={setCurrent}>
          Соусы
        </Tab>
        <Tab value="main" active={current === 'main'} onClick={setCurrent}>
          Начинки
        </Tab>
  </div>
    </div>
  );
};

export default BurgerIngredients;