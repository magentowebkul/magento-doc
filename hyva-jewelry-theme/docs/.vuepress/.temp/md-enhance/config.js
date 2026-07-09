import Mermaid from "/home/users/anikesh.kumar/Documents/magento-doc/hyva-jewelry-theme/node_modules/vuepress-plugin-md-enhance/lib/client/components/Mermaid.js";

export default {
  enhance: ({ app }) => {
    app.component("Mermaid", Mermaid);
  },
};
