import React from "react";

import {ProfileIcon, BurgerIcon, ListIcon, Logo} from '@ya.praktikum/react-developer-burger-ui-components';
import '../../fonts/fonts.css';
import '../common.css';

import styles from './appHeader.module.css';

class AppHeader extends React.Component {
  render () {
    return (
      <div className={`${styles.header} text text_type_main-default`}>
        <ol className={styles.buttons}>
          <li className={styles.button}>
            <BurgerIcon type="primary" />
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

export default AppHeader;