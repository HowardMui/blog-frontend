import Axios from ".";

export const emailAuth = async (params: { email: string; emailToken: string }) => {
  const { data } = await Axios.post<any>("/auths/authenticate", params);
  return data;
};
