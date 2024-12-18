import { useEffect } from "react";
import { useDispatch } from "react-redux";

const yourAsyncThunk = () => {
  // create slice for your posts
  // create inside slice asyncthunk
  console.log("here");
};
const MyPosts = () => {
  const dispatch = useDispatch();
  return <div>MyPosts page</div>;
};
export default MyPosts;
