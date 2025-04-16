import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Provider from "./../node_modules/react-redux/src/components/Provider";
import App from "./App.tsx";
import "./input.css";
import { store } from "./store/stote.tsx";
import { HeroUIProvider } from "@heroui/react";
createRoot(document.getElementById("root")!).render(
  <HeroUIProvider>
    <BrowserRouter>
      <Provider store={store}>
        <StrictMode>
          <App />
        </StrictMode>
      </Provider>
    </BrowserRouter>
  </HeroUIProvider>
);
