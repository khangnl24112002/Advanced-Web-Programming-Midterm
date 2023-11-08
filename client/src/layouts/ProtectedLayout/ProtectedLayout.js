import { Navigate, useOutlet } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

const ProtectedLayout = () => {
  const { token } = useAuth();
  const outlet = useOutlet();

  if (!token) {
    return <Navigate to="/auth/sign-in" />;
  }

  return <div>{outlet}</div>;
};

export default ProtectedLayout;
