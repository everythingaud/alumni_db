import React from 'react';
import styled from 'styled-components'
// import LogIn from './button';

const StyledButton = styled.button`
  /* ... */
`
const Paragraph = styled.p`
  /* ... */
`

function LogIn() {
  console.log("Logging In");
}

export default class LogInButton extends React.Component {
  render() {
    return (
      <StyledButton onClick={LogIn}>
        <Paragraph>Log In</Paragraph>
      </StyledButton>
    );
  }
}

class SignUpButton extends React.Component {
  render() {
    return (
      <StyledButton onClick={this.ACTION}>
        <Paragraph>Sign Up</Paragraph>
      </StyledButton>
    );
  }
}

export {
  LogInButton,
  SignUpButton
}
