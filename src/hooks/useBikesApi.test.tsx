import { renderHook } from "@testing-library/react";
import bikesMocks from "../mocks/bikesMock";
import useBikesApi from "./useBikesApi";
import { providerWrapper } from "../testsUtils/providerWrapper";
import { addedBikeMock, createdBikeMock } from "../mocks/addedBikeMock";
import { server } from "../mocks/node";
import handlersError from "../mocks/handlersError";

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

      expect(currentBikes).toStrictEqual(expectedBikes);
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

  describe("When it calls its addBike function with a 'Super Orbea' and the response error", () => {
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
});
