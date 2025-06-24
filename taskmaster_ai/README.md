# TaskMaster AI 工作区

本目录用于 TaskMaster AI 管理 PRD 与任务拆解，与微信小程序主项目代码隔离。通过 Cursor + task-master-ai 工具，可以在此进行需求撰写、任务管理、草稿生成等操作。

---

## 📁 目录结构

taskmaster_ai/
├── .taskmaster/ # TaskMaster 核心文件和配置
│ ├── docs/ # 项目文档，包含 PRD（如 prd.txt）
│ ├── tasks/ # 基于 PRD 自动拆解的任务清单
│ ├── templates/ # 模板配置（一般无需修改）
│ ├── reports/ # 任务复杂度分析报告
│ ├── config.json # Task Master 配置文件
│ └── state.json # 当前任务状态记录
├── .cursor/ # Cursor AI 相关配置
├── .roo/ # Roo 插件配置
├── .windsurf/ # Windsurf AI 插件缓存
├── .clinerules/ # TaskMaster/Cursor 的行为规则定义
├── .trae/ # TRAE 插件结构文件
├── .github/ # AI 工具相关的协作模板（非主项目用）
├── AGENTS.md # AI 代理说明文档（可忽略）
├── CLAUDE.md # Claude 模型配置说明（可忽略）
├── .taskmaster-ai.json # AI 状态缓存（可忽略）
├── mcp.json # Cursor MCP 模型配置
└── README.md # 当前说明文件


---

## 🎯 用途说明

该目录专门用于存放 AI 辅助开发工具的配置和数据，包括：

- ✅ 产品需求文档（PRD）管理：编辑 `.taskmaster/docs/prd.txt`
- ✅ 任务自动拆解与追踪：运行 `taskmaster parse_prd` 后生成任务
- ✅ 草稿代码生成：在任务中运行 `taskmaster generate`
- ✅ MCP 模型配置：通过 `mcp.json` 管理所接入的 Claude / DeepSeek 等模型
- ✅ 与主项目隔离，保持主目录清爽，避免误提交中间文件

主项目开发请始终在根目录 `family_game/` 中进行。  
此目录不参与发布或构建，仅作为“产品经理的 AI 办公室”。

---

## 🛡️ Git 忽略建议

为避免提交中间产物，建议在根目录 `.gitignore` 中加入：

/taskmaster_ai/.taskmaster/
/taskmaster_ai/.cursor/
/taskmaster_ai/.roo/
/taskmaster_ai/.windsurf/
/taskmaster_ai/tasks/
/taskmaster_ai/.clinerules/
/taskmaster_ai/.trae/
/taskmaster_ai/.github/
/taskmaster_ai/*.md


---

## 💡 使用建议（非开发者也可操作）

1. 打开 `taskmaster_ai/.taskmaster/docs/prd.txt`，撰写你的产品需求  
2. 在 Cursor MCP 面板中运行：
taskmaster parse_prd
taskmaster list
taskmaster generate
3. 将生成的代码手动拷贝到主项目目录 `family_game/` 对应模块中
4. 回到 `taskmaster_ai/` 中标记任务状态，继续下一步开发

---
