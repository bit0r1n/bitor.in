import { Social } from "@/models";

export function makeSocial(name: string, link: string, icon: string): Social {
  return { name, link, icon }
}