import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import NotFound from "./Pages/NotFound/NotFound";
import Profile from "./Pages/Profile/Profile";
import AboutUs from "./Pages/AboutUs/AboutUs";
import Layout from "./Pages/Layout/Layout";
import Posts from "./Pages/Posts/Posts";
import FavoritePost from "./Pages/FavoritePost/FavoritePost";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="about" element={<Navigate to={"/about-us"} />} />
          <Route path="/profile/:id" element={<Profile />} />
          <Route path="posts" element={<Posts />} />
          <Route path="/favorite" element={<FavoritePost />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
