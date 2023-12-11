import { screen } from "@testing-library/react";
import { customRender } from "../../testsUtils/customRender";
import BikeDetailPage from "./BikeDetailPage";

describe("Given a BikeDetailPage component", () => {
  describe("When it is rendered", () => {
    test("Then it should show the title 'bike details'", () => {
      const expectedTitle = "bike details";

      customRender(<BikeDetailPage />);

      const title = screen.getByRole("heading", { name: expectedTitle });

      expect(title).toBeInTheDocument();
    });
  });
});
