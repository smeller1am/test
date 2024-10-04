import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.scss';
import Layout from "./components/layout";


const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <Layout />
  </React.StrictMode>
);

