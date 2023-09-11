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
  description: 工作 生活 记录 随笔 技术 前端 学习
  tagline: 一粒尘埃，在空气中凝结，最后生成磅礴的风雨；一粒沙石，在蚌体内打磨，最后结成昂贵的珍珠。有时候，渺小的开始，可以成就雄伟而宏大的事业；有时候，平凡的开始，可以走出崇高而伟大的人生
  buttons:
    - { text: 引导, link: '/orangewind/posts/' }
    - { text: 关于我, link: '/docs/aboutMe', type: 'plain' }
  # socialLinks:
  #   - { icon: 'LogoGithub', link: 'https://github.com/vuepress-reco/vuepress-theme-reco' }
blog:
  socialLinks:
    - { icon: 'LogoGithub', link: 'https://github.com/boy-fc/orangewind/' }
    - { icon: 'LinkSquare16Filled', link: 'https://juejin.cn/user/4231342834844567' }
footer: # 底部模块的配置
  record: 域名备案文案
  recordLink: 域名备案地址
  cyberSecurityRecord: 公安备案文案
  cyberSecurityLink: 公安备案地址
  startYear: 2023
isShowTitleInHome: true
actionText: About
actionLink: /views/other/about

---
<!-- 动态标题 -->
<DynamicTitle></DynamicTitle>