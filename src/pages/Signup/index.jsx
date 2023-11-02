import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useUserAuth } from "../../components/Context";
import { useNavigate, Link } from "react-router-dom";
import * as yup from "yup";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../components/FireBase";

const Signup = () => {
  const { login } = useUserAuth();
  const navigate = useNavigate();

  const initialValues = {
    name: "",
    email: "",
    contactNumber: "",
    password: "",
    confirmPassword: "",
  };

  const validationSchema = yup.object().shape({
    name: yup.string().required("Name is required"),
    email: yup
      .string()
      .email("Invalid email address")
      .required("Email is required"),
    contactNumber: yup
      .string()
      .matches(/^\d{11}$/, "Invalid contact number")
      .notRequired(),
    password: yup
      .string()
      .required("Password is required")
      .matches(
        /(?=.*\d)(?=.*[A-Z])/,
        "Password must contain at least one number and one uppercase letter"
      ),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
  });

  const handleSubmit = async (values) => {
    const { email, password } = values;

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      login();
      navigate("/login");
    } catch (error) {}
  };

  return (
    <div className="w-full max-w-md mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Signup. For New Users</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form>
            <div className="mb-4">
              <label className="block text-lg font-medium text-gray-700">
                Name:
              </label>
              <Field
                className="border border-gray-300 rounded p-2 w-full"
                type="text"
                name="name"
              />
              <ErrorMessage
                name="name"
                component="div"
                className="text-red-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-lg font-medium text-gray-800">
                Email:
              </label>
              <Field
                className="border border-gray-300 rounded p-2 w-full"
                type="text"
                name="email"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-lg font-medium text-gray-700">
                Contact Number:
              </label>
              <Field
                className="border border-gray-300 rounded p-2 w-full"
                type="text"
                name="contactNumber"
              />
              <ErrorMessage
                name="contactNumber"
                component="div"
                className="text-red-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-lg font-medium text-gray-700">
                Password:
              </label>
              <Field
                className="border border-gray-300 rounded p-2 w-full"
                type="password"
                name="password"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="text-red-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-lg font-medium text-gray-700">
                Confirm Password:
              </label>
              <Field
                className="border border-gray-300 rounded p-2 w-full"
                type="password"
                name="confirmPassword"
              />
              <ErrorMessage
                name="confirmPassword"
                component="div"
                className="text-red-500"
              />
            </div>
            <button
              className="bg-blue-600 hover:bg-blue-800 text-white font-semibold rounded p-2 w-full"
              type="submit"
            >
              Signup
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Signup;
