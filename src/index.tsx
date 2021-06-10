import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import App from './pages/app.page';
import 'antd/dist/antd.css';
import { useTheme } from './hooks/useTheme';

export const initApp = () => {
  ReactDOM.render(<App />, document.getElementById('root'));
};

initApp();
