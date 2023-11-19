import styles from "./app.module.css";
import AppHeader from "../app-header/app-header";
import Main from "../main/main";
import React, {useState, useEffect} from "react";

export default function App() {
  const linkIngredients = 'https://norma.nomoreparties.space/api/ingredients';

  const [state, setState] = useState({
    ingredients: [], 
    loading: true
  });

  useEffect(() => {
    const getIngredients = async () => {
      try {
      setState({...state, loading: true});
      const res = await fetch(linkIngredients);
      const data = await res.json();
      setState({ ingredients: data["data"], loading: false });
      } catch(error) {console.log(error)}
    }
    getIngredients();
  }, []);

  return (
    <div id="react-modals" className={styles.app}>
      <AppHeader />
      <Main data={state.ingredients} />
    </div>
  );
}
