import { defineUserConfig } from "vuepress";
import { viteBundler } from "@vuepress/bundler-vite";
import { hopeTheme } from "vuepress-theme-hope";

export default defineUserConfig({
  // 基础配置
  bundler: viteBundler(), // 使用 Vite
  lang: "zh-CN",
  title: "技术文档",
  description: "VuePress + Hope Theme 示例",

  // 主题配置
  theme: hopeTheme({
    navbar: [
      { text: "首页", link: "/" },
      { text: "指南", link: "/guide/" },
    ],
    sidebar: {
      "/guide/": [
        { text: "快速开始", link: "/guide/" },
      ],
    },

    // Hope 主题扩展功能
    plugins: {
      mdEnhance: {
        codetabs: true, // 代码选项卡
      },
    },
  }),

  // GitHub Pages 部署配置
  //base: "/code-hub/", // 仓库名（若部署到根目录则删除此行）
  base: "/",
});
