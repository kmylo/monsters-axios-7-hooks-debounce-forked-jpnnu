import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import "axios-progress-bar/dist/nprogress.css";
//import bootstrap from "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./styles.scss";
import "axios-progress-bar/dist/nprogress.css";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);

/**
 * TODO
 *
 * -Task:
 * [ ] Testing (Jest & Enzyme)
 * [ ] add axios-progress-bar ( not working)
 * [ ] add pagination
 * [ ] add filtering

 *
 * DONE
 * [X] Handle errors try catch
 * [X] Hooks
 * [X] Custom Hooks
 * [X] Spread into FILES
 * [X] CSS Media-queries
 * [X] change to AXIOS
 * [X] chain idx parent-child
 * [X] img lazy loading
 */

if ("loading" in HTMLImageElement.prototype) {
  console.log("El navegador soporta `lazy-loading`...");
} else {
  console.log("`lazy-loading` no soportado...");
}

// https://carlosazaustre.es/lazy-loading-image
