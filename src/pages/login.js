import React from "react";
import { Field, Form, Formik } from "formik";
import { RiUserReceivedLine } from "react-icons/ri";
import Button from "../component/Button/Button";
import { useAuth } from "../context/auth-context";
import styled from "@emotion/styled";
import { colors } from "../styles/colors";
import { shadows } from '../styles/shadows'
import { typography } from "../styles/typography";


const Login= () =>{
  const { login } = useAuth();

  const FieldWrapper = ({ className, ...props }) => (
    <Field className={className} {...props} />
  );
  
  const CustomField = styled(FieldWrapper)`
    width: 356px;
    height: 40px;
    border-radius: 5px;
    border: 1px solid ${colors.pink['50']};
    ${typography.body1}
    padding: 10px;
    margin-bottom: 5px;
    &::placeholder {
      color: ${colors.gray['light']};
    }
  `
  const LoginContainer = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${colors.gray['medium']}25;
  `
  const FormContainer = styled.div`
    width: 388px;
    height: 256px;
    background: ${colors.white};
    border-radius: 5px;
    padding: 16px;
    ${shadows.shadow1}
    display: flex;
    flex-direction: column;
    justify-content: center;
    & h5 {
      ${typography.headline5}
      text-align: center;
      margin-bottom: 1rem;
    }
    & label {
      display: block;
      font-family: "Inter";
      font-weight: 400;
      font-size: 10px;
      margin-bottom: 5px;
      color: #1f1f1f;
      letter-spacing: 1.5px;
      text-transform: uppercase;
    }
    & textarea {
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
  `
  const SubmitContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 1rem;
  `
  return(
    <LoginContainer>
      <FormContainer>
        <h5>Login</h5>
          <Formik
            initialValues={{
              email: 'alex',
              password: '123',
            }}

            validate={(values) => {
              const errors = {};

              // !!!! --->>> validaciones regex de las Values <<<---
              const regexSentences = {
                email: /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/,
                password: /^(?=.*\d)[A-Za-z\d]{6,}$/,
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
                addInfoError("password", ", at least 6 numbers")
              return errors;
            }}

            onSubmit={ async (values) => {
              await login(values)
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
            <label htmlFor="email">Email</label>
            <CustomField type='email' name='email' placeholder='user@mail.com'/>
            {errors.email && touched.email && 
            <p style={{color:"red"}}>{errors.email}</p>}
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <CustomField type='password' name='password' placeholder='******'/>
            {/* !!!! --->>> Colocar despues de cada campo por verificar <<<---*/}
            {errors.password && touched.password && 
            <p style={{color:"red"}}>{errors.password}</p>}
          </div>
          <SubmitContainer>
          
            <Button type="submit" icon={<RiUserReceivedLine/>} color={'primary'}>LOGIN</Button>
          </SubmitContainer> 
        </Form>
        )}
      </Formik>
    </FormContainer>
  </LoginContainer>
  );
}

export default Login