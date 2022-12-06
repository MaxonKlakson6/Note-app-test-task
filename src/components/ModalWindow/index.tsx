import type { ReactNode } from "react";

import styles from "src/components/ModalWindow/styles.module.scss";

interface ModalWindowProps {
  children: ReactNode;
}

const ModalWindow = ({ children }: ModalWindowProps): JSX.Element => {
  return <div className={styles.wrapper}>{children}</div>;
};

export default ModalWindow;
