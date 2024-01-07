import {ProfileIcon, BurgerIcon, ListIcon, Logo} from '@ya.praktikum/react-developer-burger-ui-components';
import '../../fonts/fonts.css';
import '../common.css';

import styles from './app-header.module.css';

function AppHeader () {
  return (
    <h1 className={styles.header}>
      <section className={styles.buttons}>
        <a href='index.html' className={styles.button}>
          <BurgerIcon type="primary" />
          <span className={styles.button_active}>Конструктор</span>
        </a>
        <a href='index.html' className={styles.button}>
          <ListIcon type="secondary"/>
          <span >Лента заказов</span>
        </a> 
      </section>
      <Logo />
      <a href='index.html' className={styles.button}>
        <ProfileIcon type="secondary"/>
        <span >Личный кабинет</span>
      </a>
    </h1>
  );
}

export default AppHeader;