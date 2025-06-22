import { ReactNode } from 'react'

export type Skill = {
  name: string
  url: string
  detail?: string[]
}

export type Project = {
  title: string
  date: string
  worker?: number
  subtitle?: ReactNode
  mywork: Array<string>
  stack?: Array<string>
  memory?: string[]
  youtube?: string
  link?: string
  tobeWork?: Array<string>
  description?: ReactNode
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
  part?: ReactNode
  stack?: string[]
}
