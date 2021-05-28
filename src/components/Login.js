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
  box-sizing: border-box; 
  margin:0;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  font-family: 'Lato', sans-serif;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color:#555;
  background: #ecf0f3;

`;

const LoginInnerContainer = styled.div`
  width:50vh;
  height: 30vh;
  padding: 60px 35px 35px 35px;
  border-radius: 40px;
  background: #ecf0f3;
  box-shadow: 13px 13px 20px #cbced1, 
  -13px -13px 20px #ffffff;
  -webkit-border-radius: 40px;
  -moz-border-radius: 40px;
  -ms-border-radius: 40px;
  -o-border-radius: 40px;

  > button {
    outline: none;
  border:none;
  cursor: pointer;
  width:100%;
  height: 60px;
  border-radius: 30px;
  font-size: 20px;
  font-weight: 700;
  font-family: 'Lato', sans-serif;
  color:#fff;
  text-align: center;
  background: #24cfaa;
  box-shadow: 3px 3px 8px #b1b1b1,
              -3px -3px 8px #ffffff;
  transition: 0.5s;
  }

  > button:hover { 
    background:#2fdbb6;
  }

  > button:active { 
    background:#1da88a;
  }

  > h1 { 
    display: flex;
    justify-content: center;
    font-size: 28px;
    padding-top: 24px;
    letter-spacing: 0.5px;
  }

  > p { 
    text-align: center;
    font-size: 15px;
    padding-top: 7px;
    letter-spacing: 3px;
  }

  .login__text {
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 5vh;
    margin-left: 12vh;
    font-size: 2vh;
  }
`;
