import styled from '@emotion/styled';
import { Field, Form, Formik } from 'formik';
import React from 'react';
import Button from '../component/Button/Button';
import Menu from '../component/Menu/Menu';
import { colors } from '../styles/colors';
import { shadows } from '../styles/shadows';
import { typography } from '../styles/typography';
import {ReactComponent as ReactIllustration} from '../../src/styles/logo/IllustrationLandPage.svg';
import PropertyCard from '../component/Card/PropertyCard'
import { RiGithubFill, RiLinkedinBoxLine, RiReactjsLine } from "react-icons/ri";
import { DiRuby } from "react-icons/di";
import member1  from '../styles/logo/member1.png';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/auth-context'

const Landpage = () => {
  const { properties } = useAuth();
  const navigate = useNavigate();

  const FormWrapper = ({ className, ...props }) => (
    <Form className={className} {...props} />
  );
  const Section1 = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    & .content {
   
    }
    & div {
      & .landPageTitle {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        margin: 64px 0;
        & h2 {
          margin: 0;
          ${typography.headline2}
        }
        & h5 {
          margin: 0;
          ${typography.headline5}
        }
      }

    }
  `
  const CustomForm = styled(FormWrapper)`
    padding: 0.5rem 0.5rem;
    display: flex;
    flex-direction: row;
    height: 72px;
    align-items: center;
    border-radius: 8px;
    ${shadows.shadow1}
    & div {
      width: 160px;
      padding: 0 0.5rem;
      text-align: left;
      border-right: 1px solid ${colors.background};
      & label {
        ${typography.overline}
        color: ${colors.gray['medium']}
      }
      & select {
        width: 100%;
        ${typography.body1}
        color: ${colors.gray['dark']};
        padding: 0.5rem;
        border: none;
        outline: none;
      }
    }
    & .selectAddress {
      width: 304px;
    }
    & .submitButton{
      display: flex;
      justify-content: center;
      width: 90px;
      border: none;
      padding: 0 0.5rem;
      margin: 0;
      
    }
  `
  const HomePageContainer = styled.div`
    position: relative;
    & .LandingPage {
      position: absolute;
      width: 100%;
      height: auto;
    }
    & .BackgroundContainer {
      margin-top: 15px;
      & svg {
        width: 100vw;
        height: 80vh;
      }
    }
  `
  const Section2 = styled.div`
    padding: 64px 0;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  `
  const Section2Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    & .propertyCardContainer {
      display: flex;
      gap: 3rem;
    }
    & .section2Title {
      
      & p {
        margin: 0 0 1rem 0;
        ${typography.subtitle1}
      }
      & h4 {
        margin: 0 0 2rem 0;
        ${typography.headline4}
        color: ${colors.pink['200']};
      }
    }
  `
  const Section3 = styled.div`
    background-color: ${colors.pink['50']}29;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 3rem 260px;
    & div {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 2rem;
      & h4 {
        margin: 0;
        ${typography.headline4}
        color: ${colors.gray['dark']}
        text-align-last: auto;
      }
    }
  `
  const Section4 = styled.div`
    display: flex;
    padding: 3rem 0;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 26px;
    & .section4Title{
      & h3 {
        margin: 0;
        color: ${colors.pink['200']};
        ${typography.headline3}
      }
    }
  `
  const MembersContainer = styled.div`
    display: flex;
    gap: 5rem;
    & div {
      text-align: center;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      & h5 {
        margin: 0;
        ${typography.headline6}
      }
      & div {
        display: flex;
        justify-content: center;
        flex-direction: row;
        gap: 53px;
        & svg {
          width: 20px;
          height: 20px;
        }
      }
    }
  `
  const MemberImage = styled.div`
    width: 180px;
    heigth: 180px;
  `
  const HomePageFooter = styled.footer`
    background-color: ${colors.background};
    display: flex;
    justify-content: center;
    padding: 1rem 0;
    & .footerContainer {
      display: flex;
      gap: 165px;
      flex-container: row;
      & div {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.3rem;
        & .codeTechContainer {
          display: flex;
          flex-direction: row;
          gap: 1rem;
          & p {
            color: ${colors.gray['medium']};
            ${typography.subtitle2}
            margin: 0;
          }
          & svg {
            color: ${colors.gray['medium']};
          }
          & div {
            display: flex;
            flex-direction: row;
            gap: 10px;
          }
        }
      }
      & p {
        color: ${colors.gray['medium']};
        ${typography.subtitle2}
        margin: 0;
      }
    }
  `

  function randomWithNoRepeats(array) {
    var copy = array.slice(0);
    return function() {
      if (copy.length < 1) { copy = array.slice(0); }
      var index = Math.floor(Math.random() * copy.length);
      var item = copy[index];
      copy.splice(index, 1);
      return item
    }
  }

  let chooser = randomWithNoRepeats(properties);
  return (
    <HomePageContainer>
      <Menu/>
      <Section1 className='LandingPage'>
        <div className='content'>
          <div className='landPageTitle'>
            <h2>Meet your new Home</h2>
            <h5>The easiest way to find where you belong</h5>
          </div>
          <Formik
              initialValues={{
                properType: '',
                operaType: '',
                address:'',
              }}
              onSubmit={ (values) => {
                console.log(values)
              }}
            >
              <CustomForm>
                <div>
                  <label htmlFor="properType">I'm looking for</label>
                  <br />
                  <Field as="select" id="properType" name="properType">
                    <option value="apartment">An Aparment</option>
                    <option value="house">A House</option>
                  </Field>
                </div>
                <div>
                  <label htmlFor="operaType">I want to</label>
                  <br />
                  <Field as="select" id="operaType" name="operaType">
                    <option value="rent">Rent</option>
                    <option value="sale">Sale</option>
                  </Field>
                </div>
                <div className='selectAddress'>
                  <label htmlFor="address">Where</label>
                  <br />
                  <Field as="select" id="address" name="address">
                    <option value="" defaultValue disabled hidden>Favorite district</option>
                    <option value="san miguel">San Miguel</option>
                  </Field>
                </div>
                <div className='submitButton'>
                  <Button color={'primary'}>SEARCH</Button>
                </div>
              </CustomForm>
            </Formik>
        </div>
      </Section1>
      <div className='BackgroundContainer'>
        <ReactIllustration/>
      </div>
      <Section2>
        <Section2Wrapper>
          <div className='section2Title'>
            <p>Find an Aparment you love</p>
            <h4>Homes for rent at the best prices</h4>
          </div>
          <div className='propertyCardContainer'>
            <PropertyCard data={chooser()}/>
            <PropertyCard data={chooser()}/>
            <PropertyCard data={chooser()}/>
          </div>
        </Section2Wrapper>
      </Section2>
      <Section3>
        <div>
          <h4>
            Getting someone to rent your apartment has never been this easy
          </h4>
          <Button handleClick={() => navigate('/signup/type')} color={'primary'} size={'large'}>CREATE AN ACCOUNT NOW</Button>
        </div>
      </Section3>
      <Section4>
        <div className='section4Title'>
          <h3>Meet the team</h3>
        </div>
        <MembersContainer>
          <div>
            <MemberImage><img src={member1} alt='miembro 1'/></MemberImage>
            <h5>Ruby Ramirez</h5>
            <div>
              <RiGithubFill/>
              <RiLinkedinBoxLine/>
            </div>
          </div>
          <div>
            <MemberImage><img src={member1} alt='miembro 1'/></MemberImage>
            <h5>Ruby Ramirez</h5>
            <div>
              <RiGithubFill/>
              <RiLinkedinBoxLine/>
            </div>
          </div>
          <div>
            <MemberImage><img src={member1} alt='miembro 1'/></MemberImage>
            <h5>Ruby Ramirez</h5>
            <div>
              <RiGithubFill/>
              <RiLinkedinBoxLine/>
            </div>
          </div>
          <div>
            <MemberImage><img src={member1} alt='miembro 1'/></MemberImage>
            <h5>Ruby Ramirez</h5>
            <div>
              <RiGithubFill/>
              <RiLinkedinBoxLine/>
            </div>
          </div>
        </MembersContainer>
      </Section4>
      <HomePageFooter>
        <div className='footerContainer'>
          <p>© 2021 - Find That Home</p>
          <div>
            <p>Source Code</p>
            <div className='codeTechContainer'>
              <div>
                <DiRuby/>
                <p>Ruby on Rails REST API</p>
              </div>
              <div>
                <RiReactjsLine/>
                <p>React Responsive SPA</p>
              </div>
            </div>
          </div>
          <p>Codeable - Cohort 6 Final Project</p>
        </div>
      </HomePageFooter>
    </HomePageContainer>
  )
}

export default Landpage