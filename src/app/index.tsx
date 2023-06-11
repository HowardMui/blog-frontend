import { BrowserRouter } from "react-router-dom";
import { AxiosInterceptor } from "services";
import Router from "./routes";

export const App = () => {
  return (
    <BrowserRouter>
      <AxiosInterceptor>
        <Router />
      </AxiosInterceptor>
    </BrowserRouter>
  );
};

export default App;
