import { useState } from "react";
import type { FormEvent } from "react";

import Tag from "src/pages/NotesPage/components/Tag";
import CreateNewTagModal from "src/pages/NotesPage/components/CreateNewTagModal";
import ModalWindow from "src/components/ModalWindow";

import { useAppDispatch } from "src/hooks";
import { addTag } from "src/pages/NotesPage/reducer";
import type { Tag as TagType } from "src/pages/NotesPage/types";

import styles from "src/pages/NotesPage/components/TagsBlock/styles.module.scss";

interface TagsBlockProps {
  noteId: string;
  tags: TagType[];
}

const TagsBlock = ({ noteId, tags }: TagsBlockProps): JSX.Element => {
  const dispatch = useAppDispatch();
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  const handleToggleModal = (): void => {
    setIsOpenModal(!isOpenModal);
  };

  const handleCreateTag = (event: FormEvent, tagText: string): void => {
    event.preventDefault();

    if (tagText.length > 1) {
      dispatch(addTag({ noteId, tagText }));
      handleToggleModal();
    }
  };

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.tagsHolder}>
          {tags.map((tag) => (
            <Tag key={tag.id} id={tag.id} text={tag.text} noteId={noteId} />
          ))}
        </div>
        <button className={styles.addTagButton} onClick={handleToggleModal}>
          Add tag
        </button>
      </div>
      {isOpenModal && (
        <ModalWindow>
          <CreateNewTagModal
            handleToggleModal={handleToggleModal}
            handleCreateTag={handleCreateTag}
          />
        </ModalWindow>
      )}
    </>
  );
};

export default TagsBlock;
