import React from "react";
import styled from "styled-components";

function Message({ message, user, userImage, imageUrl }) {
  return (
    <MessageContainer>
      <img src={userImage} alt="" />
      <MessageInfo>
        <h4>
          {user}{" "}
        
        </h4>
        <p>{message}, <img src={imageUrl} alt="" /> </p>
      </MessageInfo>
    </MessageContainer>
  );
}

export default Message;

const MessageContainer = styled.div`
display: flex;
align-items: center;
padding: 20px;

  > img {
    height: 50px;
    border-radius: 8px;
  }
`;

const MessageInfo = styled.div`
padding-left: 10px;

  > h4 > span {
    color: gray;
    font-weight: 300;
    margin-left: 4px;
    font-size: 10px;
  }
`;
