---
title: Docker命令
date: 2023-9-9
sidebar: 'auto'
categories:
  - 前端
tags:
  - Docker
sticky: 1
---

## docker是什么

![](/orangewind/images/docker.png)

- docker是一个可以创建、管理**容器**的东西。可以理解为docker里面存放了许多**容器**。
- **容器**就是一个精简版的linux系统，这个系统只有基本的环境供以使用，里面可以运行程序(可以是mysql，可以是nginx，可以是redis等)。
- **容器**的创建是依赖于**镜像**的，**镜像**可以看作是一个模板，docker可以根据镜像生成一个容器实例，假如你需要一个**容器**中放入mysql，那么就去docker的**镜像**仓库拉取一个mysql**镜像**(可指定版本)，然后docker可以基于这个**镜像**创建一个mysql**容器**，这样就能在docker中运行使用一个只含有mysql的系统了。
- **容器**的存在使我们可以方便做很多事情，比如项目需要mysql、nginx环境来运行，可以直接创建mysql和nginx**容器**供项目使用，不需要在服务器上下载、安装、配置这些环境，**容器**内部已经包含了这些必备的东西。同时**容器**还可以很方便的移植，比如我们需要切换服务器，这些项目正在使用的**容器**可以直接打包带走放在另一个服务器上。



## docker的用途

Docker 的主要用途，目前有三大类。

1. **提供一次性的环境。**比如，本地测试他人的软件、持续集成的时候提供单元测试和构建的环境。
2. **提供弹性的云服务。**因为 Docker 容器可以随开随关，很适合动态扩容和缩容。
3. **组建微服务架构。**通过多个容器，一台机器可以跑多个服务，因此在本机就可以模拟出微服务架构。



## docker的基本概念

镜像(`Image`)、容器(`Container`)与仓库(`Repository`)，这三个是`docker`中最基本也是最核心的概念。

### 镜像(Image)

`Docker 把应用程序及其依赖，打包在 image 文件里面。`只有通过这个文件，才能生成 Docker 容器。image 文件可以看作是容器的模板。Docker 根据 image 文件生成容器的实例。同一个 image 文件，可以生成多个同时运行的容器实例。

### 容器(Container)

`image 文件生成的容器实例，本身也是一个文件，称为容器文件。`也就是说，一旦容器生成，就会同时存在两个文件： image 文件和容器文件。而且关闭容器并不会删除容器文件，只是容器停止运行而已。

### 仓库(Repository)

`Docker Hub`就是Docker提供用于存储和分布镜像的官方`Docker Registry`，也是默认的`Registry`，其网址为`https://hub.docker.com`，前面我们使用`docker pull`命令便从`Docker Hub`上拉取镜像。



## docker的组成与架构

![](/orangewind/images/dockerServer.png)

### docker Engine

`docker server`为客户端提供了容器、镜像、数据卷、网络管理等功能，其实，这些功能都是由`Docker Engine`来实现的。

1. `dockerd`:服务器守护进程。
2. `Client docker Cli`：命令行接口
3. `REST API`：除了cli命令行接口，也可以通过`REST API`调用`docker`

![](/orangewind/images/dockerEngine.png)

