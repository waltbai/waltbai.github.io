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
- `_sass/`、`assets/css/`、`assets/js/`：主题样式与前端交互。
- `_plugins/`：本地 Jekyll 插件。
- `.github/workflows/`：构建、部署、检查和模板同步工作流。

当前站点没有实际维护博客、新闻和书籍内容。不要把模板中的示例 `_posts`、`_news`、
`_books`、`en-us` 或 `pt-br` 内容重新带入站点。

## 本项目的模板定制

模板更新不能直接覆盖以下行为：

- `_config.yml` 中的个人姓名、邮箱、网址、`en/zh` 语言配置和 Scholar 作者信息。
- `_data/socials.yml` 中的 GitHub、邮箱和 Google Scholar 标识。
- `_includes/header.liquid` 和 `_includes/metadata.liquid` 中的双语姓名读取方式。
- `_layouts/about.liquid` 中首页头像区域的社交图标位置。
- `_layouts/bib.liquid` 中论文作者加粗、作者分隔符和出版信息格式。
- `_includes/resume/` 中 CV 条目的链接显示方式。
- `_sass/_themes.scss` 中明暗主题分隔线颜色。

仓库包含两个 Git 远端：

- `origin`：`waltbai/waltbai.github.io`
- `template`：`george-gca/multi-language-al-folio`

同步模板时必须在临时分支中进行三方比较和本地构建验证。不要在 `main` 上直接执行未经检查的
模板合并，也不要使用模板版本直接覆盖个人内容或布局文件。

# 本地调试环境

本项目使用 Docker Compose 提供完整的 Ruby、Jekyll、ImageMagick、Node.js 和 Python 环境，
不要求宿主机单独安装 Ruby 或 Bundler。

## 启动开发服务器

在仓库根目录的 PowerShell 中执行：

```powershell
docker compose up
```

首次运行时 Docker 会构建或拉取镜像。当前 Compose 服务名为 `jekyll`，会将仓库挂载到
`/srv/jekyll`，并启动带文件监视和 LiveReload 的 Jekyll 开发服务器。

可访问地址：

- 站点：<http://localhost:8080>
- LiveReload：`http://localhost:35729`

`_config.yml` 变化会由 `bin/entry_point.sh` 监测并重启 Jekyll；其他内容变化由 Jekyll watch
自动重新生成。

## 查看状态和日志

```powershell
docker compose ps
docker compose logs --follow jekyll
```

## 执行一次生产构建

```powershell
docker compose run --rm -e JEKYLL_ENV=production jekyll bundle exec jekyll build
```

成功构建的输出位于 `_site/`。该目录已被 Git 忽略，不应提交。

如果 `Gemfile`、`Gemfile.lock`、`Dockerfile` 或系统依赖发生变化，应重新构建镜像：

```powershell
docker compose build --no-cache
```

然后重新执行生产构建或启动开发服务器。

## 停止服务

```powershell
docker compose down
```

## 基本回归检查

修改模板、布局、插件或依赖后，至少检查以下路由均能访问，并比较中英文页面布局：

- `/`
- `/zh/`
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
