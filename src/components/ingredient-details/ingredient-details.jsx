import React from "react";
import ModalOverlay from "../modal-overlay/modal-overlay";
import style from './ingredient-details.module.css';

export default function IngredientDetails(props) {
  return (
    <ModalOverlay title={'Детали ингредиента'} onCloseButtonClick={props.onCloseButtonClick}>
      <img className={style.illustration} src={props.ingredient.image_large} alt='Иллюстрация'></img>
      <span className={style.name}>{props.ingredient.name}</span>
      <section className={style.nutrition}>
        <section className={style.nutritionItem}>
          <span className={style.nutritionTitle}>Калории,ккал</span>
          <span className={style.nutritionValue}>{props.ingredient.calories}</span>
        </section>
        <section className={style.nutritionItem}>
          <span className={style.nutritionTitle}>Белки, г</span>
          <span className={style.nutritionValue}>{props.ingredient.proteins}</span>
        </section>
        <section className={style.nutritionItem}>
          <span className={style.nutritionTitle}>Жиры, г</span>
          <span className={style.nutritionValue}>{props.ingredient.fat}</span>
        </section>
        <section className={style.nutritionItem}>
          <span className={style.nutritionTitle}>Углеводы, г</span>
          <span className={style.nutritionValue}>{props.ingredient.carbohydrates}</span>
        </section>
      </section>
    </ModalOverlay>
  );
}