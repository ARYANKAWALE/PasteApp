import { createSlice } from "@reduxjs/toolkit";
// import toast from 'react-hot-toast'

const initialState = {
  pastes: localStorage.getItem("pastes")
    ? JSON.parse(localStorage.getItem("pastes"))
    : [],
};

export const pasteSlice = createSlice({
  name: "Paste",
  initialState,
  reducers: {
    addToPaste: (state, action) => {
        const paste = action.payload;
        state.pastes.push(paste);
        localStorage.setItem("pastes",state.pastes);
        // toast("paste Created Successfully");
    },
    updateToPaste: (state, action) => {
      
    },
    resetallPaste: (state) => {
      
    },
    removeFromPaste: (state, action) => {
      
    },
  },
});

export const { addToPaste, updateToPaste, resetallPaste, removeFromPaste } = pasteSlice.actions;
export default pasteSlice.reducer;
