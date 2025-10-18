import { useContext, type JSX, type ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps): JSX.Element => {
  const { authState, loading } = useContext(AuthContext);

  // If loading auth state, don't redirect yet
  if (loading) {
    return <div>Loading...</div>;
  }

  if (!authState?.accessToken) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
