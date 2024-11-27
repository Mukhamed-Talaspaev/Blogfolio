import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPostsAction, selectPost } from "../../store/postSlice";
import { useNavigate } from "react-router-dom";
import { FetchPosts } from "../../store/postSliceRTK";

const Posts = () => {
  const dispatch = useDispatch();
  const { posts, loading, error } = useSelector((state) => state.posts);
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(FetchPosts());
  }, []);
  if (loading) {
    return <div>loading...</div>;
  }
  if (error) {
    return <div>Error...</div>;
  }
  return (
    <div>
      {posts.map((post) => (
        <Fragment key={post.id}>
          <h3>{post.title}</h3>
          <button
            onClick={() => {
              dispatch(selectPost(post));
              navigate("/favorite");
            }}
          >
            Add to Favorite
          </button>
        </Fragment>
      ))}
    </div>
  );
};
export default Posts;
