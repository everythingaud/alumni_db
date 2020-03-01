import React from 'react';
import { LogInForm, SignUpForm } from '../components/LogIn';

export class Login extends React.Component {
  render() {
    return (
        <div>
          <ul className="header">
            <li>Log In</li>
            <li>Sign Up</li>
          </ul>
          <div className="content">
            <LogInForm/>
            <SignUpForm/>
          </div>
        </div>
    );
  }
}

export default {
  Login
}
