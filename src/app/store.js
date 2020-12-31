import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import spamReducer from "../features/spam/spamSlice";
import deleteReducer from "../features/delete/deleteSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
    spamStore: spamReducer,
    deleteStore: deleteReducer,
  },
});
