import { CodeTabs } from "/home/users/anikesh.kumar/Documents/magento-doc/hyva-jewelry-theme/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/CodeTabs.js";
import { Tabs } from "/home/users/anikesh.kumar/Documents/magento-doc/hyva-jewelry-theme/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/Tabs.js";
import "/home/users/anikesh.kumar/Documents/magento-doc/hyva-jewelry-theme/node_modules/@vuepress/plugin-markdown-tab/lib/client/styles/vars.css";

export default {
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    app.component("Tabs", Tabs);
  },
};
