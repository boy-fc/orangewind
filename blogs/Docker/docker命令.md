---
title: Docker命令
date: 2023-9-12
sidebar: 'auto'
categories:
  - 前端
tags:
  - Docker
sticky: 1
---

## docker命令

Docker可以让开发人员、运维人员更容易使用容器创建、部署和运行应用程序。掌握一些必备的Docker命令对于使用Docker的工程师非常重要。

### 一、Docker 容器命令

#### 列出所有正在运行的容器

```shell
docker ps
```

还有两个同等作用的命令：

- `docker container ps`
- `docker container ls`

#### 列出所有容器（包含所有状态）

```shell
docker ps -a
```

`docker ps -a`中的`-a`是`-all`的缩写。

#### 列出所有正在运行的容器（带文件大小）

```shell
docker ps -s
```

同等作用的命令：

- `docker container ls -s`

`docker ps -s`中的`-s`是`-size`的缩写，代表了容器在其可写层中写入的数据的大小，virtual表示此容器的镜像使用的磁盘空间量。

#### 列出正在运行的容器的 ID

```shell
docker ps -q
```

同等作用的命令：

- `docker container ls -q`

`docker ps -q`中的`-q`是`-quiet`的缩写。

#### 列出所有容器的 ID（包含所有状态）

```shell
docker ps -a -q
```

上面的`-a`和`-q`的参数可以合并：

```shell
docker ps -aq
```

#### 过滤容器列表

```shell
docker ps -f name=un
```

`docker ps -f name=un`中的`-f`是`-filter`的缩写。

根据状态过滤容器：

```shell
docker ps -a -f status=running
```

### 二、Docker创建容器

#### 使用 Docker Image 创建一个新容器

```shell
docker create <image_name>
```

例如我们创建Nginx镜像：

```shell
docker create nginx
```

#### Docker Image 创建新容器带上名字

```shell
docker create --name <container_name> <image_name>
```

例如我们创建一个名为**nginx-container**的镜像：

```shell
docker create --name nginx-container nginx
```

然后我们可以用`docker ps -a`验证一下镜像是否已经创建。

### 三、Docker启动容器

#### 启动 Docker 容器

我们可以使用docker start容器 ID 或名称来使用命令：

```shell
docker start <container_id or container_name>
```

比如我们启动nginx：

```shell
docker start nginx-contianer
```

#### 停止正在运行的 Docker 容器

和启动命令类似，我们可以使用docker stop 容器 ID 或名称来使用命令：

```shell
docker stop <container_id or container_name>
```

比如我们停止nginx：

```shell
docker stop nginx-container
```

#### 重启 Docker 容器

和启动、停止命令类似，我们可以使用docker restart 容器 ID 或名称来使用命令：

```shell
docker restart <container_id or container_name>
```

#### 暂停正在运行的容器

和启动、重启、停止命令类似，我们可以使用docker pause 容器 ID 或名称来使用命令：

```shell
docker pause <container_id or container_name>
```

比如我们暂停nginx：

```shell
docker pause nginx-container
```

取消暂停可以使用：

```shell
docker unpause <container_id or container_name>
```

比如我们取消暂停nginx：

```shell
docker unpause nginx-container
```

#### 进入Docker容器

使用docker exec命令可以在运行中的容器中启动一个新进程，进入容器后可以在容器内执行命令，查看日志、修改配置等。

```shell
# 进入Docker容器
docker exec -it my-container /bin/bash
```

其中，-it表示以交互模式启动新进程，/bin/bash表示要进入容器内执行的命令。

#### 退出Docker容器

```shell
# 退出Docker容器
exit
```

可以使用exit命令或者按下Ctrl+D组合键。exit命令会释放已使用的终端并正常退出容器。

#### 删除一个正在运行的容器

分为两个步骤：首先停止容器，然后才能删除容器。

1、先执行停止容器

```shell
docker stop <container_id or container_name>
```

2、删除指定的容器

```shell
docker rm -f <container_id or container_name>
```

#### 删除所有容器

```shell
docker stop ${docker ps -aq}
```

该命令将强制删除所有容器，包括正在运行的容器。其中，$() 内的命令 docker ps -aq 将返回所有容器的 ID。我们可以利用这些 ID 来删除所有容器。

#### 删除所有异常停止的容器

```shell
docker ps -a | grep "Exited" | awk '{print $1}' | xargs docker rm
```

### 四、Docker 镜像命令

#### 列出所有 Docker 镜像

```shell
docker images
```

#### 列出所有 Docker 镜像 ID

```shell
docker images -q
```

#### 构建 Docker 镜像

```shell
docker build -t <image_name> <contenxt_dir>
```

Docker 会尝试在 . 中找到一个名为的文件Dockerfile，context_dir然后它会使用该Dockerfile文件创建一个 Docker 映像。

#### 构建 Docker 镜像并用标签区分

```shell
docker build . -t <image_name>:<tag or version>
```

#### 使用自定义命名的 Dockerfile 构建 Docker 映像

```shell
docker build -f <custom_docker_file_name> -t <image_name> .
```

#### 显示 Docker 映像的历史记录

```shell
docker history <imagename or imageid>
```

#### 重命名现有的 Docker 映像

```SHELL
docker tag <imagename> <newname>:<version>
```

#### 删除 Docker 镜像

```shell
docker rmi <image_name or image_id>
```

#### 强制删除 Docker 镜像

```shell
docker rmi -f <image_name or image_id>
```

### 五、Docker 日志

#### 获取 Docker 容器的日志

```shell
docker container logs <container_id or container_name>
```

#### 监控 Docker 容器日志

```shell
docker container logs -f <container_id or container_name>
```

类似于Linux命令中的`tail -f`

#### 获取容器日志的最后 n 行

```shell
docker container logs --tail n <container_id or container_name>
```

### 六、Docker 网络命令

#### 列出所有网络

```shell
docker network ls
```

#### 创建网络

```shell
docker network create --driver <driver-name> <bridge-name>
```

#### 将 Docker 容器连接到网络

```shell
docker network connect <network_id or network_name> <container_id or container_name>
```

#### 断开 Docker 容器与网络的连接

```shell
docker network disconnect <network_name_or_id> <container_name_or_id>
```

#### 删除网络

```shell
docker network rm <network_id or network_name>
```

### 七、Docker 卷

#### 列出卷

```shell
docker volume ls
```

#### 删除所有未使用的本地卷

```4w
docker volume prune
```

#### 卷的详细信息

```shell
[OPTIONS] VOLUME
```

### 八、Docker Compose命令

#### 构建 docker compose 文件

```shell
docker-compose build
```

#### 运行 docker compose 文件

```shell
docker-compose up
```

#### 列出在 docker compose 文件中声明的 docker 镜像

```shell
docker-compose ls 
```

#### 启动已经使用 docker compose 文件创建的容器

```shell
docker-compose start
```

#### 在 docker-compose.yml 中运行其中一个应用程序

```shell
docker-compose run
```

#### 从 docker compose 中删除 docker 容器

```shell
docker-compose rm
```

#### 从 docker compose 检查 docker 容器状态

```shell
docker-compose ps
```

### 九、docker hub命令

#### 在 docker hub 中搜索镜像

```shell
docker search search_word
```

#### 从 docker hub 下载镜像

```shell
docker pull user/image
```

#### 向 docker hub 进行身份验证

```shell
docker login
```

#### 将图像上传到 docker hub

```shell
docker push user/image
```

### 十、批量清除/删除

#### 停止所有容器

```shell
docker stop -f $(docker ps -a -q)
```

#### 删除所有容器

```shell
docker rm -f $(docker ps -a -q)
```

#### 删除所有镜像

```shell
docker rmi -f $(docker images -q)
```
