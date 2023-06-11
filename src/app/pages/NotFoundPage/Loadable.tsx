import { lazyLoad } from "utils/Loadable";

export const NotFoundPage = lazyLoad(
  () => import("./index"),
  (module) => module.NotFoundPage
);
