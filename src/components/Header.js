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

`;

const HeaderAvatar = styled(Avatar)`


  :hover {

  }
`;

const HeaderLeft = styled.div`


  > .MuiSvgIcon-root {

  }
`;



const HeaderRight = styled.div`


  > .MuiSvgIcon-root {

  }
`;
