import { useAppDispatch } from "src/hooks";
import { deleteTag } from "src/pages/NotesPage/reducer";

import type { Tag as TagType } from "src/pages/NotesPage/types";

import styles from "src/pages/NotesPage/components/Tag/styles.module.scss";
import xmarkIcon from "src/static/icons/xmark-solid.svg";

interface TagProps extends TagType {
  noteId: string;
}

const Tag = ({ id, text, noteId }: TagProps): JSX.Element => {
  const dispatch = useAppDispatch();

  const handleDeleteTag = (): void => {
    dispatch(deleteTag({ noteId, tagId: id }));
  };

  return (
    <>
      <span key={id} className={styles.tag}>
        {text} &nbsp;
        <button className={styles.buttonDelete} onClick={handleDeleteTag}>
          <img src={xmarkIcon} alt="cross" />
        </button>
      </span>
    </>
  );
};

export default Tag;
