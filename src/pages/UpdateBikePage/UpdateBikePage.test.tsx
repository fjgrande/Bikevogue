import { customRender } from "../../testsUtils/customRender";
import { screen } from "@testing-library/react";
import UpdateBikePage from "./UpdateBikePage";

describe("Given an UpdateBikePage", () => {
  describe("When it is rendered", () => {
    test("Then it a should show a title with the text 'modify your bike'", () => {
      const expectedTitle = "modify your bike";

      customRender(<UpdateBikePage />);

      const title = screen.getByRole("heading", { name: expectedTitle });

      expect(title).toBeInTheDocument();
    });
  });
});
