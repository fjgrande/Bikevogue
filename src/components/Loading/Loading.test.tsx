import { screen } from "@testing-library/react";
import customRender from "../../testsUtils/customRender";
import Loading from "./Loading";

describe("Given a Loading component", () => {
  describe("When it receives the text 'Loading...'", () => {
    test("Then it should show 'Loading...'", () => {
      const expectedText = "Loading...";

      customRender(<Loading />);

      const text = screen.getByText(expectedText);

      expect(text).toBeInTheDocument();
    });
  });
});
