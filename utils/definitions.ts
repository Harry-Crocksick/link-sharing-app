export type ExtraProps = {
  id: number;
  iconKey: string;
  label: string;
  url: string;
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
