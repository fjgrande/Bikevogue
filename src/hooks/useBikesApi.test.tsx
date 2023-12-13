import { renderHook } from "@testing-library/react";
import bikesMocks from "../mocks/bikesMock";
import useBikesApi from "./useBikesApi";
import { providerWrapper } from "../testsUtils/providerWrapper";
import {
  addedBikeMock,
  createdBikeMock,
  updateBikeMock,
} from "../mocks/addedBikeMock";
import { server } from "../mocks/node";
import handlersError from "../mocks/handlersError";
import handlers from "../mocks/handler";

describe("Given a useBikesApi hook", () => {
  describe("When it gets the information of bikes", () => {
    test("Then it should show the information of users", async () => {
      const expectedBikes = bikesMocks;

      const {
        result: {
          current: { getBikes },
        },
      } = renderHook(() => useBikesApi(), { wrapper: providerWrapper });

      const currentBikes = await getBikes();

      expect(currentBikes).toStrictEqual({ bikes: expectedBikes });
    });
  });

  describe("When it calls his deleteBike function with an bike id", () => {
    test("Then it should delete the 'Orbea Orca M31ETEAM 23' bike", async () => {
      const expectedBikeId = bikesMocks[0]._id;
      const expectedResponse = {};

      const {
        result: {
          current: { deleteBike },
        },
      } = renderHook(() => useBikesApi(), { wrapper: providerWrapper });

      const response = await deleteBike(expectedBikeId);

      expect(response).toStrictEqual(expectedResponse);
    });
  });

  describe("When it calls the addBike function with the data of the bike 'Super Orbea'", () => {
    test("Then it should return the bike 'Super Orbea'", async () => {
      const expectedNewBike = createdBikeMock;
      const expectedBike = addedBikeMock;

      const {
        result: {
          current: { addBike },
        },
      } = renderHook(() => useBikesApi(), { wrapper: providerWrapper });

      const newBike = await addBike(expectedNewBike);

      expect(newBike).toStrictEqual(expectedBike);
    });
  });

  describe("When it calls its addBike function with a 'Super Orbea' and the response undefined or error", () => {
    test("Then it should show a 'Sorry, we couldn't create your Bike!' message on a Toastify", async () => {
      server.use(...handlersError);
      const expectedNewBike = createdBikeMock;

      const {
        result: {
          current: { addBike },
        },
      } = renderHook(() => useBikesApi(), { wrapper: providerWrapper });

      const newBike = await addBike(expectedNewBike);

      expect(newBike).toBeUndefined();
    });
  });

  describe("When it calls the getMyBike function with a valid bike id", () => {
    test("Then it should return the bike that corresponds to that id", async () => {
      server.use(...handlers);
      const idBike = addedBikeMock._id;
      const expectedBike = addedBikeMock;

      const {
        result: {
          current: { getMyBike },
        },
      } = renderHook(() => useBikesApi(), { wrapper: providerWrapper });

      const myBike = await getMyBike(idBike);

      expect(myBike).toStrictEqual(expectedBike);
    });
  });

  describe("When it calls its getMYbike function with invalid id and the response undefined or error", () => {
    test("Then it should show a 'Can't show this bike now!' message on a Toastify", async () => {
      server.use(...handlersError);
      const idBike = addedBikeMock._id;

      const {
        result: {
          current: { getMyBike },
        },
      } = renderHook(() => useBikesApi(), { wrapper: providerWrapper });

      const newBike = await getMyBike(idBike);

      expect(newBike).toBeUndefined();
    });
  });

  describe("When it calls the editBike function with the data of the bike 'Super Orbea'", () => {
    test("Then it should return the bike 'Super Orbea' modified", async () => {
      server.use(...handlers);
      const expectedNewBike = updateBikeMock;
      const expectedBike = addedBikeMock;

      const {
        result: {
          current: { editBike },
        },
      } = renderHook(() => useBikesApi(), { wrapper: providerWrapper });

      const bikeData = await editBike(expectedNewBike);

      expect(bikeData).toStrictEqual(expectedBike);
    });
  });

  describe("When it calls its editBike function with invalid id and the response undefined or error", () => {
    test("Then it should show a 'Sorry, we couldn't modified your Bike!' message on a Toastify", async () => {
      server.use(...handlersError);
      const expectedNewBike = updateBikeMock;

      const {
        result: {
          current: { editBike },
        },
      } = renderHook(() => useBikesApi(), { wrapper: providerWrapper });

      const newBike = await editBike(expectedNewBike);

      expect(newBike).toBeUndefined();
    });
  });
});
