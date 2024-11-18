import { useContext } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Light } from "../../assets/light.svg";
import { ReactComponent as Dark } from "../../assets/dark.svg";
import { ActiveContext, ThemeContext } from "../../Сontext/Context";

import styles from "./Navbar.module.scss";
const Navbar = () => {
  const context = useContext(ActiveContext);
  const theme = useContext(ThemeContext);
  console.log(theme?.theme);
  return (
    <div
      className={
        !context?.isActive ? styles.navbar : `${styles.navbar} ${styles.active}`
      }
    >
      <Link to="/">Home</Link>
      <Link to="/about-us">About us</Link>
      <div style={{ marginBottom: "5rem" }}></div>
      <button onClick={theme?.toggleTheme}>
        <Light />
        <Dark />
      </button>
    </div>
  );
};
export default Navbar;
