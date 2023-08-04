import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./assets/font/iCiel_Koni/iCiel Koni Ornament Black.otf";
import "./assets/font/iCiel_Koni/iCiel Koni.otf";
import "./assets/font/Montserrat/Montserrat-Black.ttf";
import "./assets/font/Montserrat/Montserrat-BlackItalic.ttf";
import "./assets/font/Montserrat/Montserrat-Bold.ttf";
import "./assets/font/Montserrat/Montserrat-BoldItalic.ttf";
import "./assets/font/Montserrat/Montserrat-ExtraBold.ttf";
import "./assets/font/Montserrat/Montserrat-ExtraBoldItalic.ttf";
import "./assets/font/Montserrat/Montserrat-ExtraLight.ttf";
import "./assets/font/Montserrat/Montserrat-ExtraLightItalic.ttf";
import "./assets/font/Montserrat/Montserrat-Italic.ttf";
import "./assets/font/Montserrat/Montserrat-Light.ttf";
import "./assets/font/Montserrat/Montserrat-LightItalic.ttf";
import "./assets/font/Montserrat/Montserrat-Medium.ttf";
import "./assets/font/Montserrat/Montserrat-MediumItalic.ttf";
import "./assets/font/Montserrat/Montserrat-Regular.ttf";
import "./assets/font/Montserrat/Montserrat-SemiBold.ttf";
import "./assets/font/Montserrat/Montserrat-SemiBoldItalic.ttf";
import "./assets/font/Montserrat/Montserrat-Thin.ttf";
import "./assets/font/Montserrat/Montserrat-ThinItalic.ttf";
import "./assets/font/Montserrat/Montserrat-VariableFont_wght.ttf";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./core/store/store";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
