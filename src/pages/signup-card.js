import React from "react";
import { Field, Form, Formik } from "formik";
import Button from "../component/Button/Button";
import { useAuth } from "../context/auth-context";
import styled from "@emotion/styled";
import { colors } from "../styles/colors";
import { shadows } from '../styles/shadows'
import { typography } from "../styles/typography";


const FormContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${colors.white};
  background: linear-gradient(0deg, ${colors.white} 50%, ${colors.pink['300']} 50%);
 & form {
  width: 388px;
  height: 468px;
  margin-top: 30px;
  background: ${colors.white};
  border-radius: 5px;
  padding: 20px;
  ${shadows.shadow1}
}
& label {
	display: block;
  ${typography.overline}
	color: ${colors.gray["light"]}
	letter-spacing: 1.5px;
	text-transform: uppercase;
}
& input, textarea {
	font-family: "Montserrat";
	width: 356px;
  height: 40px;
  border-radius: 0.5rem;
  border: 1px solid ${colors.pink['50']};
  ${typography.body1}
	font-size: 15px;
	padding: 10px;
	margin-bottom: 0.5rem;
	color: #8E8E8E;
}
`

const Title = styled.h1`
font-family: "Montserrat";
${typography.headline5}
text-align: center;
margin-bottom: 0.5rem;
`;


const SignupCard = () =>{
  const { signup } = useAuth();
  
  return(
      <>
      <FormContainer>
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
              <Title>Create your account</Title>
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
            <Button type="submit" color={'primary'}>Create Account</Button>
          </Form>
        </Formik>
      </FormContainer>
    </>

  );

}

export default SignupCard