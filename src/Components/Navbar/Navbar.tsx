import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ReactComponent as Light } from "../../assets/light.svg";
import { ReactComponent as Dark } from "../../assets/dark.svg";
import { ActiveContext, ThemeContext } from "../../Сontext/Context";

import styles from "./Navbar.module.scss";
// import { switchTheme } from "../../store/themeSlice";
import { useDispatch } from "react-redux";
import { switchTheme } from "../../store/themeSlice";
const Navbar = () => {
  const context = useContext(ActiveContext);
  const theme = useContext(ThemeContext);
  const dispatch = useDispatch();
  // console.log(switchTheme);
  const myClass =
    () =>
    ({ isActive }: { isActive: boolean }) =>
      isActive ? `${styles.active}` : `${styles.nonActive}`;
  const closeSlideBar = () => context?.SetIsActive(!context.isActive);
  console.log(theme?.theme);
  return (
    <div
      className={
        !context?.isActive ? styles.navbar : `${styles.navbar} ${styles.active}`
      }
    >
      <nav>
        <NavLink onClick={closeSlideBar} className={myClass()} to="/">
          Home
        </NavLink>
        <NavLink onClick={closeSlideBar} className={myClass()} to="/about-us">
          About us
        </NavLink>
        <NavLink onClick={closeSlideBar} className={myClass()} to="/posts">
          posts
        </NavLink>

        <NavLink onClick={closeSlideBar} className={myClass()} to="/sign-up">
          Sign Up
        </NavLink>
        <NavLink onClick={closeSlideBar} className={myClass()} to="/sign-in">
          Sign in
        </NavLink>
      </nav>

      <div style={{ marginBottom: "5rem" }}></div>
      <button onClick={() => dispatch(switchTheme("light"))}>
        <Light />
      </button>
      <button onClick={() => dispatch(switchTheme("dark"))}>
        <Dark />
      </button>
    </div>
  );
};
export default Navbar;
