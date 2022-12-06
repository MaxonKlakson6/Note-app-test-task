import NoteTextEditMode from "src/pages/NotesPage/components/NoteTextEditMode";

import type { Tag } from "src/pages/NotesPage/types";

import styles from "src/pages/NotesPage/components/TextBlock/styles.module.scss";

interface TextBlockProps {
  isEditing: boolean;
  text: string;
  id: string;
  tags: Tag[];
  handleToggleEditMode: (id: string) => void;
  handleDeleteNote: (id: string) => void;
}

const TextBlock = ({
  isEditing,
  text,
  id,
  tags,
  handleToggleEditMode,
  handleDeleteNote,
}: TextBlockProps): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      {isEditing ? (
        <NoteTextEditMode id={id} initialValue={text} tags={tags} />
      ) : (
        <p>{text}</p>
      )}
      <div className={styles.buttonsHolder}>
        <button
          className={styles.controlButton}
          onClick={() => handleToggleEditMode(id)}
        >
          {isEditing ? "Cancel" : "Edit"}
        </button>

        <button
          className={styles.controlButton}
          onClick={() => handleDeleteNote(id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TextBlock;
