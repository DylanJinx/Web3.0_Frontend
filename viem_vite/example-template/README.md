现代前端开发工具（如 Vite）的引入，它们提供了实时编译和模块热替换等功能，使得开发过程中不再需要手动编译 TypeScript 文件。

### 为什么不需要手动编译 TypeScript

1. **集成的构建工具**：现代开发环境如 Vite、Webpack 或 Parcel，集成了对 TypeScript 的支持。当你使用 `pnpm run dev` 启动 Vite 开发服务器时，Vite 自动处理 TypeScript 文件的编译。它在内部使用 TypeScript 编译器（或其他类似工具）将 TypeScript 代码转换为浏览器可以执行的 JavaScript 代码。

2. **实时编译和热更新**：在开发过程中，当你修改并保存文件时，Vite 可以立即编译修改后的 TypeScript 文件，并推送更新到浏览器，无需重新加载整个页面。这大大提高了开发效率。

3. **简化开发流程**：这种工具自动管理编译过程，你不需要关心编译的细节，如配置 `tsconfig.json` 或管理输出目录等。你只需关注代码本身，减少了设置和维护的复杂性。

### 工作原理

当你运行 `pnpm run dev`，实际上发生了以下几步：

1. **启动开发服务器**：Vite 启动一个本地开发服务器，通常监听 `http://localhost:3000` 或其他配置端口。
  
2. **模块解析和编译**：Vite 接收到 HTTP 请求后，根据请求的资源类型（如 HTML, CSS, JS, TS 等），决定如何处理。对于 TypeScript 文件，Vite 使用内置的或配置的 TypeScript 插件实时编译 TS 文件为 JS 文件。

3. **浏览器加载和执行**：编译后的 JavaScript 文件被发送到浏览器执行。由于 Vite 支持模块热替换，更新的模块可以即时反映在浏览器上，无需完全重新加载页面。

运行 `pnpm run dev` 启动 Vite 或类似的现代前端开发工具时，工具通常会首先读取 `index.html` 文件。`index.html` 通常被视为你的应用的入口点。这个文件负责引入 JavaScript、CSS 和其他资源，也是开发服务器提供给浏览器的首个文件。这样设置的目的是模拟真实的网页访问情况，其中浏览器首先加载 HTML 文档。

### 工作流程详解

1. **启动开发服务器**：当你执行 `pnpm run dev` 命令时，Vite 会启动一个本地开发服务器。这个服务器配置好了监听特定端口（通常是 `3000`）。

2. **加载 `index.html`**：服务器首先响应对根 URL (`/`) 的请求。这通常涉及到提供 `index.html` 文件。这个 HTML 文件是整个应用的基础，它包含了应用的结构和引用资源的链接（如 CSS 和 JavaScript 文件）。

3. **解析资源请求**：当浏览器接收到并解析 `index.html` 文件时，它会发现并请求所有在 HTML 文件中引用的资源。这包括脚本文件、样式表、图片和其他媒体文件。

4. **处理 TypeScript 和其他文件**：对于脚本文件，如果它们是 TypeScript 文件（或其他需要编译的文件），Vite 会在发送给浏览器之前实时编译这些文件。这个过程是自动的，并且由 Vite 配置的插件和加载器支持。

5. **模块热替换（HMR）**：Vite 支持模块热替换，这意味着当你更改代码时，Vite 可以只替换已更改的部分，而无需重新加载整个页面，从而提高开发效率。

### `transport: http(`https://mainnet.infura.io/v3/${import.meta.env.VITE_INFURA_API_KEY}`)` env标红问题
在 VSCode 中打开命令面板（Ctrl + Shift + P 或 Cmd + Shift + P），然后运行命令 "TypeScript: Restart TS server"。
确保 VSCode 使用的是工作区的 TypeScript 版本。打开命令面板，运行 "TypeScript: Select TypeScript Version"，选择 "Use Workspace Version"。