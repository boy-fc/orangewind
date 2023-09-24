---
title: Nginx安装
date: 2023-9-24
sidebar: 'auto'
categories:
  - 前端
tags:
  - Nginx
sticky: 1
---

## 本地安装

windows本地安装nginx，步骤如下:

### 下载nginx

请先到[nginx](http://nginx.org/en/download.html)下载Nginx稳定版，这里我下载了[ nginx/Windows-1.24.0](http://nginx.org/download/nginx-1.24.0.zip) [pgp](http://nginx.org/download/nginx-1.24.0.zip.asc)

![](/images/nginx/nginxDownload.png)

解压后得到以下Nginx根目录

![](/images/nginx/nginxDownload1.png)

### 启动nginx

1.点击根目录中的nginx.exe文件启动nginx，系统会闪过一个命令控制台然后自动关闭

![](/images/nginx/nginxDownload2.png)

2.在导航栏里输入cmd打开命令后，再命令中输入：

```shell
nginx
```

启动nginx后，在任务管理器里查看：

![](/images/nginx/nginxDownload3.png)

说明开启成功，在浏览器中打开127.0.0.1或localhost就会显示nginx欢迎页说明运行成功

## Docker安装

### 拉取nginx镜像

```shell
docker pull nginx
```

![](/images/nginx/nginxInstall.png)

检查镜像是否获取成功，现在就是拉取到的最新版本的 `nginx` 镜像

![](/images/nginx/nginxInstall1.png)

### 启动一个nginx容器

通过之前安装的nginx镜像创建一个nginx_server的新容器

> 创建nginx_server容器
>
> docker create --name nginx_server nginx

![](/images/nginx/nginxInstall2.png)

> 启动nginx_server容器
>
> docker start nginx_server

![](/images/nginx/nginxInstall3.png)

加入部署项目以后，运行如下(端口号：80)：

![](/images/nginx/nginxInstall5.png)

> 或者运行nginx_server容器
>
> docker run --name nginx-server -p 8888:80 -v /home/www -d **nginx**
>

#### 命令参数

- `--name`: 容器名称
- `-p`: 将系统的80端口映射到容器的80端口
- `-v`: `/home/www` 系统外部的代码目录，映射到容器内自定义目录 `www`
- `-d`: 设置容器后台运行

![](/images/nginx/nginxInstall4.png)

未加入部署项目，运行如下（端口号：8888）

![](/images/nginx/nginxInstall6.png)

这就说明nginx服务已经被启动了。

### 常用命令

- 启动nginx服务的命令

  ```nginx
  root@657b97820d88:/# nginx
  ```

- 检查配置的命令，一般用于在修改配置后检查下配置是否合法

  ```nginx
  root@657b97820d88:/# nginx -t
  nginx: the configuration file /etc/nginx/nginx.conf syntax is ok
  nginx: configuration file /etc/nginx/nginx.conf test is successful
  ```

- 重启命令，修改完配置后需要重启nginx服务

  ```nginx
  root@657b97820d88:/# nginx -s reload
  2023/09/24 08:59:39 [notice] 49#49: signal process started
  ```

- 停止nginx服务

  ```nginx
  root@657b97820d88:/# nginx -s stop
  2023/09/24 09:00:33 [notice] 58#58: signal process started
  ```

- 压缩`js`/`css`)
