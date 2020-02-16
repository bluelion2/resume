export type Skill = {
  name: string;
  url: string;
  detail?: string[];
};

export type Project = {
  title: string;
  date: string;
  worker: number;
  subtitle: string;
  mywork: Array<string>;
  stack: Array<string>;
  youtube?: string;
  link?: string;
};

export type IProject = {
  project: Project;
};

export type IExpList = {
  name: string;
  subtitle: string;
  date: string;
  icon?: string;
  project: Array<Project>;
};
