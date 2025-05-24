import { hasGlobalComponent } from "/Users/moon/code-hub/vuepress-docs/node_modules/@vuepress/helper/lib/client/index.js";
import Badge from "/Users/moon/code-hub/vuepress-docs/node_modules/vuepress-plugin-components/lib/client/components/Badge.js";

import "/Users/moon/code-hub/vuepress-docs/node_modules/@vuepress/helper/lib/client/styles/sr-only.css";

export default {
  enhance: ({ app }) => {
    if(!hasGlobalComponent("Badge")) app.component("Badge", Badge);
    
  },
  setup: () => {

  },
  rootComponents: [

  ],
};
