import TagsBlock from "src/pages/NotesPage/components/TagsBlock";
import TextBlock from "src/pages/NotesPage/components/TextBlock";

import type { Note as NoteType } from "src/pages/NotesPage/types";

import styles from "src/pages/NotesPage/components/Note/styles.module.scss";

interface NoteProps extends NoteType {
  handleDeleteNote: (id: string) => void;
  handleToggleEditMode: (id: string) => void;
}

const Note = ({
  id,
  text,
  isEditing,
  tags,
  handleDeleteNote,
  handleToggleEditMode,
}: NoteProps): JSX.Element => {
  return (
    <li className={styles.wrapper}>
      <TextBlock
        isEditing={isEditing}
        text={text}
        id={id}
        tags={tags}
        handleToggleEditMode={handleToggleEditMode}
        handleDeleteNote={handleDeleteNote}
      />
      <TagsBlock tags={tags} noteId={id} />
    </li>
  );
};

export default Note;
