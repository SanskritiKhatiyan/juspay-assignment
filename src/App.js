import './theme.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import {OrderList} from "./layouts/OrderList/OrderList"
import { ThemeProvider, useTheme } from './themeContext';
import ThemeToggle from './themeToggle';
import { useEffect } from 'react';
import { HomePage } from './layouts/HomePage/HomePage';

const ThemedComponent = () => {
  const { theme } = useTheme();

  useEffect(() => {
    document.body.className = theme; // Dynamically change body class based on the theme
  }, [theme]);

  return (
    <div>
      <ThemeToggle />
    </div>
  );
};

function App() {

  return (
    <ThemeProvider> {/* ThemeProvider should wrap the entire app */}
    <div className="App">
      {/* ThemedComponent to show the current theme */}
      <ThemedComponent />
      
      {/* Router Component */}
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
