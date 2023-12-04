import { screen } from "@testing-library/react";
import Header from "./Header";
import { customRender } from "../../testsUtils/customRender";

describe("Given a Header component", () => {
  describe("When it renders", () => {
    test("Then it should show a bikevogue logo", () => {
      const expectedAltText = "Bike logo";

      customRender(<Header />);

      const headerLogo = screen.getByAltText(expectedAltText);

      expect(headerLogo).toBeInTheDocument();
    });
  });
});
