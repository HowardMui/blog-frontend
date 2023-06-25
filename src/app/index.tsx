import { BrowserRouter } from "react-router-dom";
import { AxiosInterceptor } from "services";
import Router from "./routes";
import "bootstrap/dist/css/bootstrap.min.css";

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
