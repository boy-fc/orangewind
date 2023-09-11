var DynamicTitle = function(params) {
  var originTitle = "",
  recoverTimeout = null,
  config = {
    showIcon: "https://boy-fc.github.io/orangewind/logo.jpg",
    showText: "(/≧▽≦/)欢迎回来~",
    hideIcon: "https://boy-fc.github.io/orangewind/logo.jpg",
    hideText: "(●—●)bye bye~",
    recoverTime: 1000,
  };
  
   function hidden() {
    if (config.hideIcon !== "") {
      getIconElm().setAttribute("href", config.hideIcon);
    }
    document.title = config.hideText;
    clearTimeout(recoverTimeout);
  };
  
  function visible() {
    if (config.showIcon !== "") {
      getIconElm().setAttribute("href", config.showIcon);
    }
    document.title = config.showText + originTitle;
    recoverTimeout = setTimeout(() => {
      document.title = originTitle;
    }, config.recoverTime);
  };

  function getIconElm() {
    let elm = document.querySelector("link[rel=icon]");
    if (elm === null) {
      elm = document.createElement("link");
      elm.setAttribute("rel", "icon");
      document.head.appendChild(elm);
    }
    return elm;
  };

  function change() {
    if (document.hidden) {
      hidden();
    } else {
      console.log(111111111111);
     visible();
    }
  }

  function init() {
    
    originTitle = document.title;
    if (config.showIcon !== "") {
      getIconElm().setAttribute("href", config.showIcon);
    }
    document.removeEventListener("visibilitychange", change());
    
    setTimeout(() => {
      document.addEventListener("visibilitychange", change());
    },0)
  }

  return init()
}()