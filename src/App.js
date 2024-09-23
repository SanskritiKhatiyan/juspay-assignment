import './theme.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import {OrderList} from "./layouts/OrderList/OrderList"
import { ThemeProvider } from './themeContext';

import { HomePage } from './layouts/HomePage/HomePage';

function App() {

  return (
    <ThemeProvider> 
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/order-list" element={<OrderList />} />
        </Routes>
      </Router>
    </div>
  </ThemeProvider>
  );
}

export default App;
