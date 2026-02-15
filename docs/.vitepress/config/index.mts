import { defineConfig } from 'vitepress'
import { en } from './en'
import { zh, zhSearch } from './zh'
import { ja, jaSearch } from './ja'
import { vi, viSearch } from './vi'
import { cht, chtSearch } from './cht'
import { ko, koSearch } from './ko'
import { ru, ruSearch } from './ru'
import { tabsMarkdownPlugin } from 'vitepress-plugin-tabs'

declare const process: { env: Record<string, string | undefined> }

const repo = process.env.GITHUB_REPOSITORY || ''
const [owner, repoName] = repo.split('/')
const isUserSite =
  !!owner &&
  !!repoName &&
  repoName.toLowerCase() === `${owner.toLowerCase()}.github.io`
const base = process.env.VITEPRESS_BASE || (isUserSite ? '/' : (repoName ? `/${repoName}/` : '/'))

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base,
  title: "LunaTranslator",
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: `${base}logo.png` }],
  ],
  rewrites: {
    //  'zh/:rest*': ':rest*'
  },

  lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    socialLinks: [
      { icon: 'github', link: 'https://github.com/bonelag/PatchTranslator' }
    ],
    outline: {
      level: [2, 3],
    },
    search: {
      provider: 'local', options: {
        locales: {
          ...zhSearch,
          ...jaSearch,
          ...viSearch,
          ...chtSearch,
          ...koSearch,
          ...ruSearch,
        }
      }
    },
    logo: `${base}logo.png`
  },

  locales: {
    zh: { label: '简体中文', ...zh },
    cht: { label: '繁體中文', ...cht },
    en: { label: 'English', ...en },
    ja: { label: '日本語', ...ja },
    vi: { label: 'Tiếng Việt', ...vi },
    ko: { label: '한국어', ...ko },
    ru: { label: 'Русский язык', ...ru },
  },
  ignoreDeadLinks: true,
  markdown: {
    config(md: any) {
      md.use(tabsMarkdownPlugin)
    }
  }
})