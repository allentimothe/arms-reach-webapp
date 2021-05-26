import React from "react";
import { auth, provider } from "../firebase";
import { Button } from "@material-ui/core";
import styled from "styled-components";

function Login() {
  const signIn = (e) => {
    e.preventDefault();
    auth.signInWithPopup(provider).catch((error) => alert(error.message));
  };

  return (
    <LoginContainer>
      <LoginInnerContainer className="login__container">
        <div className="login__text">
          <h1>Welcome</h1>
          <p>to Arms Reach</p>
        </div>

        <Button type="submit" onClick={signIn}>
          Sign In With Google
        </Button>
      </LoginInnerContainer>
    </LoginContainer>
  );
}

export default Login;

const LoginContainer = styled.div`

`;

const LoginInnerContainer = styled.div`


  > img {

  }

  > button {

  }
`;
