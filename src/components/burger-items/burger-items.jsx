import PropTypes from 'prop-types';
import { ConstructorElement, DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './burger-items.module.css';
import { ingredientPropType } from '../../utils/prop-types';

function BurgerItems (props) {
  return (
  props.burgerItems.map((item) => {
    return (
      <section className={styles.item} key={item._id}>
        <DragIcon type="primary" />
        <ConstructorElement
          text={item.name}
          price={item.price}
          thumbnail={item.image_mobile}
        />
      </section>
    );
  })
  );
}

BurgerItems.propTypes = {
  burgerItems: PropTypes.arrayOf(ingredientPropType.isRequired).isRequired
}

export default BurgerItems;