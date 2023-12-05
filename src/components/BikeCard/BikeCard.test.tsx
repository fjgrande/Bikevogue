import { screen, waitFor } from "@testing-library/react";
import bikesMocks from "../../mocks/bikesMock";
import BikeCard from "./BikeCard";
import { customRender } from "../../testsUtils/customRender";
import userEvent from "@testing-library/user-event";

describe("Given a BikeCard component", () => {
  describe("When it receives the bike 'Orbea Orca M30 24'", () => {
    test("Then it should show the information that its brand 'Orbea'", () => {
      const expectedBrand = bikesMocks[1].brand;

      customRender(<BikeCard bike={bikesMocks[1]} />);

      const bikeBrand = screen.getByText(expectedBrand);

      expect(bikeBrand).toBeInTheDocument();
    });

    test("Then it should show a button with the text 'delete'", () => {
      const expectedButtonText = "delete";

      customRender(<BikeCard bike={bikesMocks[0]} />);

      const button = screen.getByText(expectedButtonText);

      expect(button).toBeInTheDocument();
    });

    test("Then it should show a button with the text 'modify'", () => {
      const expectedButtonText = "modify";

      customRender(<BikeCard bike={bikesMocks[0]} />);

      const button = screen.getByText(expectedButtonText);

      expect(button).toBeInTheDocument();
    });
  });

  describe("When it receives a click on the delete button of 'Orbea Orca M31ETEAM 23' ", () => {
    test("then it should not show the 'Orbea Orca M31ETEAM 23'", async () => {
      const expectedButtonText = "delete";
      const expectedBikeName = "Orbea Orca M31ETEAM 23";

      customRender(<BikeCard bike={bikesMocks[0]} />);

      const button = screen.getByRole("button", { name: expectedButtonText });
      const heading = screen.getByRole("heading", { name: expectedBikeName });

      await userEvent.click(button);

      waitFor(() => {
        expect(heading).not.toBeInTheDocument();
      });
    });
  });
});
