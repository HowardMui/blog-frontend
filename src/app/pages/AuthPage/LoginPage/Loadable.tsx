import { lazyLoad } from "utils/Loadable";

export const LoginPage = lazyLoad(
  () => import("./index"),
  (module) => module.LoginPage
);
