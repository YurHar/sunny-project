import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import "./index.css";

import Routes from "./routes";
import { ThemProvider } from "./context/ThemeProvider";
import store from "./app/store";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemProvider>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </ThemProvider>
    </Provider>
  </React.StrictMode>
);
