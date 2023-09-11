import { defineUserConfig } from "vuepress";
import recoTheme from "vuepress-theme-reco";
import { pwaPlugin } from "@vuepress/plugin-pwa";
import { pwaPopupPlugin } from "@vuepress/plugin-pwa-popup";
import { registerComponentsPlugin } from "@vuepress/plugin-register-components";
import { getDirname, path } from "@vuepress/utils";

const __dirname = getDirname(import.meta.url);

export default defineUserConfig({
  // 名称
  title: "orangewind",
  // 描述
  description: "博客 学习 生活",
  // vuepress build 命令的输出目录
  dest: "bundler/dist",
  // 指定临时文件目录
  temp: "bundler/.temp",
  // 指定缓存文件目录
  cache: "bundler/.cache",
  // 发布到GitHub的仓库名称
  base: "/orangewind/",
  port: 9090,
  // head 头部
  head: [
    ["link", { rel: "manifest", href: "/manifest.webmanifest" }],
    ["meta", { name: "theme-color", content: "#3eaf7c" }],
  ],
  // 主题配置
  theme: recoTheme({
    // 样式
    style: "@vuepress-reco/style-default",
    // logo
    logo: "/logo.jpg",
    // 作者
    author: "orangewind",
    // 作者头像
    authorAvatar: "/head.jpg",
    // 文档仓库
    docsRepo: "https://github.com/boy-fc/orangewind/",
    // 文档分支
    docsBranch: "main",
    // 文档文件
    docsDir: "docs",
    // 最后更新时间
    lastUpdatedText: "最后更新时间",
    // 自动设置分类
    autoSetBlogCategories: true,
    // 自动将分类和标签添加至头部导航条
    // autoAddCategoryToNavbar: {
    //   location: 1, // 默认 0
    //   categoryText: "分类", // 默认 categories
    //   tagText: "标签", // 默认 tags
    // },
    // 头部导航
    navbar: [
      { text: "首页", link: "/", icon: "Home" },
      { text: "博客", link: "/posts/", icon: "Report" },
      { text: "分类", link: "/categories/qianduan/1/", icon: "Tag" },
      { text: "标签", link: "/tags/Docker/1/", icon: "Version" },
      {
        text: "生活",
        icon: "Gift",
        children: [
          {
            text: "国漫",
            link: "/lifeDiary/anime/",
          },
          {
            text: "旅游",
            link: "/lifeDiary/tourism/",
          },
        ],
      },
      { text: "更新日志", link: "/timeline/", icon: "Account" },
    ],
    commentConfig: {
      type: "valine",
      options: {
        appId: "A1pyrc8cgOgZKvCv98QjoOd8-gzGzoHsz",
        appKey: "icB8m5Gqg8zsSwNtu4SPJ7TY",
        placeholder: "填写邮箱可以收到回复提醒哦！",
        recordIP: true,
        visitor: true, // 阅读量统计
        highlight: true, // 代码高亮
        // hideComments: true, // 隐藏评论
      },
    },
    // bulletin: {
    //   body: [
    //     {
    //       type: "text",
    //       content: `🎉🎉🎉 reco 主题 2.x 已经接近 Beta 版本，在发布 Latest 版本之前不会再有大的更新，大家可以尽情尝鲜了，并且希望大家在 QQ 群和 GitHub 踊跃反馈使用体验，我会在第一时间响应。`,
    //       style: "font-size: 12px;",
    //     },
    //     {
    //       type: "hr",
    //     },
    //     {
    //       type: "title",
    //       content: "QQ 群",
    //     },
    //     {
    //       type: "text",
    //       content: `
    //       <ul>
    //         <li>QQ群1：1037296104</li>
    //         <li>QQ群2：1061561395</li>
    //         <li>QQ群3：962687802</li>
    //       </ul>`,
    //       style: "font-size: 12px;",
    //     },
    //     {
    //       type: "hr",
    //     },
    //     {
    //       type: "title",
    //       content: "GitHub",
    //     },
    //     {
    //       type: "text",
    //       content: `
    //       <ul>
    //         <li><a href="https://github.com/vuepress-reco/vuepress-theme-reco-next/issues">Issues<a/></li>
    //         <li><a href="https://github.com/vuepress-reco/vuepress-theme-reco-next/discussions/1">Discussions<a/></li>
    //       </ul>`,
    //       style: "font-size: 12px;",
    //     },
    //     {
    //       type: "hr",
    //     },
    //     {
    //       type: "buttongroup",
    //       children: [
    //         {
    //           text: "打赏",
    //           link: "/docs/others/donate.html",
    //         },
    //       ],
    //     },
    //   ],
    // },
    // 评论
  }),
  plugins: [
    pwaPlugin({
      skipWaiting: true,
    }),
    pwaPopupPlugin({
      locales: {
        "/": {
          message: "发现新内容可用",
          buttonText: "刷新",
        },
      },
    }),
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, "./components"),
    }),
  ],
});
