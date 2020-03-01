import React, { Component } from "react";
import styled from 'styled-components';
import { LogInButton, SignUpButton } from './button_view';
import { EmailInput, PasswordInput } from './textfield';



export class LogInForm extends Component {
  render() {
    return (
      <div>
        <EmailInput />
        <PasswordInput />
        <LogInButton />
      </div>
    );
  }
}

export class SignUpForm extends Component {
  render() {
    return (
      <div>
        <EmailInput />
        <PasswordInput />
        <SignUpButton />
      </div>
    );
  }
}

export default {
  LogInForm,
  SignUpForm
}
