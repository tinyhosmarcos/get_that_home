import styled from '@emotion/styled';
import React from 'react';
import './App.css';
import PropertyCard from './component/Card/PropertyCard';

const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 3rem;
`
function App() {
  return (
    <Container>
        <PropertyCard isOwner={false}/>
    </Container>
  );
}

export default App;
