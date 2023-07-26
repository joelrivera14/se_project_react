import React from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ isLoggedIn, isLoading, children, ...props }) => {
  if (isLoading) {
    return null;
  }
  return (
    <Route path="/profile" {...props}>
      {isLoggedIn ? children : <Redirect to={"/"} />}
    </Route>
  );
};

export default ProtectedRoute;
