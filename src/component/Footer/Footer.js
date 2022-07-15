import React from 'react';
import {ReactComponent as ReactLogo} from '../../styles/logo/Logo.svg';
import { RiGithubFill } from "react-icons/ri";
import styled from '@emotion/styled';
import { RiReactjsLine } from "react-icons/ri";
import { DiRuby } from "react-icons/di";
import { colors } from '../../styles/colors';
import { typography } from '../../styles/typography';

const Footer = () => {
  const FooterPage = styled.div`
    padding: 0 120px;
    background-color: ${colors.secondback};
    border-top: 1px solid ${colors.pink['200']};
  `
  const FooterWrapper = styled.div`
    display: flex;
    flex-direction: row;
    padding: 1rem 2rem;
    justify-content: space-around;
  `
  const FooterMember = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 12px;
    gap: 0.5rem;
    & > p {
      ${typography.caption}
    }
    & div {
      & p {
        ${typography.body2}
      }
    }
  `
  const MembersGit = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 4rem;
    row-gap: 0.25rem;
    & div {
      display: flex;
      flex-direction: row;
      gap: 0.25rem;
    }
  `
  const FooterTech = styled.div`
    padding-top: 12px;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    & > p {
      ${typography.caption}
    }
    & div {
      & p {
        ${typography.body2}
      }
    }
  `
  const FooterTechDetails = styled.div`
    display: flex;
    flex-direction: column;
    & div {
      display: flex;
      gap: 11px;
    }
  `
  const FooterDetails = styled.div`
    & div {
      ${typography.body2}
    }
  `
  return (
    <FooterPage>
      <FooterWrapper>
        <FooterDetails>
          <ReactLogo />
          <div>
            <p>© 2021 - Get That Job</p>
            <p>Codeable - Cohort 3 Final Project</p>
          </div>
        </FooterDetails>
        <FooterMember>
          <p>Build with ❤ by:</p>
          <MembersGit>
            <div>
              <RiGithubFill />
              <p>Yhostin Ollachica</p>
            </div>
            <div>
              <RiGithubFill />
              <p>Alex Mamani</p>
            </div>
            <div>
              <RiGithubFill />
              <p>Arianna Avalos</p>
            </div>
            <div>
              <RiGithubFill />
              <p>Julio Bazalar</p>
            </div>
          </MembersGit>
        </FooterMember>
        <FooterTech>
          <p>Source code:</p>
          <FooterTechDetails>
            <div>
              <DiRuby />
              <p>Ruby on Rails REST API</p>
            </div>
            <div>
              <RiReactjsLine />
              <p>React Responsive SPA</p>
            </div>
          </FooterTechDetails>
        </FooterTech>
      </FooterWrapper>
    </FooterPage>
  )
}

export default Footer