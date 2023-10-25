import PropTypes from 'prop-types';

import { ConstructorElement, DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";

import styles from './burgerItems.module.css';

function BurgerItems (props) {
    const children = props.children;
    return (
        children.map((item) => {
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
    children: PropTypes.array
}

export default BurgerItems;