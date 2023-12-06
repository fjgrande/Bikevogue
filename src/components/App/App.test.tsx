import { screen } from "@testing-library/react";
import App from "./App";
import {
  customRender,
  customRenderWithoutBrowserRouter,
} from "../../testsUtils/customRender";
import { MemoryRouter } from "react-router-dom";

describe("Given an App component", () => {
  describe("When it rendered", () => {
    test("Then it should show a bikevogue logo", () => {
      const expectedAltText = "Bike logo";

      customRender(<App />);

      const headerLogo = screen.getByAltText(expectedAltText);

      expect(headerLogo).toBeInTheDocument();
    });

    describe("When it is rendered with a HomePage path", () => {
      test("Then it should show the text 'your favorite bikes' in a heading", () => {
        const expectedHeadingText = "your favorite bikes";

        customRenderWithoutBrowserRouter(
          <MemoryRouter initialEntries={["/home"]}>
            <App />
          </MemoryRouter>,
        );

        const heading = screen.getByRole("heading", {
          name: expectedHeadingText,
        });

        expect(heading).toBeInTheDocument();
      });
    });

    describe("When it is rendered", () => {
      test("Then it should show a 'home' link", () => {
        const expectedTitle = "home";

        customRender(<App />);

        const navigationLinkHome = screen.getByRole("link", {
          name: expectedTitle,
        });

        expect(navigationLinkHome).toBeInTheDocument();
      });
    });

    describe("When it is rendered", () => {
      test("Then it should show a 'add' link", () => {
        const expecteTextAdd = "add";

        customRender(<App />);

        const navigationLinkAdd = screen.getByRole("link", {
          name: expecteTextAdd,
        });

        expect(navigationLinkAdd).toBeInTheDocument();
      });
    });

    describe("When it is rendered with an invalid path", () => {
      test("Then it should the text 'Not found...'", () => {
        const expectedText = "Not found...";

        customRenderWithoutBrowserRouter(
          <MemoryRouter initialEntries={["/error"]}>
            <App />
          </MemoryRouter>,
        );

        const notFoundPage = screen.getByText(expectedText);

        expect(notFoundPage).toBeInTheDocument();
      });
    });
  });
});
