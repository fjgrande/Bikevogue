import { screen } from "@testing-library/react";
import { customRender } from "../../testsUtils/customRender";
import BikeForm from "./BikeForm";

describe("Given a Form component", () => {
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

      customRender(<BikeForm />);

      labelsName.forEach((labelName) => {
        const field = screen.getByLabelText(labelName);
        expect(field).toBeInTheDocument();
      });
    });

    test("Then it should show a button with the text 'create' inside", () => {
      const expectedTextButton = "create";

      customRender(<BikeForm />);

      const button = screen.getByText(expectedTextButton);

      expect(button).toBeInTheDocument();
    });
  });
});
