import{_ as i}from"./app-e09b6429.js";const o={name:"DynamicTitle",data(){return{originTitle:"",recoverTimeout:null,config:{showIcon:"https://boy-fc.github.io/orangewind/logo.jpg",showText:"(/≧▽≦/)欢迎回来~",hideIcon:"https://boy-fc.github.io/orangewind/logo.jpg",hideText:"(●—●)bye bye~",recoverTime:1e3}}},mounted(){this.originTitle=document.title,this.config.showIcon!==""&&this.getIconElm().setAttribute("href",this.config.showIcon),document.addEventListener("visibilitychange",()=>{document.hidden?this.hidden():this.visible()})},methods:{hidden(){this.config.hideIcon!==""&&this.getIconElm().setAttribute("href",this.config.hideIcon),document.title=this.config.hideText,clearTimeout(this.recoverTimeout)},visible(){this.config.showIcon!==""&&this.getIconElm().setAttribute("href",this.config.showIcon),document.title=this.config.showText+this.originTitle,this.recoverTimeout=setTimeout(()=>{document.title=this.originTitle},this.config.recoverTime)},getIconElm(){let e=document.querySelector("link[rel=icon]");return e===null&&(e=document.createElement("link"),e.setAttribute("rel","icon"),document.head.appendChild(e)),e}},watch:{$route(e,t){e.path!==t.path&&(this.originTitle=document.title,console.log(this.originTitle),clearTimeout(this.recoverTimeout))}}};function n(e,t,c,s,h,r){return null}const u=i(o,[["render",n],["__file","DynamicTitle.vue"]]);export{u as default};
