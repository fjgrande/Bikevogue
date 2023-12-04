import Navigation from "../Navigation/Navigation";
import HeaderStyled from "./HeaderStyled";

const Header = (): React.ReactElement => {
  return (
    <HeaderStyled>
      <img
        className="header-logo"
        src="/images/logo.webp"
        alt="Bike logo"
        width="284"
        height="54"
      />
      <Navigation />
    </HeaderStyled>
  );
};

export default Header;
