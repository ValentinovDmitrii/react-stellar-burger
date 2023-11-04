import PropTypes from 'prop-types';
import { ingredientPropType } from '../../utils/prop-types';

import {CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components';

import styles from './cards.module.css';

function Cards (props) {
  return (
    props.data.map((item) => (
      <section className={styles.card} key={item._id}>
        <img src={item.image} className={styles.illustration} alt='продукт'/>
        <section className={styles.price}>
          <span className='text text_type_digits-default'>{item.price}</span>
          <CurrencyIcon type="primary" /> 
        </section>
        <p className={`${styles.description} text text_type_main-default`}>{item.name}</p>
      </section>
    ))
  );
};

Cards.propTypes = {
  data: PropTypes.arrayOf(ingredientPropType.isRequired).isRequired
}

export default Cards;