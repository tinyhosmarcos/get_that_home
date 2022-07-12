import styled from '@emotion/styled'
import React from 'react'
import { RiMoneyDollarCircleFill, RiCoinsLine, RiMoneyDollarCircleLine, RiBuildingLine, RiHeartFill, RiHome8Line, RiCloseCircleLine} from "react-icons/ri";
import { BiBed, BiBath, BiArea } from "react-icons/bi";
import { MdPets } from "react-icons/md";
import { typography } from '../../styles/typography';
import { shadows } from '../../styles/shadows';
import { colors } from '../../styles/colors';
import { FaEdit } from "react-icons/fa";

const PropertyCard = ({...props}) => {
  const CardContainer = styled.div`
    position: relative;
    width: 300px;
    min-height: 360px;
    border-radius: 8px;
    ${shadows.shadow1}
    ${props => props.isOwner ? null : `border-bottom: 7px solid ${colors.pink['200']}` }
  `
  const ImageContainer = styled.div`
    width: 300px;
    height: 200px;
    & img {
      width:300px;
      height: 200px;
      border-top-left-radius: 8px;
      border-top-right-radius: 8px;
    }
  `
  const CardDetails = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  `
  const CardDetailsHeading = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 8px 10px;
    & div {
      display: flex;
      align-items: center;
      gap: 10px;
      & p {
        margin: 0;
        ${typography.body1}
      }
      & svg {
        color: ${colors.gray['medium']};
      }
    }
  `
  const CardDetailsDescription = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 10px;
    gap: 28px;
    & p {
      ${typography.subtitle1}
      margin: 0;
    }
    & div {
      display: flex;
      align-items: center;
      gap: 10px;
      & p {
        margin: 0;
        ${typography.body1}
      }
      & div {
        & svg {
          color: ${colors.gray['medium']};
        }
      }
    }
  `
  const CardFooter = styled.div`
    width: 300px;
    height: 7px;
    border-radius: 8px;
    background-color: ${colors.pink['200']}
  `
  const CardOptionsOwner = styled.div`
    display: flex;
    justify-content: space-around;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    background-color: ${colors.pink['200']};
    & div {
      display: flex;
      gap: 10px;
      align-items: center;
      & p {
        color: ${colors.white};
      }
      & svg {
        color: ${colors.white};
        width: 18px;
        height: 18px;
      }
    }
  `
  const CardChip = styled.div`
    ${props => props.operation ? 
      `background-color: ${colors.pink['50']};` :
      `background-color: ${colors.pink['200']};`
    }
    background-color: ${colors.pink['50']};
    position: absolute;
    right: 0px;
    border-top-right-radius: 8px;
    width: 110px;
    height: 28px;
    padding: 4px 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.25rem;
    & p {
      margin: 0;
      ${typography.body1}
      color: ${colors.white};
    }
    & svg {
      color: ${colors.white};
      width: 20px;
      height: 20px;
    }
  `
  const data = {
    operation: true,
    type: true,
    pet: false,
    favorite: false,
  }

  return (
    <CardContainer {...props}>
      <CardChip props={data}>
        { data.operation ? (
          <>
            <RiCoinsLine/>
            <p>For Rental</p>
          </>
          
        ) : (
          <>
            <RiMoneyDollarCircleFill/>
            <p>For Sale</p>
          </>
        )}
        
      </CardChip>
      <ImageContainer>
        <img src="https://www.gannett-cdn.com/-mm-/05b227ad5b8ad4e9dcb53af4f31d7fbdb7fa901b/c=0-64-2119-1259/local/-/media/USATODAY/USATODAY/2014/08/13/1407953244000-177513283.jpg" alt="hotel room" />
      </ImageContainer>
      <CardDetails>
        <CardDetailsHeading>
          <div>
            <RiMoneyDollarCircleLine/>
            <p>3000</p>
          </div>
          <div>
            {data.type ? <RiBuildingLine/> : <RiHome8Line/> }
            <p>Apartment</p>
          </div>
        </CardDetailsHeading>
        <CardDetailsDescription>
          <div>
            <p>86872 Jacob Gateway, Durganport, WV 48044</p>
          </div>
          <div>
            <div>
              <BiBed/>
              <p>4</p>
            </div>
            <div>
              <BiBath/>
              <p>2</p>
            </div>
            <div>
              <BiArea/>
              <p>180 m2</p>
            </div>
            {data.pet ? <div><MdPets/></div> : null }
            {data.favorite ? <div><RiHeartFill/></div> : null }
          </div>
        </CardDetailsDescription>
        {props.isOwner ? (
        <CardOptionsOwner>
          <div>
            <FaEdit/>
            <p>EDIT</p>
          </div>
          <div>
            <RiCloseCircleLine style={{width: '20px', height: '20px'}} />
            <p>CLOSE</p>
          </div>
        </CardOptionsOwner>)
        : null}
      </CardDetails>
    </CardContainer>
  )
}

export default PropertyCard