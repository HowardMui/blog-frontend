import React from "react";
import { getUserList, userLogout, userRegister, userSignin } from "services/loginServices";
import { getTweetList } from "services/tweetServices";

export const LoginPage = () => {
  // const submit = async () => {
  //   try {
  //     const params = {
  //       email: "test1@test.co",
  //     };
  //     await userLogin(params);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  // const emailVerBtn = async () => {
  //   try {
  //     const params = {
  //       email: "test1@test.co",
  //       emailToken: "81413738",
  //     };
  //     const res = await emailAuth(params);
  //     Cookies.set("token", res.authToken);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

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
        email: "test1@test.co",
        password: "123",
      };
      await userRegister(params);
    } catch (err) {
      console.log(err);
    }
  };

  const siginBtn = async () => {
    try {
      const params = {
        email: "test1@test.co",
        password: "123",
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
      {/* <button onClick={submit}>login</button>
      <button onClick={emailVerBtn}>signinWithEM mail</button> */}
      <button onClick={getTweetBtn}>getTweetList</button>
      <button onClick={getUserBtn}>getUserList</button>
      <hr />
      <button onClick={registerBtn}>register</button>
      <button onClick={siginBtn}>signin with password</button>
      <button onClick={logoutBtn}>login out</button>
    </>
  );
};
