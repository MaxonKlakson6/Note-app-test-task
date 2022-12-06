import { useCallback } from "react";
import type { FormEvent } from "react";

import NotesLayout from "src/pages/NotesPage/components/NotesLayout";

import { useAppDispatch, useAppSelector, useForm } from "src/hooks";
import {
  createNote,
  deleteNote,
  turnOnEditMode,
} from "src/pages/NotesPage/reducer";
import { notesSelector } from "src/pages/NotesPage/selectors/notesSelector";

import type { NotesForm } from "src/pages/NotesPage/types";

const NotesContainer = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const notes = useAppSelector(notesSelector);

  const [form, handleChangeForm, handleResetForm] = useForm<NotesForm>({
    noteCreator: "",
  });

  const handleCreateNote = (event: FormEvent): void => {
    event.preventDefault();
    if (form.noteCreator.trim()) {
      dispatch(createNote(form.noteCreator));
      handleResetForm();
    }
  };

  const handleDeleteNote = useCallback((id: string): void => {
    dispatch(deleteNote(id));
  }, []);

  const handleToggleEditMode = useCallback((id: string): void => {
    dispatch(turnOnEditMode(id));
  }, []);

  return (
    <NotesLayout
      form={form}
      notes={notes}
      handleChangeForm={handleChangeForm}
      handleCreateNote={handleCreateNote}
      handleDeleteNote={handleDeleteNote}
      handleToggleEditMode={handleToggleEditMode}
    />
  );
};

export default NotesContainer;
