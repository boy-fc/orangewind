const path = require('path')  //自定义样式里需要引入path
const moment = require('moment');

module.exports = {
  title: "OrangeWind的博客",
  description: '博客 学习 面试 生活',
  palette: path.resolve(__dirname, 'palette.styl'),   //palette.style就是styles里边的文件，此文件就是写的自定义主题样式
  theme: "reco",
  configureWebpack: {
    resolve: {
      alias: {
        '@alias': 'path/to/some/dir'
      }
    }
  },
  base: '/orangewind/',
  locales: {
    "/": {
      lang: "zh-CN",
    },
  },
  markdown: {
    lineNumbers: true,
    anchor: { permalink: false }
  },
  themeConfig: {
    type: "blog",
    logo: "/avatar.jpg",
    author: "orangeWind",
    authorAvatar: "/avatar.jpg",
    subSiderbar: "auto",
    // 搜索设置
    search: true,
    searchMaxSuggestions: 10,
    // 自动形成侧边导航
    sidebar: 'auto',
    // 最后更新时间
    lastUpdated: '最后更新时间',
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
    },
    // 友情链接
    friendLink: [
      {
        title: 'vuepress-theme-reco',
        desc: 'A simple and beautiful vuepress Blog & Doc theme.',
        logo: "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
        link: 'https://vuepress-theme-reco.recoluan.com'
      },
      {
        title: '午后南杂',
        desc: 'Enjoy when you can, and endure when you must.',
        email: 'recoluan@qq.com',
        link: 'https://www.recoluan.com'
      }
    ],
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
      '@vuepress/plugin-pwa',
      {
        serviceWorker: true,
        updatePopup: {
          message: "发现新内容可用",
          buttonText: "刷新"
        }
      }
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
    // 彩带
    [
      "ribbon-animation", 
      {
        size: 90,   // 默认数据
        opacity: 0.3,  //  透明度
        zIndex: -1,   //  层级
        opt: {
          // 色带HSL饱和度
          colorSaturation: "80%",
          // 色带HSL亮度量
          colorBrightness: "60%",
          // 带状颜色不透明度
          colorAlpha: 0.65,
          // 在HSL颜色空间中循环显示颜色的速度有多快
          colorCycleSpeed: 6,
          // 从哪一侧开始Y轴 (top|min, middle|center, bottom|max, random)
          verticalPosition: "center",
          // 到达屏幕另一侧的速度有多快
          horizontalSpeed: 200,
          // 在任何给定时间，屏幕上会保留多少条带
          ribbonCount: 2,
          // 添加笔划以及色带填充颜色
          strokeSize: 0,
          // 通过页面滚动上的因子垂直移动色带
          parallaxAmount: -0.5,
          // 随着时间的推移，为每个功能区添加动画效果
          animateSections: true
        },
        ribbonShow: false, //  点击彩带  true显示  false为不显示
        ribbonAnimationShow: true  // 滑动彩带
      }
    ],
    [ 
      '@vuepress/last-updated',
      {
        transformer: (timestamp, lang) => {
          const moment = require('moment')
          moment.locale(lang)
          return moment(timestamp).fromNow()
        }
      }
    ],
    [ 
      "vuepress-plugin-nuggets-style-copy", 
      {
        copyText: "复制代码",
        tip: {
          content: "复制成功"
        }
      }
    ],
    // 菜单高亮
    [ 
      '@vuepress/active-header-links',
      {
        sidebarLinkSelector: '.sidebar-link',
        headerAnchorSelector: '.header-anchor'
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
    // 樱花插件
    // [
    //   "sakura",
    //   {
    //     num: 20, // 默认数量
    //     show: true, //  是否显示
    //     zIndex: -1, // 层级
    //     img: {
    //       replace: false, // false 默认图 true 换图 需要填写httpUrl地址
    //     },
    //   },
    // ],
 ]
}