import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import mainTheme from "../styles/mainTheme";
import { BrowserRouter } from "react-router-dom";
import { render } from "@testing-library/react";
import { ToastContainer } from "react-toastify";
import GlobalStyle from "../styles/GlobalStyle";
import { getMockStore } from "./providerWrapper";

export const customRender = (children: React.ReactElement) => {
  const mockStore = getMockStore();

  render(
    <BrowserRouter>
      <ThemeProvider theme={mainTheme}>
        <ToastContainer />
        <GlobalStyle />
        <Provider store={mockStore}>{children}</Provider>
      </ThemeProvider>
    </BrowserRouter>,
  );
};

export const customRenderWithoutBrowserRouter = (
  children: React.ReactElement,
) => {
  const mockstore = getMockStore();

  render(
    <ThemeProvider theme={mainTheme}>
      <GlobalStyle />
      <Provider store={mockstore}>{children}</Provider>
    </ThemeProvider>,
  );
};
