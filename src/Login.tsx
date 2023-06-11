import React from "react";
import { emailAuth, getUserList, userLogin, userLogout, userRegister, userSignin } from "./services/loginServices";
import { getTweetList } from "services/tweetServices";
import Cookies from "js-cookie";

const Login = () => {
  const submit = async () => {
    try {
      const params = {
        email: "test1@test.co",
      };
      await userLogin(params);
    } catch (err) {
      console.log(err);
    }
  };

  const emailVerBtn = async () => {
    try {
      const params = {
        email: "test1@test.co",
        emailToken: "81413738",
      };
      const res = await emailAuth(params);
      Cookies.set("token", res.authToken);
    } catch (err) {
      console.log(err);
    }
  };

  const getTweetBtn = async () => {
    try {
      const res = await getTweetList();
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  const registerBtn = async () => {
    try {
      const params = {
        email: "test2@test.co",
        password: "password",
      };
      await userRegister(params);
    } catch (err) {
      console.log(err);
    }
  };

  const siginBtn = async () => {
    try {
      const params = {
        email: "test2@test.co",
        password: "password",
      };
      await userSignin(params);
    } catch (err) {
      console.log(err);
    }
  };

  const logoutBtn = async () => {
    try {
      await userLogout();
    } catch (err) {
      console.log(err);
    }
  };

  const getUserBtn = async () => {
    try {
      await getUserList();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="">App</div>
      <button onClick={submit}>login</button>
      <button onClick={emailVerBtn}>signinWithEM mail</button>
      <button onClick={getTweetBtn}>getTweetList</button>
      <button onClick={getUserBtn}>getUserList</button>
      <hr />
      <button onClick={registerBtn}>register</button>
      <button onClick={siginBtn}>signin with password</button>
      <button onClick={logoutBtn}>login out</button>
    </>
  );
};

export default Login;
