// ThemeToggle.js
import React from 'react';
import { useTheme } from './themeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button className="toggle-btn" onClick={toggleTheme}>
       {theme === 'light' ? 'Dark' : 'Light'} 
    </button>
  );
};

export default ThemeToggle;
