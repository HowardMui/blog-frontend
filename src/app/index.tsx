import { BrowserRouter } from "react-router-dom";
import { AxiosInterceptor } from "services";
import Router from "./routes";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import { persistor, store } from "store";
import { PersistGate } from "redux-persist/integration/react";

export const App = () => {
  return (
    <BrowserRouter>
      <AxiosInterceptor>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Router />
          </PersistGate>
        </Provider>
      </AxiosInterceptor>
    </BrowserRouter>
  );
};

export default App;
