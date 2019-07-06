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
}

export interface IProject {
    project: Project
}

export interface IExpList {
    name: string;
    subtitle: string;
    date: string;
    Icon?: string;
    stack: Array<string>;
    project: Array<Project>;
}