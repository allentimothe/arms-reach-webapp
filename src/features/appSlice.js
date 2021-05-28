import { createSlice } from "@reduxjs/toolkit";

export const appSlice = createSlice({
  name: "app",
  initialState: {
    user: null,
    roomId: null,
    selectedImage: null,
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
    enterRoom: (state, action) => {
      state.roomId = action.payload.roomId;
    },
    selectImage: (state, action) => {
      state.selectedImage = action.payload;
    },
    resetImage: (state) => {
      state.selectedImage = null;
    },
  },
});

export const { enterRoom, login, logout, selectImage, resetImage } = appSlice.actions;

export const selectRoomId = (state) => state.app.roomId;

export const selectUser = (state) => state.app.user;

export const selectSelectedImage = (state) => state.app.selectedImage;

export default appSlice.reducer;
