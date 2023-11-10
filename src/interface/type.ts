import { ReactNode } from 'react'

export type Skill = {
  name: string
  url: string
  detail?: string[]
}

export type Project = {
  title: string
  date: string
  worker: number
  subtitle: string
  mywork: Array<string>
  stack: Array<string>
  memory?: string[]
  youtube?: string
  link?: string
  description?: ReactNode
  tobeWork?: Array<string>
}

export type IProject = {
  project: Project
}

export type IExpList = {
  name: string
  subtitle: string
  date: string
  icon?: string
  project: Array<Project>
}
