import { createSlice } from "@reduxjs/toolkit";

export const spamSlice = createSlice({
  name: "spamStore",
  initialState: {
    spam: [
      {
        id: 1,
        mId: "guid-3",
        unread: true,
        isflag: false,
        subject: "Pre Approved Loan",
        content:
          "Congratulations ! <u>Credit card<u> is being shipped to you today!",
      },
      {
        id: 2,
        mId: "guid-4",
        unread: true,
        isflag: false,
        subject: "You won a lottery!",
        content:
          "You have just won the New York official lottery. Please send us your address so that we may start the transfer.",
      },
    ],
    toogle: false,
  },
  reducers: {
    toggleTodo: (state, action) => {
      const todo = state.spam.find((todo) => todo.id === action.payload);
      if (todo && todo.unread === true) {
        todo.unread = false;
      }
    },
    toggleFlag: (state, action) => {
      const todo = state.spam.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.isflag = !todo.isflag;
      }
    },
    removeMail: (state, action) => {
      return {
        ...state.spam,
        spam: state.spam.filter((todo) => todo.id !== action.payload),
      };
    },
    fliter: (state, action) => {
      return {
        ...state.spam,
        spam: state.spam.filter((t) => t.isflag),
      };
    },
    Rfliter: (state, action) => {
      return {
        ...state.spamStore,
        spam: state.spamStore,
      };
    },
  },
});

export const {
  toggleTodo,
  toggleFlag,
  removeMail,
  fliter,
  Rfliter,
} = spamSlice.actions;

export const selectCount2 = (state) => state.spamStore.spam;

export default spamSlice.reducer;