export type ExtraProps = {
  i: string;
  l: string;
  u: string;
};

export type InputProps = {
  name: string;
  about: string;
  url: string;
  facebook: string;
  twitter: string;
  instagram: string;
  github: string;
  telegram: string;
  linkedin: string;
  email: string;
  youtube: string;
  pinterest: string;
  phoneNumber: string;
  extra: ExtraProps[];
};

export type ComponentProps = {
  inputs: InputProps;
  setInputs: (props: InputProps) => void;
};
