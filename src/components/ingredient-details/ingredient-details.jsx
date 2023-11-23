import React from "react";
import style from './ingredient-details.module.css';
import { ingredientPropType } from '../../utils/prop-types';

export default function IngredientDetails({ingredient}) {
  return (
    <>
      <img className={style.illustration} src={ingredient ? ingredient.image_large : null} alt='Иллюстрация'></img>
      <span className={style.name}>{ingredient.name}</span>
      <section className={style.nutrition}>
        <section className={style.nutritionItem}>
          <span className={style.nutritionTitle}>Калории,ккал</span>
          <span className={style.nutritionValue}>{ingredient ? ingredient.calories : null}</span>
        </section>
        <section className={style.nutritionItem}>
          <span className={style.nutritionTitle}>Белки, г</span>
          <span className={style.nutritionValue}>{ingredient ? ingredient.proteins : null}</span>
        </section>
        <section className={style.nutritionItem}>
          <span className={style.nutritionTitle}>Жиры, г</span>
          <span className={style.nutritionValue}>{ingredient ? ingredient.fat : null}</span>
        </section>
        <section className={style.nutritionItem}>
          <span className={style.nutritionTitle}>Углеводы, г</span>
          <span className={style.nutritionValue}>{ingredient ? ingredient.carbohydrates : null}</span>
        </section>
      </section>
    </>
  );
}

IngredientDetails.propTypes = {
  ingredient: ingredientPropType,
}