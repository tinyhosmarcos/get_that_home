import React from "react";
import styled from "@emotion/styled";
import { colors } from "../../styles/colors";
import { typography } from "../../styles/typography";

const buttonSize = {
  small:`
    height: 32px;
  `,
  large:`
    height: 56px;
  `,
}

const buttonColor = {
  primary: `
    background-color: ${colors.pink['50']};
    color: ${colors.white};
    border: none;
    &:hover {
      background-color: ${colors.pink['200']};
    }
  `,
  secondary:`
    background-color: ${colors.white};
    border: 1px solid ${colors.pink['50']};
    color: ${colors.gray['medium']};
    &:hover {
      background-color: ${colors.pink['50']}20;
      & svg {
        color: ${colors.gray['dark']};
      }
    }
  `,
  ghost:`
    background-color: ${colors.white};
    border: none;
    color: ${colors.gray['medium']};
    &:hover {
      background-color: ${colors.pink['50']}20;
      color: ${colors.gray['dark']};
      & svg {
        color: ${colors.gray['dark']};
      }
    }
  `,
  disable:`
    background-color: ${colors.gray['medium']}20;
    border: none;
    color: ${colors.gray['light']};
  `
}

const StyledButton = styled.button`
  padding: 0.5rem 1rem;
  gap: 0.5rem;
  height: 40px;
  display: flex;
  gap: 9px;
  justify-content: center;
  align-items: center;
  ${props => { return buttonColor[props.color] }}
  border-radius: 1rem;
  cursor: pointer;
  ${props => { return buttonSize[props.size]} }
  & svg {
    width: 20px;
    height: 20px;
  }
  & p {
    margin: 0;
    ${typography.button};
  }
`;

function Button ({children, icon, ...props}){
  return (
    <StyledButton {...props}>
      {icon}
      <p>
        {children}
      </p>
    </StyledButton>
  );
}

export default Button;