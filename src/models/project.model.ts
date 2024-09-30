import { DefineComponent } from 'vue'

export interface Project {
  name: string
  description?: string
  thumbnail: string
  link: string
  technologies: DefineComponent<{}, {}, any>[]
  color?: string
}