import PropTypes from 'prop-types';
import { ingredientPropType } from '../../utils/prop-types';

import { useDrag } from 'react-dnd';

import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

import styles from './ingredient.module.css';

export default function Ingredient ({item, onIngredientClick}) {
  const id = item._id;
  const [, dragRef] = useDrag({
    type: "ingredient",
    item: {id},
  });

  return (
    <section className={styles.category} onClick={() => onIngredientClick(id)} ref={dragRef}>
      <img src={item.image} className={styles.illustration} alt='продукт'/>
      <section className={styles.price}>
        <span>{item.price}</span>
        <CurrencyIcon type="primary" /> 
      </section>
      <p className={`${styles.description}`}>{item.name}</p>
    </section>
  );
};

Ingredient.propTypes = {
  item: ingredientPropType.isRequired,
  onIngredientClick: PropTypes.func.isRequired
}
  