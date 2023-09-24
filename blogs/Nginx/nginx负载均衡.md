---
title: Nginx负载均衡
date: 2023-9-24
sidebar: 'auto'
categories:
  - 前端
tags:
  - Nginx
sticky: 1
---

## nginx负载均衡

### 什么是负载均衡

![](/images/nginx/nginxFzjh.png)

如上面的图，前面是众多的服务窗口，下面有很多用户需要服务，我们需要一个工具或策略来帮助我们将如此多的用户分配到每个窗口，来达到资源的充分利用以及更少的排队时间。

把前面的服务窗口想像成我们的后端服务器，而后面终端的人则是无数个客户端正在发起请求。负载均衡就是用来帮助我们将众多的客户端请求合理的分配到各个服务器，以达到服务端资源的充分利用和更少的请求时间。

### 如何实现负载均衡

Upstream指定后端服务器地址列表

```nginx
upstream balanceServer {
    server 10.1.22.33:12345;
    server 10.1.22.34:12345;
    server 10.1.22.35:12345;
}
```

在server中拦截响应请求，并将请求转发到Upstream中配置的服务器列表。

```nginx
server {
    server_name  fe.server.com;
    listen 80;
    location /api {
        proxy_pass http://balanceServer;
    }
}
```

上面的配置只是指定了nginx需要转发的服务端列表，并没有指定分配策略。

### 实现负载均衡的策略

![](.images/nginx/nginxFzjh1.png)

#### **轮询策略**

默认情况下采用的策略，将所有客户端请求轮询分配给服务端。这种策略是可以正常工作的，但是如果其中某一台服务器压力太大，出现延迟，会影响所有分配在这台服务器下的用户。

```nginx
upstream balanceServer {
    server 10.1.22.33:12345;
    server 10.1.22.34:12345;
    server 10.1.22.35:12345;
}
```

![](.images/nginx/nginxFzjh2.png)

#### **最小连接数策略**

将请求优先分配给压力较小的服务器，它可以平衡每个队列的长度，并避免向压力大的服务器添加更多的请求。

```nginx
upstream balanceServer {
    least_conn;
    server 10.1.22.33:12345;
    server 10.1.22.34:12345;
    server 10.1.22.35:12345;
}
```

![](/images/nnginx/nginxFzjh3.png)

#### **最快响应时间策略**

依赖于NGINX Plus，优先分配给响应时间最短的服务器。

```nginx
upstream balanceServer {
    fair;
    server 10.1.22.33:12345;
    server 10.1.22.34:12345;
    server 10.1.22.35:12345;
}
```

#### **客户端ip绑定**

来自同一个ip的请求永远只分配一台服务器，有效解决了动态网页存在的session共享问题。

```nginx
upstream balanceServer {
    ip_hash;
    server 10.1.22.33:12345;
    server 10.1.22.34:12345;
    server 10.1.22.35:12345;
}
```

