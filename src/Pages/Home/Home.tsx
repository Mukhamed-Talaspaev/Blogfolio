import { NavLink, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const person = {
    name: "BOB",
    age: 20,
  };
  return (
    <>
      <button onClick={() => navigate("/about")}>Go to about</button>
      <button onClick={() => navigate("/notfound")}>Go to notfound</button>
      <NavLink to={"/profile/1?showBanner=true#hash=value"} state={person}>
        Go to Profile Page
      </NavLink>
      <h1>HOME PAGE</h1>
    </>
  );
};
export default Home;
