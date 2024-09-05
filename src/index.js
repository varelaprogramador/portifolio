


// index.js
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Menu from './components/Menu/MenuManager';
import { LoaderProvider, useLoader } from './components/Loader/LoaderProvider';
import Loader from './components/Loader/Loader';
import Footer from './components/Footer/Footer';

// Component to handle global Loader display
function MainApp() {
  const { loading, showLoader, hideLoader } = useLoader();

  useEffect(() => {
    // Simula o início do carregamento
    showLoader();
    const timer = setTimeout(() => {
      hideLoader();
    }, 4000); // Exibe o loader por 3 segundos
    return () => clearTimeout(timer);
    
  }, []);

  return (
    <>
      {loading && <Loader />}
      <Menu />
      <App />
      <Footer />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <LoaderProvider>
      <MainApp />
    </LoaderProvider>
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
