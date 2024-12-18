import { useContext } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { ReactComponent as Light } from "../../assets/light.svg";
import { ReactComponent as Dark } from "../../assets/dark.svg";
import { ActiveContext, ThemeContext } from "../../Сontext/Context";

import styles from "./Navbar.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { switchTheme } from "../../store/themeSlice";
import { stopTokenUpdate } from "../../store/SignInSlice";
const Navbar = () => {
  const context = useContext(ActiveContext);
  const { auth } = useSelector((state) => state.signIn);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);
  const myClass =
    () =>
    ({ isActive }: { isActive: boolean }) =>
      isActive ? `${styles.active}` : `${styles.nonActive}`;
  const closeSlideBar = () => context?.SetIsActive(!context.isActive);
  const signInHandler = () => {
    navigate("/sign-in", { state: { from: location } });
    closeSlideBar();
  };
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
        {auth && (
          <NavLink onClick={closeSlideBar} className={myClass()} to="/my-posts">
            my posts
          </NavLink>
        )}

        {!auth ? (
          <>
            <button onClick={signInHandler}>Sign in</button>
          </>
        ) : (
          <button onClick={() => dispatch(stopTokenUpdate())}>Log out</button>
        )}
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
