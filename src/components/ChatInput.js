import React, { useEffect, useState } from "react";
import { auth, db, storage } from "../firebase";
import firebase from "firebase";
import { Button } from "@material-ui/core";
import { useAuthState } from "react-firebase-hooks/auth";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import WebcamCapture from "./WebcamCapture";
import { v4 as uuid } from "uuid";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { resetCameraImage, selectCameraImage } from "../features/cameraSlice";
import { useDispatch, useSelector } from "react-redux";
import CloseIcon from "@material-ui/icons/Close";


function ChatInput({ channelName, channelId, chatRef }) {
  const [input, setInput] = useState("");
  const [pic, setPic] = useState("");
  const cameraImage = useSelector(selectCameraImage);
  const history = useHistory();
  const dispatch = useDispatch();
  const [user] = useAuthState(auth);

  useEffect(() => {
    if (!cameraImage) {
      history.replace("/");
    }
  }, [cameraImage, history]);

  const closePreview = () => {
    dispatch(resetCameraImage());
  };

  const sendMessage = (e) => { 
    e.preventDefault();
    console.log(channelId);

    if (!channelId) {
      return false;
    }
    const id = uuid();
    const uploadTask = storage
      .ref(`pics/${id}`)
      .putString(cameraImage, "data_url");

    uploadTask.on(
      "state_changed",
      null,
      (error) => {
        console.log(error);
      },
      () => { 
        storage
          .ref("pics")
          .child(id)
          .getDownloadURL()
          .then((url) => {
    db.collection("rooms").doc(channelId).collection("messages").add({
      message: input,
      imageUrl: url,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      user: user.displayName,
      userImage: user.photoURL,
    });

    chatRef.current.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
    });
    setInput("");
    setPic("")
      })
    })
  };
  return (
    <Router>
    <ChatInputContainer>
      <form>
        <input
          placeholder={`Message #${channelName.toLowerCase()}`}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
        />
        
        <Switch>

          <Route exact path="/">
              <WebcamCapture />
          </Route>
        </Switch>
        <Button hidden type="submit" onClick={sendMessage}>
          SEND
        </Button>
        <div className="preview">
     <CloseIcon onClick={closePreview} className="preview__close" />
      <img src={cameraImage} alt="" />
    </div>
      </form>
    </ChatInputContainer>
    </Router>
  );
};

export default ChatInput;

const ChatInputContainer = styled.div`
border-radius: 20px;

> form {
  position: relative;
  display: flex;
  justify-content: center;
}

> form > input {
  position: fixed;
  bottom: 30px;
  width: 60%;
  border: 1px solid gray;
  border-radius: 3px;
  padding: 20px;
  outline: none;
}

> form > button {
  display: none !important;
}
`;
