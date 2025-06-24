# 亲子游戏生成器微信小程序

一款面向家长的微信小程序，聚焦亲子陪伴场景，通过少量信息输入，即可一键生成可执行的家庭游戏，引导家长轻松陪玩。

## 项目结构

```
family_game/
├── app.js                  # 应用入口文件
├── app.json                # 全局配置文件
├── app.wxss                # 全局样式文件
├── sitemap.json            # 站点地图配置
├── project.config.json     # 项目配置文件
├── images/                 # 图片资源目录
│   ├── logo.png            # 应用logo
│   ├── icon_*.png          # 各种图标
│   └── ...
├── pages/                  # 页面目录
│   ├── index/              # 首页（游戏生成器）
│   │   ├── index.js        # 页面逻辑
│   │   ├── index.wxml      # 页面结构
│   │   └── index.wxss      # 页面样式
│   ├── gameExecution/      # 游戏执行页面
│   │   ├── gameExecution.js
│   │   ├── gameExecution.wxml
│   │   └── gameExecution.wxss
│   └── myGames/            # 我的游戏页面
│       ├── myGames.js
│       ├── myGames.wxml
│       └── myGames.wxss
└── taskmaster_ai/          # AI辅助开发工具目录
```

## 功能模块

1. **游戏生成器**
   - 家长选择身份、孩子年龄段、游戏类型偏好、可用时间
   - AI返回符合条件的游戏方案

2. **游戏执行流程**
   - 分步骤引导游戏执行
   - 完成后展示鼓励语和动画反馈

3. **我的游戏**
   - 保存历史生成的游戏记录
   - 支持重新玩、删除操作

4. **重新生成**
   - 不满意时可一键换一个新游戏

## 技术架构

- 前端：微信小程序原生开发
- 后端：微信小程序云开发
- AI接入：OpenRouter API接入DeepSeek文本模型

## 开发说明

1. 使用微信开发者工具打开项目
2. 在云开发控制台创建环境，并在app.js中更新环境ID
3. 上传云函数（待开发）
4. 创建云数据库集合：games（用于存储游戏记录）
5. 在OpenRouter获取API密钥，配置到云函数中

## 注意事项

- 图标文件需要自行准备或设计
- 云函数部分尚未实现，目前使用模拟数据
- 每日游戏生成次数限制为3次 