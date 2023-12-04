import { screen } from "@testing-library/react";
import Navigation from "./Navigation";
import { customRender } from "../../testsUtils/customRender";

describe("Given a Navigation component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a 'home' link", () => {
      const expectedTextHome = "home";

      customRender(<Navigation />);

      const navigationLinkHome = screen.getByRole("link", {
        name: expectedTextHome,
      });

      expect(navigationLinkHome).toBeInTheDocument();
    });
  });
});
