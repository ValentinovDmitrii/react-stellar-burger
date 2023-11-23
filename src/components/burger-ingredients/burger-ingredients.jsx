import React, { useState } from "react";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import IngredientsCategory from "../ingredients-category/ingredients-category";
import '../common.css';
import styles from './burger-ingredients.module.css';
import PropTypes from 'prop-types';
import { ingredientPropType } from '../../utils/prop-types';
import IngredientDetails from '../ingredient-details/ingredient-details';
import Modal from "../modal/modal";

export default function BurgerIngredients ({data}) {
  const [current, setCurrent] = React.useState('bun');
  const buns = React.useMemo(() => data.filter((item) => item.type === 'bun'), [data]);
  const mains = React.useMemo(() => data.filter((item) => item.type === 'main'), [data]);
  const sauces = React.useMemo(() => data.filter((item) => item.type === 'sauce'), [data]);

  const [showIngredientDetails, setShowIngredientDetails] = useState(false);
  const [ingredient, setIngredient] = useState(null);

  function handleIngredientClick(_id) {
    setIngredient(data.find(item => item['_id'] === _id));
    toggleShowIngredient();
  }

  function toggleShowIngredient() {
    setShowIngredientDetails(!showIngredientDetails);
  }

  return (
    <section className={styles.ingredients}>
      {showIngredientDetails &&
        <Modal title={'Детали ингредиента'} onClose={toggleShowIngredient}>
          <IngredientDetails ingredient={ingredient} />
        </Modal> 
      }
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
          <IngredientsCategory data={buns} title='Булки' handleClick={handleIngredientClick} />
        </li>
        <li className={styles.chapter}>
          <IngredientsCategory data={sauces} title='Соусы' handleClick={handleIngredientClick} />
        </li>
        <li className={styles.chapter}>
          <IngredientsCategory data={mains} title='Начинки' handleClick={handleIngredientClick} />
        </li>
      </ul>
    </section>
  );
};

BurgerIngredients.propTypes = {
  data: PropTypes.arrayOf(ingredientPropType.isRequired).isRequired,
}