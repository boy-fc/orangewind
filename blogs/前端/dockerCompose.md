---
title: Docker Compose
date: 2023-9-17
sidebar: 'auto'
categories:
  - 前端
tags:
  - Docker
sticky: 1
---

## docker Compose

### 一、简介

产生的背景：

我们使用 Docker的时候，定义 Dockerfile 文件，然后使用 docker build、docker run 等命令操作容器。
然而微服务架构的应用系统一般包含若干个微服务，每个微服务一般都会部署多个实例，如果每个微服务都要手动启停，那么效率之低，维护量之大

为了提高效率，我们就需要一种像 Dockerfile 定义 Docker 容器一样，能够定义容器（多个）编排和部署工具。于是，Docker Compose 出现了(其实应该说 Fig 出现了，Docker 收购了 Fig 并改名为 compose)。

### 1.什么是compose

Docker-compose 是一个**定义**和**运行多个** Docker 应用的工具，你可以使用YMAL文件来配置你的服务，然后使用docker-compose 命令，创建和启动、编排所有你配置的的服务。

compose 可以在任何工作环境中使用，生产环境，开发环境，持续集成等等。

![](/images/docker/dockerCompose.jpg)

:::tip 

从logo上可以看出来它就是一个管理容器的工( zhang )具( yu ), 我们可以方便的使用它来管理我们的Docker容器, 可以极大程度的简化命令行的复杂操作。
:::

### 二、安装

版本：**1.25.0-rc4**

```http
https://github.com/docker/compose/releases/tag/1.25.0-rc4
```

### 1、安装

```text
#在Linux下下载（下载到/usr/local/bin）
curl -L "https://github.com/docker/compose/releases/download/1.25.0-rc4/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
或者
cd /usr/local/bin
wget https://github.com/docker/compose/releases/download/1.25.0-rc4/docker-compose-Linux-x86_64
mv docker-compose-Linux-x86_64  docker-compose


# 设置文件可执行权限
chmod +x /usr/local/bin/docker-compose

# 查看版本信息
docker-compose --version
```

看到版本信息，说明安装成功。

### 2.卸载

```text
# 二进制包方式安装的，删除二进制文件即可
rm /usr/local/bin/docker-compose
```

常见问题：
如果安装完成后，查看版本频繁报错，如下
Cannot open self /usr/local/bin/docker-compose or archive /usr/local/bin/docker-compose.pkg
可使用下面的解决方案
1、切换到/usr/local/bin，删除之前的下载/docker-compose
2、切换到/usr/local/bin执行下面的命令
wget [https://github.com/docker/compose/releases/download/1.25.0-rc4/docker-compose-Linux-x86_64](https://link.zhihu.com/?target=https%3A//github.com/docker/compose/releases/download/1.25.0-rc4/docker-compose-Linux-x86_64)
3、下载完毕后重命名为docker-compose
mv docker-compose-Linux-x86_64 docker-compose
4、赋权限
5、查看版本成功

### **三、Compose 核心概念与常用命令**

### 1.Compose 核心概念

- 项目（project）；
  通过 Docker Compose 管理的一个项目被抽象称为一个 project
  **project** 里**包括**多个 **service**
- 服务（ servic e）；
  每个 service 定义了容器运行的镜像（或构建镜像），网络端口，文件挂载，参数，依赖等
  每个 **service** 可**包括同一个镜像**的**多个容器实例**。
- 容器（container）

![](/images/docker/dockerCompose1.jpg)

模板文件

```text
version: '3.7'
services:
  haproxy:
    image: dockercloud/haproxy
  redis:
    image: rediS
    
 ...
```

![](/images/docker/dockerCompose2.jpg)

**即 project 包含 service ，service 包含 container**

### **2.Compose模板文件介绍**

**Compose模板文件格式**

Docker Compose 使用 YAML 文件来定义多服务的应用。

Docker Compose 默认使用文件名 docker-compose.yml。当然，也可以使用 -f 参数指定具体文件

:::tip 

**官方提供了一个 yaml Docker Compose 配置文件的标准例子**
**提示：可以用 `.yml` 或 `.yaml` 作为文件扩展名**
:::

```yaml
version: "3.7"
services:

  redis:
    image: redis:alpine
    ports:
      - "6379:6379"
    networks:
      - frontend
    deploy:
     #指定运行容器的数量
      replicas: 2
      update_config:
      #一次性更新的容器数量
        parallelism: 2
      #更新一组容器之间的等待时间
        delay: 10s
      restart_policy:
        condition: on-failure

  db:
    image: postgres:9.4
    volumes:
      - db-data:/var/lib/postgresql/data
    networks:
      - backend
    deploy:
      placement:
        constraints: [node.role == manager]

  vote:
    image: dockersamples/examplevotingapp_vote:before
    ports:
      - 5000:80
    networks:
      - frontend
    depends_on:
      - redis
    deploy:
      replicas: 2
      update_config:
      #一次性更新的容器数量
        parallelism: 2
      restart_policy:
        condition: on-failure

  result:
    image: dockersamples/examplevotingapp_result:before
    ports:
      - 5001:80
    networks:
      - backend
    depends_on:
      - db
    deploy:
      replicas: 1
      update_config:
      #一次性更新的容器数量
        parallelism: 2
              #更新一组容器之间的等待时间
        delay: 10s
      restart_policy:
        condition: on-failure


networks:
  frontend:
  backend:

volumes:
  db-data: 
```

**version**：指定 docker-compose.yml 文件的写法格式

**replicas**

指定运行容器的数量

**update_config**

- parallelism：一次性更新的容器数量
- delay：更新一组容器之间的等待时间。

**mode**

replicated 如果服务是 `replicated`（默认)，需要指定运行的容器数量

**restart_policy 重启策略**

配置容器的重新启动，代替 `restart`

- condition:值可以为 `none` 、`on-failure` 以及 `any`(默认)
- delay: 尝试重启的等待时间，默认为 `0`
- max_attempts:在放弃之前尝试重新启动容器次数（默认：从不放弃）。如果重新启动在配置中没有成功 window，则此尝试不计入配置`max_attempts` 值。例如，如果 `max_attempts` 值为 `2`，并且第一次尝试重新启动失败，则可能会尝试重新启动两次以上。
- windows:在决定重新启动是否成功之前的等时间，指定为持续时间（默认值：立即决定）

**卷标设置与查看**

```text
使用卷标模式进行挂载

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
```

> 挂载方式对比：
> 绝对路径：直接挂载到本地，比较直观，但需要管理本地的路径 卷标：简洁，但你不知道数据存在本地什么位置

**网络定义**

目的：实现网络隔离

```text
networks:
  frontend:
  backend:
```

> docker network create --subnet=172.158.0.0/16 frontend

**Docker Compose版本**

![](/images/docker/dockerCompose3.png)

#### 3.Compose常用命令

**1) docker-compose up**

用于部署一个 Compose 应用。 默认情况下该命令会读取名为 docker-compose.yml 或 docker-compose.yaml 的文件。

当然用户也可以使用 -f 指定其他文件名。通常情况下，会使用 -d 参数令应用在后台启动。

**2) docker-compose start**

启动

**3) docker-compose stop**

停止 Compose 应用相关的所有容器，但不会删除它们。 被停止的应用可以很容易地通过 docker-compose restart 命令重新启动。

**4) docker-compose rm**

用于删除已停止的 Compose 应用

它会删除容器和网络，但是不会删除卷和镜像。

**5) docker-compose restart**

重启已停止的 Compose 应用。 如果用户在停止该应用后对其进行了变更，那么变更的内容不会反映在重启后的应用中

这时需要重新部署应用使变更生效。

**6) docker-compose ps**

用于列出 Compose 应用中的各个容器。 输出内容包括当前状态、容器运行的命令以及网络端口。

**7) docker-compose down**

停止并删除运行中的 Compose 应用。 它会删除容器和网络，但是不会删除卷和镜像

**8) docker-compose logs web**

**9) docker-compose build**

当你改变本地代码之后，先执行 docker-compose build 构建新的镜像，然后执行 docker-compose up -d 取代运行中的容器

### **三、Docker Compose 工作原理**

```shell
docker-compose up -d 
```

### **1.Compose 的一次调用流程**

![](/images/docker/dockerCompose4.png)

1) 首先，用户执行 docker-compose up 命令调用命令行中的启动方法

2) 然后，如果当前宿主机已经存在与该应用对应的容器，docker-compose 则进行行为逻辑判断。如果用户指定可以重新启动已有服务，docker-compose 就会执行 service 模块的容器重启方法，否则就直接启动已有容器。这两种操作的区别在于前者会停止旧的容器，创建并启动新的容器，并把旧容器移除掉。

3) 最后，contaier 模块会调用 docker-py 客户端来执行向 docker daemon 发起创建容器的 POST 请求。
