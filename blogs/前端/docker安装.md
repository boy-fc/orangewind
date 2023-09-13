---
title: Docker安装
date: 2023-9-1
sidebar: 'auto'
categories:
  - 前端
tags:
  - Docker
sticky: 1
---

## docker安装

### 一、下载 & 安装

打开地址进行下载：

- [https://www.docker.com/products/docker-desktop/](https://www.docker.com/products/docker-desktop/)

![](/images/docker/dockerInstall.png)

安装完成后，通过桌面的快捷方式打开docker，提示：`Docker Desktop - WSL kernel version too low`

![](/images/docker/dockerError.png)

#### 安装[WSL](https://so.csdn.net/so/search?q=WSL&spm=1001.2101.3001.7020)

##### 手动安装

1、启用适用于 [Linux](https://so.csdn.net/so/search?q=Linux&spm=1001.2101.3001.7020) 的 Windows 子系统

- 以管理员身份打开 PowerShell（“开始”菜单 >“PowerShell” >单击右键 >“以管理员身份运行”），然后输入以下命令：

  ```shell
  dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart
  ```

![](/images/docker/dockerInstallSuccess.png)

2、检查运行 WSL 2 的要求（直接跳过此步骤亦可）

- 对于 x64 系统：版本 1903 或更高版本，内部版本为 18362.1049 或更高版本。
- 对于 ARM64 系统：版本 2004 或更高版本，内部版本为 19041 或更高版本。
- 或 Windows 11。

3、启用虚拟机功能

- 安装 WSL 2 之前，必须启用“虚拟机平台”可选功能。 计算机需要虚拟化功能才能使用此功能。
  以管理员身份打开 PowerShell 并运行：

  ```shell
  dism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart
  ```

![](/images/docker/dockerWSLSuccess.png)

重新启动计算机，以完成 WSL 安装并更新到 WSL 2。

4、执行命令，更新wsl

```shell
wsl --update
```

![](/images/docker/dockerUpdate.png)

##### 检查正常运转

- 查看桌面端：

![](/images/docker/dockerApk.png)

- 查看 Docker 版本：`docker version`

![](/images/docker/dockerVersion.png)

- 查看镜像（Image）：`docker image ls`

![](/images/docker/dockerImageLs.png)

### 二、docker设置

#### 一些设置

在`General`选项卡中，勾选下图第一个选项`Start Docker Desktop when you log in`，即可开机自启动，推荐打开开机自启动，这样一开机就可以访问我们一些容器的服务。

![](/images/docker/dockerSetting.png)

在这个页面，还有下列配置建议设定：

- Send usage statistics 发送错误报告，**可以取消勾选**
- Open Desktop Dashboard at startup 每次启动Docker就弹出主面板，**建议取消勾选**，需要用的时候再在任务栏打开更好

#### 国内镜像源配置

拉取镜像通常速度很慢，因为镜像仓库位于国外，这时我们配置一下阿里云加速即可。

首先进入这个链接：[cr.console.aliyun.com/](https://link.juejin.cn/?target=https%3A%2F%2Fcr.console.aliyun.com%2F) ，登录自己的阿里云账户，在左侧容器工具-镜像加速器中，复制自己的加速器地址：

![](/images/docker/dockerAli.png)

然后进入Docker Engine选项卡，可见右侧JSON内容就是配置文件：

![](/images/docker/dockerSetting1.png)

在里面添加一个镜像源字段：

```json
"registry-mirrors": ["你的容器加速地址"]
```

![](/images/docker/dockerSetting2.png)

最后，点击右下角`Apply & restart`按钮即可保存配置。

#### 修改镜像和容器的存放位置

Docker Desktop默认情况下只能安装在C盘，并且其**镜像和容器也是以vhdx虚拟磁盘映像的形式存放在C盘的**，随着镜像和容器的数量增加，C盘的空间也会越来越不够用。

虽然暂时无法改变Docker Desktop的安装位置，但是我们仍然可以修改镜像和容器的位置的。

在设置页面中，找到左侧Resources选项卡，在Advanced选项中，即可修改镜像和容器存放位置：

![](/images/docker/dockerSetting3.png)

#### 彻底清空所有镜像和容器数据

大家如果使用了很长时间的Docker Desktop会发现，即使删除了所有的镜像和容器，Docker的数据映像仍然会占用很大的空间，这是因为使用过程中产生的数据缓存仍然会存放在Docker Desktop的数据映像中无法删除。

事实上，Docker Desktop是基于WSL2的，它将容器和镜像存放在一个WSL2发行版中运行的。我们可以通过WSL2的命令完全移除发行版以达到清空数据的目的。

执行wsl -l命令，可以看到Docker Desktop有两个对应的发行版：

![](/images/docker/dockerWSLls.png)

先退出Docker Desktop，然后在命令行终端中执行下列命令移除发行版即可：

```shell
wsl --unregister docker-desktop-data
wsl --unregister docker-desktop
```

显示注销成功，则说明清除完成！这样所有的Docker数据就被彻底删除了！

#### 使用

到此，我们就可以正常使用Docker了！打开命令行或者`cmd`，即可在里面使用`docker`命令。
