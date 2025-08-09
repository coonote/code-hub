import { sidebar } from "vuepress-theme-hope";
import { books } from "./books.js"

export default sidebar({
    "/books/": books,
    "/guide/": [
        { text: "快速开始", link: "/guide/" },
    ],
});
