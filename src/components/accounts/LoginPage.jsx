import React, { useState } from "react";
import { login } from "../../redux/actions/accounts/login";
import { connect } from "react-redux";
import {  Visibility, VisibilityOff } from "@material-ui/icons";
import {Alert} from '@material-ui/lab'
import Validator from "validatorjs";
import axios from "axios";
import { rootUrl } from "../../auth/utils/rootUrl";
import {handleServerError} from '../../auth/utils/handleServerError'
import CircularProcessing from '../utils/CircularProcessing'
import "./LoginPage.css";

function LoginPage({login}) {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [serverErrors, setServerErrors] = useState(null);
  const [errors, setErrors] = useState({
    username: null,
    password: null,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isProcessing, setIsProcessing] = React.useState(false);

  const handleClose = () => {
    setErrors({
      username: null,
      password: null,
    });
    setServerErrors(null);
    setPassword("");
    setUserName("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      username: username,
      password: password,
    };
    const validation_rules = {
      username: "required",
      password:"required|string",
    };

    const customErrorMessage = {
      "email.username": "Username must be an email or phone number!",
      "required.password": "Password is required!",
    };
    const validation = new Validator(
      data,
      validation_rules,
      customErrorMessage
    );
    if (validation.passes()) {
      setIsProcessing(true);
      setErrors({
        username: null,
        password: null,
      });
      let user_credentials;
      let concerned_pathname;
        user_credentials = { username: username, password: password };
        concerned_pathname = `${rootUrl}/api/accounts/admin/staff/login/`;

      axios
        .post(concerned_pathname, user_credentials)
        .then((response) => {
          handleClose();
          setIsProcessing(false);
          login(true, response.data);
        })
        .catch((err) => {
          setIsProcessing(false);
          let servErr = handleServerError(err)
          login(false, servErr.message);
          setServerErrors(servErr.message);
          if (err?.toString()?.includes("Network")) {
            setServerErrors("Network Err!!! This site server can’t be reached");
          }
        });
    }
    else {
      setErrors({
        ...errors,
        username: validation.errors.get("username") || null,
        password: validation.errors.get("password") || null,
      });
    }
  };

  return (
    <div className="login__reg__container">
        <div className="login__reg__body">
        <div className="login__reg__title">
          <span>Login as Admin (or Staff)</span>
        </div>
        <CircularProcessing isProcessing={isProcessing}/>
          {serverErrors && <Alert severity="error">{serverErrors}</Alert>}
          <form>
            <div className="form__group">
                <input
                name="username"
                className="form__group__input__field"
                onChange={(e) => setUserName(e.target.value)}
                type="text"
                value={username}
                placeholder="Enter your username(phone/email)"
                required
              />
              <span
                className="error checkout__input__field__helptext">
                {errors?.username}
              </span>
            </div>
            
            <div className="form__group">
              <div className="password__field__wrapper">
                <input
                  name="password"
                  onChange={(e) => setPassword(e.target.value)}
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      handleSubmit(e);
                    }
                  }}
                  placeholder="Enter your password"
                  required
                />
                {showPassword ? (
                  <VisibilityOff
                    onClick={() => setShowPassword(!showPassword)}
                  />
                ) : (
                  <Visibility onClick={() => setShowPassword(!showPassword)} />
                )}
              </div>
              <span
                className="error checkout__input__field__helptext">
                {errors?.password}
              </span>
            </div>

              <button
                className="login__submit__button"
                onClick={handleSubmit}
                type="submit"
              >
                Login
              </button>
          </form>
        </div>
    </div>
  );
}

export default connect(null, {login})(LoginPage);