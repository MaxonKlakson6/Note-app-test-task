export const createCorrectTag = (text: string): string => {
  return text.split("").reduce((result, currentChar) => {
    if (currentChar === "#" || currentChar === " ") {
      return result;
    }

    return result + currentChar;
  }, "");
};
