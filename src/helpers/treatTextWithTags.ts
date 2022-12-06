import { v4 as uuid } from "uuid";

import type { Tag } from "src/pages/NotesPage/types";

type ReduceResult = {
  text: string;
  tags: {
    [key: string]: Tag;
  };
};

type TreatWithTagsReturnValue = {
  text: string;
  tags: Tag[];
};

export const treatTextWithTags = (text: string): TreatWithTagsReturnValue => {
  const wordsArray = text.split(/\s+/);

  const treatedText = wordsArray.reduce(
    (reduceResult: ReduceResult, currentWord, currentIndex) => {
      let word = currentWord;

      if (currentWord[0] === "#") {
        reduceResult.tags[currentWord] = {
          id: uuid(),
          text: currentWord,
        };
        word = currentWord.slice(1);
      }

      reduceResult.text =
        currentIndex === 0 ? word : `${reduceResult.text} ${word}`;

      return reduceResult;
    },
    { text: "", tags: {} }
  );

  return { text: treatedText.text, tags: Object.values(treatedText.tags) };
};
