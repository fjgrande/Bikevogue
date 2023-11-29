import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BikesStateStructure, BikesStructure } from "./types";

export const initialBikesState: BikesStateStructure = {
  bikes: [],
};

const BikesSlice = createSlice({
  name: "bikes",
  initialState: initialBikesState,
  reducers: {
    loadBikes: (
      currentState,
      action: PayloadAction<BikesStructure[]>,
    ): BikesStateStructure => ({
      ...currentState,
      bikes: action.payload,
    }),
  },
});

export const { loadBikes: loadBikesActionCreator } = BikesSlice.actions;

export const bikesReducer = BikesSlice.reducer;
