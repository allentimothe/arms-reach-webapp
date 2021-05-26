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


  > hr {

  }
`;

const SidebarHeader = styled.div`


  > .MuiSvgIcon-root {

  }
`;

const SidebarInfo = styled.div`


  > h2 {

  }

  > h3 {

  }

  > h3 > .MuiSvgIcon-root {

  }
`;
