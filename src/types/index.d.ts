export interface IExperienceElement {
  key: string;
  title: string;
  subtitle: string | React.ReactElement;
  comment: string | React.ReactElement;
  icon: React.ReactElement;
}

export interface ISocialElement {
  key: string;
  link: string;
  icon: React.ReactElement;
}
