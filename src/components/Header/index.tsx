import styles from "src/components/Header/styles.module.scss";

const Header = (): JSX.Element => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Notes app</h1>
    </header>
  );
};

export default Header;
