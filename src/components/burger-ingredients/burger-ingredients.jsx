import React from "react";

import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";

import IngredientsCategory from "../ingredients-category/ingredients-category";

import '../common.css';

import styles from './burger-ingredients.module.css';

function BurgerIngredients (props) {
  const [current, setCurrent] = React.useState('bun');
  const buns = React.useMemo(() => props.data.filter((item) => item.type === 'bun'), [props.data]);
  const mains = React.useMemo(() => props.data.filter((item) => item.type === 'main'), [props.data]);
  const sauces = React.useMemo(() => props.data.filter((item) => item.type === 'sauce'), [props.data]);
  return (
    <section className={styles.ingredients}>
      <h1 className={styles.header} >Соберите бургер</h1>
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
          <IngredientsCategory data={buns} title='Булки' />
        </li>
        <li className={styles.chapter}>
          <IngredientsCategory data={sauces} title='Соусы' />
        </li>
        <li className={styles.chapter}>
          <IngredientsCategory data={mains} title='Начинки' />
        </li>
      </ul>
    </section>
  );
};

export default BurgerIngredients;