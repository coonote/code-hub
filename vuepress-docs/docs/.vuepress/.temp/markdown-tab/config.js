import { CodeTabs } from "/Users/moon/code-hub/vuepress-docs/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/CodeTabs.js";
import "/Users/moon/code-hub/vuepress-docs/node_modules/@vuepress/plugin-markdown-tab/lib/client/styles/vars.css";

export default {
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
  },
};
