import bikesMocks from "../../../mocks/bikesMock";
import { bikesReducer, loadBikesActionCreator } from "./bikesSlice";
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
});
