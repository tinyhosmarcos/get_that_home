import React from "react";
import "./Property.css";

const ListingSale = () => {


  return(
    <div className="propContainer">
      <Formik
        initialValues= {{
          address: '',
          price:'',
          appartment: '',
          house: '',
          area: '',
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
            <label htmlFor="price">Price</label>
            <Field 
              className="currency"
              id ="price"  
              type="number" 
              min="0.01" 
              step="0.01" 
              max="2500" 
              placeholder="2000000"  
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
                id= "area"
                type="number" 
                min="0.01" 
                step="0.01" 
                max="20000" 
                placeholder="##" 
              />
            </div>
          </div>

          <div className="textitems">
            <label htmlFor="name">About this property</label>
            <textarea 
              className="paratext" 
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


export default ListingSale;