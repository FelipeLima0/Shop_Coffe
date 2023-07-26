import Logo from "../../assets/Logo.svg";
import Location from "../../assets/Location .svg";
import { HeaderContainer } from "./style";
import Cart from "../../assets/Cart.svg";
import { NavLink } from "react-router-dom";


export function Header() {
  return (
    <HeaderContainer>
      <NavLink to="/">
        <img src={Logo} />
      </NavLink>

      <span>
        <img src={Location} />
        <NavLink to="/checkout">
          <img src={Cart} alt="" />
        </NavLink>
      </span>
    </HeaderContainer>
  );
}
