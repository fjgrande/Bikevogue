import { renderHook } from "@testing-library/react";
import bikesMocks from "../mocks/bikesMock";
import useBikesApi from "./useBikesApi";
import { providerWrapper } from "../testsUtils/providerWrapper";

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

  describe("When it calls his deleteBike method with an hotel id", () => {
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
});
