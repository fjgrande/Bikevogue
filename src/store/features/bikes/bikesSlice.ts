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
    deleteBike: (currentState, action: PayloadAction<string>) => ({
      ...currentState,
      bikes: currentState.bikes.filter((bike) => bike._id !== action.payload),
    }),
    addBikes: (
      currentState,
      action: PayloadAction<BikesStructure>,
    ): BikesStateStructure => ({
      ...currentState,
      bikes: [...currentState.bikes, action.payload],
    }),
  },
});

export const {
  loadBikes: loadBikesActionCreator,
  deleteBike: deleteBikeActionCreator,
  addBikes: addBikesActionCreator,
} = BikesSlice.actions;

export const bikesReducer = BikesSlice.reducer;
