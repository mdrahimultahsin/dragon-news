import React, {use} from "react";
import {AuthContext} from "./Context";
import Spinner from "../components/Spinner";
import {Navigate, useLocation} from "react-router";

const PrivateRoute = ({children}) => {
  const {user, loading} = use(AuthContext);
  const {pathname} = useLocation();

  if (loading) {
    return <Spinner />;
  }
  if (user && user?.email) {
    return children
  }
  return <Navigate to="/auth/login" state={pathname}/>;;
};

export default PrivateRoute;
