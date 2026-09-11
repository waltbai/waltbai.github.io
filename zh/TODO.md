# TODO

## 仓库统计卡片服务迁移

- [x] 新增每日静态 SVG 生成工作流；全部成功且内容变化后提交，并显式触发网站部署。
- [ ] 推送并手动运行工作流，确认真实 GitHub API、提交权限与部署链路正常。
- [ ] 校准静态卡片显示宽度和字号，验证明暗主题后将中英文页面切换到静态 SVG。

- [ ] 将当前自托管的 `github-readme-stats` 迁移到
      [`stats-organization/github-stats-extended`](https://github.com/stats-organization/github-stats-extended)。
- 当前服务地址配置在 `_config.yml` 的 `external_services.github_readme_stats_url`；相关调用位于
  `_includes/repository/`。
- 迁移时确认仓库卡片接口、主题、语言、所有者显示和描述行数参数兼容，并验证中英文页面及
  明暗主题。新服务验证完成前保留当前自托管服务作为回退方案。

## 仓库页面三列布局

- [x] 将桌面端 Repository 页面由每行两列调整为每行三列，减少卡片之间的空隙。
- 布局由 `_sass/_layout.scss` 中 `.repository-grid` 控制，中英文入口分别位于
  `_pages/en/repository.md` 和 `_pages/zh/repository.md`。
- 移动端单列，768px 起两列，992px 起三列；各列等宽，保留卡片内边距和图片原始宽高比。
- [x] 生产构建通过；中英文 Repository 页面已验证桌面三列、平板两列、手机单列及明暗主题，
      无横向溢出；14 个中英文主要路由均返回 HTTP 200（2026-09-11）。
