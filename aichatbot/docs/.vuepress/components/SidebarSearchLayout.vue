<script setup>
import { computed } from 'vue'
import { useRoute } from 'vuepress/client'
import Layout from '@vuepress/theme-default/lib/client/layouts/Layout.vue'

const route = useRoute()

const isDocPage = computed(
  () => route.path !== '/' && route.path !== '/404.html'
)
</script>

<template>
  <Layout>
    <template #sidebar-top>
      <div v-if="isDocPage" class="sidebar-search">
        <SearchBox />
      </div>
    </template>
  </Layout>
</template>