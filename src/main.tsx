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
    <BrowserRouter>
      <ThemeProvider theme={mainTheme}>
        <Provider store={store}>
          <GlobalStyle />
          <App />
        </Provider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
