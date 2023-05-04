import { Navigate } from "react-router-dom";

const privateRoute = ({ user, children }) => {
  if (!user) {
    return <Navigate to="/signin" replace />;
  }

  return children;
};

export default privateRoute;
