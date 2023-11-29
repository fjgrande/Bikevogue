import { BrowserRouter } from "react-router-dom";
import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import mainTheme from "../styles/mainTheme";
import { configureStore } from "@reduxjs/toolkit";
import { bikesReducer } from "../store/features/bikes/bikesSlice";
import bikesMocks from "../mocks/bikesMock";
import { Provider } from "react-redux";

const customRender = (children: React.ReactElement) => {
  const mockStore = configureStore({
    reducer: { bikesState: bikesReducer },
    preloadedState: { bikesState: { bikes: bikesMocks } },
  });

  return render(
    <BrowserRouter>
      <ThemeProvider theme={mainTheme}>
        <Provider store={mockStore}>{children}</Provider>
      </ThemeProvider>
    </BrowserRouter>,
  );
};

export default customRender;
