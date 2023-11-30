import { screen } from "@testing-library/react";
import customRender from "../../testsUtils/customRender";
import Button from "./Button";
import userEvent from "@testing-library/user-event";

beforeEach(() => {
  vi.resetAllMocks;
});

describe("Given a Button component", () => {
  const text = "delete";
  const actionOnClick = vi.fn();
  describe("When it receives the text 'delete'", () => {
    test("Then it should show a 'delete' text", () => {
      customRender(<Button actionOnClick={actionOnClick} text={text} />);

      const button = screen.getByRole("button", { name: text });

      expect(button).toBeInTheDocument();
    });

    describe("When it receives an action and the user clicks button", () => {
      test("Then it should call the received action", async () => {
        customRender(<Button actionOnClick={actionOnClick} text={text} />);

        const button = screen.getByRole("button", { name: text });

        await userEvent.click(button);

        expect(actionOnClick).toHaveBeenCalled();
      });
    });
  });
});
