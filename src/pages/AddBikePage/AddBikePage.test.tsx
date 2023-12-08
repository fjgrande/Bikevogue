import { screen, waitFor } from "@testing-library/react";
import { customRender } from "../../testsUtils/customRender";
import AddBikePage from "./AddBikePage";
import { createdBikeMock } from "../../mocks/addedBikeMock";
import userEvent from "@testing-library/user-event";

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

    test("Then it should show a button with the text 'add' inside", () => {
      const expectedTextButton = "add";

      customRender(<AddBikePage />);

      const button = screen.getByText(expectedTextButton);

      expect(button).toBeInTheDocument();
    });
  });

  describe("When it is rendered on the AddPage an all its fields are completed", () => {
    test("Then it should the positive feedback message positive feedback message 'Great! your Bike has been created!'", async () => {
      const expectedMessage = "Great! your Bike has been created!";

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

      const modelInput = screen.getByLabelText(labelsName[0]);
      const pictureInput = screen.getByLabelText(labelsName[1]);
      const brandInput = screen.getByLabelText(labelsName[2]);
      const modalityInput = screen.getByLabelText(labelsName[3]);
      const materialInput = screen.getByLabelText(labelsName[4]);
      const componentInput = screen.getByLabelText(labelsName[5]);
      const sizeInput = screen.getByLabelText(labelsName[6]);
      const priceInput = screen.getByLabelText(labelsName[7]);

      const buttonName = "add";
      const button = screen.getByText(buttonName);

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
      await userEvent.click(button);

      await waitFor(() => {
        expect(screen.getByText(expectedMessage)).toBeInTheDocument();
      });
    });
  });
});
