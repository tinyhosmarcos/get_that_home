import React from "react";
import {ReactComponent as ReactPana} from "../styles/logo/pana.svg";
import {ReactComponent as ReactRafiki} from "../styles/logo/rafiki.svg";
import "./signup.css"

const Signup = () =>{
  return(
    <div className="container">
        <div className="titles">
          <p className="subTitle"> Selecciona el prfil con el que te identificas</p>
          <p className="bigTitle">¿Qué estás buscando?</p>
        </div>

      <div className="profilesCards">

        <div className="cards">
          <div className="image">
            <ReactRafiki />
          </div>
          <div>this is a card</div>
          
        </div>
        <div className="cards"> 
        <div className="image">
        < ReactPana/>
          </div>
          <div>this is a card</div>
          
        </div>
      </div>
    </div>
  );
}

export default Signup