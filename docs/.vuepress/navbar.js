import { navbar } from "vuepress-theme-hope";

export default navbar ([
    { text: "首页", icon: "house", link: "/" },
    { text: "指南", icon: "book", link: "/guide/" },
    { text: "技术书籍", icon: "book", link: "/books/" },
    { 
        text: "知识星球",
        icon: "planet",
        children: [
            {
                text: "星球介绍",
                icon: "about",
                link: "/about/zhishixingqiu.md"
            },
            {
                text: "星球优质主题汇总",
                icon: "star",
                link: "/about/zhuti.md"
            }
        ]
    },
]);