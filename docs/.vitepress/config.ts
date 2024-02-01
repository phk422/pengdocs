import { defineConfig } from 'vitepress'
import viteConfig from './vite.config'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/pengdocs/',
  outDir: '../dist',
  title: 'PengDocs',
  description: '我的个人博客',
  lang: 'zh-Hans',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    search: {
      provider: 'local',
    },
    outline: 'deep',
    outlineTitle: '文章目录',
    logo: '/logo.png',
    returnToTopLabel: '返回顶部',
    sidebarMenuLabel: '目录',
    darkModeSwitchLabel: '主题切换',
    footer: {
      message: 'Released under the <a href="https://github.com/phk422/phkdocs/blob/master/LICENSE" target="_blank">MIT License</a>.',
      copyright: 'Copyright © 2023-present <a href="https://github.com/phk422" target="_blank">phk422</a>.',
    },
    docFooter: {
      prev: '上一页',
      next: '下一页',
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' },
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/phk422' },
      { icon: 'npm', link: 'https://www.npmjs.com/~codervae' },
    ],
  },

  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/pengdocs/logo.png' }],
  ],
  vite: viteConfig,
})
