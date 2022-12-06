export const stringifyData = <TypeOfData>(data: TypeOfData): string =>
  JSON.stringify(data);

export const parseData = <ReturnValue>(data: string): ReturnValue =>
  JSON.parse(data);
