import { screen } from "@testing-library/react";
import customRender from "../../testsUtils/customRender";
import HomePage from "./HomePage";

describe("Given a Home Page", () => {
  describe("When it renders", () => {
    test("Then it should show a heading with 'your favorite bikes'", () => {
      const headingText = "your favorite bikes";

      customRender(<HomePage />);

      const heading = screen.getByRole("heading", {
        name: headingText,
      });

      expect(heading).toBeInTheDocument();
    });
  });
});
