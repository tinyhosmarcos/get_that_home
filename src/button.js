import React from "react";
import styled from "@emotion/styled";
import { colors} from "./styles/colors";
import { typography } from "./styles/typography";

const StyledButton = styled.button`
  padding: 0.5rem 1rem;
  gap: 0.5rem;
  background-color: ${colors.pink100}; 
  ${typography.button};
  color: ${colors.white};
  border: none;
  border-radius: 1rem;
`;

function Button (props){
  return (
    <StyledButton>
      {props.Icon && <props.Icon />}
      {props.children}
    </StyledButton>
  );
}

export default Button;