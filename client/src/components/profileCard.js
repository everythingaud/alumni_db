import React, { Component } from 'react';
import logo from '../logo.svg';

import styled from 'styled-components'

const StyledButton = styled.button`
  /* ... */
`

const StyledCard = styled.div`
  width: 200px;
  border: 2px solid grey;
`

const StyledImg = styled.img`
  width: 100%;
`

export class ProfileCard extends React.Component {
  render() {
    return (
      <StyledCard >
        <div class="container">
          <StyledImg src={logo} alt="logo"/>
          <h4><b>Name</b></h4>
          <p>Title</p>
          <StyledButton variant="primary">Connect</StyledButton>
        </div>
      </StyledCard>
    );
  }
}


export default {
  ProfileCard
}
