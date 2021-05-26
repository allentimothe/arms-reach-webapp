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
              const { message, timestamp, user, userImage } = doc.data();
              return (
                <Message
                  key={doc.id}
                  message={message}
                  timestamp={timestamp}
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
  flex: 0.7;
  flex-grow: 1;
  overflow-y: scroll;
`;

const Header = styled.div`

`;

const HeaderLeft = styled.div`
  > h4 {

  }

  > h4 > .MuiSvgIcon-root {

  }
`;

const HeaderRight = styled.div`
  > p {

  }

  > p > .MuiSvgIcon-root {

  }
`;

const ChatBottom = styled.div`
  padding-bottom: 200px;
`;
