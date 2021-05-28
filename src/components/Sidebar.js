import React from "react";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import SidebarOption from "./SidebarOption";
import AddIcon from "@material-ui/icons/Add";
import { auth, db } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollection } from "react-firebase-hooks/firestore";
import styled from "styled-components";

function Sidebar() {
  const [user] = useAuthState(auth);
  const [channels] = useCollection(db.collection("rooms"));

  return (
    <SidebarContainer>
      <SidebarHeader>
        <SidebarInfo>
          <h2>Arms Reach</h2>
          <h3>
            <FiberManualRecordIcon />
            {user?.displayName}
          </h3>
        </SidebarInfo>
      </SidebarHeader>
      <hr />
      <SidebarOption Icon={AddIcon} addChannelOption title="Add Channel" />
      {channels?.docs.map((doc) => (
        <SidebarOption key={doc.id} title={doc.data().name} id={doc.id} />
      ))}
    </SidebarContainer>
  );
}

export default Sidebar;

const SidebarContainer = styled.div`
width:15vh;
height: 70vh;
padding: 60px 35px 35px 35px;
margin-top: 20vh;
border-radius: 40px;
background: #ecf0f3;
box-shadow: 13px 13px 20px #cbced1, -13px -13px 20px #ffffff;
-webkit-border-radius: 40px;
-moz-border-radius: 40px;
-ms-border-radius: 40px;
-o-border-radius: 40px;

  > hr {
    margin-top: 10px;
    margin-bottom: 10px;
    border: 1px solid grey;
  }
`;

const SidebarHeader = styled.div`
  display: flex;
  border-bottom: 1px solid grey;
  padding-bottom: 10px;
  padding: 13px;

  > .MuiSvgIcon-root {
    padding: 8px;
    color: #49274b;
    font-size: 18px;
    background-color: grey;
    border-radius: 999px;
  }
`;

const SidebarInfo = styled.div`
  flex: 1;

  > h2 {
    font-size: 15px;
    font-weight: 900;
    margin-bottom: 5px;
  }

  > h3 {
    display: flex;
    font-size: 13px;
    font-weight: 400;
    align-items: center;
  }

  > h3 > .MuiSvgIcon-root {
    font-size: 14px;
    margin-top: 1px;
    margin-right: 2px;
    color: green;
  }
`;
