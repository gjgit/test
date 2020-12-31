import { createSlice, createSelector } from "@reduxjs/toolkit";

import { selectCount2 } from "../spam/spamSlice";

export const deleteSlice = createSlice({
  name: "deleteStore",
  initialState: {
    delete: [],
  },
  reducers: {
    toggleDeleteTodo: (state, action) => {
      alert(2323);
    },
  },
});

// export const { toggleTodo } = deleteSlice.actions;

// export const selectCount2 = (state) => state.deleteStore.delete;
export const selectCount22 = (state) => state.spamStore.spam;

export default deleteSlice.reducer;
