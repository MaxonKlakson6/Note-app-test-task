export type NotesForm = {
  noteCreator: string;
  noteFilter: string;
};

export type Tag = {
  id: string;
  text: string;
};

export type Note = {
  id: string;
  text: string;
  tags: Tag[];
  isEditing: boolean;
};
