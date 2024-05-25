import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import "./index.css";
import { store } from './app/store'

import { ThemProvider } from "./context/ThemeProvider";
import MainRoutes from "./routes";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemProvider>
        <Provider store={store}>
          <BrowserRouter>
            <MainRoutes />
          </BrowserRouter>
        </Provider>
    </ThemProvider>
  </React.StrictMode>
);
