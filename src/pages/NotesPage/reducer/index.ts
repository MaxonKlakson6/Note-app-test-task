import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";
import type { PayloadAction } from "@reduxjs/toolkit";

import { parseData, stringifyData, treatTextWithTags } from "src/helpers";

import type { Note } from "src/pages/NotesPage/types";

interface InitialState {
  notes: string;
}

const initialState: InitialState = {
  notes: "[]",
};

const NotesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    createNote: (state, { payload: noteText }: PayloadAction<string>) => {
      const notes = parseData<Note[]>(state.notes);

      const treatedText = treatTextWithTags(noteText);

      const newNote = {
        id: uuid(),
        text: treatedText.text,
        tags: treatedText.tags,
        isEditing: false,
      };

      notes.push(newNote);
      state.notes = stringifyData(notes);
    },

    deleteNote: (state, { payload: noteId }: PayloadAction<string>) => {
      const notes = parseData<Note[]>(state.notes);

      const indexNoteToDelete = notes.findIndex((note) => note.id === noteId);

      notes.splice(indexNoteToDelete, 1);

      state.notes = stringifyData(notes);
    },

    turnOnEditMode: (state, { payload: noteId }: PayloadAction<string>) => {
      const notes = parseData<Note[]>(state.notes);

      const noteToEdit = notes.find((note) => note.id === noteId)!;

      noteToEdit.isEditing = !noteToEdit.isEditing;

      state.notes = stringifyData(notes);
    },

    submitEditing: (
      state,
      { payload }: PayloadAction<{ noteId: string; editedText: string }>
    ) => {
      const notes = parseData<Note[]>(state.notes);
      const { noteId, editedText } = payload;

      const editedNote = notes.find((note) => note.id === noteId)!;

      const treatedText = treatTextWithTags(editedText);

      editedNote.isEditing = !editedNote.isEditing;
      editedNote.text = treatedText.text;
      editedNote.tags.push(...treatedText.tags);

      state.notes = stringifyData(notes);
    },

    deleteTag: (
      state,
      { payload }: PayloadAction<{ noteId: string; tagId: string }>
    ) => {
      const notes = parseData<Note[]>(state.notes);
      const { noteId, tagId } = payload;

      const noteToDeleteTag = notes.find((note) => note.id === noteId)!;

      const tagIndexToDelete = noteToDeleteTag.tags.findIndex(
        (tag) => tag.id === tagId
      );

      noteToDeleteTag.tags.splice(tagIndexToDelete, 1);

      state.notes = stringifyData(notes);
    },

    addTag: (
      state,
      { payload }: PayloadAction<{ noteId: string; tagText: string }>
    ) => {
      const notes = parseData<Note[]>(state.notes);
      const { noteId, tagText } = payload;

      const noteToAddTag = notes.find((note) => note.id === noteId)!;

      const newTag = {
        text: tagText,
        id: uuid(),
      };

      noteToAddTag.tags.push(newTag);

      state.notes = stringifyData(notes);
    },
  },
});

export const {
  createNote,
  deleteNote,
  turnOnEditMode,
  submitEditing,
  deleteTag,
  addTag,
} = NotesSlice.actions;

export default NotesSlice.reducer;
