import { PropsWithChildren } from "react";
import ButtonStyled from "./ButtonStyled";

interface ButtonProps extends PropsWithChildren {
  actionOnClick?: () => void;
  text: string;
  disabled?: boolean;
}

const Button = ({
  text,
  actionOnClick,
  disabled,
}: ButtonProps): React.ReactElement => {
  return (
    <ButtonStyled
      className="Button"
      onClick={actionOnClick}
      disabled={disabled}
    >
      {text}
    </ButtonStyled>
  );
};

export default Button;
