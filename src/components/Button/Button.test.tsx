import { screen } from "@testing-library/react";

import Button from "./Button";
import userEvent from "@testing-library/user-event";
import { customRender } from "../../testsUtils/customRender";

beforeEach(() => {
  vi.resetAllMocks;
});

describe("Given a Button component", () => {
  const deleteActionMock = vi.fn();
  const actionOnClick = vi.fn();
  const text = "delete";

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

    describe("When it receives the action delete and a click from a user", () => {
      test("Then it should call the received function", async () => {
        const expectedButtonText = "delete";

        customRender(
          <Button text={expectedButtonText} actionOnClick={deleteActionMock} />,
        );

        const button = screen.getByRole("button", { name: expectedButtonText });

        await userEvent.click(button);

        expect(deleteActionMock).toHaveBeenCalledOnce();
      });
    });
  });
});
