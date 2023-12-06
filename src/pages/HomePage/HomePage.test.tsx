import { screen, waitFor } from "@testing-library/react";

import HomePage from "./HomePage";
import { customRender } from "../../testsUtils/customRender";
import { server } from "../../mocks/node";
import handlersError from "../../mocks/handlersError";

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

  describe("When HomePage it is render but there is a error in loading", () => {
    test("Then it should call toastify with message 'Sorry, Can't get bikes'", async () => {
      const expectedTextError = "Sorry, Can't get bikes";
      server.use(...handlersError);

      customRender(<HomePage />);

      await waitFor(() => {
        expect(screen.getByText(expectedTextError)).toBeInTheDocument();
      });
    });
  });
});
