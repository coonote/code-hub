import { hopeTheme } from "vuepress-theme-hope";

import navbar from "./navbar.js"
import sidebar from "./sidebar/index.js"

export default hopeTheme({
    author: "编程小伙伴",
    navbar,
    sidebar,
    //navbar: [
    //  { text: "首页", link: "/" },
    //  { text: "指南", link: "/guide/" },
    //],
    //sidebar: {
    //  "/guide/": [
    //    { text: "快速开始", link: "/guide/" },
    //  ],
    //},

    markdown: {
      align: true,
      codeTabs: true,
    },

    // Hope 主题扩展功能
    plugins: {
      icon: {
        //assets: "//at.alicdn.com/t/c/font_2922463_o9q9dxmps9.css",
        assets: "fontawesome",
      },
    },

    // 配置自定义组件路径
    //components: {
    //components: ["RecentPosts"],
    //},

    footer: "MIT Licensed | Copyright © 2023 后端面试",
    displayFooter: true,
});
