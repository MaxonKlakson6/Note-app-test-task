import type { ChangeEvent, FormEvent } from "react";

import styles from "src/pages/NotesPage/components/NotesCreator/styles.module.scss";

interface NotesCreatorProps {
  inputValue: string;
  handleChangeForm: (event: ChangeEvent<HTMLInputElement>) => void;
  handleCreateNote: (event: FormEvent) => void;
}

const NotesCreator = ({
  inputValue,
  handleChangeForm,
  handleCreateNote,
}: NotesCreatorProps): JSX.Element => {
  return (
    <form className={styles.wrapper} onSubmit={handleCreateNote}>
      <input
        className={styles.input}
        type="text"
        placeholder="Write some note..."
        value={inputValue}
        onChange={handleChangeForm}
        name="noteCreator"
      />
      <button className={styles.button} type="submit">
        Create note
      </button>
    </form>
  );
};

export default NotesCreator;
