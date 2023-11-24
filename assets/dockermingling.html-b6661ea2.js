import{_ as a,o as e,c as s,d as n}from"./app-e09b6429.js";const r={},d=n(`<h2 id="docker命令" tabindex="-1"><a class="header-anchor" href="#docker命令" aria-hidden="true">#</a> docker命令</h2><p>Docker可以让开发人员、运维人员更容易使用容器创建、部署和运行应用程序。掌握一些必备的Docker命令对于使用Docker的工程师非常重要。</p><h3 id="一、docker-容器命令" tabindex="-1"><a class="header-anchor" href="#一、docker-容器命令" aria-hidden="true">#</a> 一、Docker 容器命令</h3><h4 id="列出所有正在运行的容器" tabindex="-1"><a class="header-anchor" href="#列出所有正在运行的容器" aria-hidden="true">#</a> 列出所有正在运行的容器</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token function">ps</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>还有两个同等作用的命令：</p><ul><li><code>docker container ps</code></li><li><code>docker container ls</code></li></ul><h4 id="列出所有容器-包含所有状态" tabindex="-1"><a class="header-anchor" href="#列出所有容器-包含所有状态" aria-hidden="true">#</a> 列出所有容器（包含所有状态）</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token function">ps</span> <span class="token parameter variable">-a</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>docker ps -a</code>中的<code>-a</code>是<code>-all</code>的缩写。</p><h4 id="列出所有正在运行的容器-带文件大小" tabindex="-1"><a class="header-anchor" href="#列出所有正在运行的容器-带文件大小" aria-hidden="true">#</a> 列出所有正在运行的容器（带文件大小）</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token function">ps</span> <span class="token parameter variable">-s</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>同等作用的命令：</p><ul><li><code>docker container ls -s</code></li></ul><p><code>docker ps -s</code>中的<code>-s</code>是<code>-size</code>的缩写，代表了容器在其可写层中写入的数据的大小，virtual表示此容器的镜像使用的磁盘空间量。</p><h4 id="列出正在运行的容器的-id" tabindex="-1"><a class="header-anchor" href="#列出正在运行的容器的-id" aria-hidden="true">#</a> 列出正在运行的容器的 ID</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token function">ps</span> <span class="token parameter variable">-q</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>同等作用的命令：</p><ul><li><code>docker container ls -q</code></li></ul><p><code>docker ps -q</code>中的<code>-q</code>是<code>-quiet</code>的缩写。</p><h4 id="列出所有容器的-id-包含所有状态" tabindex="-1"><a class="header-anchor" href="#列出所有容器的-id-包含所有状态" aria-hidden="true">#</a> 列出所有容器的 ID（包含所有状态）</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token function">ps</span> <span class="token parameter variable">-a</span> <span class="token parameter variable">-q</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面的<code>-a</code>和<code>-q</code>的参数可以合并：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token function">ps</span> <span class="token parameter variable">-aq</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="过滤容器列表" tabindex="-1"><a class="header-anchor" href="#过滤容器列表" aria-hidden="true">#</a> 过滤容器列表</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token function">ps</span> <span class="token parameter variable">-f</span> <span class="token assign-left variable">name</span><span class="token operator">=</span>un
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>docker ps -f name=un</code>中的<code>-f</code>是<code>-filter</code>的缩写。</p><p>根据状态过滤容器：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token function">ps</span> <span class="token parameter variable">-a</span> <span class="token parameter variable">-f</span> <span class="token assign-left variable">status</span><span class="token operator">=</span>running
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="二、docker创建容器" tabindex="-1"><a class="header-anchor" href="#二、docker创建容器" aria-hidden="true">#</a> 二、Docker创建容器</h3><h4 id="使用-docker-image-创建一个新容器" tabindex="-1"><a class="header-anchor" href="#使用-docker-image-创建一个新容器" aria-hidden="true">#</a> 使用 Docker Image 创建一个新容器</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> create <span class="token operator">&lt;</span>image_name<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>例如我们创建Nginx镜像：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> create nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="docker-image-创建新容器带上名字" tabindex="-1"><a class="header-anchor" href="#docker-image-创建新容器带上名字" aria-hidden="true">#</a> Docker Image 创建新容器带上名字</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> create <span class="token parameter variable">--name</span> <span class="token operator">&lt;</span>container_name<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>image_name<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>例如我们创建一个名为<strong>nginx-container</strong>的镜像：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> create <span class="token parameter variable">--name</span> nginx-container nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>然后我们可以用<code>docker ps -a</code>验证一下镜像是否已经创建。</p><h3 id="三、docker启动容器" tabindex="-1"><a class="header-anchor" href="#三、docker启动容器" aria-hidden="true">#</a> 三、Docker启动容器</h3><h4 id="启动-docker-容器" tabindex="-1"><a class="header-anchor" href="#启动-docker-容器" aria-hidden="true">#</a> 启动 Docker 容器</h4><p>我们可以使用docker start容器 ID 或名称来使用命令：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> start <span class="token operator">&lt;</span>container_id or container_name<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>比如我们启动nginx：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> start nginx-contianer
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="停止正在运行的-docker-容器" tabindex="-1"><a class="header-anchor" href="#停止正在运行的-docker-容器" aria-hidden="true">#</a> 停止正在运行的 Docker 容器</h4><p>和启动命令类似，我们可以使用docker stop 容器 ID 或名称来使用命令：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> stop <span class="token operator">&lt;</span>container_id or container_name<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>比如我们停止nginx：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> stop nginx-container
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="重启-docker-容器" tabindex="-1"><a class="header-anchor" href="#重启-docker-容器" aria-hidden="true">#</a> 重启 Docker 容器</h4><p>和启动、停止命令类似，我们可以使用docker restart 容器 ID 或名称来使用命令：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> restart <span class="token operator">&lt;</span>container_id or container_name<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="暂停正在运行的容器" tabindex="-1"><a class="header-anchor" href="#暂停正在运行的容器" aria-hidden="true">#</a> 暂停正在运行的容器</h4><p>和启动、重启、停止命令类似，我们可以使用docker pause 容器 ID 或名称来使用命令：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> pause <span class="token operator">&lt;</span>container_id or container_name<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>比如我们暂停nginx：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> pause nginx-container
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>取消暂停可以使用：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> unpause <span class="token operator">&lt;</span>container_id or container_name<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>比如我们取消暂停nginx：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> unpause nginx-container
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="进入docker容器" tabindex="-1"><a class="header-anchor" href="#进入docker容器" aria-hidden="true">#</a> 进入Docker容器</h4><p>使用docker exec命令可以在运行中的容器中启动一个新进程，进入容器后可以在容器内执行命令，查看日志、修改配置等。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 进入Docker容器</span>
<span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> my-container /bin/bash
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>其中，-it表示以交互模式启动新进程，/bin/bash表示要进入容器内执行的命令。</p><h4 id="退出docker容器" tabindex="-1"><a class="header-anchor" href="#退出docker容器" aria-hidden="true">#</a> 退出Docker容器</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 退出Docker容器</span>
<span class="token builtin class-name">exit</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>可以使用exit命令或者按下Ctrl+D组合键。exit命令会释放已使用的终端并正常退出容器。</p><h4 id="删除一个正在运行的容器" tabindex="-1"><a class="header-anchor" href="#删除一个正在运行的容器" aria-hidden="true">#</a> 删除一个正在运行的容器</h4><p>分为两个步骤：首先停止容器，然后才能删除容器。</p><p>1、先执行停止容器</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> stop <span class="token operator">&lt;</span>container_id or container_name<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>2、删除指定的容器</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token function">rm</span> <span class="token parameter variable">-f</span> <span class="token operator">&lt;</span>container_id or container_name<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="删除所有容器" tabindex="-1"><a class="header-anchor" href="#删除所有容器" aria-hidden="true">#</a> 删除所有容器</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> stop <span class="token variable">\${docker ps -aq}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>该命令将强制删除所有容器，包括正在运行的容器。其中，$() 内的命令 docker ps -aq 将返回所有容器的 ID。我们可以利用这些 ID 来删除所有容器。</p><h4 id="删除所有异常停止的容器" tabindex="-1"><a class="header-anchor" href="#删除所有异常停止的容器" aria-hidden="true">#</a> 删除所有异常停止的容器</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token function">ps</span> <span class="token parameter variable">-a</span> <span class="token operator">|</span> <span class="token function">grep</span> <span class="token string">&quot;Exited&quot;</span> <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;{print $1}&#39;</span> <span class="token operator">|</span> <span class="token function">xargs</span> <span class="token function">docker</span> <span class="token function">rm</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="四、docker-镜像命令" tabindex="-1"><a class="header-anchor" href="#四、docker-镜像命令" aria-hidden="true">#</a> 四、Docker 镜像命令</h3><h4 id="列出所有-docker-镜像" tabindex="-1"><a class="header-anchor" href="#列出所有-docker-镜像" aria-hidden="true">#</a> 列出所有 Docker 镜像</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> images
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="列出所有-docker-镜像-id" tabindex="-1"><a class="header-anchor" href="#列出所有-docker-镜像-id" aria-hidden="true">#</a> 列出所有 Docker 镜像 ID</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> images <span class="token parameter variable">-q</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="构建-docker-镜像" tabindex="-1"><a class="header-anchor" href="#构建-docker-镜像" aria-hidden="true">#</a> 构建 Docker 镜像</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> build <span class="token parameter variable">-t</span> <span class="token operator">&lt;</span>image_name<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>contenxt_dir<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Docker 会尝试在 . 中找到一个名为的文件Dockerfile，context_dir然后它会使用该Dockerfile文件创建一个 Docker 映像。</p><h4 id="构建-docker-镜像并用标签区分" tabindex="-1"><a class="header-anchor" href="#构建-docker-镜像并用标签区分" aria-hidden="true">#</a> 构建 Docker 镜像并用标签区分</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> build <span class="token builtin class-name">.</span> <span class="token parameter variable">-t</span> <span class="token operator">&lt;</span>image_name<span class="token operator">&gt;</span>:<span class="token operator">&lt;</span>tag or version<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="使用自定义命名的-dockerfile-构建-docker-映像" tabindex="-1"><a class="header-anchor" href="#使用自定义命名的-dockerfile-构建-docker-映像" aria-hidden="true">#</a> 使用自定义命名的 Dockerfile 构建 Docker 映像</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> build <span class="token parameter variable">-f</span> <span class="token operator">&lt;</span>custom_docker_file_name<span class="token operator">&gt;</span> <span class="token parameter variable">-t</span> <span class="token operator">&lt;</span>image_name<span class="token operator">&gt;</span> <span class="token builtin class-name">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="显示-docker-映像的历史记录" tabindex="-1"><a class="header-anchor" href="#显示-docker-映像的历史记录" aria-hidden="true">#</a> 显示 Docker 映像的历史记录</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token function">history</span> <span class="token operator">&lt;</span>imagename or imageid<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="重命名现有的-docker-映像" tabindex="-1"><a class="header-anchor" href="#重命名现有的-docker-映像" aria-hidden="true">#</a> 重命名现有的 Docker 映像</h4><div class="language-SHELL line-numbers-mode" data-ext="SHELL"><pre class="language-SHELL"><code>docker tag &lt;imagename&gt; &lt;newname&gt;:&lt;version&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="删除-docker-镜像" tabindex="-1"><a class="header-anchor" href="#删除-docker-镜像" aria-hidden="true">#</a> 删除 Docker 镜像</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> rmi <span class="token operator">&lt;</span>image_name or image_id<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="强制删除-docker-镜像" tabindex="-1"><a class="header-anchor" href="#强制删除-docker-镜像" aria-hidden="true">#</a> 强制删除 Docker 镜像</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> rmi <span class="token parameter variable">-f</span> <span class="token operator">&lt;</span>image_name or image_id<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="五、docker-日志" tabindex="-1"><a class="header-anchor" href="#五、docker-日志" aria-hidden="true">#</a> 五、Docker 日志</h3><h4 id="获取-docker-容器的日志" tabindex="-1"><a class="header-anchor" href="#获取-docker-容器的日志" aria-hidden="true">#</a> 获取 Docker 容器的日志</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> container logs <span class="token operator">&lt;</span>container_id or container_name<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="监控-docker-容器日志" tabindex="-1"><a class="header-anchor" href="#监控-docker-容器日志" aria-hidden="true">#</a> 监控 Docker 容器日志</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> container logs <span class="token parameter variable">-f</span> <span class="token operator">&lt;</span>container_id or container_name<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>类似于Linux命令中的<code>tail -f</code></p><h4 id="获取容器日志的最后-n-行" tabindex="-1"><a class="header-anchor" href="#获取容器日志的最后-n-行" aria-hidden="true">#</a> 获取容器日志的最后 n 行</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> container logs <span class="token parameter variable">--tail</span> n <span class="token operator">&lt;</span>container_id or container_name<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="六、docker-网络命令" tabindex="-1"><a class="header-anchor" href="#六、docker-网络命令" aria-hidden="true">#</a> 六、Docker 网络命令</h3><h4 id="列出所有网络" tabindex="-1"><a class="header-anchor" href="#列出所有网络" aria-hidden="true">#</a> 列出所有网络</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> network <span class="token function">ls</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="创建网络" tabindex="-1"><a class="header-anchor" href="#创建网络" aria-hidden="true">#</a> 创建网络</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> network create <span class="token parameter variable">--driver</span> <span class="token operator">&lt;</span>driver-name<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>bridge-name<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="将-docker-容器连接到网络" tabindex="-1"><a class="header-anchor" href="#将-docker-容器连接到网络" aria-hidden="true">#</a> 将 Docker 容器连接到网络</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> network connect <span class="token operator">&lt;</span>network_id or network_name<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>container_id or container_name<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="断开-docker-容器与网络的连接" tabindex="-1"><a class="header-anchor" href="#断开-docker-容器与网络的连接" aria-hidden="true">#</a> 断开 Docker 容器与网络的连接</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> network disconnect <span class="token operator">&lt;</span>network_name_or_id<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>container_name_or_id<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="删除网络" tabindex="-1"><a class="header-anchor" href="#删除网络" aria-hidden="true">#</a> 删除网络</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> network <span class="token function">rm</span> <span class="token operator">&lt;</span>network_id or network_name<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="七、docker-卷" tabindex="-1"><a class="header-anchor" href="#七、docker-卷" aria-hidden="true">#</a> 七、Docker 卷</h3><h4 id="列出卷" tabindex="-1"><a class="header-anchor" href="#列出卷" aria-hidden="true">#</a> 列出卷</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> volume <span class="token function">ls</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="删除所有未使用的本地卷" tabindex="-1"><a class="header-anchor" href="#删除所有未使用的本地卷" aria-hidden="true">#</a> 删除所有未使用的本地卷</h4><div class="language-4w line-numbers-mode" data-ext="4w"><pre class="language-4w"><code>docker volume prune
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="卷的详细信息" tabindex="-1"><a class="header-anchor" href="#卷的详细信息" aria-hidden="true">#</a> 卷的详细信息</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>OPTIONS<span class="token punctuation">]</span> VOLUME
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="八、docker-compose命令" tabindex="-1"><a class="header-anchor" href="#八、docker-compose命令" aria-hidden="true">#</a> 八、Docker Compose命令</h3><h4 id="构建-docker-compose-文件" tabindex="-1"><a class="header-anchor" href="#构建-docker-compose-文件" aria-hidden="true">#</a> 构建 docker compose 文件</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker-compose</span> build
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="运行-docker-compose-文件" tabindex="-1"><a class="header-anchor" href="#运行-docker-compose-文件" aria-hidden="true">#</a> 运行 docker compose 文件</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker-compose</span> up
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="列出在-docker-compose-文件中声明的-docker-镜像" tabindex="-1"><a class="header-anchor" href="#列出在-docker-compose-文件中声明的-docker-镜像" aria-hidden="true">#</a> 列出在 docker compose 文件中声明的 docker 镜像</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker-compose</span> <span class="token function">ls</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="启动已经使用-docker-compose-文件创建的容器" tabindex="-1"><a class="header-anchor" href="#启动已经使用-docker-compose-文件创建的容器" aria-hidden="true">#</a> 启动已经使用 docker compose 文件创建的容器</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker-compose</span> start
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="在-docker-compose-yml-中运行其中一个应用程序" tabindex="-1"><a class="header-anchor" href="#在-docker-compose-yml-中运行其中一个应用程序" aria-hidden="true">#</a> 在 docker-compose.yml 中运行其中一个应用程序</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker-compose</span> run
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="从-docker-compose-中删除-docker-容器" tabindex="-1"><a class="header-anchor" href="#从-docker-compose-中删除-docker-容器" aria-hidden="true">#</a> 从 docker compose 中删除 docker 容器</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker-compose</span> <span class="token function">rm</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="从-docker-compose-检查-docker-容器状态" tabindex="-1"><a class="header-anchor" href="#从-docker-compose-检查-docker-容器状态" aria-hidden="true">#</a> 从 docker compose 检查 docker 容器状态</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker-compose</span> <span class="token function">ps</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="九、docker-hub命令" tabindex="-1"><a class="header-anchor" href="#九、docker-hub命令" aria-hidden="true">#</a> 九、docker hub命令</h3><h4 id="在-docker-hub-中搜索镜像" tabindex="-1"><a class="header-anchor" href="#在-docker-hub-中搜索镜像" aria-hidden="true">#</a> 在 docker hub 中搜索镜像</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> search search_word
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="从-docker-hub-下载镜像" tabindex="-1"><a class="header-anchor" href="#从-docker-hub-下载镜像" aria-hidden="true">#</a> 从 docker hub 下载镜像</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> pull user/image
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="向-docker-hub-进行身份验证" tabindex="-1"><a class="header-anchor" href="#向-docker-hub-进行身份验证" aria-hidden="true">#</a> 向 docker hub 进行身份验证</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> login
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="将图像上传到-docker-hub" tabindex="-1"><a class="header-anchor" href="#将图像上传到-docker-hub" aria-hidden="true">#</a> 将图像上传到 docker hub</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> push user/image
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="十、批量清除-删除" tabindex="-1"><a class="header-anchor" href="#十、批量清除-删除" aria-hidden="true">#</a> 十、批量清除/删除</h3><h4 id="停止所有容器" tabindex="-1"><a class="header-anchor" href="#停止所有容器" aria-hidden="true">#</a> 停止所有容器</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> stop <span class="token parameter variable">-f</span> <span class="token variable"><span class="token variable">$(</span><span class="token function">docker</span> <span class="token function">ps</span> <span class="token parameter variable">-a</span> <span class="token parameter variable">-q</span><span class="token variable">)</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="删除所有容器-1" tabindex="-1"><a class="header-anchor" href="#删除所有容器-1" aria-hidden="true">#</a> 删除所有容器</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token function">rm</span> <span class="token parameter variable">-f</span> <span class="token variable"><span class="token variable">$(</span><span class="token function">docker</span> <span class="token function">ps</span> <span class="token parameter variable">-a</span> <span class="token parameter variable">-q</span><span class="token variable">)</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="删除所有镜像" tabindex="-1"><a class="header-anchor" href="#删除所有镜像" aria-hidden="true">#</a> 删除所有镜像</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> rmi <span class="token parameter variable">-f</span> <span class="token variable"><span class="token variable">$(</span><span class="token function">docker</span> images <span class="token parameter variable">-q</span><span class="token variable">)</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,157),i=[d];function c(o,l){return e(),s("div",null,i)}const p=a(r,[["render",c],["__file","dockermingling.html.vue"]]);export{p as default};
