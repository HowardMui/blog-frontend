import React, { useState } from "react";
import "assets/scss/Pages/AuthPage/Auth.scss";
import Login, { LoginFormItem } from "app/components/Auth/Login";
import { AuthType } from "models";
import Register from "app/components/Auth/Register";
import { useNavigate } from "react-router-dom";

export const AuthPage = () => {
  const [auth, setAuth] = useState<AuthType>("signin");
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const loginOnSubmit = async (values: LoginFormItem) => {
    console.log(values);
    setLoading(true);
    try {
      navigate("/");
    } catch (err) {
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
