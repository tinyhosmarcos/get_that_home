import React from "react";
import { useNavigate } from "react-router-dom";
import Menu from "../component/Menu/Menu";
import { useAuth } from "../context/auth-context";
import {ReactComponent as ReactPana} from "../styles/logo/pana.svg";
import {ReactComponent as ReactRafiki} from "../styles/logo/rafiki.svg";
import styled from "@emotion/styled";
import { colors } from "../styles/colors";
import { shadows } from '../styles/shadows'
import { typography } from "../styles/typography";

// import "./signup.css"

const Container = styled.div`
background: ${colors.pink['300']};
`;

const SecondContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background: ${colors.white};
background: linear-gradient(0deg, ${colors.white} 50%, ${colors.pink['300']} 50%);
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
${shadows.shadow1};
background: ${colors.white};
cursor: pointer;
`;

const TitleContainer = styled.div`
text-align: center;
margin-top: 1rem;
`;

const SubTitle = styled.p`
font-family: 'Montserrat';
${typography.headline5}
text-align: center;
`;
const BigTitle = styled.p`
font-family: 'Montserrat';
${typography.headline2};
font-style: normal;
`;

const CardTitle = styled.p`
text-align: center;
font-family: 'Montserrat';
font-style: normal;
${typography.headline6};
`;

const CardSubtitle = styled.p`
text-align: center;
font-family: 'Montserrat';
${typography.subtitle2}
letter-spacing: 0.1px
`;


const Signup = () => {
  const navigate = useNavigate();
  const { setProfileType } = useAuth();


    function CardType({ title, subtitle }) {
      return (
            <div>  
              <CardTitle>{title}</CardTitle>
              <CardSubtitle>{subtitle}</CardSubtitle>
            </div>
      );
    }

  return(
    <>
    <Container>
         <Menu />
      <SecondContainer>
        <TitleContainer>
          <SubTitle> Selecciona el perfil con el que te identificas</SubTitle>
          <BigTitle>¿Qué estás buscando?</BigTitle>
        </TitleContainer>

      <ProfilesContainer>

        <Card onClick={() => { 
          navigate('/signup/profile');
          setProfileType({profile_type: 1})
          }}>
          
          <ReactRafiki style={{margin: '1rem 1.5rem 0.5rem 1.5rem'}}/>
          <CardType title="Landlord" subtitle="You want to rent or sell a home" />
        </Card>

        <Card onClick={() => { 
          navigate('/signup/profile');
          setProfileType({profile_type: 0})
        }}> 
          <ReactPana style={{margin: '1rem 1.5rem 0.5rem 1.5rem'}} />
          <CardType title="Home seeker" subtitle="You want to find a home" />

        </Card>

      </ProfilesContainer>
      </SecondContainer>
    </Container>
    </>
  );
}

export default Signup