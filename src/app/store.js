import { configureStore } from "@reduxjs/toolkit";
import inboxReducer from "../features/inbox/inboxSlice";
import spamReducer from "../features/spam/spamSlice";
import deleteReducer from "../features/delete/deleteSlice";

export default configureStore({
  reducer: {
    inboxStore: inboxReducer,
    spamStore: spamReducer,
    deleteStore: deleteReducer,
  },
});
