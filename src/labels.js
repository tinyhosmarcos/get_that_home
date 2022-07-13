import React from "react";
import Select from 'react-select'
import { components } from "react-select";
import styled from "@emotion/styled"

const Select = styled.select`
  padding: 0.5rem 1rem;
  gap: 0.5rem;
  width: 280px;
  height: 36px;
  display: flex;
  gap: 0.25rem;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
  cursor: pointer;
`;


const suppliers = [
  {label: "Manufacturing" , value: "Manufacturing"},
  {label: "Legal" , value: "Legal"},
  {label: "Education" , value: "Education"},
  {label: "Goverment" , value: "Goverment"},
  {label: "Sales" , value: "Sales"},
]


const Option = (props) => {
  return (
    <div>
      <components.Option {...props}>
        <input
          type="checkbox"
          checked={props.isSelected}
          onChange={() => null}
        />{" "}
        <label>{props.label}</label>
      </components.Option>
    </div>
  );
};


export const Suppliers = () => {


  const handleSelectChange = ({ value }) =>{
     
  }
     return (
         <div className = " Suppliers-container ">
            <Select
              options ={ suppliers }
              onChange ={ handleSelectChange }
              className="basic-multi-select"
              isMulti
              name="info"
                components={{
                  Option
                    }}
                    allowSelectAll={true}
             />

          </div>
     )
 }

