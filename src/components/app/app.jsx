import styles from "./app.module.css";
import { data } from "../../utils/data";

import AppHeader from "../appHeader/appHeader";
import Menu from "../menu/menu";

import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';

function App() {
  return (
    <div className={styles.app}>
      <pre style={{
      	margin: "auto",
      	fontSize: "1.5rem"
      }}>
        <>
      	  <AppHeader />
          <Menu />
        </>
      </pre>
    </div>
  );
}

export default App;
