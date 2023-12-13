import { vi } from "vitest";
import { fireEvent, screen } from "@testing-library/react";
import { customRender } from "../../testsUtils/customRender";
import BikeForm from "./BikeForm";
import { createdBikeMock } from "../../mocks/addedBikeMock";
import userEvent from "@testing-library/user-event";

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
      customRender(<BikeForm onSubmit={mockFunction} textButton="add" />);

      labelsName.forEach((labelName) => {
        const field = screen.getByLabelText(labelName);
        expect(field).toBeInTheDocument();
      });
    });

    test("Then it should show a button with the text 'add' inside", () => {
      const expectedTextButton = "add";

      customRender(<BikeForm onSubmit={mockFunction} textButton="add" />);

      const button = screen.getByText(expectedTextButton);

      expect(button).toBeDisabled();
    });
  });

  describe("When it is rendered on the AddPage an all its fields are completed", () => {
    test("Then button 'add' should be enabled", async () => {
      customRender(<BikeForm onSubmit={mockFunction} textButton="add" />);

      const modelInput = screen.getByLabelText(labelsName[0]);
      const pictureInput = screen.getByLabelText(labelsName[1]);
      const brandInput = screen.getByLabelText(labelsName[2]);
      const modalityInput = screen.getByLabelText(labelsName[3]);
      const materialInput = screen.getByLabelText(labelsName[4]);
      const componentInput = screen.getByLabelText(labelsName[5]);
      const sizeInput = screen.getByLabelText(labelsName[6]);
      const priceInput = screen.getByLabelText(labelsName[7]);

      const buttonName = "add";

      const model = createdBikeMock.model;
      const picture = createdBikeMock.image;
      const brand = createdBikeMock.brand;
      const modality = createdBikeMock.modality;
      const material = createdBikeMock.material;
      const component = createdBikeMock.component;
      const size = createdBikeMock.size;
      const price = createdBikeMock.price;

      await userEvent.type(modelInput, model);
      await userEvent.type(pictureInput, picture);
      await userEvent.type(brandInput, brand);
      await userEvent.type(modalityInput, modality);
      await userEvent.type(materialInput, material);
      await userEvent.type(componentInput, component);
      await userEvent.type(sizeInput, size);
      await userEvent.type(priceInput, price.toString());

      const button = screen.getByText(buttonName);

      expect(button).toBeEnabled();
    });
  });
  describe("When user clicks on the button to add a new bike", () => {
    test("Then it should call its onSubmit action", () => {
      customRender(<BikeForm onSubmit={mockFunction} textButton="add" />);

      const bikeForm = screen.getByLabelText(labelsName[0]);
      fireEvent.submit(bikeForm);

      expect(mockFunction).toHaveBeenCalled();
    });
  });
});
