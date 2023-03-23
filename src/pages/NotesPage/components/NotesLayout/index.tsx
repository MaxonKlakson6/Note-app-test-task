import type { ChangeEvent, FormEvent } from "react";

import NotesCreator from "src/pages/NotesPage/components/NotesCreator";
import NotesList from "src/pages/NotesPage/components/NotesList";
import NotesFilter from "src/pages/NotesPage/components/NotesFilter";

import type { Note, NotesForm } from "src/pages/NotesPage/types";

import styles from "src/pages/NotesPage/components/NotesLayout/styles.module.scss";

interface NotesLayoutProps {
  form: NotesForm;
  notes: Note[];
  handleChangeForm: (event: ChangeEvent<HTMLInputElement>) => void;
  handleCreateNote: (event: FormEvent) => void;
  handleDeleteNote: (id: string) => void;
  handleToggleEditMode: (id: string) => void;
}

const NotesLayout = ({
  form,
  notes,
  handleChangeForm,
  handleCreateNote,
  handleDeleteNote,
  handleToggleEditMode,
}: NotesLayoutProps): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <NotesCreator
        inputValue={form.noteCreator}
        handleChangeForm={handleChangeForm}
        handleCreateNote={handleCreateNote}
      />
      <NotesFilter filterValue={form.noteFilter} onChange={handleChangeForm} />
      <NotesList
        notes={notes}
        handleDeleteNote={handleDeleteNote}
        handleToggleEditMode={handleToggleEditMode}
      />
    </div>
  );
};

export default NotesLayout;
