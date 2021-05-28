import React from "react";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import SidebarOption from "./SidebarOption";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
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
      <SidebarOption Icon={ExpandMoreIcon} title="Channels" />
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
  color: white;
  background-color: #3b3e49;
  flex: 0.3;
  border-top: 1px solid grey;
  max-width: 260px;
  margin-top: 60px;

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
