import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import "@fontsource/lexend";
import GlobalStyle from "./styles/GlobalStyle";
import mainTheme from "./styles/mainTheme";
import App from "./components/App/App";
import { Provider } from "react-redux";
import { store } from "./store";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider theme={mainTheme}>
          <GlobalStyle />
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
);
