import { lazyLoad } from "utils/Loadable";

export const HomePage = lazyLoad(
  () => import("./index"),
  (module) => module.HomePage
);
