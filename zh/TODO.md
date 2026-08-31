# TODO

## 仓库统计卡片服务迁移

- [ ] 将当前自托管的 `github-readme-stats` 迁移到
      [`stats-organization/github-stats-extended`](https://github.com/stats-organization/github-stats-extended)。
- 当前服务地址配置在 `_config.yml` 的 `external_services.github_readme_stats_url`；相关调用位于
  `_includes/repository/`。
- 迁移时确认仓库卡片接口、主题、语言、所有者显示和描述行数参数兼容，并验证中英文页面及
  明暗主题。新服务验证完成前保留当前自托管服务作为回退方案。

## 仓库页面三列布局

- [ ] 将桌面端 Repository 页面由每行两列调整为每行三列，减少卡片之间的空隙。
- 当前列宽由 `_sass/_base.scss` 中 `.repo { max-width: 50%; }` 控制，中英文入口分别位于
  `_pages/en/repository.md` 和 `_pages/zh/repository.md`。
- 调整后保持卡片宽高和间距一致，避免文本或图片溢出；移动端保持单列，并根据实际宽度决定
  平板端使用两列或三列。
