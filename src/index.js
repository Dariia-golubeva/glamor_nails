import React from 'react';
import ReactDOM from 'react-dom/client';
import {ThemeProvider} from '@mui/material/styles';
import App from './App';
import {theme} from './theme';
import './index.css';
import { Helmet } from 'react-helmet';

const root = ReactDOM.createRoot(document.getElementById('root'));
const keywords = `маникюр, гель-лак, косметика, уход за ногтями`;
const description = `Купить в магазине GLAMOR. Мы предлагаем широкий выбор маникюрных товаров, гель-лаков и аксессуаров для вашего маникюра.`;
root.render(
  <React.StrictMode>
    <Helmet>
                <meta charSet="utf-8" />
                <meta name="description" content={description} />
                <meta name="keywords" content={keywords} />
            </Helmet>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
