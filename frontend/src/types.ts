export type InputBoxType = {
  name: string;
  placeholder: string;
  type: string;
  onChange: any;
  value? : string
};

export type ButtonProps = {
  text: string;
  onClick: any;
};

export type SignupFormType = {
  name: string;
  email: string;
  password: string;
};
export type SignInFormType = {
  email: string;
  password: string;
};
