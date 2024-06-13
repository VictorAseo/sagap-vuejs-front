export type RegisterFieldProps = {
  label: string;
  value: string;
  type: string;
  placeholder: string;
  status: boolean;
  feedback: string;
  validations: Array<Function>;
};

export type RegisterFieldProps2 = {
  label: string;
  value: number | null;
  type: string;
  placeholder: string;
  status: boolean;
  feedback: string;
  validations: Array<Function>;
};

export type RegisterFields = {
  [key: string]: RegisterFieldProps | RegisterFieldProps2;
  name: RegisterFieldProps;
  email: RegisterFieldProps;
  matricula: RegisterFieldProps;
  password: RegisterFieldProps;
  retypePassword: RegisterFieldProps;
  typeUser: RegisterFieldProps2
};

