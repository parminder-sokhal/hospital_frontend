import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export default function PrivateRoute() {
  const { isAuthenticated, loading } = useSelector((state) => state.user); // assuming your reducer is named "user"

  if (loading) return null;

  return isAuthenticated ? <Outlet /> : <Navigate to="/signin" />;
}
