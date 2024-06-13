export type InputProps = {
  inputLabel: string;
  inputValue: string | number | string[] | undefined;
  inputType?: string;
  inputFeedback?: string;
  inputStatus?: boolean;
  inputPlaceholder?: string;
  inputModel?: string;
  disabled?: boolean
};

export type EmitsProps = {
  (e: "update:inputValue", value: HTMLInputElement["value"]): HTMLInputElement["value"];
};
