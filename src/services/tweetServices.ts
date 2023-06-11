import Axios from ".";

export interface getAllTweetParams {}

export const getTweetList = async () => {
  const { data } = await Axios.get<any>("/tweets", {});
  return data;
};
