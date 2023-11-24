import{_ as n,o as s,c as e,d as a}from"./app-e09b6429.js";const i="/orangewind/images/nginx/nginxConfig.png",c="/orangewind/images/nginx/nginxConfig1.png",d="/orangewind/images/nginx/nginxConfig2.png",t="/orangewind/images/nginx/nginxConfig3.png",o="/orangewind/images/nginx/nginxConfig4.png",p={},l=a('<h2 id="nginx-基本配置" tabindex="-1"><a class="header-anchor" href="#nginx-基本配置" aria-hidden="true">#</a> nginx 基本配置</h2><p>nginx的默认配置文件通常是<code>/etc/nginx/nginx.conf</code>，我们跳到<code>/etc/nginx</code>目录中执行<code>cat nginx.conf</code>可以查看配置文件的内容</p><h3 id="配置结构" tabindex="-1"><a class="header-anchor" href="#配置结构" aria-hidden="true">#</a> 配置结构</h3><p>下面是一个nginx配置文件的基本结构：</p><p><img src="'+i+`" alt=""></p><div class="language-nginx line-numbers-mode" data-ext="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">events</span></span> <span class="token punctuation">{</span> 

<span class="token punctuation">}</span>

<span class="token directive"><span class="token keyword">http</span></span> 
<span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">server</span></span>
    <span class="token punctuation">{</span> 
        <span class="token directive"><span class="token keyword">location</span> path</span>
        <span class="token punctuation">{</span>
            ...
        <span class="token punctuation">}</span>
        <span class="token directive"><span class="token keyword">location</span> path</span>
        <span class="token punctuation">{</span>
            ...
        <span class="token punctuation">}</span>
     <span class="token punctuation">}</span>

    <span class="token directive"><span class="token keyword">server</span></span>
    <span class="token punctuation">{</span>
        ...
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>main</code>:nginx的全局配置，对全局生效。</p><p><code>events</code>:配置影响nginx服务器或与用户的网络连接。</p><p><code>http</code>：可以嵌套多个server，配置代理，缓存，日志定义等绝大多数功能和第三方模块的配置。</p><p><code>server</code>：配置虚拟主机的相关参数，一个http中可以有多个server。</p><p><code>location</code>：配置请求的路由，以及各种页面的处理情况。</p><p><code>upstream</code>：配置后端服务器具体地址，负载均衡配置不可或缺的部分。</p><p>示例如下：</p><div class="language-nginx line-numbers-mode" data-ext="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">user</span> root</span><span class="token punctuation">;</span>
​
...
​
<span class="token directive"><span class="token keyword">http</span></span> <span class="token punctuation">{</span>
​
  ...
​
  <span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">listen</span>       <span class="token number">80</span> default_server</span><span class="token punctuation">;</span>       <span class="token comment"># 默认在80端口启动nginx服务</span>
    <span class="token directive"><span class="token keyword">listen</span>       [::]:80 default_server</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">server_name</span>  _</span><span class="token punctuation">;</span>                       <span class="token comment"># 绑定的域名</span>
    <span class="token directive"><span class="token keyword">root</span>         /usr/share/nginx/html</span><span class="token punctuation">;</span>   <span class="token comment"># 根目录，会加载这个目录下的html文件</span>
​
    <span class="token comment"># Load configuration files for the default server block.</span>
    <span class="token directive"><span class="token keyword">include</span> /etc/nginx/default.d/*.conf</span><span class="token punctuation">;</span>  <span class="token comment"># 可以引入其他配置文件</span>
​
    <span class="token directive"><span class="token keyword">location</span> /</span> <span class="token punctuation">{</span>                          <span class="token comment"># 访问服务器跟路径</span>
    <span class="token punctuation">}</span>
​
    <span class="token directive"><span class="token keyword">error_page</span> <span class="token number">404</span> /404.html</span><span class="token punctuation">;</span>             <span class="token comment"># 访问的时候路径404</span>
        <span class="token directive"><span class="token keyword">location</span> = /40x.html</span> <span class="token punctuation">{</span>            <span class="token comment"># 404时访问的html</span>
    <span class="token punctuation">}</span>
​
    <span class="token directive"><span class="token keyword">error_page</span> <span class="token number">500</span> <span class="token number">502</span> <span class="token number">503</span> <span class="token number">504</span> /50x.html</span><span class="token punctuation">;</span> <span class="token comment"># 服务器内部错误</span>
        <span class="token directive"><span class="token keyword">location</span> = /50x.html</span> <span class="token punctuation">{</span>            <span class="token comment"># 5xx时访问的html</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="内置变量" tabindex="-1"><a class="header-anchor" href="#内置变量" aria-hidden="true">#</a> 内置变量</h3><p>下面是<code>nginx</code>一些配置中常用的内置全局变量，你可以在配置的任何位置使用它们。</p><table><thead><tr><th>变量名</th><th>功能</th></tr></thead><tbody><tr><td><code>$host</code></td><td>请求信息中的<code>Host</code>，如果请求中没有<code>Host</code>行，则等于设置的服务器名</td></tr><tr><td><code>$request_method</code></td><td>客户端请求类型，如<code>GET</code>、<code>POST</code></td></tr><tr><td><code>$remote_addr</code></td><td>客户端的<code>IP</code>地址</td></tr><tr><td><code>$args</code></td><td>请求中的参数</td></tr><tr><td><code>$content_length</code></td><td>请求头中的<code>Content-length</code>字段</td></tr><tr><td><code>$http_user_agent</code></td><td>客户端agent信息</td></tr><tr><td><code>$http_cookie</code></td><td>客户端cookie信息</td></tr><tr><td><code>$remote_port</code></td><td>客户端的端口</td></tr><tr><td><code>$server_protocol</code></td><td>请求使用的协议，如<code>HTTP/1.0</code>、·HTTP/1.1\`</td></tr><tr><td><code>$server_addr</code></td><td>服务器地址</td></tr><tr><td><code>$server_name</code></td><td>服务器名称</td></tr><tr><td><code>$server_port</code></td><td>服务器的端口号</td></tr></tbody></table><h3 id="缓存配置" tabindex="-1"><a class="header-anchor" href="#缓存配置" aria-hidden="true">#</a> 缓存配置</h3><p>前端经常有一些图片还有其他静态资源文件基本上不会再被修改了，就比如说我做上一个项目的时候的那个大的文件，那这个时候就可以缓存到本地，防止下次请求再从服务器上拉取，这样是很耗费时间和服务器带宽的，接下来我们就来看下如何使用nginx配置缓存。</p><div class="language-nginx line-numbers-mode" data-ext="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
​
  ...
​
  <span class="token directive"><span class="token keyword">location</span> /</span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">root</span>  /root/www/website/dist</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">index</span>   index.html      index.htm</span><span class="token punctuation">;</span>
​
    <span class="token directive"><span class="token keyword">location</span> ~ .*.(?:jpg|jpeg|png|svg)$</span> <span class="token punctuation">{</span> <span class="token comment"># 匹配静态资源的文件后缀</span>
      <span class="token directive"><span class="token keyword">expires</span>   <span class="token number">7d</span></span><span class="token punctuation">;</span> <span class="token comment"># 7天后过期</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
​
  ...
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的配置是对一些图片资源进行的缓存配置，缓存时间为7天，修改好重启后刷新页面，找到关于图片资源的请求，然后就会发现请求第二次的时候就会从本地缓存中获取，并且响应头显示缓存过期时间是7天。</p><h3 id="跨域配置" tabindex="-1"><a class="header-anchor" href="#跨域配置" aria-hidden="true">#</a> 跨域配置</h3><h4 id="跨域的定义" tabindex="-1"><a class="header-anchor" href="#跨域的定义" aria-hidden="true">#</a> 跨域的定义</h4><p>同源策略限制了从同一个源加载的文档或脚本如何与来自另一个源的资源进行交互。这是一个用于隔离潜在恶意文件的重要安全机制。通常不允许不同源间的读操作。</p><h4 id="同源的定义" tabindex="-1"><a class="header-anchor" href="#同源的定义" aria-hidden="true">#</a> 同源的定义</h4><p>如果两个页面的协议，端口（如果有指定）和域名都相同，则两个页面具有相同的源。</p><h4 id="nginx解决跨域的原理" tabindex="-1"><a class="header-anchor" href="#nginx解决跨域的原理" aria-hidden="true">#</a> nginx解决跨域的原理</h4><p>例如：</p><ul><li>前端server的域名为：<code>fe.server.com</code></li><li>后端服务的域名为：<code>dev.server.com</code></li></ul><p>现在我在<code>fe.server.com</code>对<code>dev.server.com</code>发起请求一定会出现跨域。</p><p>现在我们只需要启动一个nginx服务器，将<code>server_name</code>设置为<code>fe.server.com</code>,然后设置相应的location以拦截前端需要跨域的请求，最后将请求代理回<code>dev.server.com</code>。如下面的配置：</p><div class="language-nginx line-numbers-mode" data-ext="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
        <span class="token directive"><span class="token keyword">listen</span>       <span class="token number">80</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">server_name</span>  fe.server.com</span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">location</span> /</span> <span class="token punctuation">{</span>
                <span class="token directive"><span class="token keyword">proxy_pass</span> dev.server.com</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样可以完美绕过浏览器的同源策略：<code>fe.server.com</code>访问<code>nginx</code>的<code>fe.server.com</code>属于同源访问，而<code>nginx</code>对服务端转发的请求不会触发浏览器的同源策略。</p><h3 id="请求过滤" tabindex="-1"><a class="header-anchor" href="#请求过滤" aria-hidden="true">#</a> 请求过滤</h3><p>根据状态码过滤</p><div class="language-nginx line-numbers-mode" data-ext="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">error_page</span> <span class="token number">500</span> <span class="token number">501</span> <span class="token number">502</span> <span class="token number">503</span> <span class="token number">504</span> <span class="token number">506</span> /50x.html</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">location</span> = /50x.html</span> <span class="token punctuation">{</span>
        <span class="token comment">#将跟路径改编为存放html的路径。</span>
        <span class="token directive"><span class="token keyword">root</span> /root/static/html</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>根据URL名称过滤，精准匹配URL，不匹配的URL全部重定向到主页。</p><div class="language-nginx line-numbers-mode" data-ext="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">location</span> /</span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">rewrite</span>  ^.*$ /index.html  redirect</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>根据请求类型过滤。</p><div class="language-nginx line-numbers-mode" data-ext="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">if</span> ( <span class="token variable">$request_method</span> !~ ^(GET|POST|HEAD)$ )</span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">return</span> <span class="token number">403</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ip白名单" tabindex="-1"><a class="header-anchor" href="#ip白名单" aria-hidden="true">#</a> IP白名单</h3><p>可以配置nginx的白名单，规定有哪些ip可以访问你的服务器，防爬虫必备</p><ul><li>简单配置</li></ul><div class="language-nginx line-numbers-mode" data-ext="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
	<span class="token directive"><span class="token keyword">location</span> /</span> <span class="token punctuation">{</span>
		<span class="token directive"><span class="token keyword">deny</span>  192.168.0.1</span><span class="token punctuation">;</span> // 禁止该ip访问
		<span class="token directive"><span class="token keyword">deny</span>  all</span><span class="token punctuation">;</span> // 禁止所有
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>白名单配置</li></ul><p>建立白名单</p><div class="language-nginx line-numbers-mode" data-ext="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">vim</span> /etc/nginx/white_ip.conf
 ...
192.168.0.1 <span class="token number">1</span></span><span class="token punctuation">;</span> 
 ...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>修改nginx配置(nginx.conf)</p><div class="language-nginx line-numbers-mode" data-ext="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">geo</span> <span class="token variable">$remote_addr</span> <span class="token variable">$ip_whitelist</span></span><span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">default</span> <span class="token number">0</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">include</span> ip.conf</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
// geo 指令主要是可以根据指定变量的值映射出一个新变量。 如果不指定变量，默认为$remote_addr
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>为匹配项做白名单设置</p><div class="language-nginx line-numbers-mode" data-ext="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">location</span> /</span> <span class="token punctuation">{</span>
        <span class="token directive"><span class="token keyword">if</span> ( <span class="token variable">$ip_whitelist</span> = <span class="token number">0</span> )</span><span class="token punctuation">{</span>
            <span class="token directive"><span class="token keyword">return</span> <span class="token number">403</span></span><span class="token punctuation">;</span> //不在白名单返回 403
        <span class="token punctuation">}</span>
        <span class="token directive"><span class="token keyword">index</span> index.html</span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">root</span> /tmp</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="适配pc与移动环境" tabindex="-1"><a class="header-anchor" href="#适配pc与移动环境" aria-hidden="true">#</a> 适配PC与移动环境</h3><p>当用户从移动端打开PC端baidu.com的场景时，将自动跳转指移动端m.baidu.com，本质上是Nginx可以通过内置变量$http_user_agent，获取到请求客户端的userAgent，从而知道当前用户当前终端是移动端还是PC，进而重定向到H5站还是PC站</p><div class="language-nginx line-numbers-mode" data-ext="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
 <span class="token directive"><span class="token keyword">location</span> /</span> <span class="token punctuation">{</span>
        //移动、pc设备agent获取
        <span class="token directive"><span class="token keyword">if</span> (<span class="token variable">$http_user_agent</span> ~* <span class="token string">&#39;(Android|webOS|iPhone)&#39;</span>)</span> <span class="token punctuation">{</span>
            <span class="token directive"><span class="token keyword">set</span> <span class="token variable">$mobile_request</span> <span class="token string">&#39;1&#39;</span></span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token directive"><span class="token keyword">if</span> (<span class="token variable">$mobile_request</span> = <span class="token string">&#39;1&#39;</span>)</span> <span class="token punctuation">{</span>
            <span class="token directive"><span class="token keyword">rewrite</span> ^.+ http://m.baidu.com</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span> 
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="配置gzip" tabindex="-1"><a class="header-anchor" href="#配置gzip" aria-hidden="true">#</a> 配置gzip</h3><p><img src="`+c+'" alt=""></p><p><code>GZIP</code>是规定的三种标准HTTP压缩格式之一。目前绝大多数的网站都在使用<code>GZIP</code>传输 <code>HTML</code>、<code>CSS</code>、<code>JavaScript</code> 等资源文件。</p><p>对于文本文件，<code>GZip</code> 的效果非常明显，开启后传输所需流量大约会降至 <code>1/4 ~ 1/3</code>。</p><p>并不是每个浏览器都支持<code>gzip</code>的，如何知道客户端是否支持<code>gzip</code>呢，请求头中的<code>Accept-Encoding</code>来标识对压缩的支持。</p><p><img src="'+d+'" alt=""></p><p>启用<code>gzip</code>同时需要客户端和服务端的支持，如果客户端支持<code>gzip</code>的解析，那么只要服务端能够返回<code>gzip</code>的文件就可以启用<code>gzip</code>了,我们可以通过<code>nginx</code>的配置来让服务端支持<code>gzip</code>。下面的<code>respone</code>中<code>content-encoding:gzip</code>，指服务端开启了<code>gzip</code>的压缩方式。</p><p><img src="'+t+`" alt=""></p><div class="language-nginx line-numbers-mode" data-ext="nginx"><pre class="language-nginx"><code>  <span class="token directive"><span class="token keyword">gzip</span>                    <span class="token boolean">on</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">gzip_http_version</span>       1.1</span><span class="token punctuation">;</span>        
    <span class="token directive"><span class="token keyword">gzip_comp_level</span>         <span class="token number">5</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">gzip_min_length</span>         <span class="token number">1000</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">gzip_types</span> text/csv text/xml text/css text/plain text/javascript application/javascript application/x-javascript application/json application/xml</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="gzip" tabindex="-1"><a class="header-anchor" href="#gzip" aria-hidden="true">#</a> gzip</h4><ul><li>开启或者关闭<code>gzip</code>模块</li><li>默认值为<code> off</code></li><li>可配置为<code> on / off</code></li></ul><h4 id="gzip-http-version" tabindex="-1"><a class="header-anchor" href="#gzip-http-version" aria-hidden="true">#</a> gzip_http_version</h4><ul><li>启用 <code>GZip</code> 所需的<code> HTTP</code> 最低版本</li><li>默认值为<code> HTTP/1.1</code></li></ul><p>这里为什么默认版本不是<code>1.0</code>呢？</p><p><code>HTTP</code> 运行在<code> TCP</code> 连接之上，自然也有着跟<code> TCP</code> 一样的三次握手、慢启动等特性。</p><p>启用持久连接情况下，服务器发出响应后让<code>TCP</code>连接继续打开着。同一对客户/服务器之间的后续请求和响应可以通过这个连接发送。</p><p><img src="`+o+'" alt=""></p><p>为了尽可能的提高 <code>HTTP</code> 性能，使用持久连接就显得尤为重要了。</p><p><code>HTTP/1.1 </code>默认支持<code>TCP</code>持久连接，<code>HTTP/1.0</code> 也可以通过显式指定 <code>Connection: keep-alive</code> 来启用持久连接。对于<code>TCP</code>持久连接上的<code> HTTP</code> 报文，客户端需要一种机制来准确判断结束位置，而在 <code>HTTP/1.0 </code>中，这种机制只有<code> Content-Length</code>。而在<code>HTTP/1.1 </code>中新增的 <code>Transfer-Encoding: chunked</code> 所对应的分块传输机制可以完美解决这类问题。</p><p><code>nginx</code>同样有着配置<code>chunked的</code>属性<code>chunked_transfer_encoding</code>，这个属性是默认开启的。</p><p><code>Nginx </code>在启用了<code>GZip</code>的情况下，不会等文件 <code>GZip</code> 完成再返回响应，而是边压缩边响应，这样可以显著提高 <code>TTFB</code>(<code>Time To First Byte</code>，首字节时间，WEB 性能优化重要指标)。这样唯一的问题是，<code>Nginx</code> 开始返回响应时，它无法知道将要传输的文件最终有多大，也就是无法给出<code>Content-Length</code>这个响应头部。</p><p>所以，在<code>HTTP1.0</code>中如果利用<code>Nginx </code>启用了<code>GZip</code>，是无法获得<code>Content-Length</code>的，这导致HTTP1.0中开启持久链接和使用<code>GZip</code>只能二选一，所以在这里<code>gzip_http_version</code>默认设置为<code>1.1</code>。</p><h4 id="gzip-comp-level" tabindex="-1"><a class="header-anchor" href="#gzip-comp-level" aria-hidden="true">#</a> gzip_comp_level</h4><ul><li>压缩级别，级别越高压缩率越大，当然压缩时间也就越长（传输快但比较消耗cpu）。</li><li>默认值为 <code>1</code></li><li>压缩级别取值为<code>1-9</code></li></ul><h4 id="gzip-min-length" tabindex="-1"><a class="header-anchor" href="#gzip-min-length" aria-hidden="true">#</a> gzip_min_length</h4><ul><li>设置允许压缩的页面最小字节数，<code>Content-Length</code>小于该值的请求将不会被压缩</li><li>默认值:<code>0</code></li><li>当设置的值较小时，压缩后的长度可能比原文件大，建议设置<code>1000</code>以上</li></ul><h4 id="gzip-types" tabindex="-1"><a class="header-anchor" href="#gzip-types" aria-hidden="true">#</a> gzip_types</h4><ul><li>要采用gzip压缩的文件类型(<code>MIME</code>类型)</li><li>默认值:<code>text/html</code>(默认不压缩<code>js</code>/<code>css</code>)</li></ul>',82),r=[l];function u(v,k){return s(),e("div",null,r)}const g=n(p,[["render",u],["__file","nginxshiyonghepeizhi.html.vue"]]);export{g as default};
