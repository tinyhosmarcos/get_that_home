import styled from '@emotion/styled';
import React from 'react';
import './App.css';
import PropertyCard from './component/Card/PropertyCard';

function App() {

  return (
    <Container>
        <PropertyCard isOwner={false}/>
    </Container>
  );
}

export default App;
