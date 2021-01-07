import { createSlice, createSelector } from "@reduxjs/toolkit";

import { toggleDeleteTodo } from "../delete/deleteSlice";

export const inboxSlice = createSlice({
  name: "inboxStore",
  initialState: {
    // intial state for inbox
    inbox: [
      {
        id: 1,
        mId: "guid-1",
        unread: true,
        subject: "Program",
        content:
          "About Microsoft Virtual Academy<br/>Microsoft Virtual Academy provides free online training by world-class experts to help you build your technical skills and advance your career. Make it your destination of choice to get started on the latest Microsoft technologies and join this vibrant community.",
      },
      {
        id: 2,
        mId: "guid-2",
        unread: false,
        subject: "Empower your future",
        content:
          "We foster our pipeline of future leaders with 47 employee networks and 7 global employee resource groups, servicing an active community of thousands across Microsoft",
      },
    ],
  },
  // get the payload value and make actions
  reducers: {
    toggleTodo: (state, action) => {
      const todo = state.inbox.find((todo) => todo.id === action.payload);
      if (todo && todo.unread === true) {
        todo.unread = false;
      }
    },
    toggleFlag: (state, action) => {
      const todo = state.inbox.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.isflag = !todo.isflag;
      }
    },

    removeMail: (state, action) => {
      return {
        ...state.inbox,
        inbox: state.inbox.filter((todo) => todo.id !== action.payload),
      };
    },
  },
});

export const {
  toggleTodo,
  toggleFlag,
  removeMail,
  getInboxUnreadCount,
} = inboxSlice.actions;

export const deltethunk = (product) => (dispatch, getState) => {
  dispatch(removeMail(product.id));
  dispatch(toggleDeleteTodo(product));
};

// The function below is called a selector and allows us to select a value from
// the state.
export const GetInbox = (state) => state.inboxStore.inbox;

export default inboxSlice.reducer;
