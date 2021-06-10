import React, { useEffect } from 'react';
import './app.less';
import AppRouter from '../router/index';
import { useTheme } from '../hooks/useTheme';

function App() {
  // useEffect(() => {
  const { theme, setGlobalTheme } = useTheme();
  useEffect(() => {
    setGlobalTheme(theme);
  }, []);
  // }, []);
  return (
    <div className="app-container">
      <AppRouter />
    </div>
  );
}

export default App;
