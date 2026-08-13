# ClaudeNovo

独立的 Claude Code 网页目录：搜得到、对比得了、复制安装命令、标清这条现在还能不能用。

不是 Anthropic 官方站，不是 MCP 大全，不是 Prompt 商店。

## 谁

用 Claude Code 的开发者。他们会在 Google / 中文搜索里查「某个任务该装什么」，而不是打开客户端里的 Discover。

## 切入点

官方插件市场在 Claude Code 里面。PulseMCP、mcp.so、skills.sh 做万级抓取，噪音大，也不是只服务 Claude Code。

V1 只打四件事：

1. 可被搜索引擎索引的详情页
2. 按任务（job）而不是按「存在哪些 server」组织
3. 中文与英文同等
4. `status` + `verified_at`：没有验证日期的条目不得标 works

## 明确不做

- 用户提交、账号、Pro 订阅
- 自建 `/plugin marketplace add` 市场
- 抓取上万条 MCP
- 矢量编辑器

有搜索进来的人、有人复制安装命令之后，再谈周刊或 featured。先不写价格。

## V1

静态站，en + zh。目录 30–40 条，来源优先 `claude-plugins-official`、`anthropics/skills`，以及 Claude Code 能装的 MCP。

每条只回答：这是什么、解决什么任务、怎么装、上次验证过没有、有什么风险。

## 风险

- 商标：域名含 Claude。页脚写 Independent / not affiliated with Anthropic。目录数据不绑品牌名，必要时可改名迁移。
- 过期：条目会坏。`works` 必须有 `verified_at`。
- 安全：插件和 MCP 能跑代码、要 token、能改文件。详情页写风险，不提供「一键信任」。
