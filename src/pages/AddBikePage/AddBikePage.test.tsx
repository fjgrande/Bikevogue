import { screen } from "@testing-library/react";
import { customRender } from "../../testsUtils/customRender";
import AddBikePage from "./AddBikePage";

describe("Given a AddBikePage", () => {
  describe("When it renders", () => {
    test("Then it should show a heading with 'add your favorite bikes'", () => {
      const headingText = "add your favorite bikes";

      customRender(<AddBikePage />);

      const heading = screen.getByRole("heading", {
        name: headingText,
      });

      expect(heading).toBeInTheDocument();
    });
  });

  describe("When it is rendered", () => {
    test("Then it should show the fields 'model', 'picture URL','brand',' modality','material', 'component', 'size (S,M,L, XL)', ' price (€)' ", () => {
      const labelsName = [
        "model",
        "picture URL",
        "brand",
        "modality",
        "material",
        "component",
        "size (S,M,L, XL)",
        "price (€)",
      ];

      customRender(<AddBikePage />);

      labelsName.forEach((labelName) => {
        const field = screen.getByLabelText(labelName);
        expect(field).toBeInTheDocument();
      });
    });

    test("Then it should show a button with the text 'create' inside", () => {
      const expectedTextButton = "create";

      customRender(<AddBikePage />);

      const button = screen.getByText(expectedTextButton);

      expect(button).toBeInTheDocument();
    });
  });
});
