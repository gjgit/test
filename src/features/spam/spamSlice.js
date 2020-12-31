import { createSlice } from "@reduxjs/toolkit";

export const spamSlice = createSlice({
  name: "spamStore",
  initialState: {
    // intial state for spam
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
  }, // get the payload value and make actions
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
  },
});

export const { toggleTodo, toggleFlag, removeMail } = spamSlice.actions;
// The function below is called a selector and allows us to select a value from
// the state.
export const GetSpamData = (state) => state.spamStore.spam;

export default spamSlice.reducer;
