---
home: true
modules:
  - BannerBrand
  - Blog
  - MdContent
  - Footer
bannerBrand:
  bgImage: '/bg.svg'
  title: Orangewind
  description: 一款简洁的 vuepress 博客 & 文档 主题。
  tagline: vuepress-theme-reco 2.0 继续坚持简洁的风格，所有功能开箱即用，首页模块化组装，使用 tailwindcss 书写样式，将 Vite 作为默认编译器。你只需要负责内容创作，其他请交给我。
  buttons:
    - { text: Guide, link: '/docs/guide/introduce' }
    - { text: Default Style, link: '/docs/style-default-api/introduce', type: 'plain' }
  socialLinks:
    - { icon: 'LogoGithub', link: 'https://github.com/vuepress-reco/vuepress-theme-reco' }
blog:
  socialLinks:
    - { icon: 'LogoGithub', link: 'https://github.com/boy-fc/orangewind/' }
    - { icon: 'LinkSquare16Filled', link: 'https://juejin.cn/user/4231342834844567' }
footer: # 底部模块的配置
  record: 域名备案文案
  recordLink: 域名备案地址
  cyberSecurityRecord: 公安备案文案
  cyberSecurityLink: 公安备案地址
  startYear: 2018
isShowTitleInHome: true
actionText: About
actionLink: /views/other/about
---