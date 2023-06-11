import { lazyLoad } from "utils/Loadable";

export const LogoutPage = lazyLoad(
  () => import("./index"),
  (module) => module.LogoutPage
);
