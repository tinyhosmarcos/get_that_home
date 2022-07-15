import React from "react";
import "./Property.css";

const ListingSale = () => {


  return(
    <div className="propContainer">
      <form>
        <h1 className="title"> Create a property listing</h1>
          <div className= "firstblock">
            <label htmlFor="address">Address</label>
            <input className="address" type="text" id="address" name="address" placeholder="start typing to autocomplete"/>
            <label htmlFor="rent">Price</label>
            <input className="currency" type="number" min="0.01" step="0.01" max="20000" placeholder="2000" />
       
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

        
          <div className="textitems">
            <label htmlFor="name">About this property</label>
            <textarea className="paratext" type="textarea" id="textarea" placeholder="My appartment is great because..."/>
            <p>Renters will read this first, so highlight any features or important information the apartment has.</p>
          </div>
          
          <div className="photos">
            <h3>Photos</h3>
            <p>Upload as many photos as you wish</p>
                <div className="subphotos">
                  <button>choose</button>
                  <p>No file chosen</p>
                </div>
              <p>Only images, max 5MB</p>
              <div> HERE GOES THE BOX</div>
              <button> publish</button>
          </div>

      </form>
    </div>
  );
}

export default ListingSale;