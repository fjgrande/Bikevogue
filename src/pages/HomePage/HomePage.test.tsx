import { screen } from "@testing-library/react";

import HomePage from "./HomePage";
import { customRender } from "../../testsUtils/customRender";

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
