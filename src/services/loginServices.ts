import Axios from ".";

export const userLogin = async (params: { email: string }) => {
  const { data } = await Axios.post<any>("/auths/login", params);
  return data;
};

export const emailAuth = async (params: { email: string; emailToken: string }) => {
  const { data } = await Axios.post<any>("/auths/authenticate", params);
  return data;
};

export const userRegister = async (params: { email: string; password: string }) => {
  const { data } = await Axios.post<any>("/auths/register", params);
  return data;
};

export const userSignin = async (params: { email: string; password: string }) => {
  const { data } = await Axios.post<any>("/auths/signin", params);
  return data;
};

export const userLogout = async () => {
  const { data } = await Axios.post<any>("/auths/logout");
  return data;
};

export const getUserList = async () => {
  const { data } = await Axios.get<any>("/users");
  return data;
};
