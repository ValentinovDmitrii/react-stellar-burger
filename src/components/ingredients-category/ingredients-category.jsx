import PropTypes from 'prop-types';
import { ingredientPropType } from '../../utils/prop-types';

import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

import styles from './ingredients-category.module.css';

function IngredientsCategory (props) {
  return (
    <>
    <h2 className={styles.title}>{props.title}</h2>
    <section className={styles.container}>
      {props.data.map((item) => (
        <section className={styles.category} key={item._id} onClick={() => props.handleClick(item._id)}>
          <img src={item.image} className={styles.illustration} alt='продукт'/>
          <section className={styles.price}>
            <span>{item.price}</span>
            <CurrencyIcon type="primary" /> 
          </section>
          <p className={`${styles.description}`}>{item.name}</p>
        </section>
      ))}
    </section>
    </>
  );
};

IngredientsCategory.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(ingredientPropType.isRequired).isRequired
}

export default IngredientsCategory;