import React from "react";

import '../common.css';

import styles from './typeIngredients.module.css';

function TypeIngredients ({caption}) {
  return (
    <div className={styles.ingredients}>
      <h2 className={`${styles.header} text text_type_main-large`} >Соберите бургер</h2>
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

export default TypeIngredients;