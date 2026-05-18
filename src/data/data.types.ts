export type IntroType = {
  headline: string;
  base: string;
  description: string[];
  skills: {
    icon: string;
    title: string;
    items: string[];
  }[];
};

export type CommentsType = {
  comment: string;
  user: string;
}[];

export type ProjectType = {
  body: string;
  colors: string[];
  company: string;
  font: {
    face: string;
    family: string;
    local: boolean;
    url: string;
    weight: number;
  };
  important: boolean;
  index: number;
  link: {
    active: boolean;
    url: string;
  };
  name: string;
  pictureHome: string;
  projectTitle: string;
  released: string;
  screens: string[];
  stack: {
    icon: string;
    title: string;
  }[];
};
