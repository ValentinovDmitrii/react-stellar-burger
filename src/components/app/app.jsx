import styles from "./app.module.css";
import AppHeader from "../app-header/app-header";
import Main from "../main/main";
import React, { useEffect} from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getIngredients } from '../../services/reducers/ingredients';

export default function App() {
  const dispatch = useDispatch();

  const { loadRequest, failedRequest, ingredients } = useSelector(state => state.ingredients);

  useEffect(() => {
    dispatch(getIngredients());
  }, [dispatch]);

  if (loadRequest ) {return(<p>Загрузка данных...</p>)} 
  if (failedRequest) {return(<p>Не удалось получить данные!!!</p>)} 
  if (!ingredients) {return(<p>Нет данных!!!</p>)} 
  return (
    <div id="react-modals" className={styles.app}>
      <AppHeader />
      <Main />
    </div>
  );
}
