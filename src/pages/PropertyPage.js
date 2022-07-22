import styled from '@emotion/styled';
import React from 'react'
import { useParams } from 'react-router-dom';
import Menu from '../component/Menu/Menu';
import { useAuth } from '../context/auth-context'
import { RiMoneyDollarCircleLine, RiHeartLine, RiArrowRightSLine, RiArrowLeftSLine} from "react-icons/ri";
import { colors } from '../styles/colors';
import { typography } from '../styles/typography';
import { BiBed, BiBath, BiArea } from "react-icons/bi";
import { MdPets } from "react-icons/md";
import Footer from '../component/Footer/Footer';
import PropertyContact from '../component/Property-contact/PropertyContact';


const PropertyPage = () => {
  const { properties } = useAuth();
  const { id } = useParams();
  const [count, setCount] = React.useState(0);

  const PropertyPage = styled.div`
    padding: 0 120px;
  `
  const PropertyContainer = styled.div`
    padding: 2rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 1rem;
  `
  const PropertyWrapper = styled.div`
  `
  const PropertyDetails = styled.div`
    border-top: 1px solid ${colors.pink['200']};
    border-bottom: 1px solid ${colors.pink['200']};
    padding: 1rem 0;
    display: flex;
    justify-content: space-around;
    & div {
      display: flex;
      gap: 0.5rem;
      align-items: center;
    }
    & svg {
      width: 26px;
      height: 26px;
    }
    & h5 {
      ${typography.headline5}
    }
  `
  const PropertyDescription = styled.div`
    padding: 1rem 0;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    & h6 {
      ${typography.headline6}
      color: ${colors.pink['200']};
    }
    & p {
      ${typography.body1}
      color: ${colors.gray['dark']};
    }
  `
  const PropertyLocation = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    & h6 {
      ${typography.headline6}
      color: ${colors.pink['200']}
    }
  `
  const PropertyHeading = styled.div`
    display: flex;
    justify-content: space-around;
    & svg {
      width: 40px;
      height: 40px;
    }
  `
  const PropertyImage = styled.div`
    width: 512px;
    height: 384px;
    background-color: ${colors.gray['medium']}11;
    display: flex;
    align-items: center;
    & img {
      width: 512px;
      height: 340px;
    }
  `
  const PropertyMaintenance = styled.div`
    display: flex;
    justify-content: flex-end;
    color: ${colors.gray['medium']};
    & h6 {
      ${typography.headline6}
    }
  `
  const PropertyPrice = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 12px;
    ${typography.headline4}
    color: ${colors.gray['medium']}
  `
  const PropertyrExpenses = styled.div`
    display: flex;
    flex-direction: column;
    padding-bottom: 20px;
  `
  const PropertyAddress = styled.div`
    & h4 {
      ${typography.headline4}
      color: ${colors.gray['medium']}
    }
    & p {
      ${typography.subtitle1}
      color: ${colors.gray['medium']}
    }
  `
  const ArrowImages = styled.div`
    display: flex;
    align-items: center;
    & svg {
      width: 40px;
      height: 40px;
      cursor: pointer;
    }
  `

  const [property] = properties.filter(property => property.id === +id);
  const location = property && ("https://maps.google.com/maps?q=" + (property.latitud).toString() + "," + (property.longitud).toString() + "&hl=es&z=16&amp&output=embed")
  const addressLines = (property && property.address && property.address.split(', ')) || []
  const [ direction, ...district ] = addressLines;
  let image = property && property.image_url[count];
  function changeCount(key){
    switch (key) {
      case 'right':
        setCount(count => count === 0 ? property.image_url.length - 1 : count + 1);
        break;
      case 'left':
        setCount(count => count === 0 ? property.image_url.length - 1 : count - 1);
        break;
      default:
        break;
    }
    
    console.log(count)
  }

  React.useEffect(() => {
    image = property && property.image_url[count];
  },[count])

  return (
    <div>
      <Menu />
      {property && 
        <PropertyPage>
          <PropertyContainer>
            <PropertyWrapper>
              <div style={{width: '100%', display: 'flex', justifyContent: 'space-around', cursor: 'pointer'}}>
                <ArrowImages>
                  <RiArrowLeftSLine onClick={() => changeCount('right')} />
                </ArrowImages>
                <PropertyImage>
                  <img src={image} alt="hotel room" />
                </PropertyImage>
                <ArrowImages>
                  <RiArrowRightSLine onClick={() => changeCount('left')} />
                </ArrowImages>
              </div>
              <div>
                <PropertyHeading>
                  <PropertyAddress>
                    <h4>{direction}</h4>
                    <p>{district.join(', ')}</p>
                  </PropertyAddress>
                  <PropertyrExpenses>
                    <PropertyPrice>
                      <RiMoneyDollarCircleLine/>
                      <h4>{property.monthly_price}</h4>
                    </PropertyPrice>
                    {property.maintenance && 
                      <PropertyMaintenance>
                        <h6>+ {property.maintenance}</h6>
                      </PropertyMaintenance>}
                  </PropertyrExpenses>
                </PropertyHeading>
                <PropertyDetails>
                  <div>
                    <BiBed />
                    <h5>{property.bedrooms_count} bedrooms</h5>
                  </div>
                  <div>
                    <BiBath />
                    <h5>{property.bathrooms_count} bedrooms</h5>
                  </div>
                  <div>
                    <BiArea />
                    <h5>{property.area} m2</h5>
                  </div>
                  <div>
                    <MdPets />
                    {property.pets_allowed ? <h5>Pets allowed</h5> : <h5>Pets not allowed</h5>}
                  </div>
                </PropertyDetails>
                <PropertyDescription>
                  <h6>About this property</h6>
                  <p>{property.description}</p>
                </PropertyDescription>
                <PropertyLocation>
                  <h6>Location</h6>
                  <p>{property.address}</p>
                  <iframe
                    title={property.id} 
                    width="760px" 
                    height="760px"
                    src={location}
                  >
                  </iframe>
                </PropertyLocation>
              </div>
            </PropertyWrapper>
            <PropertyContact property={property} />
          </PropertyContainer>
        </PropertyPage>}
      <Footer />
    </div>
  )
}

export default PropertyPage