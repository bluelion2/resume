export interface Skill {
    name: string;
    url: string;
}

export interface Project {
    date: string;
    link?: string;
    mywork: Array<string>;
    subtitle: string;
    title: string;
    youtube?: string;
    stack: Array<string>;
}

export interface IProject {
    project: Project
}

export interface IExpList {
    name: string;
    subtitle: string;
    date: string;
    icon?: string;
    project: Array<Project>;
}