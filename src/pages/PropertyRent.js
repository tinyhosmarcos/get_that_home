import React from "react";
import "./Property.css";

const Listing = () => {
  return(
    <div className="propContainer">
      <form>
        <h1>
          Create a property listing
        </h1>
          <div className= "firstblock">
            <label htmlFor="address">Address</label>
            <input type="text" id="address" name="address" placeholder="start typing to autocomplete"/>
            <label htmlFor="rent">Montly Rent</label>
            <input type="number" min="0.01" step="0.01" max="20000" placeholder="2000" />
            <label htmlFor="maintanance">Maitanance</label>
            <input type="number" min="0.01" step="0.01" max="2500" placeholder="2000"  />
          </div>
          <div className="checkboxes">

          </div>

          <div className= "secondblock">
            <label htmlFor="name">Name</label>
            <select type="text" id="name" name="name" placeholder="John Doe"/>
            <label htmlFor="name">Name</label>
            <select type="text" id="name" name="name" placeholder="John Doe"/>
            <label htmlFor="name">Name</label>
            <select type="text" id="name" name="name" placeholder="John Doe"/>
          </div>
          <div className="checkboxes">
            <p>Allowing pets increases the likehood of renters  liking the property by 9001%.
It also makes you a better person.</p>
          </div>
          <div className="">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" placeholder="John Doe"/>
            <p>Renters will read this first, so highlight any features or important information the apartment has.</p>
          </div>

      </form>
    </div>
  )
}

export default Listing;