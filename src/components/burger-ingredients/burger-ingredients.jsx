import React from "react";

import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";

import { data } from "../../utils/data";
import Cards from "../cards/cards";

import '../common.css';

import styles from './burger-ingredients.module.css';

function BurgerIngredients () {
  const [current, setCurrent] = React.useState('bun');
  const internalData = data;
  const buns = React.useMemo(() => internalData.filter((item) => item.type === 'bun'), [internalData]);
  const mains = React.useMemo(() => internalData.filter((item) => item.type === 'main'), [internalData]);
  const sauces = React.useMemo(() => internalData.filter((item) => item.type === 'sauce'), [internalData]);
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
          <h2 className='text text_type_main-medium'>Булки</h2>
          <section className={styles.container}>
            <Cards data={buns} />
          </section>
        </li>
        <li className={styles.chapter}>
          <h2 className='text text_type_main-medium'>Соусы</h2>
          <section className={styles.container}>
            <Cards data={sauces} />
          </section>
        </li>
        <li className={styles.chapter}>
          <h2 className='text text_type_main-medium'>Начинки</h2>
          <section className={styles.container}>
            <Cards data={mains} />
          </section>
        </li>
      </ul>
    </section>
  );
};

export default BurgerIngredients;