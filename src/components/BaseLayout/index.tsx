import type { ReactNode } from "react";

import Header from "src/components/Header";

import styles from "src/components/BaseLayout/styles.module.scss";

interface BaseLayoutProps {
  children: ReactNode;
}

const BaseLayout = ({ children }: BaseLayoutProps): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <Header />
      {children}
    </div>
  );
};

export default BaseLayout;
