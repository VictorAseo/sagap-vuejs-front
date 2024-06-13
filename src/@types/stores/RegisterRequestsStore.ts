export type RegisterRequestsFieldProps = {
  label: string;
  value: string;
  type: string;
  placeholder: string;
  status: boolean;
  feedback: string;
  validations: Array<Function>;
};

export type RegisterRequestSelectFieldProps = {
  label: string;
  value: number | null;
  type: string;
  placeholder: string;
  status: boolean;
  feedback: string;
  validations: Array<Function>;
};

export type RegisterRequestsFields = {
  [key: string]: RegisterRequestsFieldProps | RegisterRequestSelectFieldProps;
  advisor: RegisterRequestSelectFieldProps;
  projectName: RegisterRequestsFieldProps;
  description: RegisterRequestsFieldProps;
};