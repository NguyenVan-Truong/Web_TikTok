import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import "@mantine/notifications/styles.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Provider from "./../node_modules/react-redux/src/components/Provider";
import App from "./App.tsx";
import { Providers } from "./provider.tsx";
import "@/styles/globals.css";
import { store } from "./store/store.tsx";
import { Button, createTheme, MantineProvider, rem } from "@mantine/core";
import { ModalsProvider } from "@mantine/modals";
import { Notifications } from "@mantine/notifications";

const theme = createTheme({
  fontSizes: {
    xs: rem(10),
    sm: rem(12),
    md: rem(14),
    lg: rem(16),
    xl: rem(20),
  },
  lineHeights: {
    xs: "1.4",
    sm: "1.45",
    md: "1.55",
    lg: "1.6",
    xl: "1.65",
  },
  components: {
    Button: Button.extend({
      defaultProps: {
        color: "cyan",
        variant: "outline",
        //  size: "xs",
      },
    }),
  },
});
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <MantineProvider theme={theme}>
          <Notifications />
          <ModalsProvider>
            <Providers>
              <App />
            </Providers>
          </ModalsProvider>
        </MantineProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
