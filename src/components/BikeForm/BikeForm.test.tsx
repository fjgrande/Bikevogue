import { vi } from "vitest";
import { fireEvent, screen } from "@testing-library/react";
import { customRender } from "../../testsUtils/customRender";
import BikeForm from "./BikeForm";

const mockFunction = vi.fn();

describe("Given a Form component", () => {
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
  describe("When it is rendered", () => {
    test("Then it should show the fields 'model', 'picture URL','brand',' modality','material', 'component', 'size (S,M,L, XL)', ' price (€)' ", () => {
      customRender(<BikeForm onSubmit={mockFunction} />);

      labelsName.forEach((labelName) => {
        const field = screen.getByLabelText(labelName);
        expect(field).toBeInTheDocument();
      });
    });

    test("Then it should show a button with the text 'add' inside", () => {
      const expectedTextButton = "add";

      customRender(<BikeForm onSubmit={mockFunction} />);

      const button = screen.getByText(expectedTextButton);

      expect(button).toBeDisabled();
    });
  });

  describe("When user clicks on the button to add a new bike", () => {
    test("Then it should call its onSubmit action", () => {
      customRender(<BikeForm onSubmit={mockFunction} />);

      const bikeForm = screen.getByLabelText(labelsName[0]);
      fireEvent.submit(bikeForm);

      expect(mockFunction).toHaveBeenCalled();
    });
  });
});
