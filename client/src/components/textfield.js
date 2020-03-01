import React from 'react';
import styled from 'styled-components'

const StyledInput = styled.input`
  /* ... */
`

export default class EmailInput extends React.Component {
  render() {
    return (
      <StyledInput type="text" name="Email" placeholder="Email Address"/>
    );
  }
}

class PasswordInput extends React.Component {
  render() {
    return (
      <StyledInput type="text" name="Password" placeholder="Password"/>
    );
  }
}

class FirstNameInput extends React.Component {
  render() {
    return (
      <StyledInput type="text" name="FirstName" placeholder="First Name"/>
    );
  }
}

class LastNameInput extends React.Component {
  render() {
    return (
      <StyledInput type="text" name="LastName" placeholder="Last Name"/>
    );
  }
}

export {
  EmailInput,
  PasswordInput,
  FirstNameInput,
  LastNameInput
}
