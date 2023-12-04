import { screen } from "@testing-library/react";
import Loading from "./Loading";
import { customRender } from "../../testsUtils/customRender";

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
