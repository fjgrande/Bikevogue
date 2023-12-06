import { screen } from "@testing-library/react";
import { customRender } from "../../testsUtils/customRender";
import AddBikePage from "./AddBikePage";

describe("Given a AddBikePage", () => {
  describe("When it renders", () => {
    test("Then it should show a heading with 'add your favorite bikes'", () => {
      const headingText = "add your favorite bikes";

      customRender(<AddBikePage />);

      const heading = screen.getByRole("heading", {
        name: headingText,
      });

      expect(heading).toBeInTheDocument();
    });
  });
});
