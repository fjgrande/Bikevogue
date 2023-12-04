import { screen } from "@testing-library/react";

import BikesList from "./BikesList";
import { customRender } from "../../testsUtils/customRender";

describe("Given a BikeList component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a list of bikes where, one of them, is'Orbea Orca M31ETEAM 23' model", () => {
      const expectedBikes = "Orbea Orca M31ETEAM 23";

      customRender(<BikesList />);

      const bikeModel = screen.getByRole("heading", {
        name: expectedBikes,
      });

      expect(bikeModel).toBeInTheDocument();
    });
  });
});
