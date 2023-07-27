import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './font/iCiel_Koni/iCiel Koni Ornament Black.otf';
import './font/iCiel_Koni/iCiel Koni.otf';
import './font/Montserrat/Montserrat-Black.ttf';
import './font/Montserrat/Montserrat-BlackItalic.ttf';
import './font/Montserrat/Montserrat-Bold.ttf';
import './font/Montserrat/Montserrat-BoldItalic.ttf';
import './font/Montserrat/Montserrat-ExtraBold.ttf';
import './font/Montserrat/Montserrat-ExtraBoldItalic.ttf';
import './font/Montserrat/Montserrat-ExtraLight.ttf';
import './font/Montserrat/Montserrat-ExtraLightItalic.ttf';
import './font/Montserrat/Montserrat-Italic.ttf';
import './font/Montserrat/Montserrat-Light.ttf';
import './font/Montserrat/Montserrat-LightItalic.ttf';
import './font/Montserrat/Montserrat-Medium.ttf';
import './font/Montserrat/Montserrat-MediumItalic.ttf';
import './font/Montserrat/Montserrat-Regular.ttf';
import './font/Montserrat/Montserrat-SemiBold.ttf';
import './font/Montserrat/Montserrat-SemiBoldItalic.ttf';
import './font/Montserrat/Montserrat-Thin.ttf';
import './font/Montserrat/Montserrat-ThinItalic.ttf';
import './font/Montserrat/Montserrat-VariableFont_wght.ttf';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
