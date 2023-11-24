import{_ as o,r as i,o as c,c as t,e as n,f as s,b as l,d as e}from"./app-e09b6429.js";const p="/orangewind/images/docker/dockerCompose.jpg",r="/orangewind/images/docker/dockerCompose1.jpg",d="/orangewind/images/docker/dockerCompose2.png",u="/orangewind/images/docker/dockerCompose3.png",m="/orangewind/images/docker/dockerCompose4.png",k={},v=e('<h2 id="docker-compose" tabindex="-1"><a class="header-anchor" href="#docker-compose" aria-hidden="true">#</a> docker Compose</h2><h3 id="一、简介" tabindex="-1"><a class="header-anchor" href="#一、简介" aria-hidden="true">#</a> 一、简介</h3><p>产生的背景：</p><p>我们使用 Docker的时候，定义 Dockerfile 文件，然后使用 docker build、docker run 等命令操作容器。 然而微服务架构的应用系统一般包含若干个微服务，每个微服务一般都会部署多个实例，如果每个微服务都要手动启停，那么效率之低，维护量之大</p><p>为了提高效率，我们就需要一种像 Dockerfile 定义 Docker 容器一样，能够定义容器（多个）编排和部署工具。于是，Docker Compose 出现了(其实应该说 Fig 出现了，Docker 收购了 Fig 并改名为 compose)。</p><h3 id="_1-什么是compose" tabindex="-1"><a class="header-anchor" href="#_1-什么是compose" aria-hidden="true">#</a> 1.什么是compose</h3><p>Docker-compose 是一个<strong>定义</strong>和<strong>运行多个</strong> Docker 应用的工具，你可以使用YMAL文件来配置你的服务，然后使用docker-compose 命令，创建和启动、编排所有你配置的的服务。</p><p>compose 可以在任何工作环境中使用，生产环境，开发环境，持续集成等等。</p><p><img src="'+p+'" alt=""></p>',9),b=n("div",{class:"custom-container tip"},[n("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},[n("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[n("circle",{cx:"12",cy:"12",r:"9"}),n("path",{d:"M12 8h.01"}),n("path",{d:"M11 12h1v4h1"})])]),n("p",{class:"custom-container-title"},"TIP"),n("p",null,"从logo上可以看出来它就是一个管理容器的工( zhang )具( yu ), 我们可以方便的使用它来管理我们的Docker容器, 可以极大程度的简化命令行的复杂操作。")],-1),g=e(`<h3 id="二、安装" tabindex="-1"><a class="header-anchor" href="#二、安装" aria-hidden="true">#</a> 二、安装</h3><p>版本：<strong>1.25.0-rc4</strong></p><div class="language-http line-numbers-mode" data-ext="http"><pre class="language-http"><code><span class="token header"><span class="token header-name keyword">https</span><span class="token punctuation">:</span><span class="token header-value">//github.com/docker/compose/releases/tag/1.25.0-rc4</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_1、安装" tabindex="-1"><a class="header-anchor" href="#_1、安装" aria-hidden="true">#</a> 1、安装</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#在Linux下下载（下载到/usr/local/bin）
curl -L &quot;https://github.com/docker/compose/releases/download/1.25.0-rc4/docker-compose-$(uname -s)-$(uname -m)&quot; -o /usr/local/bin/docker-compose
或者
cd /usr/local/bin
wget https://github.com/docker/compose/releases/download/1.25.0-rc4/docker-compose-Linux-x86_64
mv docker-compose-Linux-x86_64  docker-compose


# 设置文件可执行权限
chmod +x /usr/local/bin/docker-compose

# 查看版本信息
docker-compose --version
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>看到版本信息，说明安装成功。</p><h3 id="_2-卸载" tabindex="-1"><a class="header-anchor" href="#_2-卸载" aria-hidden="true">#</a> 2.卸载</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 二进制包方式安装的，删除二进制文件即可
rm /usr/local/bin/docker-compose
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,8),h={href:"https://link.zhihu.com/?target=https%3A//github.com/docker/compose/releases/download/1.25.0-rc4/docker-compose-Linux-x86_64",target:"_blank",rel:"noopener noreferrer"},y=e('<h3 id="三、compose-核心概念与常用命令" tabindex="-1"><a class="header-anchor" href="#三、compose-核心概念与常用命令" aria-hidden="true">#</a> <strong>三、Compose 核心概念与常用命令</strong></h3><h3 id="_1-compose-核心概念" tabindex="-1"><a class="header-anchor" href="#_1-compose-核心概念" aria-hidden="true">#</a> 1.Compose 核心概念</h3><ul><li>项目（project）； 通过 Docker Compose 管理的一个项目被抽象称为一个 project <strong>project</strong> 里<strong>包括</strong>多个 <strong>service</strong></li><li>服务（ servic e）； 每个 service 定义了容器运行的镜像（或构建镜像），网络端口，文件挂载，参数，依赖等 每个 <strong>service</strong> 可<strong>包括同一个镜像</strong>的<strong>多个容器实例</strong>。</li><li>容器（container）</li></ul><p><img src="'+r+`" alt=""></p><p>模板文件</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>version: &#39;3.7&#39;
services:
  haproxy:
    image: dockercloud/haproxy
  redis:
    image: rediS
    
 ...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+d+'" alt=""></p><p><strong>即 project 包含 service ，service 包含 container</strong></p><h3 id="_2-compose模板文件介绍" tabindex="-1"><a class="header-anchor" href="#_2-compose模板文件介绍" aria-hidden="true">#</a> <strong>2.Compose模板文件介绍</strong></h3><p><strong>Compose模板文件格式</strong></p><p>Docker Compose 使用 YAML 文件来定义多服务的应用。</p><p>Docker Compose 默认使用文件名 docker-compose.yml。当然，也可以使用 -f 参数指定具体文件</p>',12),_=n("div",{class:"custom-container tip"},[n("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},[n("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[n("circle",{cx:"12",cy:"12",r:"9"}),n("path",{d:"M12 8h.01"}),n("path",{d:"M11 12h1v4h1"})])]),n("p",{class:"custom-container-title"},"TIP"),n("p",null,[n("strong",null,"官方提供了一个 yaml Docker Compose 配置文件的标准例子"),n("strong",null,[s("提示：可以用 "),n("code",null,".yml"),s(" 或 "),n("code",null,".yaml"),s(" 作为文件扩展名")])])],-1),x=e(`<div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&quot;3.7&quot;</span>
<span class="token key atrule">services</span><span class="token punctuation">:</span>

  <span class="token key atrule">redis</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> redis<span class="token punctuation">:</span>alpine
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;6379:6379&quot;</span>
    <span class="token key atrule">networks</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> frontend
    <span class="token key atrule">deploy</span><span class="token punctuation">:</span>
     <span class="token comment">#指定运行容器的数量</span>
      <span class="token key atrule">replicas</span><span class="token punctuation">:</span> <span class="token number">2</span>
      <span class="token key atrule">update_config</span><span class="token punctuation">:</span>
      <span class="token comment">#一次性更新的容器数量</span>
        <span class="token key atrule">parallelism</span><span class="token punctuation">:</span> <span class="token number">2</span>
      <span class="token comment">#更新一组容器之间的等待时间</span>
        <span class="token key atrule">delay</span><span class="token punctuation">:</span> 10s
      <span class="token key atrule">restart_policy</span><span class="token punctuation">:</span>
        <span class="token key atrule">condition</span><span class="token punctuation">:</span> on<span class="token punctuation">-</span>failure

  <span class="token key atrule">db</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> postgres<span class="token punctuation">:</span><span class="token number">9.4</span>
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> db<span class="token punctuation">-</span>data<span class="token punctuation">:</span>/var/lib/postgresql/data
    <span class="token key atrule">networks</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> backend
    <span class="token key atrule">deploy</span><span class="token punctuation">:</span>
      <span class="token key atrule">placement</span><span class="token punctuation">:</span>
        <span class="token key atrule">constraints</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>node.role == manager<span class="token punctuation">]</span>

  <span class="token key atrule">vote</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> dockersamples/examplevotingapp_vote<span class="token punctuation">:</span>before
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> 5000<span class="token punctuation">:</span><span class="token number">80</span>
    <span class="token key atrule">networks</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> frontend
    <span class="token key atrule">depends_on</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> redis
    <span class="token key atrule">deploy</span><span class="token punctuation">:</span>
      <span class="token key atrule">replicas</span><span class="token punctuation">:</span> <span class="token number">2</span>
      <span class="token key atrule">update_config</span><span class="token punctuation">:</span>
      <span class="token comment">#一次性更新的容器数量</span>
        <span class="token key atrule">parallelism</span><span class="token punctuation">:</span> <span class="token number">2</span>
      <span class="token key atrule">restart_policy</span><span class="token punctuation">:</span>
        <span class="token key atrule">condition</span><span class="token punctuation">:</span> on<span class="token punctuation">-</span>failure

  <span class="token key atrule">result</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> dockersamples/examplevotingapp_result<span class="token punctuation">:</span>before
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> 5001<span class="token punctuation">:</span><span class="token number">80</span>
    <span class="token key atrule">networks</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> backend
    <span class="token key atrule">depends_on</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> db
    <span class="token key atrule">deploy</span><span class="token punctuation">:</span>
      <span class="token key atrule">replicas</span><span class="token punctuation">:</span> <span class="token number">1</span>
      <span class="token key atrule">update_config</span><span class="token punctuation">:</span>
      <span class="token comment">#一次性更新的容器数量</span>
        <span class="token key atrule">parallelism</span><span class="token punctuation">:</span> <span class="token number">2</span>
              <span class="token comment">#更新一组容器之间的等待时间</span>
        <span class="token key atrule">delay</span><span class="token punctuation">:</span> 10s
      <span class="token key atrule">restart_policy</span><span class="token punctuation">:</span>
        <span class="token key atrule">condition</span><span class="token punctuation">:</span> on<span class="token punctuation">-</span>failure


<span class="token key atrule">networks</span><span class="token punctuation">:</span>
  <span class="token key atrule">frontend</span><span class="token punctuation">:</span>
  <span class="token key atrule">backend</span><span class="token punctuation">:</span>

<span class="token key atrule">volumes</span><span class="token punctuation">:</span>
  <span class="token key atrule">db-data</span><span class="token punctuation">:</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>version</strong>：指定 docker-compose.yml 文件的写法格式</p><p><strong>replicas</strong></p><p>指定运行容器的数量</p><p><strong>update_config</strong></p><ul><li>parallelism：一次性更新的容器数量</li><li>delay：更新一组容器之间的等待时间。</li></ul><p><strong>mode</strong></p><p>replicated 如果服务是 <code>replicated</code>（默认)，需要指定运行的容器数量</p><p><strong>restart_policy 重启策略</strong></p><p>配置容器的重新启动，代替 <code>restart</code></p><ul><li>condition:值可以为 <code>none</code> 、<code>on-failure</code> 以及 <code>any</code>(默认)</li><li>delay: 尝试重启的等待时间，默认为 <code>0</code></li><li>max_attempts:在放弃之前尝试重新启动容器次数（默认：从不放弃）。如果重新启动在配置中没有成功 window，则此尝试不计入配置<code>max_attempts</code> 值。例如，如果 <code>max_attempts</code> 值为 <code>2</code>，并且第一次尝试重新启动失败，则可能会尝试重新启动两次以上。</li><li>windows:在决定重新启动是否成功之前的等时间，指定为持续时间（默认值：立即决定）</li></ul><p><strong>卷标设置与查看</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>使用卷标模式进行挂载

volumes:
  db-data:
  
------------卷标分析
#新增卷标
docker volume create my-vo
#查看所有卷标
docker volume ls
#查看批量的卷标 
docker volume ls | grep mysql
#查看具体的volume对应的真实地址
docker volume inspect my-vo
#删除卷标
docker volume rm my-vol
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>挂载方式对比： 绝对路径：直接挂载到本地，比较直观，但需要管理本地的路径 卷标：简洁，但你不知道数据存在本地什么位置</p></blockquote><p><strong>网络定义</strong></p><p>目的：实现网络隔离</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>networks:
  frontend:
  backend:
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>docker network create --subnet=172.158.0.0/16 frontend</p></blockquote><p><strong>Docker Compose版本</strong></p><p><img src="`+u+`" alt=""></p><h4 id="_3-compose常用命令" tabindex="-1"><a class="header-anchor" href="#_3-compose常用命令" aria-hidden="true">#</a> 3.Compose常用命令</h4><p><strong>1) docker-compose up</strong></p><p>用于部署一个 Compose 应用。 默认情况下该命令会读取名为 docker-compose.yml 或 docker-compose.yaml 的文件。</p><p>当然用户也可以使用 -f 指定其他文件名。通常情况下，会使用 -d 参数令应用在后台启动。</p><p><strong>2) docker-compose start</strong></p><p>启动</p><p><strong>3) docker-compose stop</strong></p><p>停止 Compose 应用相关的所有容器，但不会删除它们。 被停止的应用可以很容易地通过 docker-compose restart 命令重新启动。</p><p><strong>4) docker-compose rm</strong></p><p>用于删除已停止的 Compose 应用</p><p>它会删除容器和网络，但是不会删除卷和镜像。</p><p><strong>5) docker-compose restart</strong></p><p>重启已停止的 Compose 应用。 如果用户在停止该应用后对其进行了变更，那么变更的内容不会反映在重启后的应用中</p><p>这时需要重新部署应用使变更生效。</p><p><strong>6) docker-compose ps</strong></p><p>用于列出 Compose 应用中的各个容器。 输出内容包括当前状态、容器运行的命令以及网络端口。</p><p><strong>7) docker-compose down</strong></p><p>停止并删除运行中的 Compose 应用。 它会删除容器和网络，但是不会删除卷和镜像</p><p><strong>8) docker-compose logs web</strong></p><p><strong>9) docker-compose build</strong></p><p>当你改变本地代码之后，先执行 docker-compose build 构建新的镜像，然后执行 docker-compose up -d 取代运行中的容器</p><h3 id="三、docker-compose-工作原理" tabindex="-1"><a class="header-anchor" href="#三、docker-compose-工作原理" aria-hidden="true">#</a> <strong>三、Docker Compose 工作原理</strong></h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker-compose</span> up <span class="token parameter variable">-d</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_1-compose-的一次调用流程" tabindex="-1"><a class="header-anchor" href="#_1-compose-的一次调用流程" aria-hidden="true">#</a> <strong>1.Compose 的一次调用流程</strong></h3><p><img src="`+m+'" alt=""></p><ol><li><p>首先，用户执行 docker-compose up 命令调用命令行中的启动方法</p></li><li><p>然后，如果当前宿主机已经存在与该应用对应的容器，docker-compose 则进行行为逻辑判断。如果用户指定可以重新启动已有服务，docker-compose 就会执行 service 模块的容器重启方法，否则就直接启动已有容器。这两种操作的区别在于前者会停止旧的容器，创建并启动新的容器，并把旧容器移除掉。</p></li><li><p>最后，contaier 模块会调用 docker-py 客户端来执行向 docker daemon 发起创建容器的 POST 请求。</p></li></ol>',46);function f(w,C){const a=i("ExternalLinkIcon");return c(),t("div",null,[v,b,g,n("p",null,[s("常见问题： 如果安装完成后，查看版本频繁报错，如下 Cannot open self /usr/local/bin/docker-compose or archive /usr/local/bin/docker-compose.pkg 可使用下面的解决方案 1、切换到/usr/local/bin，删除之前的下载/docker-compose 2、切换到/usr/local/bin执行下面的命令 wget "),n("a",h,[s("https://github.com/docker/compose/releases/download/1.25.0-rc4/docker-compose-Linux-x86_64"),l(a)]),s(" 3、下载完毕后重命名为docker-compose mv docker-compose-Linux-x86_64 docker-compose 4、赋权限 5、查看版本成功")]),y,_,x])}const q=o(k,[["render",f],["__file","dockerCompose.html.vue"]]);export{q as default};
