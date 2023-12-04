import { UiStructure } from "./types";
import {
  hideErrorActionCreator,
  hideLoadingActionCreator,
  showErrorActionCreator,
  showLoadingActionCreator,
  uiReducer,
} from "./uiSlice";

describe("Given a uiReducer", () => {
  describe("When it receives an initial state of false and action creator of showLoading", () => {
    test("Then it should return the new state with true", () => {
      const initialState: UiStructure = { isLoading: false };

      const newUiState = uiReducer(initialState, showLoadingActionCreator());

      expect(newUiState.isLoading).toBeTruthy();
    });
  });

  describe("When it receives an initial state of true and an action creator of hideLoading", () => {
    test("Then it should return the new state with false", () => {
      const initialState: UiStructure = { isLoading: true };

      const newUiState = uiReducer(initialState, hideLoadingActionCreator());

      expect(newUiState.isLoading).toBeFalsy();
    });
  });
  describe("When it receives an initial state of false and an action creator of showError", () => {
    test("Then it should return the new state with true", () => {
      const initialState: UiStructure = { isError: false };

      const newUiState = uiReducer(initialState, showErrorActionCreator());

      expect(newUiState.isError).toBeTruthy();
    });
  });
  describe("When it receives an initial state of true and an action creator of hideError", () => {
    test("Then it should return the new state with false", () => {
      const initialState: UiStructure = { isError: true };

      const newUiState = uiReducer(initialState, hideErrorActionCreator);

      expect(newUiState.isError).toBeFalsy();
    });
  });
});
