import { screen } from "@testing-library/react";
import customRender from "../../testsUtils/customRender";
import App from "./App";

describe("Given an App component", () => {
  describe("When it rendered", () => {
    test("Then it should show a bikevogue logo", () => {
      const expectedAltText = "Bike logo";

      customRender(<App />);

      const headerLogo = screen.getByAltText(expectedAltText);

      expect(headerLogo).toBeInTheDocument();
    });

    test("Then it should show a 'home' link", () => {
      const expectedTitle = "home";

      customRender(<App />);

      const navigationLinkHome = screen.getByRole("link", {
        name: expectedTitle,
      });

      expect(navigationLinkHome).toBeInTheDocument();
    });
  });
});
