import { Routes, Route, Link } from "react-router-dom";
import './assets/sass/main.scss';

import Home from './containers/Home'



function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
