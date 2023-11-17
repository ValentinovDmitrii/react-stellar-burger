import React from "react";
import ModalOverlay from "../modal-overlay/modal-overlay";
import style from './ingredient-details.module.css';
import PropTypes from 'prop-types';
import { ingredientPropType } from '../../utils/prop-types';

export default function IngredientDetails(props) {
  return (
    <ModalOverlay title={'Детали ингредиента'} onCloseButtonClick={props.onCloseButtonClick}>
      <img className={style.illustration} src={props.ingredient ? props.ingredient.image_large : null} alt='Иллюстрация'></img>
      <span className={style.name}>{props.ingredient.name}</span>
      <section className={style.nutrition}>
        <section className={style.nutritionItem}>
          <span className={style.nutritionTitle}>Калории,ккал</span>
          <span className={style.nutritionValue}>{props.ingredient ? props.ingredient.calories : null}</span>
        </section>
        <section className={style.nutritionItem}>
          <span className={style.nutritionTitle}>Белки, г</span>
          <span className={style.nutritionValue}>{props.ingredient ? props.ingredient.proteins : null}</span>
        </section>
        <section className={style.nutritionItem}>
          <span className={style.nutritionTitle}>Жиры, г</span>
          <span className={style.nutritionValue}>{props.ingredient ? props.ingredient.fat : null}</span>
        </section>
        <section className={style.nutritionItem}>
          <span className={style.nutritionTitle}>Углеводы, г</span>
          <span className={style.nutritionValue}>{props.ingredient ? props.ingredient.carbohydrates : null}</span>
        </section>
      </section>
    </ModalOverlay>
  );
}

IngredientDetails.propTypes = {
  onCloseButtonClick: PropTypes.func.isRequired,
  ingredient: ingredientPropType,
}