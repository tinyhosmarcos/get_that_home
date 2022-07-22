import styled from '@emotion/styled'
import React from 'react'
import { RiMoneyDollarCircleFill, RiCoinsLine, RiMoneyDollarCircleLine, RiBuildingLine, RiHeartFill, RiHome8Line, RiCloseCircleLine} from "react-icons/ri";
import { BiBed, BiBath, BiArea } from "react-icons/bi";
import { MdPets } from "react-icons/md";
import { typography } from '../../styles/typography';
import { shadows } from '../../styles/shadows';
import { colors } from '../../styles/colors';
import { FaEdit } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const PropertyCard = ({data, ...props}) => {
  const navigate = useNavigate();

  const CardContainer = styled.div`
    position: relative;
    width: 300px;
    min-height: 360px;
    border-radius: 8px;
    cursor: pointer;
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
    width: 123px;
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

  return (
    <CardContainer onClick={() => navigate(`/property/${data.id}`)} {...props}>
      <CardChip>
        {data && data.operation_type ? (
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
        <img src={data && `${data.image_url[0]}`} alt="hotel room" />
      </ImageContainer>
      <CardDetails>
        <CardDetailsHeading>
          <div>
            <RiMoneyDollarCircleLine/>
            <p>{data && data.monthly_price}</p>
          </div>
          <div>
            {data && data.property_type ? <RiHome8Line/> : <RiBuildingLine/>}
            <p>Apartment</p>
          </div>
        </CardDetailsHeading>
        <CardDetailsDescription>
          <div>
            <p>{data && data.address}</p>
          </div>
          <div>
            <div>
              <BiBed/>
              <p>{data && data.bedrooms_count}</p>
            </div>
            <div>
              <BiBath/>
              <p>{data && data.bathrooms_count}</p>
            </div>
            <div>
              <BiArea/>
              <p>{data && data.area} m2</p>
            </div>
            {data && data.pets_allowed ? <div><MdPets/></div> : null }
            {/* {data && data.favorite ? <div><RiHeartFill/></div> : null } */}
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