import { memo } from "react";

import Note from "src/pages/NotesPage/components/Note";

import type { Note as NoteType } from "src/pages/NotesPage/types";

import styles from "src/pages/NotesPage/components/NotesList/styles.module.scss";

interface NotesListProps {
  notes: NoteType[];
  handleDeleteNote: (id: string) => void;
  handleToggleEditMode: (id: string) => void;
}

const NotesList = ({
  notes,
  handleDeleteNote,
  handleToggleEditMode,
}: NotesListProps): JSX.Element => {
  return (
    <ul className={styles.wrapper}>
      {notes.map((note) => (
        <Note
          key={note.id}
          id={note.id}
          text={note.text}
          tags={note.tags}
          isEditing={note.isEditing}
          handleDeleteNote={handleDeleteNote}
          handleToggleEditMode={handleToggleEditMode}
        />
      ))}
    </ul>
  );
};

export default memo(NotesList);
