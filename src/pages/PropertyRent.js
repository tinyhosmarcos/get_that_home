import { Formik, Form, Field } from 'formik';
import React from "react";
import Button from "../component/Button/Button";
import { RiUploadLine } from "react-icons/ri";

import styled from "@emotion/styled";


const ListingRent = () => {

  const PropContainer = styled.div`
	display: flex;
  flex-direction: column;
  align-items: center;
	justify-content: center;
`;
const formStyle = `	width: 100%;
height: 100%;
margin-top: 2rem;
background: #fff;
border-radius: 5px;
padding: 0px 120px;
display: flex;
flex-direction: column;
align-content: center;`


const Title1 = styled.h1`
font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 2rem;
line-height: 2.5rem;
margin-bottom: 1rem;
`;

const Title2 = styled.h3`
font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 1.25rem;
line-height: 1.75rem;
`;

const Title3 = styled.h4`
margin-top: 1rem;
font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 0.62rem;
line-height: 0.75rem;
letter-spacing: 1.5px;
text-transform: uppercase;
`;

const Label = styled.label`
display: block;
color: #373737;
font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 0.62rem;
line-height: 0.75rem;
letter-spacing: 1.5px;
text-transform: uppercase;
margin: 0.5rem 0rem 0.5rem;
`;

const CheckboxesContainer = styled.div`
display: flex;
gap: 1rem;
`;
const CheckboxInLineField = styled.div`
display: flex;
flex-direction: row;
gap: 0.25rem;
margin-bottom: 0.5rem;
`;

const RoomsAndAreaContainer = styled.div`
display: flex;
flex-direction: row;
gap: 1rem; 
padding: 1rem 0rem;
`;

const PhotosContainer = styled.div`
display: flex;
flex-direction: column;
margin: 1rem 0rem;
`;

const Subphotos = styled.div`
display: flex;
flex-wrap: wrap;
margin: 0.5rem 0rem 0.25rem 0rem;
gap: 0.5rem;
`;

const Uploadbox = styled.div`
width: 600px;
height: 136px;
left: 0px;
top: 668px;
background: #F5F5F6;
margin: 1rem 0rem;
`;

const Photobox = styled.div`
width: 120px;
height: 120px;
border-radius: 0.5rem;
background: #E1E2E1;
margin: 0.5rem;
text-align: center;
`;

const Photoboxtext = styled.p`
font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 0.75rem;
line-height: 1rem;
text-align: center;
letter-spacing: 0.4px;
padding: 3.25rem 0.62rem;
`;



function FormContainer ({children, handleClick, ...props}){
  return (
    <Form style={{formStyle}} onClick={handleClick} {...props}>
      <p>
        {children}
      </p>
    </Form>
  );
}


  return(
    <PropContainer>
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

        validate={(values) => {
          const errors = {};

          // !!!! --->>> validaciones regex de las Values <<<---
          const regexSentences = {
            address: /^(.{10,100})/,
            monthlyrent: /([0-9]{3}|[0-9]{6})/,
            maintanance: /([0-9]{2}|[0-9]{3})/,
            appartment: /(true|false|"")/,
            house: /(true|false|"")/,
            area: /([0-9]{2}|[0-9]{5})/,
            pets: /(true|false|"")/,
            textarea: /^(.{10,200})/, 
          }

          // !!!! --->>> STATIC, no es necesario cambiar, verificarRegex es una funcion <<<---
          function verificarObjectRegex(objeto){
            objeto.map(texto=>{
            if (!regexSentences[texto].test(values[texto])) {
              errors[texto] = "Not valid "+texto;}
           })
          }
          // !!!! --->>> STATIC, no es necesario cambiar (solo usa las keys del objeto Values, osea los campos) <<<---
          verificarObjectRegex(Object.keys(values))

          // !!!! --->>> si se necesita se agrega mas Info al mensaje de error <<<---
          function addInfoError(variable,message){
            if (errors[variable]){
              errors[variable]=errors[variable]+message
              }
            }
            addInfoError("address",", They are between 10 and 100 letters")
            addInfoError("monthlyrent", ", They are 3 numbers")
            addInfoError("maintanance", ", They are between 2 and 3 numbers")
            addInfoError("appartment",", true or false")
            addInfoError("house", ", true or false")
            addInfoError("area", ", between 3 and 5 numbers")
            addInfoError("pets",", true or false")
            addInfoError("textarea",", They are between 10 and 200 letters")
            
          return errors;
        }}

        onSubmit={ async (values) => {

        }}

      >

{({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          setFieldValue,
        }) => (

      <FormContainer>
        <Title1 > Create a property listing</Title1>
          <div className= "firstblock">
            <Label htmlFor="address">Address</Label>
            <Field 
              className="address" 
              type="text" 
              id="address" 
              name="address" 
              placeholder="start typing to autocomplete"
            />
            {errors.address && touched.address && 
            <p style={{color:"red"}}>{errors.address}</p>}
            <Label htmlFor="rent">Monthly Rent</Label>
            <Field
              className="currency" 
              name="monthlyrent"
              id= "monthlyrent" 
              type="number" 
              min="100" 
              step="10" 
              max="999999" 
              placeholder="2000" 
            />
            {errors.monthlyrent && touched.monthlyrent && 
            <p style={{color:"red"}}>{errors.monthlyrent}</p>}

            <Label htmlFor="maintanance">Maintanance</Label>
            <Field 
              className="currency"
              name ="maintanance" 
              id ="maintanance"  
              type="number" 
              min="10" 
              step="10" 
              max="999" 
              placeholder="90"  
            />
           {errors.maintanance && touched.maintanance && 
            <p style={{color:"red"}}>{errors.maintanance}</p>}

          </div>
          

            <Title3>Property Type</Title3>
            <CheckboxesContainer>
              <CheckboxInLineField>
                <Field 
                  type="checkbox" 
                  id="appartment" 
                  name="apparment" 
                />
                <Label for="appartment"> Appartment</Label>
                {/* {errors.apparment && touched.apparment && 
            <p style={{color:"red"}}>{errors.apparment}</p>} */}
              </CheckboxInLineField>
              <CheckboxInLineField>
                <Field 
                  type="checkbox" 
                  id="house" 
                  name="house" 
                />
                <Label for="appartment"> House</Label>
              {/* {errors.house && touched.house && 
            <p style={{color:"red"}}>{errors.house}</p>} */}
              </CheckboxInLineField>
            </CheckboxesContainer>
          <RoomsAndAreaContainer>

            <div>
               <Field name="Bedrooms">
                {({ field }) => (
                  <select  required {...field}>
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
                  <select required {...field}>
                    <option value="" disabled selected hidden>select...</option>
                    {[1,2,3,4,5,6].map(i => 
                    <option key={i} value={i}>{i}</option>
                    )}
                  </select>
                )}
              </Field>
            </div>
            <div>
              <Label htmlFor="name">Area in M2</Label>
              <Field 
                className="area" 
                name="area"
                id= "area"
                type="number" 
                min="100"
                step="25" 
                max="99999" 
                placeholder="100" 
              />
            {errors.area && touched.area && 
            <p style={{color:"red"}}>{errors.area}</p>}

            </div>
          </RoomsAndAreaContainer>

           <CheckboxInLineField>

              <Field 
                type="checkbox" 
                id="pets" 
                name="pets" 
              />
              <Label htmlFor="pets"> Pets allowed</Label>
            </CheckboxInLineField>
              <p className="quote">Allowing pets increases the likehood of renters  liking the property by 9001%. It also makes you a better person.</p>


          <div className="textitems">
            <Label htmlFor="name">About this property</Label>
            <textarea 
              className="paratext"
              name="textarea" 
              type="textarea" 
              id="textarea" 
              placeholder="My appartment is great because..."
            />
            {errors.textarea && touched.textarea && 
            <p style={{color:"red"}}>{errors.textarea}</p>}
            
              <p>Renters will read this first, so highlight any features or important information the apartment has.</p>
          </div>
          <PhotosContainer>            
              <Title2>Photos</Title2>
                <p>Upload as many photos as you wish</p>

              <div className="subphotos">
                <Button icon={<RiUploadLine/>} color={'primary'}>Choose a file</Button>

              <Subphotos>
                <Button type="submit" icon={<RiUploadLine/>} color={'primary'}>Choose a file</Button>

                <p className="">No file chosen</p>
              </Subphotos>
              </div>
              <p>Only images, max 5MB</p>

              <div className="uploadbox">
                <div 
                  className="photobox"
                    > 
                  <p className="photoboxtext">No photos yet</p>
                </div>
              </div>

              <Uploadbox>
                <Photobox> 
                  <Photoboxtext>No photos yet</Photoboxtext>
                </Photobox>
              </Uploadbox>

              <Button className="publishbutton" type="submit" color={'primary'} >Publish property listing </Button>
            </PhotosContainer>
           
      </FormContainer>
      )}
      </Formik>
    </PropContainer>
  );
}

export default ListingRent;