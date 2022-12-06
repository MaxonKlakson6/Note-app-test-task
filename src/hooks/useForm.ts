import { useState } from "react";
import type { ChangeEvent } from "react";

export type UseFormReturnValue<Form> = [
  form: Form,
  handleChangeForm: (event: ChangeEvent<HTMLInputElement>) => void,
  handleResetForm: () => void
];

export const useForm = <InitialState>(
  initialState: InitialState
): UseFormReturnValue<InitialState> => {
  const [form, setForm] = useState<InitialState>(initialState);

  const handleChangeForm = (event: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target;
    setForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleResetForm = (): void => {
    setForm(initialState);
  };

  return [form, handleChangeForm, handleResetForm];
};
