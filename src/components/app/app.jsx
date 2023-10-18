import styles from "./app.module.css";

import AppHeader from "../appHeader/appHeader";
import Menu from "../menu/menu";

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
