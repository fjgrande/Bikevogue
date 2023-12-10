import { addedBikeMock } from "../../../mocks/addedBikeMock";
import bikesMocks from "../../../mocks/bikesMock";
import {
  addBikesActionCreator,
  bikesReducer,
  deleteBikeActionCreator,
  loadBikesActionCreator,
  loadSelectedBikeActionCreator,
} from "./bikesSlice";
import { BikesStructure, BikesStateStructure } from "./types";

describe("Given a bikesReducer reducer", () => {
  describe("When it receives an empty bikes state and an action to loadBikes", () => {
    test("Then it should return a new state with the new bikes", () => {
      const currentEmptyState: BikesStructure[] = [];

      const currentBikesState: BikesStateStructure = {
        bikes: currentEmptyState,
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
      const initialState: BikesStateStructure = {
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
      };
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

    describe("When it receives a list of bikes, and the action to add a new bike", () => {
      test("Then it should return a list of bike with tne new bike", () => {
        const initialState: BikesStateStructure = {
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
        };

        const expectedNewBikesState: BikesStateStructure = {
          bikes: [...bikesMocks, addedBikeMock],
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
        };

        const addBikeAction = addBikesActionCreator(addedBikeMock);
        const newState: BikesStateStructure = bikesReducer(
          initialState,
          addBikeAction,
        );

        expect(newState).toStrictEqual(expectedNewBikesState);
      });
    });

    describe("When it receives and empty state of selected and load selected bike action with the bike 'Orbea Orca M31ETEAM 23'", () => {
      test("Then it should return the new state with the bike 'Orbea Orca M31ETEAM 23'", () => {
        const initialState: BikesStateStructure = {
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
        };

        const expectedNewState: BikesStateStructure = {
          bikes: bikesMocks,
          selectedBike: addedBikeMock,
        };

        const loadSelectedAction = loadSelectedBikeActionCreator(addedBikeMock);

        const newState: BikesStateStructure = bikesReducer(
          initialState,
          loadSelectedAction,
        );

        expect(newState).toStrictEqual(expectedNewState);
      });
    });
  });
});
