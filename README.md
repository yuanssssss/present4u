# Present For You - TypeScript 版本

使用 Vite + React + TypeScript 重构的浪漫礼物展示项目。

## 技术栈

- ⚡️ Vite - 极速的前端构建工具
- ⚛️ React 18 - 用户界面库
- 📘 TypeScript - 类型安全的 JavaScript
- 🎬 React Player - 视频播放组件
- 📱 Current Device - 设备检测库

## 项目结构

```
present4u/
├── src/
│   ├── assets/
│   │   ├── img/          # 图片资源
│   │   └── video/        # 视频资源
│   ├── App.tsx           # 主应用组件
│   ├── Present.tsx       # 礼物展示组件
│   ├── data.ts           # 诗词数据
│   ├── index.css         # 全局样式
│   ├── main.tsx          # 应用入口
│   ├── vite-env.d.ts     # Vite 环境类型声明
│   ├── current-device.d.ts  # current-device 类型声明
│   └── react-player.d.ts    # react-player 类型声明
├── public/               # 公共静态资源
├── index.html           # HTML 模板
├── package.json         # 项目配置
├── tsconfig.json        # TypeScript 配置
└── vite.config.ts       # Vite 配置
```

## 功能特性

- 🎁 精美的礼物展示动画
- 🌟 3D 旋转的中国古诗词效果
- 🎵 背景星空视频播放
- 📱 自适应移动端和桌面端
- ⏱️ 倒计时开启效果
- 🔠 打字机效果的欢迎语
- 🔗 支持 URL 参数自定义收件人名字

## 快速开始

### 安装依赖

\`\`\`bash
npm install
\`\`\`

### 开发模式

\`\`\`bash
npm run dev
\`\`\`

### 生产构建

\`\`\`bash
npm run build
\`\`\`

### 预览构建结果

\`\`\`bash
npm run preview
\`\`\`

## 使用方法

### 基本使用

直接访问应用，点击按钮即可开启礼物展示。

### 自定义收件人名字

在 URL 中添加 `name` 参数：

\`\`\`
http://localhost:5173/?name=小明
\`\`\`

欢迎语将显示为："嘿，小明，点击这个按钮，开启你的礼物^_^"

## TypeScript 改进

相比原始 JavaScript 版本，TypeScript 版本提供了：

- ✅ 完整的类型检查
- ✅ 更好的 IDE 智能提示
- ✅ 更安全的代码重构
- ✅ 接口定义清晰
- ✅ 更好的代码可维护性

## 主要组件说明

### App.tsx

主应用组件，负责：
- 管理礼物展示状态
- 倒计时逻辑
- URL 参数解析
- 全屏功能

### Present.tsx

礼物展示组件，负责：
- 星空视频播放
- 3D 诗词动画生成
- 设备检测和适配
- 文字动画效果

### data.ts

包含两个诗词数组：
- `words`: 桌面端显示的完整诗词列表
- `wordsToPhone`: 移动端显示的精简诗词列表

## 浏览器兼容性

- Chrome (推荐)
- Firefox
- Safari
- Edge

建议使用现代浏览器以获得最佳体验。

## 许可证

MIT

