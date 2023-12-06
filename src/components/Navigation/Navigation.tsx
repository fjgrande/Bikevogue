import { NavLink } from "react-router-dom";
import NavigationStyled from "./NavigationStyled";

const Navigation = (): React.ReactElement => {
  return (
    <NavigationStyled>
      <ul className="navigation">
        <li>
          <NavLink to="/home">home</NavLink>
        </li>
        <li>
          <NavLink to="/add">add</NavLink>
        </li>
      </ul>
    </NavigationStyled>
  );
};

export default Navigation;
