import { Form, Formik } from "formik";
import * as Yup from "yup";
import { InputField } from "../Form";
import { useState } from "react";
import LoginCover from "assets/images/sky.jpg";
import { AuthType } from "models";
import { Spinner } from "react-bootstrap";

interface Props {
  loading: boolean;
  setAuth: (value: AuthType) => void;
  onSubmit: (value: LoginFormItem) => void;
}

// form type
export interface LoginFormItem {
  email: string;
  password: string;
}

// form initialValues
const FORM_ITEM = {
  email: "",
  password: "",
};

const SCHEMA = Yup.object({
  email: Yup.string().email("Please input valid email.").required("Required"),
  password: Yup.string().required("Required"),
});

const Login = ({ loading, setAuth, onSubmit }: Props) => {
  const [form, setForm] = useState<LoginFormItem>(FORM_ITEM);

  return (
    <div className="sign-in fixed-wrapper">
      <div className="image-wrapper">
        <img src={LoginCover} alt={"cover"} draggable="false" />
      </div>
      <div className="form-wrapper">
        <Formik initialValues={form} validationSchema={SCHEMA} onSubmit={onSubmit} enableReinitialize>
          {({ values, errors, setFieldValue, setFieldError }) => (
            <Form className="w-100">
              <h1 className="header font-24px-medium">LOGIN</h1>
              <InputField name="email" type="text" placeholder="Email" />
              <InputField name="password" type="password" placeholder="Password" />
              <button className="submit-signin-btn clean-btn submit-btn font-14px-medium" type="submit">
                {loading ? (
                  <Spinner animation="border" role="status" size="sm">
                    <span className="visually-hidden">Loading...</span>
                  </Spinner>
                ) : (
                  <div>Sign In</div>
                )}
              </button>
            </Form>
          )}
        </Formik>
        <div className="remark d-flex font-12px-medium w-100 mt-4">
          <div>DON'T HAVE AN ACCOUNT?</div>
          <div className="navigation-btn ms-2 text-color-link" onClick={() => setAuth("register")}>
            SIGN UP.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
