import { screen } from "@testing-library/react";
import bikesMocks from "../../mocks/bikesMock";
import customRender from "../../testsUtils/customRender";
import BikesList from "./BikesList";

describe("Given a BikeList component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a list of bikes where, one of them, is'Orbea Orca M31ETEAM 23' model", () => {
      const expectedBikes = bikesMocks[0].model;

      customRender(<BikesList bikes={bikesMocks} />);

      const bikeModel = screen.getByText(expectedBikes);

      expect(bikeModel).toBeInTheDocument();
    });
  });
});
