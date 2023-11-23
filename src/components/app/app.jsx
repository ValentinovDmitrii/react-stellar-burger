import styles from "./app.module.css";
import AppHeader from "../app-header/app-header";
import Main from "../main/main";
import React, {useState, useEffect} from "react";
import { getIngredients } from '../../utils/burger-api';

export default function App() {
  const [state, setState] = useState({
    ingredients: [], 
    loading: true
  });

  useEffect(() => {
    (async () => {
      const data = await getIngredients();
      setState({ ingredients: data, loading: false });
    })();
  }, []);

  if (state.loading || !state.ingredients) {return(<p>Загрузка данных...</p>)} else { 
  return (
    <div id="react-modals" className={styles.app}>
      <AppHeader />
      <Main data={state.ingredients} />
    </div>
  );}
}
