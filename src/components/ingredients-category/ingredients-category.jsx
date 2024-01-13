import PropTypes from 'prop-types';
import { ingredientPropType } from '../../utils/prop-types';

import Ingredient from '../ingredient/ingredient.jsx';

import styles from './ingredients-category.module.css';

export default function IngredientsCategory ({title, data, onIngredientClick}) {
  return (
    <>
      <h2 className={styles.title}>{title}</h2>
      <section className={styles.container} >
        {data.map((item) => (
          <Ingredient item={item} onIngredientClick={onIngredientClick} key={item._id} />
        ))}
      </section>
    </>
  );
};

IngredientsCategory.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(ingredientPropType.isRequired).isRequired,
  onIngredientClick: PropTypes.func.isRequired
}
