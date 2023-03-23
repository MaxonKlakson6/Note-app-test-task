import { useCallback, useMemo } from "react";
import type { FormEvent } from "react";

import NotesLayout from "src/pages/NotesPage/components/NotesLayout";

import {
  useAppDispatch,
  useAppSelector,
  useDebounce,
  useForm,
} from "src/hooks";
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
    noteFilter: "",
  });

  const debouncedFilter = useDebounce(form.noteFilter, 500);

  const handleCreateNote = (event: FormEvent): void => {
    event.preventDefault();
    if (form.noteCreator.trim()) {
      dispatch(createNote(form.noteCreator));
      handleResetForm("noteCreator");
    }
  };

  const handleDeleteNote = useCallback((id: string): void => {
    dispatch(deleteNote(id));
  }, []);

  const handleToggleEditMode = useCallback((id: string): void => {
    dispatch(turnOnEditMode(id));
  }, []);

  const filtredNotes = useMemo(() => {
    if (debouncedFilter) {
      return notes.filter((note) => {
        const isContain = note.tags.some((tag) =>
          tag.text.toLowerCase().includes(debouncedFilter)
        );

        return isContain;
      });
    }

    return notes;
  }, [notes, debouncedFilter]);

  return (
    <NotesLayout
      form={form}
      notes={filtredNotes}
      handleChangeForm={handleChangeForm}
      handleCreateNote={handleCreateNote}
      handleDeleteNote={handleDeleteNote}
      handleToggleEditMode={handleToggleEditMode}
    />
  );
};

export default NotesContainer;
