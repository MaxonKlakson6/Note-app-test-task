import { configureStore } from "@reduxjs/toolkit";

import NotesReducer from "src/pages/NotesPage/reducer";

const store = configureStore({
  reducer: {
    notesReducer: NotesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
