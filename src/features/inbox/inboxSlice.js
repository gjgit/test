import { createSlice, createSelector } from "@reduxjs/toolkit";

export const inboxSlice = createSlice({
  name: "inboxStore",
  initialState: {
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
    getInboxUnreadCount: (state, action) => {
      const count = state.inbox.filter((t) => t.unread);
      const hiiii = 2;
      return hiiii;
    },
  },
});

export const {
  toggleTodo,
  toggleFlag,
  removeMail,
  getInboxUnreadCount,
} = inboxSlice.actions;

export const GetInbox = (state) => state.inboxStore.inbox;

export default inboxSlice.reducer;