import React, { useEffect, useRef } from "react";
import { db } from "../firebase";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import Message from "./Message";
import ChatInput from "./ChatInput";
import { useCollection } from "react-firebase-hooks/firestore";
import { useSelector } from "react-redux";
import { selectRoomId } from "../features/appSlice";
import styled from "styled-components";

function Chat() {
  const chatRef = useRef(null);
  const roomId = useSelector(selectRoomId);
  const [roomDetails] = useCollection(
    roomId && db.collection("rooms").doc(roomId)
  );
  const [roomMessages, roomLoading] = useCollection(
    roomId &&
      db
        .collection("rooms")
        .doc(roomId)
        .collection("messages")
        .orderBy("timestamp", "asc")
  );

  useEffect(() => {
    chatRef?.current?.scrollIntoView();
  }, [roomId, roomLoading]);

  return (
    <ChatContainer>
      {roomDetails && roomMessages && (
        <>
          <Header>
            <HeaderLeft>
              <h4>
                <strong>#{roomDetails?.data().name}</strong>
                <StarBorderOutlinedIcon />
              </h4>
            </HeaderLeft>
            <HeaderRight>
              <p>
                <InfoOutlinedIcon /> Details
              </p>
            </HeaderRight>
          </Header>

          <div className="chat__messages">
            {roomMessages?.docs.map((doc) => {
              const { message, user, userImage, imageUrl } = doc.data();
              return (
                <Message
                  key={doc.id}
                  message={message}
                  imageUrl={imageUrl}
                  user={user}
                  userImage={userImage}
                />
              );
            })}
            <ChatBottom ref={chatRef} />
          </div>

          <ChatInput
            chatRef={chatRef}
            channelName={roomDetails.data().name}
            channelId={roomId}
          />
          
        </>
      )}
    </ChatContainer>
  );
}

export default Chat;

const ChatContainer = styled.div`
width:60vh;
height: 100vh;
padding: 60px 35px 35px 35px;
margin-left: 2vh;
border-radius: 40px;
background: #ecf0f3;
box-shadow: 13px 13px 20px #cbced1,   -13px -13px 20px #ffffff;
-webkit-border-radius: 40px;
-moz-border-radius: 40px;
-ms-border-radius: 40px;
-o-border-radius: 40px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  border-bottom: 1px solid lightgray;
`;

const HeaderLeft = styled.div`
  > h4 {
    display: flex;
    text-transform: lowercase;
  }

  > h4 > .MuiSvgIcon-root {
    margin-left: 10px;
    font-size: 18px;
  }
`;

const HeaderRight = styled.div`
  > p {
    display: flex;
    align-items: center;
    font-size: 14px;
  }

  > p > .MuiSvgIcon-root {
    margin-right: 5px !important;
    font-size: 16px;
  }
`;

const ChatBottom = styled.div`
  padding-bottom: 200px;
`;

