import axios, { AxiosError, AxiosResponse } from "axios";
import { ReactElement, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const instance = axios.create({
  baseURL: "https://howardmui-blog-portfolio.net",
  // baseURL: "http://localhost:8000",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  withCredentials: true,
  timeout: 3000,
});

const AxiosInterceptor = ({ children }: { children: ReactElement }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const resInterceptor = (response: AxiosResponse): AxiosResponse => {
      console.log("response", response);
      return response;
    };

    const errInterceptor = (error: AxiosError): Promise<AxiosError> => {
      if (error?.response?.status === 401) {
        navigate("/logout");
      } else if (error?.response?.status === 403) {
        console.log(error?.response);
        navigate("/logout");
      }
      return Promise.reject(error);
    };

    const interceptor = instance.interceptors.response.use(resInterceptor, errInterceptor);

    return () => instance.interceptors.response.eject(interceptor);
  }, [navigate]);

  return children;
};

export default instance;
export { AxiosInterceptor };
