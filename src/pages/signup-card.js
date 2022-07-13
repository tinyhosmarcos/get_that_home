import React from "react";
import "./signup-card.css";
import { Formik } from "formik";

const SignupCard = () =>{
  
  return(
      <>
      <div className="formulario">
        <h1>Create your account</h1>
          <Formik>
            <form>
            <div>
              <label htmlFor="Name">Name</label>
              <input type="text" id="nombre" name="nombre" placeholder="John Doe"/>
            </div>
            <div>
              <label htmlFor="mail"> Email</label>
              <input type="text" id="correo" name="correo" placeholder="user@mail.com" ></input>
            </div>
            <div>
              <label htmlFor="correo"> Phone</label>
              <input type="number" id="phone" name="phone" placeholder="999-999-999" ></input>
            </div>
            <div>
              <label htmlFor="pass"> Password</label>
              <input type="text" id="pass" name="pass" placeholder="******" ></input>
            </div>
            <div>
              <label htmlFor="passconfirm"> Password Confirmation</label>
              <input type="text" id="pass" name="pass" placeholder="*******" ></input>
            </div>

            <button type="submit">Create Account</button>
          </form>

        </Formik>
      </div>
    </>

  );

}

export default SignupCard