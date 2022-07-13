import React from "react";
import {ReactComponent as ReactPana} from "../styles/logo/pana.svg";
import {ReactComponent as ReactRafiki} from "../styles/logo/rafiki.svg";
import "./signup.css"

const Signup = () =>{
  return(
    <div className="container">
        <div className="titles">
          <p className="subTitle"> Selecciona el perfil con el que te identificas</p>
          <p className="bigTitle">¿Qué estás buscando?</p>
        </div>

      <div className="profilesCards">

        <div className="cards">
          <div className="image">
            <ReactRafiki />
          </div>
          <div className="cardLandlord">
            <p className="cardTitle"> Landlord</p>
            <p className="cardSubtitle"> You want to rent or sell a home </p>
          </div>
        </div>

        <div className="cards"> 
          <div className="image">
            < ReactPana/>
          </div>
          <div className="cardSeeker">
            <p className="cardTitle"> Home seeker</p>
            <p className="cardSubtitle"> You want to find a home </p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Signup