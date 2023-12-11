import { configureStore } from "@reduxjs/toolkit";
import { bikesReducer } from "../store/features/bikes/bikesSlice";
import { uiReducer } from "../store/features/ui/uiSlice";
import bikesMocks from "../mocks/bikesMock";
import { Provider } from "react-redux";
import { PropsWithChildren } from "react";
import { store } from "../store";

export const getMockStore = () => {
  const mockStore = configureStore({
    reducer: { bikesState: bikesReducer, uiState: uiReducer },
    preloadedState: {
      bikesState: {
        bikes: bikesMocks,
        selectedBike: {
          model: "",
          image: "",
          brand: "",
          modality: "",
          material: "",
          component: "",
          size: "",
          price: 0,
          _id: "",
        },
      },
      uiState: { isLoading: false },
    },
  });

  return mockStore;
};

export const providerWrapper = ({ children }: PropsWithChildren) => {
  return <Provider store={store}>{children}</Provider>;
};
