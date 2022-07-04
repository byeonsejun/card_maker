import { HashRouter, Routes, Route } from "react-router-dom";
import styles from './app.module.css';
import Login from './components/login/login';
import Maker from './components/maker/maker';

function App({ FileInput, authService, cardRepository }) {
  return (
    <div className={styles.app}>
      <HashRouter basename={process.env.PUBLIC_URL} >
      <Routes>
        <Route path="/" element={<Login authService={authService} />} />
        <Route path="/maker" element={
          <Maker
            FileInput={FileInput} 
            authService={authService} 
            cardRepository={cardRepository}
          />
        } />
      </Routes>
    </HashRouter>
    </div>
  );
}

export default App;
