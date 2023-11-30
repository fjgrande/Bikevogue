import { renderHook } from "@testing-library/react";
import bikesMocks from "../mocks/bikesMock";
import useBikesApi from "./useBikesApi";

describe("Given a useBikesApi hook", () => {
  describe("When it gets the information of bikes", () => {
    test("Then it should show the information of users", async () => {
      const expectedBikes = bikesMocks;

      const {
        result: {
          current: { getBikes },
        },
      } = renderHook(() => useBikesApi());

      const currentBikes = await getBikes();
      expect(currentBikes).toStrictEqual(expectedBikes);
    });
  });
});
