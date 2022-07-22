import styled from '@emotion/styled'
import userEvent from '@testing-library/user-event'
import React from 'react'
import PropertyCard from '../component/Card/PropertyCard'
import Footer from '../component/Footer/Footer'
import Menu from '../component/Menu/Menu'
import { useAuth } from '../context/auth-context'
import { typography } from '../styles/typography'

const PropertiesContainer = styled.div`
  padding: 2rem;
  display: grid;
  grid-template-columns: 300px 300px 300px;
  row-gap: 2rem;
  justify-content: space-around;
`

const MainSection = styled.div`
  padding: 32px 120px 0 120px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  & > h6 {
    ${typography.headline6}
  }
`

const Paginator = styled.div`
  padding-bottom: 2rem;
`

const IndexProperties = () => {
  const {properties} = useAuth();
  return (
    <>
      <Menu />
      <MainSection>
        <div>
          <h1>Filtros</h1>
        </div>
        <h6>{properties.length} Properties found</h6>
        <PropertiesContainer>
          {properties && properties.map( (property) => {
            return <PropertyCard data={property} />
          }
          )}
        </PropertiesContainer>
        <Paginator>
          <h1>Paginator</h1>
        </Paginator>
      </MainSection>
      <Footer />
    </>
  )
}

export default IndexProperties