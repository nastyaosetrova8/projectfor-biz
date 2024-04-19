import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const PublicRoute = ({ children }) => {
  const { isAuth } = useAuth();
  return !isAuth ? children : <Navigate to="/dashboard" />;
};

PublicRoute.propTypes = {
  children: PropTypes.node,
};

export default PublicRoute;
