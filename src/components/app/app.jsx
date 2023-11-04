import styles from "./app.module.css";

import AppHeader from "../app-header/app-header";
import Menu from "../menu/menu";

function App() {
  return (
    <div className={styles.app}>
      <AppHeader />
      <Menu />
    </div>
  );
}

export default App;
