export type PageProps = {
  params: { id: string };
  searchParams: { [key: string]: string };
};

export type ExtraLinkContextTypes = {
  data: ExtraProps[];
  setData: (props: ExtraProps[]) => void;
};

export type ExtraProps = {
  id: string;
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
  discord: string;
  extra: ExtraProps[];
};

export type ComponentProps = {
  inputs: InputProps;
  setInputs: (props: InputProps) => void;
};
