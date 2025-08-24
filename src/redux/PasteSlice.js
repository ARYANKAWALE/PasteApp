import { createSlice } from "@reduxjs/toolkit";
// import toast from 'react-hot-toast'

const getInitialPastes = () => {
  try {
    const storedPastes = localStorage.getItem("pastes");
    if (storedPastes) {
      return JSON.parse(storedPastes);
    }
    return [];
  } catch (error) {
    console.error("Error parsing pastes from localStorage:", error);
    // Clear corrupted data
    localStorage.removeItem("pastes");
    return [];
  }
};

const initialState = {
  pastes: getInitialPastes(),
};

export const pasteSlice = createSlice({
  name: "Paste",
  initialState,
  reducers: {
    addToPaste: (state, action) => {
        const paste = action.payload;
        state.pastes.push(paste);
        localStorage.setItem("pastes", JSON.stringify(state.pastes));
        // toast("paste Created Successfully");
    },
    updateToPaste: (state, action) => {
      const paste = action.payload;
      const index = state.pastes.findIndex((item) => item._id === paste._id);
      if (index >= 0) {
        state.pastes[index] = paste;
        localStorage.setItem("pastes", JSON.stringify(state.pastes));
      }
    },
    resetallPaste: (state) => {
      state.pastes = [];
      localStorage.setItem("pastes", JSON.stringify(state.pastes));
    },
    removeFromPaste: (state, action) => {
      const pasteId = action.payload;
      const index = state.pastes.findIndex((item) => item._id === pasteId);
      if (index >= 0) {
        state.pastes.splice(index, 1);
        localStorage.setItem("pastes", JSON.stringify(state.pastes));
      }
    },
  },
});

export const { addToPaste, updateToPaste, resetallPaste, removeFromPaste } = pasteSlice.actions;
export default pasteSlice.reducer;
