#!/usr/bin/env python3
"""Generate catalog YAML. Run from repo root: python3 scripts/gen-catalog.py"""
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1] / "src" / "content" / "catalog"
CHECKED = "2026-08-13"

def yml(d: dict) -> str:
    def dump(obj, indent=0):
        lines = []
        sp = "  " * indent
        if isinstance(obj, dict):
            for k, v in obj.items():
                if isinstance(v, dict):
                    lines.append(f"{sp}{k}:")
                    lines.extend(dump(v, indent + 1))
                elif isinstance(v, bool):
                    lines.append(f"{sp}{k}: {'true' if v else 'false'}")
                elif isinstance(v, str) and ("\n" in v or len(v) > 90):
                    padded = "\n".join(f"{sp}  {line}" if line else f"{sp}  " for line in v.split("\n"))
                    lines.append(f"{sp}{k}: |")
                    lines.append(padded)
                else:
                    s = str(v).replace("\\", "\\\\").replace('"', '\\"')
                    lines.append(f'{sp}{k}: "{s}"' if isinstance(v, str) else f"{sp}{k}: {v}")
        return lines
    return "\n".join(dump(d)) + "\n"

items = []

def add(**kwargs):
    kwargs.setdefault("source_checked_at", CHECKED)
    kwargs.setdefault("featured", False)
    items.append(kwargs)

OFFICIAL = "claude-plugins-official"
SKILLS_MKT = "anthropic-agent-skills"

# --- plugins ---
add(
    slug="github", type="plugin", name="GitHub", featured=True,
    job={"en": "Open PRs, issues, and review code on GitHub", "zh": "在 GitHub 上开 PR、管 issue、做 code review"},
    description={"en": "Official GitHub MCP wrapped as a Claude Code plugin. Create issues, manage pull requests, review code, and search repositories from the session.",
                 "zh": "官方 GitHub MCP 的 Claude Code 插件。在会话里创建 issue、管理 PR、做 review、搜索仓库。"},
    install={"claude_code": "/plugin install github@claude-plugins-official"},
    status="unverified",
    risk={"needs_token": True, "stdio": False, "can_write_files": False,
          "notes": {"en": "Needs a GitHub token or OAuth. Can create issues and PRs in repos you can access. Do not install unless you trust GitHub's MCP.",
                    "zh": "需要 GitHub token 或 OAuth。能在你有权限的仓库里创建 issue 和 PR。不信任就不要装。"}},
    source={"github": "https://github.com/anthropics/claude-plugins-official/tree/main/external_plugins/github",
            "marketplace": OFFICIAL, "homepage": "https://github.com/github/github-mcp-server"},
)
add(
    slug="frontend-design", type="plugin", name="Frontend Design", featured=True,
    job={"en": "Ship distinctive production UI instead of generic AI layouts", "zh": "做出不像套模板的生产级前端界面"},
    description={"en": "Anthropic plugin for production-grade frontend interfaces. Pushes for distinctive layout, type, and motion instead of generic AI aesthetics.",
                 "zh": "Anthropic 的前端设计插件。偏向独特排版与动效，避免千篇一律的 AI 界面。"},
    install={"claude_code": "/plugin install frontend-design@claude-plugins-official"},
    status="unverified",
    risk={"needs_token": False, "stdio": False, "can_write_files": True,
          "notes": {"en": "Writes frontend code in your repo. Review diffs like any other agent edit.",
                    "zh": "会在仓库里写前端代码。像对待其他 agent 改动一样审查 diff。"}},
    source={"github": "https://github.com/anthropics/claude-plugins-official/tree/main/plugins/frontend-design",
            "marketplace": OFFICIAL},
)
add(
    slug="plugin-dev", type="plugin", name="Plugin Dev",
    job={"en": "Build and validate a Claude Code plugin", "zh": "开发并校验 Claude Code 插件"},
    description={"en": "Toolkit for plugin authors: hooks, MCP integration, commands, agents, and validation skills.",
                 "zh": "给插件作者用的工具包：hooks、MCP 集成、commands、agents，以及校验技能。"},
    install={"claude_code": "/plugin install plugin-dev@claude-plugins-official"},
    status="unverified",
    risk={"needs_token": False, "stdio": False, "can_write_files": True,
          "notes": {"en": "Creates plugin files in your working tree. No third-party network by default.",
                    "zh": "会在工作区生成插件文件。默认不连第三方网络。"}},
    source={"github": "https://github.com/anthropics/claude-plugins-official/tree/main/plugins/plugin-dev",
            "marketplace": OFFICIAL},
)
add(
    slug="feature-dev", type="plugin", name="Feature Dev",
    job={"en": "Explore a codebase, design a feature, then implement it", "zh": "摸清代码库、设计功能、再落地实现"},
    description={"en": "Workflow plugin with agents for codebase exploration, architecture, and quality review.",
                 "zh": "带探索、架构与质量审查 agent 的功能开发工作流插件。"},
    install={"claude_code": "/plugin install feature-dev@claude-plugins-official"},
    status="unverified",
    risk={"needs_token": False, "stdio": False, "can_write_files": True,
          "notes": {"en": "Reads and writes your project. Treat it as a powerful pair-programmer, not a sandbox.",
                    "zh": "会读、会写你的项目。当成强力结对，不是沙箱。"}},
    source={"github": "https://github.com/anthropics/claude-plugins-official/tree/main/plugins/feature-dev",
            "marketplace": OFFICIAL},
)
add(
    slug="code-review", type="plugin", name="Code Review", featured=True,
    job={"en": "Review a pull request with specialized agents", "zh": "用专用 agent 做 PR review"},
    description={"en": "Multi-agent PR review with confidence scoring to cut false positives.",
                 "zh": "多 agent PR 审查，带置信度打分，用来压假阳性。"},
    install={"claude_code": "/plugin install code-review@claude-plugins-official"},
    status="unverified",
    risk={"needs_token": False, "stdio": False, "can_write_files": False,
          "notes": {"en": "Primarily reads diffs. May still request GitHub access if combined with the GitHub plugin.",
                    "zh": "主要读 diff。若同时装了 GitHub 插件，可能要仓库权限。"}},
    source={"github": "https://github.com/anthropics/claude-plugins-official/tree/main/plugins/code-review",
            "marketplace": OFFICIAL},
)
add(
    slug="claude-md-management", type="plugin", name="CLAUDE.md Management",
    job={"en": "Keep CLAUDE.md accurate after real sessions", "zh": "根据真实会话把 CLAUDE.md 写准"},
    description={"en": "Audit CLAUDE.md quality, capture session learnings, and keep project memory current.",
                 "zh": "审计 CLAUDE.md、沉淀会话经验、保持项目记忆不过期。"},
    install={"claude_code": "/plugin install claude-md-management@claude-plugins-official"},
    status="unverified",
    risk={"needs_token": False, "stdio": False, "can_write_files": True,
          "notes": {"en": "Edits CLAUDE.md and related memory files in the repo.",
                    "zh": "会改仓库里的 CLAUDE.md 和相关记忆文件。"}},
    source={"github": "https://github.com/anthropics/claude-plugins-official/tree/main/plugins/claude-md-management",
            "marketplace": OFFICIAL},
)
add(
    slug="claude-security", type="plugin", name="Claude Security",
    job={"en": "Scan your own code for vulnerabilities inside the session", "zh": "在会话里扫描自己代码的漏洞"},
    description={"en": "In-session vulnerability scanning with findings challenged before report, then verified patches.",
                 "zh": "会话内漏洞扫描：先质疑发现再报告，再生成并验证补丁。"},
    install={"claude_code": "/plugin install claude-security@claude-plugins-official"},
    status="unverified",
    risk={"needs_token": False, "stdio": False, "can_write_files": True,
          "notes": {"en": "Reads your source and may write patches. Not a substitute for a dedicated SAST vendor.",
                    "zh": "会读源码，也可能写补丁。不能替代专业 SAST。"}},
    source={"github": "https://github.com/anthropics/claude-plugins-official/tree/main/plugins/claude-security",
            "marketplace": OFFICIAL},
)
add(
    slug="notion", type="plugin", name="Notion", featured=True,
    job={"en": "Search and update Notion pages and databases", "zh": "搜索并更新 Notion 页面和数据库"},
    description={"en": "Notion workspace plugin: search pages, edit docs, manage databases from Claude Code.",
                 "zh": "Notion 工作区插件：在 Claude Code 里搜页面、改文档、管数据库。"},
    install={"claude_code": "/plugin install notion@claude-plugins-official"},
    status="unverified",
    risk={"needs_token": True, "stdio": False, "can_write_files": False,
          "notes": {"en": "Needs Notion OAuth. Can read and write workspace content you grant. Treat as production access.",
                    "zh": "需要 Notion OAuth。能读写你授权的工作区内容，等同生产权限。"}},
    source={"github": "https://github.com/makenotion/claude-code-notion-plugin",
            "marketplace": OFFICIAL, "homepage": "https://github.com/makenotion/claude-code-notion-plugin"},
)
add(
    slug="linear", type="plugin", name="Linear",
    job={"en": "Create and update Linear issues from the coding session", "zh": "在编码会话里创建和更新 Linear issue"},
    description={"en": "Linear issue tracking: create issues, manage projects, search workspaces.",
                 "zh": "Linear 问题跟踪：建 issue、管项目、搜工作区。"},
    install={"claude_code": "/plugin install linear@claude-plugins-official"},
    status="unverified",
    risk={"needs_token": True, "stdio": False, "can_write_files": False,
          "notes": {"en": "Needs Linear API access. Can create and mutate issues in connected teams.",
                    "zh": "需要 Linear API。能在已连接团队里创建和改 issue。"}},
    source={"github": "https://github.com/anthropics/claude-plugins-official/tree/main/external_plugins/linear",
            "marketplace": OFFICIAL},
)
add(
    slug="slack", type="plugin", name="Slack",
    job={"en": "Search Slack threads while coding", "zh": "写代码时搜索 Slack 讨论"},
    description={"en": "Slack plugin to search messages, channels, and threads for context without leaving Claude Code.",
                 "zh": "Slack 插件：不离开 Claude Code 就能搜消息、频道和线程。"},
    install={"claude_code": "/plugin install slack@claude-plugins-official"},
    status="unverified",
    risk={"needs_token": True, "stdio": False, "can_write_files": False,
          "notes": {"en": "Needs Slack OAuth. Can read workspace messages you authorize. Do not grant write unless you need it.",
                    "zh": "需要 Slack OAuth。能读你授权的工作区消息。不需要写权限就不要开。"}},
    source={"github": "https://github.com/slackapi/slack-mcp-plugin",
            "marketplace": OFFICIAL, "homepage": "https://github.com/slackapi/slack-mcp-plugin"},
)
add(
    slug="stripe", type="plugin", name="Stripe", featured=True,
    job={"en": "Build Stripe checkout, billing, and webhooks in your app", "zh": "在应用里做 Stripe 结账、订阅和 webhook"},
    description={"en": "Stripe's Claude Code plugin for integrating payments and billing in your codebase.",
                 "zh": "Stripe 官方 Claude Code 插件，用来在代码里接支付和账单。"},
    install={"claude_code": "/plugin install stripe@claude-plugins-official"},
    status="unverified",
    risk={"needs_token": True, "stdio": False, "can_write_files": True,
          "notes": {"en": "May use Stripe test or live keys. Never point a coding agent at live keys unless you intend to.",
                    "zh": "可能用到 Stripe 测试或正式密钥。不要把正式密钥交给 agent，除非你有意为之。"}},
    source={"github": "https://github.com/stripe/ai/tree/main/providers/claude/plugin",
            "marketplace": OFFICIAL, "homepage": "https://github.com/stripe/ai"},
)
add(
    slug="supabase", type="plugin", name="Supabase", featured=True,
    job={"en": "Query and manage a Supabase project", "zh": "查询和管理 Supabase 项目"},
    description={"en": "Supabase MCP via plugin: SQL, auth, storage, and project management from Claude Code.",
                 "zh": "通过插件使用 Supabase MCP：在 Claude Code 里跑 SQL、管 auth/storage/项目。"},
    install={"claude_code": "/plugin install supabase@claude-plugins-official"},
    status="unverified",
    risk={"needs_token": True, "stdio": True, "can_write_files": False,
          "notes": {"en": "Needs a Supabase access token. Can run SQL against your project. Use a restricted key.",
                    "zh": "需要 Supabase access token。能对项目执行 SQL。用最小权限密钥。"}},
    source={"github": "https://github.com/supabase-community/supabase-plugin",
            "marketplace": OFFICIAL, "homepage": "https://github.com/supabase-community/supabase-plugin"},
)
add(
    slug="figma", type="plugin", name="Figma",
    job={"en": "Read Figma files and turn frames into code", "zh": "读取 Figma 文件并把画板变成代码"},
    description={"en": "Figma plugin: access files, extract components and tokens, translate designs into code.",
                 "zh": "Figma 插件：读文件、抽组件和 token、把设计翻成代码。"},
    install={"claude_code": "/plugin install figma@claude-plugins-official"},
    status="unverified",
    risk={"needs_token": True, "stdio": False, "can_write_files": True,
          "notes": {"en": "Needs Figma access. Reads design files and writes code locally. Review generated UI.",
                    "zh": "需要 Figma 权限。读设计文件并在本地写代码。生成的 UI 要自己看。"}},
    source={"github": "https://github.com/figma/mcp-server-guide",
            "marketplace": OFFICIAL, "homepage": "https://github.com/figma/mcp-server-guide"},
)
add(
    slug="sentry", type="plugin", name="Sentry",
    job={"en": "Pull production errors into the coding session", "zh": "把线上报错拉进编码会话"},
    description={"en": "Sentry plugin: error reports, stack traces, and issue search from Claude Code.",
                 "zh": "Sentry 插件：在 Claude Code 里看报错、堆栈和 issue。"},
    install={"claude_code": "/plugin install sentry@claude-plugins-official"},
    status="unverified",
    risk={"needs_token": True, "stdio": False, "can_write_files": False,
          "notes": {"en": "Needs a Sentry token. Can read error payloads which may contain user data.",
                    "zh": "需要 Sentry token。能读到可能含用户数据的错误内容。"}},
    source={"github": "https://github.com/getsentry/plugin-claude",
            "marketplace": OFFICIAL, "homepage": "https://github.com/getsentry/plugin-claude"},
)
add(
    slug="playwright", type="plugin", name="Playwright", featured=True,
    job={"en": "Drive a real browser for tests and screenshots", "zh": "用真浏览器跑测试和截图"},
    description={"en": "Microsoft Playwright MCP as a Claude Code plugin: click, fill, screenshot, e2e flows.",
                 "zh": "微软 Playwright MCP 的 Claude Code 插件：点击、填表、截图、跑 e2e。"},
    install={"claude_code": "/plugin install playwright@claude-plugins-official"},
    status="unverified",
    risk={"needs_token": False, "stdio": True, "can_write_files": True,
          "notes": {"en": "Spawns a local browser. Can navigate arbitrary URLs and write test files. Isolate credentials.",
                    "zh": "会在本地拉起浏览器。能打开任意 URL 并写测试文件。凭据要隔离。"}},
    source={"github": "https://github.com/anthropics/claude-plugins-official/tree/main/external_plugins/playwright",
            "marketplace": OFFICIAL, "homepage": "https://github.com/microsoft/playwright-mcp"},
)
add(
    slug="context7", type="plugin", name="Context7",
    job={"en": "Pull current library docs into context", "zh": "把当前版本的库文档拉进上下文"},
    description={"en": "Upstash Context7 remote MCP for version-specific documentation. No local Node required.",
                 "zh": "Upstash Context7 远程 MCP，拉取指定版本文档。不需要本地 Node。"},
    install={"claude_code": "/plugin install context7@claude-plugins-official"},
    status="unverified",
    risk={"needs_token": False, "stdio": False, "can_write_files": False,
          "notes": {"en": "Talks to a hosted MCP (mcp.context7.com). Sends library names you look up to that service.",
                    "zh": "连接托管 MCP（mcp.context7.com）。你查询的库名会发给该服务。"}},
    source={"github": "https://github.com/anthropics/claude-plugins-official/tree/main/external_plugins/context7",
            "marketplace": OFFICIAL, "homepage": "https://context7.com"},
)
add(
    slug="atlassian", type="plugin", name="Atlassian",
    job={"en": "Work Jira issues and Confluence pages from Claude Code", "zh": "在 Claude Code 里处理 Jira 和 Confluence"},
    description={"en": "Atlassian MCP: Jira and Confluence search, issue create, sprint and docs access.",
                 "zh": "Atlassian MCP：搜/建 Jira issue，访问 Confluence 与 sprint。"},
    install={"claude_code": "/plugin install atlassian@claude-plugins-official"},
    status="unverified",
    risk={"needs_token": True, "stdio": False, "can_write_files": False,
          "notes": {"en": "Needs Atlassian OAuth. Can read and write Jira/Confluence in sites you connect.",
                    "zh": "需要 Atlassian OAuth。能读写你连接站点里的 Jira/Confluence。"}},
    source={"github": "https://github.com/atlassian/atlassian-mcp-server",
            "marketplace": OFFICIAL, "homepage": "https://github.com/atlassian/atlassian-mcp-server"},
)
add(
    slug="pr-review-toolkit", type="plugin", name="PR Review Toolkit",
    job={"en": "Review PRs for tests, types, errors, and comments", "zh": "从测试、类型、错误处理和评论角度审 PR"},
    description={"en": "Specialized PR review agents for comments, tests, error handling, type design, and simplification.",
                 "zh": "针对评论、测试、错误处理、类型设计和简化的专用 PR 审查 agent。"},
    install={"claude_code": "/plugin install pr-review-toolkit@claude-plugins-official"},
    status="unverified",
    risk={"needs_token": False, "stdio": False, "can_write_files": False,
          "notes": {"en": "Reads code and may post review comments if GitHub/GitLab plugins are also enabled.",
                    "zh": "读代码；若同时启用 GitHub/GitLab 插件，可能会发 review 评论。"}},
    source={"github": "https://github.com/anthropics/claude-plugins-official/tree/main/plugins/pr-review-toolkit",
            "marketplace": OFFICIAL},
)

# --- skills ---
def skill(slug, name, job_en, job_zh, desc_en, desc_zh, bundle, featured=False):
    cmd = (
        "/plugin marketplace add anthropics/skills\n"
        f"/plugin install {bundle}@anthropic-agent-skills"
    )
    add(
        slug=slug, type="skill", name=name, featured=featured,
        job={"en": job_en, "zh": job_zh},
        description={"en": desc_en + f" Bundled in `{bundle}` from anthropics/skills.",
                     "zh": desc_zh + f" 包含在 anthropics/skills 的 `{bundle}` 插件包里。"},
        install={"claude_code": cmd},
        status="unverified",
        risk={"needs_token": False, "stdio": False, "can_write_files": True,
              "notes": {"en": "Skills are markdown plus optional scripts. They can instruct Claude to write files. Review SKILL.md before use.",
                        "zh": "Skill 是 markdown 加可选脚本，会指示 Claude 写文件。用前先读 SKILL.md。"}},
        source={"github": f"https://github.com/anthropics/skills/tree/main/skills/{slug}",
                "marketplace": SKILLS_MKT, "homepage": "https://github.com/anthropics/skills"},
    )

skill("mcp-builder", "MCP Builder", featured=True,
      job_en="Scaffold a working MCP server from a prompt",
      job_zh="用一句话脚手架生成可用的 MCP server",
      desc_en="Anthropic example skill for generating MCP servers (tool defs, schemas, transport).",
      desc_zh="Anthropic 示例 skill：生成 MCP server（工具定义、schema、传输层）。",
      bundle="example-skills")
skill("pdf", "PDF",
      job_en="Extract, fill, and create PDF files",
      job_zh="抽取、填写和生成 PDF",
      desc_en="Document skill used by Claude for PDF read/write workflows.",
      desc_zh="Claude 文档能力用的 PDF skill，覆盖读写工作流。",
      bundle="document-skills")
skill("docx", "DOCX",
      job_en="Create and edit Word documents",
      job_zh="创建和编辑 Word 文档",
      desc_en="Document skill for .docx creation and editing.",
      desc_zh="用于创建和编辑 .docx 的文档 skill。",
      bundle="document-skills")
skill("pptx", "PPTX",
      job_en="Build PowerPoint decks",
      job_zh="做 PowerPoint 演示文稿",
      desc_en="Document skill for .pptx generation.",
      desc_zh="用于生成 .pptx 的文档 skill。",
      bundle="document-skills")
skill("xlsx", "XLSX",
      job_en="Build and analyze spreadsheets",
      job_zh="做表、算表",
      desc_en="Document skill for .xlsx creation and analysis.",
      desc_zh="用于创建和分析 .xlsx 的文档 skill。",
      bundle="document-skills")
skill("webapp-testing", "Web App Testing",
      job_en="Test a local web app in a real browser",
      job_zh="用真浏览器测本地 Web 应用",
      desc_en="Example skill for interacting with and testing web applications.",
      desc_zh="用于操作和测试 Web 应用的示例 skill。",
      bundle="example-skills")
skill("claude-api", "Claude API",
      job_en="Call the Claude API correctly from your code",
      job_zh="在代码里正确调用 Claude API",
      desc_en="Example skill covering Claude API patterns.",
      desc_zh="覆盖 Claude API 用法的示例 skill。",
      bundle="example-skills")
skill("doc-coauthoring", "Doc Coauthoring",
      job_en="Co-write a long document with Claude",
      job_zh="和 Claude 合写长文档",
      desc_en="Example skill for iterative document co-authoring.",
      desc_zh="用于迭代合写文档的示例 skill。",
      bundle="example-skills")
skill("web-artifacts-builder", "Web Artifacts Builder",
      job_en="Build a shareable web artifact",
      job_zh="做一个可分享的 Web artifact",
      desc_en="Example skill for constructing web artifacts.",
      desc_zh="用于构建 Web artifact 的示例 skill。",
      bundle="example-skills")
skill("brand-guidelines", "Brand Guidelines",
      job_en="Apply a brand system to generated output",
      job_zh="让生成结果符合品牌规范",
      desc_en="Example skill that applies brand guidelines to Claude's output.",
      desc_zh="把品牌规范套到 Claude 输出上的示例 skill。",
      bundle="example-skills")
skill("skill-creator", "Skill Creator",
      job_en="Write or improve a Claude skill",
      job_zh="编写或改进一条 Claude skill",
      desc_en="Meta skill for creating, evaluating, and improving other skills.",
      desc_zh="用来创建、评估和改进其他 skill 的元 skill。",
      bundle="example-skills")
skill("canvas-design", "Canvas Design",
      job_en="Design a visual canvas or poster layout",
      job_zh="做视觉画布或海报排版",
      desc_en="Example skill for canvas and visual layout work.",
      desc_zh="用于画布和视觉排版的示例 skill。",
      bundle="example-skills")

# --- mcp ---
def mcp(slug, name, job_en, job_zh, desc_en, desc_zh, cmd, github, homepage, needs_token, stdio, can_write, risk_en, risk_zh, featured=False):
    add(
        slug=slug, type="mcp", name=name, featured=featured,
        job={"en": job_en, "zh": job_zh},
        description={"en": desc_en, "zh": desc_zh},
        install={"claude_code": cmd},
        status="unverified",
        risk={"needs_token": needs_token, "stdio": stdio, "can_write_files": can_write,
              "notes": {"en": risk_en, "zh": risk_zh}},
        source={"github": github, "homepage": homepage},
    )

mcp("postgres", "PostgreSQL", featured=True,
    job_en="Run SQL against a Postgres database",
    job_zh="对 Postgres 跑 SQL",
    desc_en="Reference Postgres MCP server. Point it at a connection string; Claude can list schemas and run queries.",
    desc_zh="Postgres 参考 MCP。配上连接串后，Claude 可以列 schema、跑查询。",
    cmd="claude mcp add postgres -- npx -y @modelcontextprotocol/server-postgres \"$DATABASE_URL\"",
    github="https://github.com/modelcontextprotocol/servers",
    homepage="https://github.com/modelcontextprotocol/servers",
    needs_token=True, stdio=True, can_write=False,
    risk_en="Uses a database URL. A writable role can DROP tables. Use a read-only user unless you intend writes.",
    risk_zh="使用数据库连接串。可写账号能 DROP 表。除非有意写入，否则用只读用户。")
mcp("memory", "Memory",
    job_en="Persist notes across Claude Code sessions",
    job_zh="跨会话保存笔记",
    desc_en="Knowledge-graph memory MCP so Claude can store and recall facts between sessions.",
    desc_zh="知识图谱记忆 MCP，让 Claude 跨会话记住事实。",
    cmd="claude mcp add memory -- npx -y @modelcontextprotocol/server-memory",
    github="https://github.com/modelcontextprotocol/servers",
    homepage="https://github.com/modelcontextprotocol/servers",
    needs_token=False, stdio=True, can_write=True,
    risk_en="Writes a local memory store. May retain secrets if you paste them into chat. Inspect the store periodically.",
    risk_zh="会写本地记忆文件。聊天里贴过的密钥可能被留下。定期检查存储。")
mcp("sequential-thinking", "Sequential Thinking",
    job_en="Force a structured multi-step reasoning trace",
    job_zh="强制走出结构化的多步推理",
    desc_en="MCP that exposes a sequential thinking tool for longer planning traces.",
    desc_zh="提供 sequential thinking 工具的 MCP，适合更长的规划轨迹。",
    cmd="claude mcp add sequential-thinking -- npx -y @modelcontextprotocol/server-sequential-thinking",
    github="https://github.com/modelcontextprotocol/servers",
    homepage="https://github.com/modelcontextprotocol/servers",
    needs_token=False, stdio=True, can_write=False,
    risk_en="Local stdio process. No credentials. Burns extra tokens for the thinking trace.",
    risk_zh="本地 stdio 进程，无凭据。思考轨迹会多耗 token。")
mcp("filesystem", "Filesystem",
    job_en="Read and write files outside the project root",
    job_zh="读写项目根目录之外的文件",
    desc_en="Filesystem MCP with an allowlist of directories. Powerful and easy to over-grant.",
    desc_zh="带目录白名单的文件系统 MCP。能力强，也很容易授权过大。",
    cmd="claude mcp add filesystem -- npx -y @modelcontextprotocol/server-filesystem /path/you/allow",
    github="https://github.com/modelcontextprotocol/servers",
    homepage="https://github.com/modelcontextprotocol/servers",
    needs_token=False, stdio=True, can_write=True,
    risk_en="Can read and overwrite any path you pass. Never point this at $HOME. Use a narrow folder.",
    risk_zh="能读写你传入的任何路径。不要指向 $HOME。只放一个窄目录。")
mcp("sqlite", "SQLite",
    job_en="Query a local SQLite database",
    job_zh="查询本地 SQLite 数据库",
    desc_en="SQLite MCP for local .sqlite files.",
    desc_zh="针对本地 .sqlite 文件的 MCP。",
    cmd="claude mcp add sqlite -- npx -y @modelcontextprotocol/server-sqlite /path/to/db.sqlite",
    github="https://github.com/modelcontextprotocol/servers",
    homepage="https://github.com/modelcontextprotocol/servers",
    needs_token=False, stdio=True, can_write=True,
    risk_en="Can mutate the database file. Snapshot first. Do not point at production DB files.",
    risk_zh="能改数据库文件。先备份。不要指向生产库。")
mcp("github-remote", "GitHub (remote MCP)",
    job_en="Talk to GitHub over the hosted MCP endpoint",
    job_zh="通过托管 MCP 接入 GitHub",
    desc_en="GitHub's remote MCP (Copilot API). Alternative to the official Claude Code GitHub plugin.",
    desc_zh="GitHub 远程 MCP（Copilot API）。官方 Claude Code GitHub 插件之外的接入方式。",
    cmd="claude mcp add --transport http github https://api.githubcopilot.com/mcp/",
    github="https://github.com/github/github-mcp-server",
    homepage="https://github.com/github/github-mcp-server",
    needs_token=True, stdio=False, can_write=False,
    risk_en="Needs a GitHub token in headers. Hosted endpoint sees your requests. Prefer the GitHub plugin if you already use claude-plugins-official.",
    risk_zh="请求头里要带 GitHub token。托管端点能看到你的请求。若已用官方插件市场，优先装 GitHub 插件。")
mcp("chrome-devtools", "Chrome DevTools",
    job_en="Inspect a live Chrome tab: network, console, performance",
    job_zh="检查正在运行的 Chrome：网络、控制台、性能",
    desc_en="Chrome DevTools MCP to drive and inspect a live browser. Also listed as chrome-devtools-mcp in the official plugin marketplace.",
    desc_zh="Chrome DevTools MCP，驱动并检查活的浏览器。官方插件市场里也有 chrome-devtools-mcp。",
    cmd="/plugin install chrome-devtools-mcp@claude-plugins-official",
    github="https://github.com/ChromeDevTools/chrome-devtools-mcp",
    homepage="https://github.com/ChromeDevTools/chrome-devtools-mcp",
    needs_token=False, stdio=True, can_write=False,
    risk_en="Attaches to a real browser. Can see pages you have open, including authenticated sessions.",
    risk_zh="会附着到真实浏览器。能看到你已打开的页面，包括已登录会话。")
mcp("git", "Git",
    job_en="Inspect git history and status via MCP",
    job_zh="通过 MCP 查看 git 历史和状态",
    desc_en="Git MCP for log, status, and repo inspection. Claude Code already has git via Bash; this is for structured tool calls.",
    desc_zh="Git MCP，用于 log/status/仓库检查。Claude Code 本身就能用 Bash 调 git；这个提供结构化工具调用。",
    cmd="claude mcp add git -- npx -y @modelcontextprotocol/server-git --repository /path/to/repo",
    github="https://github.com/modelcontextprotocol/servers",
    homepage="https://github.com/modelcontextprotocol/servers",
    needs_token=False, stdio=True, can_write=True,
    risk_en="Can run git in the given repo. Restrict the path. Prefer Claude Code's built-in git unless you need the MCP tool schema.",
    risk_zh="能在指定仓库跑 git。限制路径。除非需要 MCP 工具 schema，否则优先用 Claude Code 自带 git。")

ROOT.mkdir(parents=True, exist_ok=True)
for old in ROOT.glob("*.yml"):
    old.unlink()

for item in items:
    slug = item.pop("slug")
    (ROOT / f"{slug}.yml").write_text(yml(item), encoding="utf-8")

print(f"wrote {len(items)} catalog files")
from collections import Counter
print(Counter(i["type"] for i in items))
print("featured", sum(1 for i in items if i.get("featured")))
