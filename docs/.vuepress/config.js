module.exports = {
  title: "OrangeWind的博客",
  description: '博客 学习 面试 生活',
  theme: "reco",
  base: '/orangewind/',
  locales: {
    "/": {
      lang: "zh-CN",
    },
  },
  themeConfig: {
    type: "blog",
    logo: "/avatar.jpg",
    author: "orangeWind",
    authorAvatar: "/avatar.jpg",
    subSiderbar: "auto",
    nav: [
      { text: "首页", link: "/" },
      {
        text: "OrangeWind 的博客",
        items: [
          { text: "掘金", link: "https://juejin.cn/user/4231342834844567" },
          { text: "Github", link: "https://github.com/boy-fc" }
        ]
      }
    ],
    // 博客配置
    blogConfig: {
      category: {
        location: 2, // 在导航栏菜单中所占的位置，默认2
        text: "博客", // 默认文案 “分类”
      },
      tag: {
        location: 4, // 在导航栏菜单中所占的位置，默认4
        text: "Tag", // 默认文案 “标签”
      },
    }
  },
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: '/icons/apple-touch-icon-152x152.png' }],
    ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],
  plugins: [
    // pwa 
    [
      '@vuepress/pwa',
      {
        serviceWorker: true,
        updatePopup: {
          message: "发现新内容可用",
          buttonText: "刷新"
        }
      }
    ],
    // 樱花插件
    [
      "sakura",
      {
        num: 20, // 默认数量
        show: true, //  是否显示
        zIndex: -1, // 层级
        img: {
          replace: false, // false 默认图 true 换图 需要填写httpUrl地址
        },
      },
    ],
    // 看板娘
    [
      '@vuepress-reco/vuepress-plugin-kan-ban-niang',
      {
        theme: ['blackCat', 'whiteCat', 'haru1', 'haru2', 'haruto', 'koharu', 'izumi', 'shizuku', 'wanko', 'miku', 'z16'],
        clean: false,
        info: 'https://github.com/mengqiuleo',
        messages: {
          welcome: '',
          home: '心里的花，我想要带你回家',
          theme: '好吧，希望你能喜欢我的其他小伙伴。',
          close: '再见哦'
        }
      }
    ],
    // 添加著作权信息
    [
      'copyright',
      {
        authorName: 'OrangeWind', 
        minLength: 30, 
      },
    ],
    // 动态标题
    [
      'dynamic-title',
        {
        // showIcon: 'https://www.typescriptlang.org/favicon-32x32.png?v=8944a05a8b601855de116c8a56d3b3ae',
        showText: '(/≧▽≦/)欢迎回来~',
        // hideIcon: 'https://www.typescriptlang.org/favicon-32x32.png?v=8944a05a8b601855de116c8a56d3b3ae',
        hideText: '(●—●)bye bye~',
        recoverTime: 1000,
      }
    ],
    // 鼠标点击效果
    // [
    //   "cursor-effects",
    //   {
    //     size: 2, // size of the particle, default: 2
    //     shape: "star", // ['star' | 'circle'], // shape of the particle, default: 'star'
    //     zIndex: 999999999, // z-index property of the canvas, default: 999999999
    //   },
    // ],
 ]
}