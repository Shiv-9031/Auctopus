import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";

export const ProtectedRoutes = (props) => {
  const isAuthenticated = useSelector(
    (state) => state.BackendData.isAuthenticated
  );

  if (isAuthenticated) {
    return props.children;
  } else {
    return <Navigate to="/login" />;
  }
};
