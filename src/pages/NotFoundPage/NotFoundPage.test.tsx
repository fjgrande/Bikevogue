import { screen } from "@testing-library/react";
import { customRender } from "../../testsUtils/customRender";
import NotFoundPage from "./NotFoundPage";

describe("Given a NotFoundPage", () => {
  describe("When rendered", () => {
    test("It should show 'Not found...' in a heading", () => {
      const expectedHeadingText = "Not found...";

      customRender(<NotFoundPage />);

      const headingElement = screen.getByRole("heading", {
        name: expectedHeadingText,
      });

      expect(headingElement).toBeInTheDocument();
    });
  });
});
