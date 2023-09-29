import { data } from "../../utils/data";
import {CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components';

import styles from './cards.module.css';

function Cards ({chapter}) {
  return (
    data.map((item) => {
      return item.type === chapter ? 

      <section className={styles.card}>
        <img src={item.image} className={styles.illustration} alt='продукт'/>
        <section className={styles.price}>
          <span className='text text_type_digits-default'>{item.price}</span>
          <CurrencyIcon type="primary" /> 
        </section>
        <p className={`${styles.description} text text_type_main-default`}>{item.name}</p>
      </section>

      : null
    })
  );
};

export default Cards;