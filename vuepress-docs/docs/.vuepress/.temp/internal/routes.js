export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/Users/moon/code-hub/vuepress-docs/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":""} }],
  ["/guide/", { loader: () => import(/* webpackChunkName: "guide_index.html" */"/Users/moon/code-hub/vuepress-docs/docs/.vuepress/.temp/pages/guide/index.html.js"), meta: {"title":""} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/Users/moon/code-hub/vuepress-docs/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);
