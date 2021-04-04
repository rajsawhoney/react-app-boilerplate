import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

export const CheckOpenRoute = ({ component: Component, ...rest }) => {
  const is_authenticated = true;
  return (
    <Route
      {...rest}
      render={(props) =>
        is_authenticated === true ? (
          <Redirect to="/dashboard" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

const AdminProtected = ({
  component: Component,
  is_authenticated,
  is_loading,
  is_admin,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        is_loading === false && is_authenticated === false | is_admin === false ? (
          <Redirect to="/" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};
const mapStateToProps = (state) => ({
    is_admin: state.accounts.is_admin,
  is_loading: state.accounts.is_loading,
  is_authenticated: state.accounts.is_authenticated,
});
export default connect(mapStateToProps, null)(AdminProtected);