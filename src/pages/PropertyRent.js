import React from "react";
import "./Property.css";

const Listing = () => {


  return(
    <div className="propContainer">
      <form>
        <h1 className="title"> Create a property listing</h1>
          <div className= "firstblock">
            <label htmlFor="address">Address</label>
            <input type="text" id="address" name="address" placeholder="start typing to autocomplete"/>
            <label htmlFor="rent">Montly Rent</label>
            <input type="number" min="0.01" step="0.01" max="20000" placeholder="2000" />
            <label htmlFor="maintanance">Maitanance</label>
            <input type="number" min="0.01" step="0.01" max="2500" placeholder="2000"  />
          </div>
            <div className="checkboxes">
              <input type="checkbox" id="appartment" name="apparment" />
              <label for="appartment"> Appartment</label>
              <input type="checkbox" id="house" name="house" />
              <label for="appartment"> House</label>
            </div>

          <div className= "secondblock">
            <label for="lang">Bedroom</label>
              <select name="languages" id="lang">
                <option value="javascript">1</option>
                <option value="php">2</option>
                <option value="java">3</option>
                <option value="erlang">4</option>
                <option value="erlang">5</option>
              </select>

              <label for="lang">Bathroom</label>
              <select name="languages" id="lang">
                <option value="javascript">1</option>
                <option value="php">2</option>
                <option value="java">3</option>
                <option value="erlang">4</option>
              </select>
             
              <label htmlFor="name">Area in M2</label>
              <input type="number" min="0.01" step="0.01" max="2000" placeholder="##" />
            </div>

          <div className="petcheck">
              <input type="checkbox" id="pets" name="pets" />
              <label for="pets"> Pets allowed</label>
            </div>
            <p className="quote">Allowing pets increases the likehood of renters  liking the property by 9001%.
                It also makes you a better person.</p>
        
          <div>
            <label htmlFor="name">About this property</label>
            <textarea className="paratext" type="textarea" id="textarea" placeholder="My appartment is great because..."/>
            <p>Renters will read this first, so highlight any features or important information the apartment has.</p>
          </div>
          

      </form>
    </div>
  );
}

export default Listing;