import { Formik, Form, Field } from 'formik';
import React from "react";
import Button from "../component/Button/Button";
import { RiUploadLine } from "react-icons/ri";
import "./Property.css";

const ListingRent = () => {




  return(
    <div className="propContainer">
      <Formik
        initialValues= {{
          address: '',
          monthlyrent:'',
          maintanance: '',
          appartment: '',
          house: '',
          area: '',
          pets: '',
          textarea: '',
        }}
      >
      <Form>
        <h1 className="title"> Create a property listing</h1>
          <div className= "firstblock">
            <label htmlFor="address">Address</label>
            <Field 
              className="address" 
              type="text" 
              id="address" 
              name="address" 
              placeholder="start typing to autocomplete"
            />
            <label htmlFor="rent">Monthly Rent</label>
            <Field
              className="currency" 
              name="monthlyrent"
              id= "monthlyrent" 
              type="number" 
              min="0.01" 
              step="0.01" 
              max="20000" 
              placeholder="2000" 
            />
            <label htmlFor="maintanance">Maintanance</label>
            <Field 
              className="currency"
              name ="maintanance" 
              id ="maintanance"  
              type="number" 
              min="0.01" 
              step="0.01" 
              max="2500" 
              placeholder="2000"  
            />
          </div>
          
          <div className="proptitle">
            <h4>Property Type</h4>
          </div>
            <div className="checkboxes">
              <div className="checks">
                <Field 
                  type="checkbox" 
                  id="appartment" 
                  name="apparment" 
                />
                <label for="appartment"> Appartment</label>
              </div>
              <div className="checks">
                <Field 
                  type="checkbox" 
                  id="house" 
                  name="house" 
                />
                <label for="appartment"> House</label>
              </div>
            </div>

          <div className= "secondblock">
            <div>
               <Field name="Bedrooms">
                {({ field }) => (
                  <select {...field}>
                    <option value="" disabled selected hidden>select...</option>
                      {[1,2,3,4,5,6].map(i => 
                      <option key={i} value={i}>{i}</option>
                      )}
                  </select>
             )}
             </Field>
            </div>
            <div>
              <Field name="Bathroom">
                {({ field }) => (
                  <select {...field}>
                    <option value="" disabled selected hidden>select...</option>
                    {[1,2,3,4,5,6].map(i => 
                    <option key={i} value={i}>{i}</option>
                    )}
                  </select>
                )}
              </Field>
            </div>
            <div>
              <label htmlFor="name">Area in M2</label>
              <Field 
                className="area" 
                name="area"
                id= "area"
                type="number" 
                min="0.01" 
                step="0.01" 
                max="20000" 
                placeholder="##" 
              />
            </div>
          </div>

          <div className="petbox">
           <div className="petcheck">
              <Field 
                type="checkbox" 
                id="pets" 
                name="pets" 
              />
              <label htmlFor="pets"> Pets allowed</label>
            </div>
              <p className="quote">Allowing pets increases the likehood of renters  liking the property by 9001%. It also makes you a better person.</p>
            </div>

          <div className="textitems">
            <label htmlFor="name">About this property</label>
            <textarea 
              className="paratext"
              name="textarea" 
              type="textarea" 
              id="textarea" 
              placeholder="My appartment is great because..."
            />
              <p>Renters will read this first, so highlight any features or important information the apartment has.</p>
          </div>
          
          <div className="photos">
            <h3>Photos</h3>
            <p>Upload as many photos as you wish</p>
              <div className="subphotos">
              <Button type="submit" icon={<RiUploadLine/>} color={'primary'}>Choose a file</Button>
                <p className="">No file chosen</p>
                </div>
              <p>Only images, max 5MB</p>
              <div className="uploadbox">
                <div className="photobox"> 
                  <p className="photoboxtext">No photos yet</p>
                </div>
              </div>
              <Button className="publishbutton" type="submit" color={'primary'} >Publish property listing</Button>
            </div>
           
      </Form>
      </Formik>
    </div>
  );
}

export default ListingRent;