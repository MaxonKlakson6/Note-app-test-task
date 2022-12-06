import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";

import { createCorrectTag } from "src/helpers";

import styles from "src/pages/NotesPage/components/CreateNewTagModal/styles.module.scss";

interface CreateNewTagModalProps {
  handleToggleModal: () => void;
  handleCreateTag: (event: FormEvent, tagText: string) => void;
}

const CreateNewTagModal = ({
  handleToggleModal,
  handleCreateTag,
}: CreateNewTagModalProps): JSX.Element => {
  const [newTagText, setNewTegText] = useState<string>("#");

  const handleTextChange = (event: ChangeEvent<HTMLInputElement>): void => {
    let text = event.target.value;

    const textToPush = `#${createCorrectTag(text)}`;

    if (textToPush.length < 14 && textToPush !== newTagText) {
      setNewTegText(textToPush);
    }
  };

  return (
    <form
      className={styles.modalWindow}
      onSubmit={(event) => handleCreateTag(event, newTagText)}
    >
      <input
        type="text"
        className={styles.input}
        value={newTagText}
        onChange={handleTextChange}
        placeholder="Create new tag..."
      />
      <button type={"submit"} className={styles.button}>
        Submit
      </button>
      <button onClick={handleToggleModal} className={styles.button}>
        Cancel
      </button>
    </form>
  );
};

export default CreateNewTagModal;
