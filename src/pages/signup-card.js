import React from "react";
// import "./signup-card.css";
import { Field, Form, Formik } from "formik";
import Button from "../component/Button/Button";
import { useAuth } from "../context/auth-context";
import styled from "@emotion/styled";


const FormContainer = styled.div`
  width: 388px;
  height: 468px;
  margin-top: 30px;
  background: #fff;
  border-radius: 5px;
  padding: 20px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  display: flex;
  flex-direction: column;
  justify-content: center;
& label {
	display: block;
	font-weight: 600;
	font-size: 14px;
	margin-bottom: 5px;
	color: #1f1f1f;
	letter-spacing: 1.5px;
	text-transform: uppercase;
}
& input, textarea {
	font-family: 'Open Sans', sans-serif;
	width: 356px;
  height: 40px;
	border-radius: 5px;
	border: 1px solid #F48FB1;
	font-size: 15px;
	padding: 10px;
	margin-bottom: 5px;
	color: #8E8E8E;
}
& button[type="submit"] {
	display: block;
	background: pink;
	font-weight: 600;
	font-family: 'Open Sans', sans-serif;
	border: none;
	cursor: pointer;
	width: 200px;
	padding: 10px;
	border-radius: 5px;
	color: #fff;
	font-size: 16px;
	transition: .3s ease all;
}
`

const Title = styled.h1`
font-family: "Montserrat", "Open-sans";
font-size: 1.5rem;
text-align: center;
line-height: 2rem;
font-weight: 300px;
margin-bottom: 1rem;
`


const SignupCard = () =>{
  const { signup } = useAuth();
  
  return(
      <>
      <FormContainer>
        <Title>Create your account</Title>
          <Formik
            initialValues={{
              name: '',
              email: '',
              phone: '',
              password: '',
              password_confirmation: '',
            }}





            validate={(values) => {
              const errors = {};

// !!!! --->>> validaciones regex de las Values <<<---
              const regexSentences = {
                name: /([a-zA-Z0-9_\s]+)/,
                email: /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/,
                phone: /9(0[1-2]|1[\d]|3[\d]|2[0-1])[\d]{3}[\d]{3}/,
                password: /^(?=.*\d)[A-Za-z\d]{6,}$/,
                password_confirmation: /^(?=.*\d)[A-Za-z\d]{6,}$/,
              }

// !!!! --->>> STATIC, no es necesario cambiar, verificarRegex es una funcion <<<---
              function verificarObjectRegex(objeto){
                objeto.map(texto=>{
                if (!regexSentences[texto].test(values[texto])) {
                  errors[texto] = "Not valid "+texto;}
               })
              }
// !!!! --->>> STATIC, no es necesario cambiar (solo usa las keys del objeto Values, osea los campos) <<<---
              verificarObjectRegex(Object.keys(values))

// !!!! --->>> si se necesita se agrega mas Info al mensaje de error <<<---

              function addInfoError(variable,message){
              if (errors[variable]){
                errors[variable]=errors[variable]+message
                }
              }
              addInfoError("name",", at least 1 letter")
              addInfoError("phone", ", They are 9 numbers")
              addInfoError("password", ", at least 6 numbers")



              return errors;
            }}





            onSubmit={ async (values) => {
              await signup(values)
            }}
          >
{({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          setFieldValue,
        }) => (

            <Form>
            <div>
              <label htmlFor="name">Name</label>
              <Field type="text" id="name" name="name" placeholder="John Doe"/>
              {errors.name && touched.name && 
            <p style={{color:"red"}}>{errors.name}</p>}
            </div>
            <div>
              <label htmlFor="email"> Email</label>
              <Field type="email" id="email" name="email" placeholder="user@mail.com" />
              {errors.email && touched.email && 
            <p style={{color:"red"}}>{errors.email}</p>}
            </div>
            <div>
              <label htmlFor="phone"> Phone</label>
              <Field type="number" id="phone" name="phone" placeholder="999-999-999" />
              {errors.phone && touched.phone && 
            <p style={{color:"red"}}>{errors.phone}</p>}
            </div>
            <div>
              <label htmlFor="password"> Password</label>
              <Field type="password" id="password" name="password" placeholder="******" />
              {errors.password && touched.password && 
            <p style={{color:"red"}}>{errors.password}</p>}
            </div>
            <div>
              <label htmlFor="password_confirmation"> Password Confirmation</label>
              <Field type="password" id="password_confirmation" name="password_confirmation" placeholder="*******" />


              { touched['password_confirmation'] && values['password'] != values['password_confirmation'] 
              && 
            <p style={{color:"red"}}>Password confirmation is not the same as the original</p>}

            </div>
            <Button type="submit">Create Account</Button>
          </Form>
        )}
        </Formik>
      </FormContainer>
    </>
  );

}

export default SignupCard