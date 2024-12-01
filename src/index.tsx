import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import AppRoutes from './routes';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './i18n';

const addGoogleFonts = () => {
  const head = document.head;

  const montserratLink = document.createElement('link');
  montserratLink.href = 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap';
  montserratLink.rel = 'stylesheet';

  const latoLink = document.createElement('link');
  latoLink.href = 'https://fonts.googleapis.com/css2?family=Lato:wght@400;500;600;700&display=swap';
  latoLink.rel = 'stylesheet';

  head.appendChild(montserratLink);
  head.appendChild(latoLink);
};

addGoogleFonts();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <AppRoutes />
  </React.StrictMode>
);
