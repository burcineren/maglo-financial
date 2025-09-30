import { ToastContainer, toast } from "react-toastify";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useEffect, useState } from "react";

export default function UserForm() {
  const [user, setUser] = useState([]);

  const UserSchema = Yup.object().shape({
    nameSurname: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    date: Yup.string().required("Required"),
    gender: Yup.string().required("Required"),
    password: Yup.string().min(6, "Password too short").required("Required"),
  });
  const userFormSubmit = (values, { resetForm }) => {
    console.log("User Informations:::", values);
    toast.success("Form submitted successfully!");
    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    })
      .then((response) => response.json())
      .then((data) => setUser(data));
    resetForm();
  };
  return (
    <>
      <Formik
        initialValues={{
          nameSurname: "",
          email: "",
          date: "",
          gender: "",
          password: "",
        }}
        validationSchema={UserSchema}
        onSubmit={userFormSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="form">
            <div>
              <label>Name Surname:</label>
              <Field
                type="text"
                name="nameSurname"
                className="input"
                placeholder="Name Surname"
              />
              <ErrorMessage
                name="nameSurname"
                component="div"
                className="error-message"
              />
            </div>

            <div>
              <label>Email:</label>
              <Field
                type="email"
                name="email"
                className="input"
                placeholder="Email"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="error-message"
              />
            </div>

            <div>
              <label>Birth Date:</label>
              <Field type="date" name="date" className="input" />
              <ErrorMessage
                name="date"
                component="div"
                className="error-message"
              />
            </div>

            <div>
              <label>Gender (Selection):</label>
              <Field as="select" name="gender" className="dropdown">
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </Field>
              <ErrorMessage
                name="gender"
                component="div"
                className="error-message"
              />
            </div>

            <div>
              <label>Password:</label>
              <Field
                type="password"
                name="password"
                className="input"
                placeholder="Password"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="error-message"
              />
            </div>
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
            <button type="reset">Delete</button>
            <ToastContainer />
          </Form>
        )}
      </Formik>
    </>
  );
}
