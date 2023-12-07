import { PropsWithChildren } from "react";
import ButtonStyled from "./ButtonStyled";

interface ButtonProps extends PropsWithChildren {
  actionOnClick?: () => void;
  text: string;
}

const Button = ({ text, actionOnClick }: ButtonProps): React.ReactElement => {
  return (
    <ButtonStyled className="Button" onClick={actionOnClick}>
      {text}
    </ButtonStyled>
  );
};

export default Button;
