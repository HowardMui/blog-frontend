import { lazyLoad } from "utils/Loadable";

export const RegisterPage = lazyLoad(
  () => import("./index"),
  (module) => module.RegisterPage
);
