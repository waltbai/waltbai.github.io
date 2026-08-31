# 项目说明

本仓库是白龙（Long Bai）的中英文学术个人主页，线上地址为 <https://waltbai.github.io>。
站点用于展示个人简介、论文、科研项目、开源仓库、学术报告、学术服务、简历和联系方式。

项目基于 Jekyll 4、Liquid、Sass 和 `jekyll-polyglot`，由
[`george-gca/multi-language-al-folio`](https://github.com/george-gca/multi-language-al-folio)
模板定制而来。默认语言为英文（`en`），第二语言为中文（`zh`）。

## 重要目录

- `_config.yml`：站点、插件、语言、论文和功能开关的主配置。
- `_pages/en/`、`_pages/zh/`：中英文页面。修改导航页面时应同步检查两个语言版本。
- `_bibliography/papers.bib`：论文数据源，由 Jekyll Scholar 渲染。
- `_projects/en/`、`_projects/zh/`：科研项目的双语内容。
- `_talks/`：学术报告元数据；幻灯片位于 `assets/pdf/slides/`。
- `_data/`：社交账号、仓库列表、作者信息、CV 和双语界面文案。
- `_includes/`、`_layouts/`：Liquid 组件和页面布局，其中包含本项目的定制。
- `_sass/`、`assets/css/`、`assets/js/` 和 `_plugins/`：主题样式、前端交互与本地插件。
- `.github/workflows/`：构建、部署、检查和模板同步工作流。
- `.templatesyncignore`：自动模板同步时必须保留的项目文件和目录。

当前站点没有实际维护博客、新闻和书籍内容。不要把模板中的示例 `_posts`、`_news`、
`_books`、`en-us` 或 `pt-br` 内容重新带入站点。

## 本项目的模板定制

模板更新不能直接覆盖以下行为：

- `_config.yml` 中的个人姓名、邮箱、网址、`en/zh` 语言配置和 Scholar 作者信息。
- `_data/socials.yml` 中的 GitHub、邮箱和 Google Scholar 标识。
- `_includes/header.liquid` 和 `_includes/metadata.liquid` 中的双语姓名读取方式；中文姓名整体
  存放在 `last_name` 中，以保持中文姓名顺序和论文作者匹配。
- `_layouts/about.liquid` 中首页社交图标保持在头像区域，图标尺寸为 `2rem`。
- `_layouts/bib.liquid` 中论文作者加粗、作者分隔符和出版信息格式。
- `_layouts/publications.liquid`、`_layouts/talks.liquid`、`_includes/related_posts.liquid` 和
  `_includes/research_project.liquid` 的当前页面结构及双语行为。
- `_includes/repository/my_repo.liquid` 只展示配置的开源仓库，不展示用户概览。
- `_includes/resume/` 中 CV 条目的链接显示方式。
- `_sass/_layout.scss` 中的布局和社交图标样式，以及 `_sass/_themes.scss` 的主题分隔线颜色。
- `_config.yml` 的 `external_services` 和当前插件化社交链接方案；不要恢复旧版
  `_includes/social.liquid`。

Git 远端 `origin` 指向 `waltbai/waltbai.github.io`，`template` 指向模板仓库。

自动同步通过 `.templatesyncignore` 保护个人内容、双语页面和定制布局。修改受保护文件时，
应保留当前项目行为，并在临时分支中选择性吸收模板更新。

# 本地调试环境

Docker Compose 提供 Ruby、Jekyll、ImageMagick 和 Node.js，无需宿主机安装 Ruby 或 Bundler。
Python 维护脚本使用 `uv` 创建的本地虚拟环境运行。

## 启动开发服务器

在仓库根目录的 PowerShell 中执行：

```powershell
docker compose up
```

Compose 服务名为 `jekyll`，将仓库挂载到 `/srv/jekyll` 并启动文件监视和 LiveReload。

可访问地址：

- 站点：<http://localhost:8080>
- LiveReload：`http://localhost:35729`

`_config.yml` 变化会由 `bin/entry_point.sh` 监测并重启 Jekyll；多数页面、布局和样式变化由
Jekyll watch 自动重新生成。`_bibliography/*.bib` 可能不会触发重建，修改后应执行：

```powershell
docker compose restart jekyll
```

## 查看状态和日志

```powershell
docker compose ps
docker compose logs --follow jekyll
```

## 执行一次生产构建

```powershell
docker compose run --rm -e JEKYLL_ENV=production jekyll bundle exec jekyll build
```

构建输出位于已被 Git 忽略的 `_site/`，不应提交。

如果 `Gemfile`、`Gemfile.lock`、`Dockerfile` 或系统依赖发生变化，应重新构建镜像：

```powershell
docker compose build --no-cache
```

然后重新执行生产构建或启动开发服务器。

构建中现有的 Sass 弃用和未配置分页警告可以暂时接受，但新增的 Liquid 错误、构建失败或页面
缺失不能作为已知警告忽略。

## Python 维护脚本

使用 `uv` 创建 Python 3.13 虚拟环境并安装依赖：

```powershell
uv venv --python 3.13
uv pip install --python .venv\Scripts\python.exe -r requirements.txt
```

`.venv/` 已被 Git 忽略。无需激活虚拟环境即可运行 Google Scholar 引用缓存更新：

```powershell
.venv\Scripts\python.exe bin\update_scholar_citations.py
```

脚本从 `_data/socials.yml` 读取 `scholar_userid`，写入应提交的 `_data/citations.yml`。不要提交
虚拟环境或 Python 生成的 `__pycache__/`。

## 论文数据维护

论文信息统一维护在 `_bibliography/papers.bib`：

- 论文页面链接使用 `html = {...}`。
- 实验代码链接使用 `code = {...}`，放在 `html` 后、`title` 前。
- 不要为了展示代码链接修改 `_data/citations.yml`。
- 修改后重启 Jekyll，并检查 `/publications/` 和 `/zh/publications/`。

## 停止服务

```powershell
docker compose down
```

## 基本回归检查

修改模板、布局、插件或依赖后，至少检查以下路由均能访问，并比较中英文页面布局：

- `/` 和 `/zh/`
- `/publications/`
- `/zh/publications/`
- `/fundings/` 和 `/zh/fundings/`
- `/repository/` 和 `/zh/repository/`
- `/talks/` 和 `/zh/talks/`
- `/service/` 和 `/zh/service/`
- `/contact/` 和 `/zh/contact/`

同时检查桌面与移动宽度、明暗主题、导航栏、首页头像和社交图标、论文作者格式、仓库卡片及
报告 PDF 链接。只有本地生产构建成功且页面回归检查通过后，才能合并模板同步或布局改动。

# 修改约定

- 保持中英文页面的 `page_id`、`permalink` 和 `nav_order` 对应一致。
- 个人内容优先放在 `_pages`、`_data`、`_projects`、`_talks` 和 `_bibliography`，避免不必要地修改模板核心文件。
- 不提交 `_site/`、`.jekyll-cache/`、`node_modules/`、`vendor/` 或下载生成的 `assets/libs/`。
- 保留用户已有的未提交改动；不要用模板版本覆盖不相关文件。
- 涉及模板同步时，应将基础设施、样式、Scholar、插件和工作流更新拆分验证，避免一次提交混合所有变化。
- `.templatesyncignore` 是模板同步保护范围的准则；新增个人内容或布局定制时同步更新该文件。
