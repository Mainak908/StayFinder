import { Navigate } from "react-router-dom";
import { useAuth } from "../../../backend/src/services/AuthContext";

export default function ProtectedRoute({
  children,
}: {
  children: JSX.Element;
}) {
  const { user } = useAuth();
  return user ? children : <Navigate to="/login" />;
}
