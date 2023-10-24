import React from "react";

import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";

import Cards from "../cards/cards";

import '../common.css';

import styles from './burgerIngredients.module.css';

function BurgerIngredients () {
  const [current, setCurrent] = React.useState('bun');
  return (
    <section className={styles.ingredients}>
      <h1 className={`${styles.header} text text_type_main-large`} >Соберите бургер</h1>
      <section className={styles.tabs}>
        <Tab value="bun" active={current === 'bun'} onClick={setCurrent}>
          Булки
        </Tab>
        <Tab value="sauce" active={current === 'sauce'} onClick={setCurrent}>
          Соусы
        </Tab>
        <Tab value="main" active={current === 'main'} onClick={setCurrent}>
          Начинки
        </Tab>
      </section>

      <ul className={`${styles.chapters} custom-scroll`}>
        <li className={styles.chapter}>
          <h2 className='text text_type_main-medium'>Булки</h2>
          <section className={styles.container}>
            <Cards chapter='bun' />
          </section>
        </li>
        <li className={styles.chapter}>
          <h2 className='text text_type_main-medium'>Соусы</h2>
          <section className={styles.container}>
            <Cards chapter='sauce' />
          </section>
        </li>
        <li className={styles.chapter}>
          <h2 className='text text_type_main-medium'>Начинки</h2>
          <section className={styles.container}>
            <Cards chapter='main' />
          </section>
        </li>
      </ul>
    </section>
  );
};

export default BurgerIngredients;