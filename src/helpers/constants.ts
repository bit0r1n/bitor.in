import { Project, Social } from '@/models'
import { makeSocial } from './makeSocial'
import {
  NestjsIcon,
  TypescriptIcon,
  NimIcon,
  AerospikeIcon,
  RedisIcon,
  DockerIcon,
  BunIcon,
  MongodbIcon,
  ArchlinuxIcon,
  CplusplusIcon,
  CsharpIcon,
  DartIcon,
  DebianIcon,
  ExpressIcon,
  FlutterIcon,
  GitIcon,
  GnubashIcon,
  JavascriptIcon,
  KoaIcon,
  KotlinIcon,
  MysqlIcon,
  NodedotjsIcon,
  RustIcon,
  UbuntuIcon,
  VuedotjsIcon,
  VuetifyIcon,
  ReactIcon,
  NatsdotioIcon
} from 'vue3-simple-icons'
import { SkillGroup } from '@/models/skill.model'

export const socials: Social[] = [
  makeSocial('github', 'https://github.com/bit0r1n', 'fa-brands fa-github'),
  makeSocial('discord', 'https://discord.gg/morgenshtern', 'fa-brands fa-discord'),
  makeSocial('steam', 'https://steamcommunity.com/id/bit0r1n1336', 'fa-brands fa-steam'),
  makeSocial('twitter', 'https://x.com/bit0r1n', 'fa-brands fa-x-twitter'),
  makeSocial('vk', 'https://vk.com/bit0r1n1336', 'fa-brands fa-vk'),
  makeSocial('youtube', 'https://www.youtube.com/c/bit0r1n', 'fa-brands fa-youtube'),
  makeSocial('spotify', 'https://open.spotify.com/user/ebi2cjyn86lj7d2dogl6i67wn?si=152f5f79eb204ced',
    'fa-brands fa-spotify'),
  makeSocial('instagram', 'https://www.instagram.com/bit0r1n', 'fa-brands fa-instagram')
]

export const projects: Project[] = [
  {
    name: 'GenAi',
    description: 'Discord bot with Markov chain text generator',
    technologies: [ NestjsIcon, TypescriptIcon, NodedotjsIcon, NimIcon, AerospikeIcon, RedisIcon, NatsdotioIcon, DockerIcon ],
    link: 'https://genai.bot',
    thumbnail: new URL('@/assets/genai.webp', import.meta.url).href,
    color: '#7B1FA2'
  },
  {
    name: 'MITSO Schedule',
    description: 'Telegram bot for getting MITSO schedule',
    technologies: [ TypescriptIcon, NimIcon, BunIcon, MongodbIcon, RedisIcon, DockerIcon ],
    link: 'https://github.com/bit0r1n/mitso-bot',
    thumbnail: new URL('@/assets/mitso-bot.webp', import.meta.url).href,
    color: '#E53935'
  }
]

export const skillGroups: SkillGroup[] = [
  {
    key: 'good',
    display: 'good',
    color: 'teal-lighten-2',
    items: [ TypescriptIcon, JavascriptIcon, NodedotjsIcon, ExpressIcon, KoaIcon, MysqlIcon, AerospikeIcon, GnubashIcon, GitIcon, DockerIcon, ArchlinuxIcon, DebianIcon, UbuntuIcon ]
  },
  {
    key: 'know',
    display: 'know something',
    color: 'teal-darken-3',
    items: [ CsharpIcon, NimIcon, KotlinIcon, NestjsIcon, VuedotjsIcon, VuetifyIcon, ReactIcon, MongodbIcon, RedisIcon ]
  },{
    key: 'meh',
    display: 'meh',
    color: 'teal-darken-2',
    items: [ DartIcon, CplusplusIcon, FlutterIcon ]
  },{
    key: 'bruh',
    display: 'bruh 💀',
    color: 'red-accent-3',
    items: [ RustIcon ]
  }
]
