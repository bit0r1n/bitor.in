import { DefineComponent } from "vue"

export interface SkillGroup {
  key: string
  display: string
  color: string
  items: DefineComponent<{}, {}, any>[]
}