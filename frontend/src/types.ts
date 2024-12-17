export type InputBoxType = {
  name: string;
  onChange: any;
  placeholder: string;
  type: string;
  value?: string;
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

export type Blog = {
  id: string;
  title: string;
  content: string;
  published: boolean;
  authorId: string;
};
