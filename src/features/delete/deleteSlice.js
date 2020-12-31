import { createSlice } from "@reduxjs/toolkit";

export const deleteSlice = createSlice({
  name: "deleteStore",
  initialState: {
    delete: [],
  },
  reducers: {
    toggleDeleteTodo: (state, action) => {
      state.delete.push(action.payload);
    },
  },
});

export const {
  toggleTodo,
  toggleFlag,
  removeMail,
  toggleDeleteTodo,
} = deleteSlice.actions;

export const getDeleteData = (state) => state.deleteStore.delete;

export default deleteSlice.reducer;
