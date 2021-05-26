import React from "react";
import { db } from "../firebase";
import { useDispatch } from "react-redux";
import { enterRoom } from "../features/appSlice";
import styled from "styled-components";

function SidebarOption({ Icon, title, id, addChannelOption }) {
  const dispatch = useDispatch();

  const selectChannel = () => {
    if (id) {
      dispatch(
        enterRoom({
          roomId: id,
        })
      );
    }
  };
  const addChannel = () => {
    const channelName = prompt("Please enter channel name");

    if (channelName) {
      db.collection("rooms").add({
        name: channelName,
      });
    }
  };

  return (
    <SidebarOptionContainer
      onClick={addChannelOption ? addChannel : selectChannel}
    >
      {Icon && <Icon fontSize="small" style={{ padding: 10 }} />}
      {Icon ? (
        <h3>{title}</h3>
      ) : (
        <SidebarOptionChannel>
          <span>#</span> {title}
        </SidebarOptionChannel>
      )}
    </SidebarOptionContainer>
  );
}

export default SidebarOption;

const SidebarOptionContainer = styled.div`


  :hover {

  }

  > h3 {

  }

  > h3 > span {

  }
`;

const SidebarOptionChannel = styled.h3`

`;
