---
title: Docker Nginx容器部署
date: 2023-9-17
sidebar: 'auto'
categories:
  - 前端
tags:
  - Docker
sticky: 1
---

## Docker Nginx容器部署

### 安装 Docker

官方安装文档很详细，也很简单

[Install Docker Engine on Ubuntu](https://link.juejin.cn/?target=https%3A%2F%2Fdocs.docker.com%2Fengine%2Finstall%2Fubuntu%2F)

[或参考docker安装该文章](./docker安装)

`检查docker是否安装成功`

```shell
docker -v
Docker version 24.0.6, build ed223bc
```

### 拉取nginx镜像

```shell
docker pull nginx
```

![](/images/docker/dockerNginx.png)

检查镜像是否获取成功，现在就是拉取到的最新版本的 `nginx` 镜像

```shell
docker images

REPOSITORY   TAG       IMAGE ID       CREATED         SIZE
nginx        latest    605c77e624dd   20 months ago   141MB
```

### 准备部署项目

准备容器中部署的项目，这里使用一个 `Vue3` 初始化项目，自行打包 `dist` 即可

```shell
创建vue项目
vue create vue3_docker_nginx

进入vue项目
cd vue3_docker_nginx

打包vue项目
npm run build
```

### 运行nginx容器

通过之前安装的nginx镜像创建一个nginx_server的新容器

> 创建nginx_server容器
>
> docker create --name nginx_server nginx

>启动nginx_server容器
>
>docker start nginx_server

>运行nginx_server容器
>
>docker run --name nginx-server -p 80:80 -v /home/www -d **nginx**

#### 命令参数

- `--name`: 容器名称
- `-p`: 将系统的80端口映射到容器的80端口
- `-v`: `/home/www` 系统外部的代码目录，映射到容器内自定义目录 `www`
- `-d`: 设置容器后台运行

#### 检查服务

检查 `nginx` 容器服务是否正常运行成功，在浏览器中容器服务的地址 `localhost`，如下效果

![](/images/docker/dockerNginx1.png)

### 运行前端项目

进入nginx-server容器

```shell
docker exec -it nginx-server /bin/bash
```

#### 修改容器中的 nginx.conf 文件

使用 `vim` 修改 `nginx.conf` 文件配置，添加 `server` 配置

因为容器与外界是完全隔离的，使用vim命令请先安装vim

```shell
apt-get update	
apt-get install -y vim  
```

然后执行如下命令

```shell
vim /etc/nginx/nginx.conf 
```

修改后的 nginx.conf 文件如下：

![](/images/docker/dockerNginx3.png)

`server` 里面配置了 `80` 端口，`location / root` 地址为 `vue3_docker_nginx` 前端项目的 `dist` 目录

这时候刷新浏览器 `localhost` 地址，内容是没有变化的，因为 `nginx` 配置更新后需要重启服务

#### 重启 nginx 服务

```shell
docker restart nginx-server
```

重启服务后，再次刷新浏览器，前端项目部署好了

![](/images/docker/dockerNginx4.png)
