import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { useDrag, useDrop } from "react-dnd";
import { DragIcon, ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './burger-constructor-item.module.css';
import { DEL_ITEM, MOVE_ITEM } from "../../services/actions/burger";

export default function BurgerConstructorItem ({ item, index }) {
  const dispatch = useDispatch();
  const ref = useRef(null);
  const { __key } = item;
  const handleDeleteItem = (item) => {
    dispatch({
      type: DEL_ITEM,
      item: item
    });  
  };

  const [{handlerId}, dropToMove] = useDrop({
    accept: "sorting",
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      }
    },
    hover(item, monitor) {
      if (!ref.current) {
        return
      };
      const dragIndex = item.index;
      const hoverIndex = index;
      if (dragIndex === hoverIndex) {
        return
      };
      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return
      };
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return
      };
      dispatch({
        type: MOVE_ITEM,
        payload: {dragIndex, hoverIndex}
      });
      item.index = hoverIndex;
    },
  })

  const [{ isDrag }, dragToMove] = useDrag({
    type: "sorting",
    item: () => {return({__key, index})},
    collect: (monitor) => ({
      isDrag: monitor.isDragging(),
    })
  });  

  const opacity = isDrag ? 0 : 1;
  dragToMove(dropToMove(ref));

  return (
    <section ref={ref} className={styles.item} style={{opacity}} data-handler-id={handlerId} draggable='true'>
      <DragIcon type="primary" />
      <ConstructorElement
        text={item.name}
        price={item.price}
        thumbnail={item.image_mobile}
        handleClose={() => handleDeleteItem(item)}
      />
    </section>
    )
}