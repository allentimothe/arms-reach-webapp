import React from "react";
import { Avatar } from "@material-ui/core";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import styled from "styled-components";

function Header() {
  const [user] = useAuthState(auth);

  return (
    <HeaderContainer>
      <HeaderLeft>
        <HeaderAvatar
          onClick={() => auth.signOut()}
          alt={user?.displayName}
          src={user?.photoURL}
        />
      </HeaderLeft>
      <HeaderRight>
 
      </HeaderRight>
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.div`
  display: flex;
  position: fixed;
  height: 5vh;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  border-radius: 40px;
  background: #ecf0f3;
  box-shadow: 13px 13px 20px #cbced1,              -13px -13px 20px #ffffff;
  -webkit-border-radius: 40px;
  -moz-border-radius: 40px;
  -ms-border-radius: 40px;
  -o-border-radius: 40px;
`;

const HeaderAvatar = styled(Avatar)`
  cursor: pointer;

  :hover {
    opacity: 0.8;
  }
`;

const HeaderLeft = styled.div`
  flex: 0.3;
  display: flex;
  align-items: center;
  margin-left: 20px;

  > .MuiSvgIcon-root {
    margin-left: auto;
    margin-right: 30px;
  }
`;


const HeaderRight = styled.div`
  flex: 0.3;
  display: flex;
  align-items: flex-end;

  > .MuiSvgIcon-root {
    margin-left: auto;
    margin-right: 20px;
  }
`;
