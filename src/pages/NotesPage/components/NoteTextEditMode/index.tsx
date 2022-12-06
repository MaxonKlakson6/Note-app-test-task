import { useState } from "react";
import type { FormEvent } from "react";
import ContentEditable from "react-contenteditable";

import { useAppDispatch } from "src/hooks";
import { submitEditing } from "src/pages/NotesPage/reducer";

import type { Tag } from "src/pages/NotesPage/types";

import styles from "src/pages/NotesPage/components/NoteTextEditMode/styles.module.scss";
import textBlockStyles from "src/pages/NotesPage/components/TextBlock/styles.module.scss";

interface NoteTextEditModeProps {
  initialValue: string;
  id: string;
  tags: Tag[];
}

const NoteTextEditMode = ({
  initialValue,
  id,
  tags,
}: NoteTextEditModeProps): JSX.Element => {
  const dispatch = useAppDispatch();
  const [text, setText] = useState<string>(initialValue);

  const onChange = (event: FormEvent<HTMLDivElement>): void => {
    setText(event.currentTarget.innerText);
  };

  const createMarkup = (): string => {
    const wordsList = text.split(/\s+/);

    const nodesList = wordsList.map((word) => {
      const wordToCheck = `#${word.trim()}`;

      if (tags.some((tag) => tag.text === wordToCheck)) {
        return `<span class=${styles.changeColor}>${word}</span>`;
      }

      return `<span>${word}</span>`;
    });

    return nodesList.join("&nbsp;");
  };

  const onSubmit = (): void => {
    dispatch(submitEditing({ noteId: id, editedText: text.trim() }));
  };

  return (
    <div className={styles.wrapper}>
      <ContentEditable
        className={styles.editableDiv}
        html={createMarkup()}
        onChange={onChange}
      />
      <button onClick={onSubmit} className={textBlockStyles.controlButton}>
        Submit
      </button>
    </div>
  );
};

export default NoteTextEditMode;
