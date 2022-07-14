import React from "react";
import "./login.css";
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

// React --INICIO
  const [operationType, setOperationType] = React.useState("Rent");

const rentRef = React.useRef();
const saleRef = React.useRef();

  React.useEffect(() => {
    if (operationType==="Rent") {
      rentRef.current.style.backgroundColor= "red";
      console.log(operationType);
        }
    else if(operationType==="Sale"){
      saleRef.current.style.backgroundColor= "red";
      console.log(operationType);
        }
    },[operationType])

  const handleOperation = (e) =>{
    setOperationType(e.target.innerHTML);
  }
  // React --FIN
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
  
  // React --INICIO
  const OperationTypeOpt = styled.div`
  width: 50px;
  height: 40px;
`
// React --INICIO

  return(
    <LoginContainer>
      <FormContainer>
        <h5>Login</h5>
          <Formik
            initialValues={{
              email: '',
              password: '',
            }}
            onSubmit={ async (values) => {
              console.log(values)
              await login(values)
            }}
          >
            <Form>
            <div>
              <label htmlFor="email">Email</label>
              <CustomField type='email' name='email' placeholder='user@mail.com'/>
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <CustomField type='password' name='password' placeholder='******'/>
            </div>

          {/* React --INICIO */}
          <OperationTypeOpt ref={rentRef} onClick={handleOperation} children="Rent" >Rent</OperationTypeOpt>
            <OperationTypeOpt ref={saleRef} onClick={handleOperation} children="Sale" >Sale</OperationTypeOpt>
          {/* React --FIN */}            

            <SubmitContainer>
              <Button type="submit" icon={<RiUserReceivedLine/>} color={'primary'}>LOGIN</Button>
            </SubmitContainer> 
          </Form>
        </Formik>
      </FormContainer>
    </LoginContainer>

  );
}

export default Login