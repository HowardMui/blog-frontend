import { lazyLoad } from "utils/Loadable";

export const AuthPage = lazyLoad(
  () => import("./index"),
  (module) => module.AuthPage
);
