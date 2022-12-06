import { RootState } from "src/store/configureStore";
import { parseData } from "src/helpers";
import { Note } from "src/pages/NotesPage/types";

export const notesSelector = (state: RootState) =>
  parseData<Note[]>(state.notesReducer.notes);
