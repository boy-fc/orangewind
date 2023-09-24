<template></template>

<script>
export default {
  name: "DynamicTitle",
  data() {
    return {
      originTitle: "",
      recoverTimeout: null,
      config: {
        showIcon: "https://boy-fc.github.io/orangewind/logo.jpg",
        showText: "(/≧▽≦/)欢迎回来~",
        hideIcon: "https://boy-fc.github.io/orangewind/logo.jpg",
        hideText: "(●—●)bye bye~",
        recoverTime: 1000,
      },
    };
  },
  mounted() {
    this.originTitle = document.title;
    if (this.config.showIcon !== "") {
      this.getIconElm().setAttribute("href", this.config.showIcon);
    }
    document.addEventListener("visibilitychange", () => {
      if (document.hidden) {
        this.hidden();
      } else {
        this.visible();
      }
    });
  },
  methods: {
    hidden() {
      if (this.config.hideIcon !== "") {
        this.getIconElm().setAttribute("href", this.config.hideIcon);
      }
      document.title = this.config.hideText;
      clearTimeout(this.recoverTimeout);
    },
    visible() {
      if (this.config.showIcon !== "") {
        this.getIconElm().setAttribute("href", this.config.showIcon);
      }
      document.title = this.config.showText + this.originTitle;
      this.recoverTimeout = setTimeout(() => {
        document.title = this.originTitle;
      }, this.config.recoverTime);
    },
    getIconElm() {
      let elm = document.querySelector("link[rel=icon]");
      if (elm === null) {
        elm = document.createElement("link");
        elm.setAttribute("rel", "icon");
        document.head.appendChild(elm);
      }
      return elm;
    },
  },
  watch: {
    // $route(to, from) {
    //   if (to.path !== from.path) {
    //     this.originTitle = document.title;
    //     console.log(this.originTitle);
    //     clearTimeout(this.recoverTimeout);
    //   }
    // },
  },
};
</script>
