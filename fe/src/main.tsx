import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Provider from "./../node_modules/react-redux/src/components/Provider";
import App from "./App.tsx";
import { Providers } from "./provider.tsx";
import "@/styles/globals.css";
import { store } from "./store/store.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Providers>
          <App />
        </Providers>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
