import React from "react";
import { useNavigate } from "react-router-dom";
import Menu from "../component/Menu/Menu";
import { useAuth } from "../context/auth-context";
import {ReactComponent as ReactPana} from "../styles/logo/pana.svg";
import {ReactComponent as ReactRafiki} from "../styles/logo/rafiki.svg";
import styled from "@emotion/styled";
import "./signup.css"



const Signup = () =>{
  const navigate = useNavigate();
  const { setProfileType } = useAuth();

  const Container = styled.div`
	min-height: 100vh;
	display: flex;
  flex-direction: column;
  align-items: center;
	justify-content: center;
`;

const ProfilesContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
gap: 3rem;
margin-top: 3rem;
`;

const Card = styled.div`
width: 280px;
height: 274px;
border-radius: 5px;
box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
background-color: #fff;
cursor: pointer;
`;

const TitleContainer = styled.div`
text-align: center;
`;
const SubTitle = styled.p`
font-family: 'Montserrat';
font-style: normal;
font-weight: 200;
font-size: 1.5rem;
line-height: 2rem;
text-align: center;
`;
const BigTitle = styled.p`
font-family: 'Montserrat';
font-style: normal;
font-weight: 300;
font-size: 3.5rem;
line-height: 5rem;
`;

const CardTitle = styled.p`
  text-align: center;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 1.25rem;
  line-height: 1.75rem;
`;

const CardSubtitle = styled.p`
  text-align: center;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 0.87rem;
  line-height: 1.25rem;
`;

function CardType({ title, subtitle }) {
  return (
        <div>  
          <CardTitle>{title}</CardTitle>
          <CardSubtitle>{subtitle}</CardSubtitle>
        </div>
  );
}

  return(
    <Container>
      <Menu/>

        <TitleContainer>
          <SubTitle> Selecciona el perfil con el que te identificas</SubTitle>
          <BigTitle>¿Qué estás buscando?</BigTitle>
        </TitleContainer>

      <ProfilesContainer>

        <Card onClick={() => { 
          navigate('/signup/profile');
          setProfileType({profile_type: 1})
          }}>
          
          <ReactRafiki padding="1rem 1.5rem 0.5rem 1.5rem;"/>
          <CardType title="Landlord" subtitle="You want to rent or sell a home" />
        </Card>

        <Card onClick={() => { 
          navigate('/signup/profile');
          setProfileType({profile_type: 0})
        }}> 
          <ReactPana padding="1rem 1.5rem 0.5rem 1.5rem;"/>
          <CardType title="Home seeker" subtitle="You want to find a home" />

        </Card>

      </ProfilesContainer>
    </Container>
  );
}

export default Signup