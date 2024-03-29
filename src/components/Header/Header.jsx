import { useLocation } from "react-router-dom";
import Logo from "../Logo/Logo";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";
import MenuBurger from "../MenuBurger/MenuBurger";
import {
  HeaderContainer,
  HeaderLink,
  HeaderTextWrapper,
  NavBar,
} from "./Header.styled";

// eslint-disable-next-line react/prop-types
function Header({ toggleTheme, isDarkTheme }) {
  const location = useLocation();

  return (
    <HeaderContainer>
      <Logo />
      <HeaderTextWrapper>
        <NavBar>
          <HeaderLink
            $active={location.pathname === "/rental-car/"}
            to="/rental-car/"
          >
            Home
          </HeaderLink>
          <HeaderLink
            $active={location.pathname === "/rental-car/catalog"}
            to="catalog"
          >
            Catalog
          </HeaderLink>
          <HeaderLink
            $active={location.pathname === "/rental-car/favorites"}
            to="favorites"
          >
            Favorites
          </HeaderLink>
        </NavBar>
        <ThemeSwitcher toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
      </HeaderTextWrapper>
      <MenuBurger toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
    </HeaderContainer>
  );
}

export default Header;
