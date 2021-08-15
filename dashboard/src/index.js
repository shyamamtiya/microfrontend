import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

const mount = (el) => {
  ReactDOM.render(<App />, el);
};

if (process.env.NODE_ENV == "development") {
  let rootEl = document.getElementById("__dashboard-root-to-runin-isolation"); //make it unique from container app,otherwise it will create issye
  if (rootEl) {
    mount(rootEl);
  }
}

export { mount };
