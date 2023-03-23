import { ChangeEvent } from "react";
import inputStyles from "src/pages/NotesPage/components/NotesCreator/styles.module.scss";
import styles from "src/pages/NotesPage/components/NotesFilter/styles.module.scss";

interface NotesFilterProps {
  filterValue: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const NotesFilter = ({ filterValue, onChange }: NotesFilterProps) => {
  return (
    <div className={styles.wrapper}>
      <input
        placeholder="Filter"
        className={inputStyles.input}
        name="noteFilter"
        value={filterValue}
        onChange={onChange}
      />
    </div>
  );
};

export default NotesFilter;
