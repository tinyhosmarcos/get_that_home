import styled from '@emotion/styled';
import React from 'react';
import Button from '../Button/Button';
import { RiSearchLine, RiUserAddLine, RiUserReceived2Line, RiLogoutCircleLine, RiHeartFill, RiUserLine, RiHome8Line } from "react-icons/ri";
import { shadows } from '../../styles/shadows';
import { colors } from '../../styles/colors';
import {ReactComponent as ReactLogo} from '../../styles/logo/Logo.svg'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/auth-context';

const Menu = () => {
  const MenuContainer = styled.div`
    height: 72px;
    background-color: ${colors.white};
    padding: 0 120px;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    ${shadows.shadow1}
  `
  const MenuWrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  `
  const MenuBottons = styled.div`
    display: flex;
    gap: 1rem;
    align-items: center;
  `
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  return (
    <MenuContainer>
      <MenuWrapper>
        <div>
          <ReactLogo/>
        </div>
        <MenuBottons>
          <Button icon={<RiSearchLine/>} color={'ghost'} size={'small'} >FIND A HOME</Button>
          {user ? 
          (
            <>
              <Button handleClick={ async () => await logout()} icon={<RiLogoutCircleLine/>} color={'secondary'}>LOGOUT</Button>
              {user.profile_type === 'landlord' ? 
                <Button icon={<RiHome8Line/>} color={'primary'}>PROPERTIES</Button>
                : 
                <Button icon={<RiHeartFill/>} color={'primary'}>SAVED PROPERTIES</Button>
              }
              
              <Button icon={<RiUserLine/>} color={'primary'}>PROFILE</Button>
            </>
          )
          : 
          (
            <>
              <Button icon={<RiUserAddLine/>} color={'secondary'} style={{width: '101px'}}>JOIN</Button>
              <Button handleClick={() => navigate('/login')} icon={<RiUserReceived2Line/>} color={'primary'} style={{width: '101px'}}>LOGIN</Button>
            </>
          )}
        </MenuBottons>
      </MenuWrapper>
      
    </MenuContainer>
  )
}

export default Menu