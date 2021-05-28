// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useHistory } from "react-router-dom";
// import { resetCameraImage, selectCameraImage } from "../features/cameraSlice";
// import "./Preview.css";
// import CloseIcon from "@material-ui/icons/Close";
// import SendIcon from "@material-ui/icons/Send";
// import { v4 as uuid } from "uuid";
// import { auth, db, storage } from "../firebase";
// import firebase from "firebase";
// import { selectUser } from "../features/appSlice";
// import { useAuthState } from "react-firebase-hooks/auth";


// function Preview({ channelId, chatRef }) {
//   const [pic, setPic] = useState("");
//   const cameraImage = useSelector(selectCameraImage);
//   const history = useHistory();
//   const dispatch = useDispatch();
//   const [user] = useAuthState(auth) + useSelector(selectUser);

//   useEffect(() => {
//     if (!cameraImage) {
//       history.replace("/");
//     }
//   }, [cameraImage, history]);

//   const closePreview = () => {
//     dispatch(resetCameraImage());
//   };

  // const sendPic = (e) => {
  //   e.preventDefault();

  //   if (!channelId) {
  //     return false;
  //   }


  //   const id = uuid();
  //   const uploadTask = storage
  //     .ref(`pics/${id}`)
  //     .putString(cameraImage, "data_url");

  //   uploadTask.on(
  //     "state_changed",
  //     null,
  //     (error) => {
  //       console.log(error);
  //     },
  //     () => {
  //       storage
  //         .ref("pics")
  //         .child(id)
  //         .getDownloadURL()
  //         .then((url) => {
  //           db.collection("rooms").doc(channelId).collection("pictures").add({
  //             imageUrl: url,
  //             user: user.displayName,
  //             userImage: user.photoURL,
  //             timestamp: firebase.firestore.FieldValue.serverTimestamp(),
  //           });

  //           setPic("")
  //         });
  //     }
  //   );
  // };

  // return (
    // <div className="preview">
    //   <CloseIcon onClick={closePreview} className="preview__close" />
    //   <img src={cameraImage} value={pic}
    //       onChange={(e) => setPic(e.target.value)}
    //       type={cameraImage} alt="" />
      {/* <div onClick={sendPic} className="preview__footer">
        <h2>Accept Preview</h2>
        <SendIcon type="submit" fontSize="small" className="preview__sendIcon" /> */}
//       </div>
//     </div>
//   );
// }

// export default Preview;
