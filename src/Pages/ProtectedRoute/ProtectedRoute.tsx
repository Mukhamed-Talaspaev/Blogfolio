import { useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";

const ProtectedRoute = ({ children }: { children: React.ReactElement }) => {
  const { auth } = useSelector((state) => state.signIn);
  if (!auth) {
    return <Navigate to="/sign-up" />;
  }
  return children;
};
export default ProtectedRoute;
