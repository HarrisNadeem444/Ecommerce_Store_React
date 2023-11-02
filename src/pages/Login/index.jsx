import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useUserAuth } from "../../components/Context";
import { useNavigate, Link } from "react-router-dom";
import * as yup from "yup";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../components/FireBase";

const Login = () => {
  const { login } = useUserAuth();
  const navigate = useNavigate();

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .required("Please Enter Email")
      .email("Invalid email address"),
    password: yup.string().required("Please Enter Password"),
  });

  const handleLogin = async (values) => {
    const { email, password } = values;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      login();
      navigate("/products");
    } catch (error) {}
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Login. For Existing Users</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleLogin}
      >
        {() => (
          <Form>
            <div className="mb-4">
              <label className="block text-lg font-medium text-gray-800">
                Email:
              </label>
              <Field
                className="border border-gray-300 rounded p-2 w-full"
                type="text"
                name="email"
                placeholder="Enter Email"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500"
              />
            </div>

            <div className="mb-4">
              <label className="block text-slg font-medium text-gray-800">
                Password:
              </label>
              <Field
                className="border border-gray-300 rounded p-2 w-full"
                type="password"
                name="password"
                placeholder="Enter Password"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="text-red-500"
              />
            </div>

            <button
              className="bg-blue-600 hover:bg-blue-800 text-white font-semibold rounded p-2 w-full"
              type="submit"
            >
              Login
            </button>
          </Form>
        )}
      </Formik>
      <br />
      <br />
      <Link
        className="border border-gray-700 rounded p-1 hover:bg-gray-300"
        to="/signup"
      >
        Click here if you're a new User
      </Link>
    </div>
  );
};

export default Login;
