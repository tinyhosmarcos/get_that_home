import React from "react";
import "./login.css";
import { Formik } from "formik";


const Login= () =>{
  
  return(
      <>
      <div className="formulario">
        <h1>Login</h1>
          <Formik>
            <form>
          
            <div>
              <label htmlFor="mail">Email</label>
              <input type="text" id="correo" name="correo" placeholder="user@mail.com" ></input>
            </div>
           
            <div>
              <label htmlFor="mail">Password</label>
              <input type="text" id="password" name="password" placeholder="******" ></input>
            </div>
            
          </form>

        </Formik>
      </div>
    </>

  );

}

export default Login