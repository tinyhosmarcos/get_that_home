import React from "react";
import "./signup-card.css";
import { Field, Form, Formik } from "formik";
import Button from "../component/Button/Button";
import { useAuth } from "../context/auth-context";

const SignupCard = () =>{
  const { signup } = useAuth();
  
  return(
      <>
      <div className="formulario">
        <h1>Create your account</h1>
          <Formik
            initialValues={{
              name: '',
              email: '',
              phone: '',
              password: '',
              password_confirmation: '',
            }}
            onSubmit={ async (values) => {
              await signup(values)
            }}
          >
            <Form>
            <div>
              <label htmlFor="name">Name</label>
              <Field type="text" id="name" name="name" placeholder="John Doe"/>
            </div>
            <div>
              <label htmlFor="email"> Email</label>
              <Field type="email" id="email" name="email" placeholder="user@mail.com" />
            </div>
            <div>
              <label htmlFor="phone"> Phone</label>
              <Field type="number" id="phone" name="phone" placeholder="999-999-999" />
            </div>
            <div>
              <label htmlFor="password"> Password</label>
              <Field type="password" id="password" name="password" placeholder="******" />
            </div>
            <div>
              <label htmlFor="password_confirmation"> Password Confirmation</label>
              <Field type="password" id="password_confirmation" name="password_confirmation" placeholder="*******" />
            </div>
            <Button type="submit">Create Account</Button>
          </Form>
        </Formik>
      </div>
    </>

  );

}

export default SignupCard