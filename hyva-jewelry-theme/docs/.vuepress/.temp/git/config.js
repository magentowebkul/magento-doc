import { GitContributors } from "/home/users/anikesh.kumar/Documents/magento-doc/hyva-jewelry-theme/node_modules/@vuepress/plugin-git/lib/client/components/GitContributors.js";
import { GitChangelog } from "/home/users/anikesh.kumar/Documents/magento-doc/hyva-jewelry-theme/node_modules/@vuepress/plugin-git/lib/client/components/GitChangelog.js";

export default {
  enhance: ({ app }) => {
    app.component("GitContributors", GitContributors);
    app.component("GitChangelog", GitChangelog);
  },
};
