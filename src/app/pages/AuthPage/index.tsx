import React, { useState } from "react";
import "assets/scss/Pages/AuthPage/Auth.scss";
import Login, { LoginFormItem } from "app/components/Auth/Login";
import { AuthType } from "models";
import Register from "app/components/Auth/Register";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "store/hooks";
import { loginFail, loginStart, loginSuccess, setProfile } from "store/Auth";
import { userSignin } from "services/UserServices";

export const AuthPage = () => {
  const [auth, setAuth] = useState<AuthType>("signin");
  const [loading, setLoading] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const loginOnSubmit = async (values: LoginFormItem) => {
    setLoading(true);
    dispatch(loginStart());
    try {
      const { email, password } = values;
      const params = {
        email,
        password,
      };
      const loginRes = await userSignin(params);
      dispatch(loginSuccess());
      dispatch(setProfile(loginRes));
      localStorage.removeItem("LastPopUpDate");
      navigate("/");
    } catch (err) {
      dispatch(loginFail("Email or password error.  Please try again."));
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className={`auth-container ${auth === "register" ? "active-reg" : ""}`}>
      <div className="content-wrapper">
        {/* sign in  */}
        <Login loading={loading} setAuth={setAuth} onSubmit={loginOnSubmit} />
        {/* Sign up */}
        <Register loading={loading} setAuth={setAuth} />
      </div>
    </section>
  );
};
