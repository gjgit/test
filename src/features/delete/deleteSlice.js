import { createSlice } from "@reduxjs/toolkit";

export const deleteSlice = createSlice({
  name: "deleteStore",
  initialState: {
    delete: [],
  },
  // push values to state
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
// The function below is called a selector and allows us to select a value from
// the state.
export const getDeleteData = (state) => state.deleteStore.delete;

export default deleteSlice.reducer;
