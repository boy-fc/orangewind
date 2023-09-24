---
title: Nginx基本配置
date: 2023-9-24
sidebar: 'auto'
categories:
  - 前端
tags:
  - Nginx
sticky: 1
---

## nginx 基本配置

nginx的默认配置文件通常是`/etc/nginx/nginx.conf`，我们跳到`/etc/nginx`目录中执行`cat nginx.conf`可以查看配置文件的内容

### 配置结构

下面是一个nginx配置文件的基本结构：

![](/images/nginx/nginxConfig.png)

```nginx
events { 

}

http 
{
    server
    { 
        location path
        {
            ...
        }
        location path
        {
            ...
        }
     }

    server
    {
        ...
    }

}
```

`main`:nginx的全局配置，对全局生效。

`events`:配置影响nginx服务器或与用户的网络连接。

`http`：可以嵌套多个server，配置代理，缓存，日志定义等绝大多数功能和第三方模块的配置。

`server`：配置虚拟主机的相关参数，一个http中可以有多个server。

`location`：配置请求的路由，以及各种页面的处理情况。

`upstream`：配置后端服务器具体地址，负载均衡配置不可或缺的部分。

示例如下：

```nginx
user root;
​
...
​
http {
​
  ...
​
  server {
    listen       80 default_server;       # 默认在80端口启动nginx服务
    listen       [::]:80 default_server;
    server_name  _;                       # 绑定的域名
    root         /usr/share/nginx/html;   # 根目录，会加载这个目录下的html文件
​
    # Load configuration files for the default server block.
    include /etc/nginx/default.d/*.conf;  # 可以引入其他配置文件
​
    location / {                          # 访问服务器跟路径
    }
​
    error_page 404 /404.html;             # 访问的时候路径404
        location = /40x.html {            # 404时访问的html
    }
​
    error_page 500 502 503 504 /50x.html; # 服务器内部错误
        location = /50x.html {            # 5xx时访问的html
    }
  }
}
```

### 内置变量

下面是`nginx`一些配置中常用的内置全局变量，你可以在配置的任何位置使用它们。

| 变量名             | 功能                                                         |
| ------------------ | ------------------------------------------------------------ |
| `$host`            | 请求信息中的`Host`，如果请求中没有`Host`行，则等于设置的服务器名 |
| `$request_method`  | 客户端请求类型，如`GET`、`POST`                              |
| `$remote_addr`     | 客户端的`IP`地址                                             |
| `$args`            | 请求中的参数                                                 |
| `$content_length`  | 请求头中的`Content-length`字段                               |
| `$http_user_agent` | 客户端agent信息                                              |
| `$http_cookie`     | 客户端cookie信息                                             |
| `$remote_port`     | 客户端的端口                                                 |
| `$server_protocol` | 请求使用的协议，如`HTTP/1.0`、·HTTP/1.1`                     |
| `$server_addr`     | 服务器地址                                                   |
| `$server_name`     | 服务器名称                                                   |
| `$server_port`     | 服务器的端口号                                               |

### 缓存配置

前端经常有一些图片还有其他静态资源文件基本上不会再被修改了，就比如说我做上一个项目的时候的那个大的文件，那这个时候就可以缓存到本地，防止下次请求再从服务器上拉取，这样是很耗费时间和服务器带宽的，接下来我们就来看下如何使用nginx配置缓存。

```nginx
server {
​
  ...
​
  location / {
    root  /root/www/website/dist;
    index   index.html      index.htm;
​
    location ~ .*.(?:jpg|jpeg|png|svg)$ { # 匹配静态资源的文件后缀
      expires   7d; # 7天后过期
    }
  }
​
  ...
}
```

上面的配置是对一些图片资源进行的缓存配置，缓存时间为7天，修改好重启后刷新页面，找到关于图片资源的请求，然后就会发现请求第二次的时候就会从本地缓存中获取，并且响应头显示缓存过期时间是7天。

### 跨域配置

#### 跨域的定义

同源策略限制了从同一个源加载的文档或脚本如何与来自另一个源的资源进行交互。这是一个用于隔离潜在恶意文件的重要安全机制。通常不允许不同源间的读操作。

#### 同源的定义

如果两个页面的协议，端口（如果有指定）和域名都相同，则两个页面具有相同的源。

#### nginx解决跨域的原理

例如：

- 前端server的域名为：`fe.server.com`
- 后端服务的域名为：`dev.server.com`

现在我在`fe.server.com`对`dev.server.com`发起请求一定会出现跨域。

现在我们只需要启动一个nginx服务器，将`server_name`设置为`fe.server.com`,然后设置相应的location以拦截前端需要跨域的请求，最后将请求代理回`dev.server.com`。如下面的配置：

```nginx
server {
        listen       80;
        server_name  fe.server.com;
        location / {
                proxy_pass dev.server.com;
        }
}
```

这样可以完美绕过浏览器的同源策略：`fe.server.com`访问`nginx`的`fe.server.com`属于同源访问，而`nginx`对服务端转发的请求不会触发浏览器的同源策略。

### 请求过滤

根据状态码过滤

```nginx
error_page 500 501 502 503 504 506 /50x.html;
    location = /50x.html {
        #将跟路径改编为存放html的路径。
        root /root/static/html;
    }
```

根据URL名称过滤，精准匹配URL，不匹配的URL全部重定向到主页。

```nginx
location / {
    rewrite  ^.*$ /index.html  redirect;
}
```

根据请求类型过滤。

```nginx
if ( $request_method !~ ^(GET|POST|HEAD)$ ) {
    return 403;
}
```

### IP白名单

可以配置nginx的白名单，规定有哪些ip可以访问你的服务器，防爬虫必备

- 简单配置

```nginx
server {
	location / {
		deny  192.168.0.1; // 禁止该ip访问
		deny  all; // 禁止所有
	}
}
```

- 白名单配置

建立白名单

```nginx
vim /etc/nginx/white_ip.conf
 ...
192.168.0.1 1; 
 ...
```

修改nginx配置(nginx.conf)

```nginx
geo $remote_addr $ip_whitelist{
    default 0;
    include ip.conf;
}
// geo 指令主要是可以根据指定变量的值映射出一个新变量。 如果不指定变量，默认为$remote_addr
```

为匹配项做白名单设置

```nginx
server {
    location / {
        if ( $ip_whitelist = 0 ){
            return 403; //不在白名单返回 403
        }
        index index.html;
        root /tmp;
    }
}
```

### 适配PC与移动环境

当用户从移动端打开PC端baidu.com的场景时，将自动跳转指移动端m.baidu.com，本质上是Nginx可以通过内置变量$http_user_agent，获取到请求客户端的userAgent，从而知道当前用户当前终端是移动端还是PC，进而重定向到H5站还是PC站

```nginx
server {
 location / {
        //移动、pc设备agent获取
        if ($http_user_agent ~* '(Android|webOS|iPhone)') {
            set $mobile_request '1';
        }
        if ($mobile_request = '1') {
            rewrite ^.+ http://m.baidu.com;
        }
    } 
}
```

### 配置gzip

![](/images/nginx/nginxConfig1.png)

`GZIP`是规定的三种标准HTTP压缩格式之一。目前绝大多数的网站都在使用`GZIP`传输 `HTML`、`CSS`、`JavaScript` 等资源文件。

对于文本文件，`GZip` 的效果非常明显，开启后传输所需流量大约会降至 `1/4 ~ 1/3`。

并不是每个浏览器都支持`gzip`的，如何知道客户端是否支持`gzip`呢，请求头中的`Accept-Encoding`来标识对压缩的支持。

![](/images/nginx/nginxConfig2.png)

启用`gzip`同时需要客户端和服务端的支持，如果客户端支持`gzip`的解析，那么只要服务端能够返回`gzip`的文件就可以启用`gzip`了,我们可以通过`nginx`的配置来让服务端支持`gzip`。下面的`respone`中`content-encoding:gzip`，指服务端开启了`gzip`的压缩方式。

![](/images/nginx/nginxConfig3.png)

```nginx
  gzip                    on;
    gzip_http_version       1.1;        
    gzip_comp_level         5;
    gzip_min_length         1000;
    gzip_types text/csv text/xml text/css text/plain text/javascript application/javascript application/x-javascript application/json application/xml;
```

#### gzip

- 开启或者关闭`gzip`模块
- 默认值为` off`
- 可配置为` on / off`

#### gzip_http_version

- 启用 `GZip` 所需的` HTTP` 最低版本
- 默认值为` HTTP/1.1`

这里为什么默认版本不是`1.0`呢？

`HTTP` 运行在` TCP` 连接之上，自然也有着跟` TCP` 一样的三次握手、慢启动等特性。

启用持久连接情况下，服务器发出响应后让`TCP`连接继续打开着。同一对客户/服务器之间的后续请求和响应可以通过这个连接发送。

![](/images/nginx/nginxConfig4.png)

为了尽可能的提高 `HTTP` 性能，使用持久连接就显得尤为重要了。

`HTTP/1.1 `默认支持`TCP`持久连接，`HTTP/1.0` 也可以通过显式指定 `Connection: keep-alive` 来启用持久连接。对于`TCP`持久连接上的` HTTP` 报文，客户端需要一种机制来准确判断结束位置，而在 `HTTP/1.0 `中，这种机制只有` Content-Length`。而在`HTTP/1.1 `中新增的 `Transfer-Encoding: chunked` 所对应的分块传输机制可以完美解决这类问题。

`nginx`同样有着配置`chunked的`属性`chunked_transfer_encoding`，这个属性是默认开启的。

`Nginx `在启用了`GZip`的情况下，不会等文件 `GZip` 完成再返回响应，而是边压缩边响应，这样可以显著提高 `TTFB`(`Time To First Byte`，首字节时间，WEB 性能优化重要指标)。这样唯一的问题是，`Nginx` 开始返回响应时，它无法知道将要传输的文件最终有多大，也就是无法给出`Content-Length`这个响应头部。

所以，在`HTTP1.0`中如果利用`Nginx `启用了`GZip`，是无法获得`Content-Length`的，这导致HTTP1.0中开启持久链接和使用`GZip`只能二选一，所以在这里`gzip_http_version`默认设置为`1.1`。

#### gzip_comp_level

- 压缩级别，级别越高压缩率越大，当然压缩时间也就越长（传输快但比较消耗cpu）。
- 默认值为 `1`
- 压缩级别取值为`1-9`

#### gzip_min_length

- 设置允许压缩的页面最小字节数，`Content-Length`小于该值的请求将不会被压缩
- 默认值:`0`
- 当设置的值较小时，压缩后的长度可能比原文件大，建议设置`1000`以上

#### gzip_types

- 要采用gzip压缩的文件类型(`MIME`类型)
- 默认值:`text/html`(默认不压缩`js`/`css`)
