import styled from '@emotion/styled';
import React from 'react';
import { useAuth } from '../../context/auth-context';
import { shadows } from '../../styles/shadows';
import { typography } from '../../styles/typography';
import Button from '../Button/Button';
import { RiHeartLine, RiUserReceived2Line } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";
import { colors } from '../../styles/colors';

const PropertyContact = ({property}) => {
  const { user } = useAuth();
  const [contactInfo, setContactInfo] = React.useState(false);
  React.useEffect(() => {
    contactInfo ? setContactInfo(false) : console.log('hola');
  },[]);
  const ContactContainer = styled.div`
    width: 290px;
    height: 212px;
    padding: 1rem;
    & > div {
      border-radius: 8px;
      padding: 16px 23px;
      ${shadows.shadow1};
      display: flex;
      flex-direction: column;
      gap: 16px;
      align-items: center;
    }
  `
  const ContactDescription = styled.p`
    width: 175px;
    height: 67px;
    text-align: center;
    ${typography.body1}
  `
  const ContactUserLogin = styled.div`
    display: flex;
    flex-direction: column;
    gap: 14px;
    align-items: center;
    & svg {
      width: 20px;
      height: 20px;
    }
    & p {
      cursor: pointer;
      ${typography.caption}
    }
  `
  const UserDetails = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    & > h6 {
      ${typography.headline6}
      color: ${colors.gray['dark']};
    }
    & p {
      ${typography.body2}
    }
    & > div {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  `
  return (
    <ContactContainer>
        {user ? (
          <>
            {property.owner['email'] === user.email ? (
              <>
                 <Button handleClick={() => console.log('falta')} icon={<TiEdit />} color={'primary'}>EDIT PROPERTY</Button>
              </>  
            ):(
              <div>
                {!contactInfo ? (
                <>
                  <Button handleClick={() => setContactInfo(true)} color={'primary'}>CONTACT ADVERTISER</Button>
                  <ContactUserLogin>
                    <RiHeartLine />
                    <p>Add to favorites</p>
                  </ContactUserLogin>
                </>
                ):(
                  <UserDetails>
                    <h6>Contact information</h6>
                    <div>
                      <p className='userDetailsCat' style={{color: colors.pink['200']}}>Email</p>
                      <p className='userDetailsInfo' style={{color: colors.gray['dark']}}>{property.owner['email']}</p>
                    </div>
                    <div>
                      <p className='userDetailsCat' style={{color: colors.pink['200']}}>Phone</p>
                      <p className='userDetailsInfo' style={{color: colors.gray['dark']}}>{property.owner['phone']}</p>
                    </div>
                  </UserDetails>
                )}
              </div>
            )}
          </>
        ):(
          <div>
            <ContactDescription>Log in or Join to contact the advertiser</ContactDescription>
            <Button icon={<RiUserReceived2Line />} color={'primary'} size={'small'}>LOGIN</Button>
          </div>
        )}
  </ContactContainer>
  )
}

export default PropertyContact