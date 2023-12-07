import { screen, waitFor } from "@testing-library/react";
import bikesMocks from "../../mocks/bikesMock";
import BikeCard from "./BikeCard";
import { customRender } from "../../testsUtils/customRender";
import userEvent from "@testing-library/user-event";
import { server } from "../../mocks/node";
import handlersError from "../../mocks/handlersError";

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

  test("Then it should the positive feedback message 'Great! your Bike has been deleted!'", async () => {
    const expectedButtonText = "delete";
    const expectedMessage = "Great! your Bike has been deleted!";

    customRender(<BikeCard bike={bikesMocks[0]} />);

    const deleteButton = screen.getByRole("button", {
      name: expectedButtonText,
    });

    await userEvent.click(deleteButton);

    expect(screen.getByText(expectedMessage)).toBeInTheDocument();
  });

  test("Then it should show the negative feedback message 'Sorry, we couldn't delete your Bike!'", async () => {
    server.use(...handlersError);
    const expectedButtonText = "delete";
    const expectedErrorMessage = "Sorry, we couldn't delete your Bike!";

    customRender(<BikeCard bike={bikesMocks[0]} />);

    const deleteButton = screen.getByRole("button", {
      name: expectedButtonText,
    });

    await userEvent.click(deleteButton);

    await waitFor(() => {
      expect(screen.getByText(expectedErrorMessage)).toBeInTheDocument();
    });
  });
});
