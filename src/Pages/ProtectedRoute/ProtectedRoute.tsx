import { useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";

const ProtectedRoute = ({ children }: { children: React.ReactElement }) => {
  const { auth } = useSelector((state) => state.signIn);
  if (!auth) {
    console.log("here");
    return <Navigate to="/sign-up" />;
  }
  return children;
};
export default ProtectedRoute;
