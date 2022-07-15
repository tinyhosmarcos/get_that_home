import React from "react";
import "./Property.css";

const ListingRent = () => {


  return(
    <div className="propContainer">
      <form>
        <h1 className="title"> Create a property listing</h1>
          <div className= "firstblock">
            <label htmlFor="address">Address</label>
            <input className="address" type="text" id="address" name="address" placeholder="start typing to autocomplete"/>
            <label htmlFor="rent">Montly Rent</label>
            <input className="currency" type="number" min="0.01" step="0.01" max="20000" placeholder="2000" />
            <label htmlFor="maintanance">Maintanance</label>
            <input className="currency" type="number" min="0.01" step="0.01" max="2500" placeholder="2000"  />
          </div>
          
          <div className="proptitle">
                <h4>Property Type</h4>
              </div>
            <div className="checkboxes">
                <div className="checks">
                  <input type="checkbox" id="appartment" name="apparment" />
                  <label for="appartment"> Appartment</label>
                </div>
                <div className="checks">
                  <input type="checkbox" id="house" name="house" />
                  <label for="appartment"> House</label>
                </div>
            </div>

          <div className= "secondblock">
            <div>
                <label for="bed">Bedroom</label>
                  <select name="quantity" id="quan">
                    <option value="" disabled selected hidden>select...</option>
                    <option value="quantity">1</option>
                    <option value="quantity">2</option>
                    <option value="quantity">3</option>
                    <option value="quantity">4</option>
                    <option value="quantity">5</option>
                  </select>
                </div>

                <div>
                <label for="bath">Bathroom</label>
                <select name="quantity" id="quan">
                <option value="" disabled selected hidden>select...</option>
                  <option value="quantity">1</option>
                  <option value="quantity">2</option>
                  <option value="quantity">3</option>
                  <option value="quantity">4</option>
                </select>
              </div>

              <div>
                <label htmlFor="name">Area in M2</label>
                <input className="area" type="number" min="0.01" step="0.01" max="2000" placeholder="##" />
              </div>
            </div>

          <div className="petbox">
           <div className="petcheck">
              <input type="checkbox" id="pets" name="pets" />
              <label for="pets"> Pets allowed</label>
            </div>
            <p className="quote">Allowing pets increases the likehood of renters  liking the property by 9001%. It also makes you a better person.</p>
          </div>

          <div className="textitems">
            <label htmlFor="name">About this property</label>
            <textarea className="paratext" type="textarea" id="textarea" placeholder="My appartment is great because..."/>
            <p>Renters will read this first, so highlight any features or important information the apartment has.</p>
          </div>
          
          <div className="photos">
            <div>
              <h3>Photos</h3>
              <p>Upload as many photos as you wish</p>
            </div>
            <div className="subphotos">
                  <button>choose</button>
                  <p>No file chosen</p>
                </div>
              <p>Only images, max 5MB</p>
              <div className="uploadbox">
                <div className="photobox"> 
                  <p className="photoboxtext">No photos yet</p>
                </div>
              </div>
         here goes a button with emotion
          </div>

      </form>
    </div>
  );
}

export default ListingRent;