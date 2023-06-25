import React, { useState } from "react";
import RegisterCover from "assets/images/Key.jpg";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { InputField } from "../Form";
import { AuthType } from "models/User";

interface Props {
  loading: boolean;
  setAuth: (value: AuthType) => void;
}

// form type
type FormItem = {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
};

// form initialValues
const FORM_ITEM = {
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SCHEMA = Yup.object({
  username: Yup.string().min(4, "Minimum 4 characters").max(20, "Maximum 20 characters").required("Required"),
  email: Yup.string().email("Please input valid email.").required("Required"),
  password: Yup.string().required("Required"),
  confirmPassword: Yup.string()
    .required("Required")
    .oneOf([Yup.ref("password")], "Password not match"),
});

const Register = ({ loading, setAuth }: Props) => {
  const [form, setForm] = useState<FormItem>(FORM_ITEM);

  const onSubmit = (values: FormItem) => {
    console.log(values);
  };

  return (
    <div className="register fixed-wrapper">
      <div className="form-wrapper">
        <Formik initialValues={form} validationSchema={SCHEMA} onSubmit={onSubmit} enableReinitialize>
          {({ values, errors, setFieldValue, setFieldError }) => (
            <Form className="w-100">
              <h1 className="header font-24px-medium">CREATE AN ACCOUNT</h1>
              <InputField name="username" type="text" placeholder="User name" />
              <InputField name="email" type="text" placeholder="Email" />
              <InputField name="password" type="password" placeholder="Password" />
              <InputField name="confirmPassword" type="password" placeholder="Confirm password" />
              {loading ? (
                <div className="">Loading</div>
              ) : (
                <button className="submit-register-btn clean-btn submit-btn font-14px-medium" type="submit">
                  <div>REGISTER</div>
                </button>
              )}
            </Form>
          )}
        </Formik>

        <div className="remark d-flex font-12px-medium w-100 mt-4">
          <div>YOU ALREADY GET AN ACCOUNT?</div>
          <div className="navigation-btn ms-2 text-color-link" onClick={() => setAuth("signin")}>
            LOGIN.
          </div>
        </div>
      </div>
      <div className="image-wrapper">
        <img src={RegisterCover} alt={"register-cover"} draggable="false" width={200} height={200} />
      </div>
    </div>
  );
};

export default Register;
