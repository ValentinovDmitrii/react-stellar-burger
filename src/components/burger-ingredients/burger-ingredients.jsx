import React, { useRef } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import IngredientsCategory from "../ingredients-category/ingredients-category";
import '../common.css';
import styles from './burger-ingredients.module.css';
import IngredientDetails from '../ingredient-details/ingredient-details';
import Modal from "../modal/modal";
import { SET_DETAILS, CLEAR_DETAILS } from "../../services/actions/ingredientDetails";

export default function BurgerIngredients () {
  const { ingredients } = useSelector(state => state.ingredients);
  const [current, setCurrent] = React.useState('bun');
  const buns = React.useMemo(() => ingredients.filter((item) => item.type === 'bun'), [ingredients]);
  const mains = React.useMemo(() => ingredients.filter((item) => item.type === 'main'), [ingredients]);
  const sauces = React.useMemo(() => ingredients.filter((item) => item.type === 'sauce'), [ingredients]);

  const dispatch = useDispatch();

  const ingredientDetails = useSelector(state => state.ingredientDetails);

  const refTabs = useRef(null);
  const refBuns = useRef(null);
  const refSauces = useRef(null);
  const refMains = useRef(null);
    
  function handleIngredientClick(_id) {
    dispatch({
      type: SET_DETAILS,
      ingredient: ingredients.find(item => item['_id'] === _id)
    }, [dispatch]);
  };

  function handleIngredientDetailsClose() {
    dispatch({type: CLEAR_DETAILS});
  }

  function handleScrollIngredients() {
    const tabsY = refTabs.current.getBoundingClientRect().y;
    const bunsPosition = Math.abs(refBuns.current.getBoundingClientRect().y - tabsY);
    const saucesPosition = Math.abs(refSauces.current.getBoundingClientRect().y - tabsY);
    const mainsPosition = Math.abs(refMains.current.getBoundingClientRect().y - tabsY);
    switch (Math.min(bunsPosition, saucesPosition, mainsPosition)) {
      case (saucesPosition): {
        setCurrent('sauce');
        break;
      }
      case (mainsPosition): {
        setCurrent('main');
        break;
      }
      default: setCurrent('bun');
    } 
  }

  return (
    <section className={styles.ingredients}>
      {ingredientDetails &&
        <Modal title={'Детали ингредиента'} onClose={handleIngredientDetailsClose}>
          <IngredientDetails />
        </Modal> 
      }
      <h1 className={styles.header} >Соберите бургер</h1>
      <section className={styles.tabs}  ref={refTabs}>
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

      <ul className={`${styles.chapters} custom-scroll`} onScroll={handleScrollIngredients}>
        <li className={styles.chapter} ref={refBuns}>
          <IngredientsCategory data={buns} title='Булки' handleClick={handleIngredientClick} />
        </li>
        <li className={styles.chapter} ref={refSauces}>
          <IngredientsCategory data={sauces} title='Соусы' handleClick={handleIngredientClick} />
        </li>
        <li className={styles.chapter} ref={refMains}>
          <IngredientsCategory data={mains} title='Начинки' handleClick={handleIngredientClick} />
        </li>
      </ul>
    </section>
  );
};
