import styles from "./app.module.css";

import AppHeader from "../app-header/app-header";
import Main from "../main/main";
import IngredientDetails from '../ingredient-details/ingredient-details';

import React, {useState, useEffect} from "react";
import OrderDetails from "../order-details/order-details";

function App() {
  const linkIngredients = 'https://norma.nomoreparties.space/api/ingredients';

  const [state, setState] = useState({
    ingredients: [], 
    loading: true
  });

  const [showIngredientDetails, setShowIngredientDetails] = useState(false);
  const [ingredient, setIngredient] = useState(null);

  const [showOrderDetails, setShowOrderDetails] = useState(false);

  function handleIngredientClick(_id) {
    setIngredient(state.ingredients.find(item => item['_id'] === _id));
    toggleShowIngredient();
  }

  function toggleShowIngredient() {
    setShowIngredientDetails(!showIngredientDetails);
  }

  const modalIngredientDetails = (
    <IngredientDetails ingredient={ingredient} show={showIngredientDetails} onCloseButtonClick={toggleShowIngredient} />
  );

  function handleOrderClick () {
    toggleOrderDetails();
  }

  function toggleOrderDetails() {
    setShowOrderDetails(!showOrderDetails);
  }

  const modalOrderDetails = (
    <OrderDetails orderNumber={'034536'} show={showOrderDetails} onCloseButtonClick={toggleOrderDetails} />
  )

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
    <div className={styles.app}>
      {showIngredientDetails && modalIngredientDetails}
      {showOrderDetails && modalOrderDetails}
      <AppHeader />
      <Main data={state.ingredients} onClickIngredient={handleIngredientClick} onClickOrder={handleOrderClick} />
    </div>
  );
}


export default App;
