import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import NotesContainer from "src/pages/NotesPage/container/NotesContainer";
import BaseLayout from "src/components/BaseLayout";
import store from "src/store/configureStore";

import "src/index.scss";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <BaseLayout>
        <NotesContainer />
      </BaseLayout>
    </Provider>
  </React.StrictMode>
);
