import bikesMocks from "../../../mocks/bikesMock";
import {
  bikesReducer,
  deleteBikeActionCreator,
  loadBikesActionCreator,
} from "./bikesSlice";
import { BikesStructure, BikesStateStructure } from "./types";

describe("Given a loadBikes reducer", () => {
  describe("When it receives an empty bikes state and an action to load bikes", () => {
    test("Then it should return a new state with the new bikes", () => {
      const currentEmptyState: BikesStructure[] = [];

      const currentBikesState: BikesStateStructure = {
        bikes: currentEmptyState,
      };

      const loadBikesAction = loadBikesActionCreator(bikesMocks);

      const expectedNewBikesState: BikesStateStructure = {
        ...currentBikesState,
        bikes: bikesMocks,
      };

      const newState: BikesStateStructure = bikesReducer(
        currentBikesState,
        loadBikesAction,
      );

      expect(expectedNewBikesState).toStrictEqual(newState);
    });
  });

  describe("When it receives a list of bikes, a valid bike id and the action deleteBike", () => {
    test("Then it should return the list of bikes withou bike 'Orbea Orca M31ETEAM 23'", () => {
      const initialState: BikesStateStructure = { bikes: bikesMocks };
      const expectedDeleteBike = "Orbea Orca M31ETEAM 23";
      const expectedBikeId = "6564a20f803b820996b50a00";

      const currentBikesState = bikesReducer(
        initialState,
        deleteBikeActionCreator(expectedBikeId),
      );

      currentBikesState.bikes.forEach((bike) =>
        expect(bike).not.toHaveProperty("name", expectedDeleteBike),
      );
    });
  });
});
