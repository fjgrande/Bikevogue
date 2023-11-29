import { screen } from "@testing-library/react";
import bikesMocks from "../../mocks/bikesMock";
import customRender from "../../testsUtils/customRender";
import BikeCard from "./BikeCard";

describe("Given a BikeCard component", () => {
  describe("When it receives the bike 'Orbea Orca M30 24'", () => {
    test("Then it should show the information that its brand 'Orbea'", () => {
      const expectedBrand = bikesMocks[1].brand;

      customRender(<BikeCard bike={bikesMocks[1]} />);

      const bikeBrand = screen.getByText(expectedBrand);

      expect(bikeBrand).toBeInTheDocument();
    });
  });
});
