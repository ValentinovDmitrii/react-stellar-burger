import React from "react";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";

import styles from './main.module.css';

import { burger } from "../../utils/data";

import PropTypes from 'prop-types';
import { ingredientPropType } from '../../utils/prop-types';

export default function Main (props) {
  return (
    <section className={styles.main}>
      <BurgerIngredients data = {props.data} handleClick={props.onClickIngredient} />
      <BurgerConstructor data={burger} handleClick={props.onClickOrder}/>
    </section>
  );
}

Main.propTypes = {
  data: PropTypes.arrayOf(ingredientPropType.isRequired).isRequired,
}
