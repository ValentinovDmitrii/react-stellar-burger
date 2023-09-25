import React from "react";

import styles from './burgerIngredients.module.css';

class BurgerIngredients extends React.Component {
  render () {
    return (
      <div className={`${styles.header} text text_type_main-default`}>
        <ol className={styles.buttons}>
          <li className={styles.button}>
            <BurgerIcon type="secondary" />
            <span className={styles.buttonText}>Конструктор</span>
          </li>
          <li className={styles.button}>
            <ListIcon type="secondary"/>
            <span className={styles.buttonText}>Лента заказов</span>
          </li> 
        </ol>
        <Logo />
        <span className={styles.button}>
          <ProfileIcon type="secondary"/>
          <span className={styles.buttonText}>Личный кабинет</span>
        </span>
      </div>
    );
  };
}

export default BurgerIngredients;