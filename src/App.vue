<template>
  <a-layout class="app-layout">
    <a-layout-sider hide-trigger>
      <!-- <div class="logo">
        <a-typography-title :heading="4">17:01</a-typography-title>
        <a-typography-title :heading="6">星期二</a-typography-title>
        <a-typography-text>五月初五</a-typography-text>
      </div> -->
      <a-menu v-model:selected-keys="selectedMenuItems" :defaultOpenKeys="['Program', 'Game']" :defaultSelectedKeys="[defaultPage.key]" :style="{ width: '100%' }"
        @menuItemClick="onClickMenuItem">
        <a-menu-item :key="defaultPage.key">{{ defaultPage.title }}</a-menu-item>
        <a-sub-menu v-for="item in menuData" :key="item.key">
          <template #title>
            <span>
              {{ item.title }}
            </span>
          </template>
          <a-menu-item v-for="subItem in item.children" :key="subItem.key">{{ subItem.title }}</a-menu-item>
        </a-sub-menu>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-tabs type="card-gutter" :editable="true" @delete="handleDelete" @change="onTabChange" auto-switch v-model:active-key="activeTab">
        <a-tab-pane v-for="(item, index) of tabs" :key="item.key" :title="item.title" :closable="index !== 0">
          <component :is="item.component" class="tab"></component>
        </a-tab-pane>
      </a-tabs>
    </a-layout>
  </a-layout>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { menuData, pages } from './config';

const defaultPage = pages.Home;
const tabs = ref([defaultPage]);
const activeTab = ref(defaultPage.key);
const selectedMenuItems = ref([defaultPage.key]);

const onClickMenuItem = (key: keyof typeof pages) => {
  if (!tabs.value.find(item => item.key === key)) {
    tabs.value = tabs.value.concat(pages[key]);
  }
  activeTab.value = key;
};

const onTabChange = (key: string | number) => {
  selectedMenuItems.value = [key as string];
}

const handleDelete = (key: string | number) => {
  tabs.value = tabs.value.filter(item => item.key !== key)
  if (key === activeTab.value) {
    activeTab.value = tabs.value[tabs.value.length - 1].key;
  }
};
</script>
<style scoped>
.app-layout {
  height: 100%;
  background: var(--color-fill-2);
  border: 1px solid var(--color-border);
}

.app-layout :deep(.arco-layout-sider) .logo {
  margin: 12px 8px;
  padding: 0 16px;
}

.app-layout :deep(.arco-layout-sider-light) .logo {
  background: var(--color-fill-6);
}

.app-layout :deep(.arco-layout-header) {
  height: 64px;
  line-height: 64px;
  background: var(--color-bg-3);
}

.app-layout :deep(.arco-layout-footer) {
  height: 48px;
  color: var(--color-text-2);
  font-weight: 400;
  font-size: 14px;
  line-height: 48px;
}

.app-layout :deep(.arco-layout-content) {
  color: var(--color-text-2);
  font-weight: 400;
  font-size: 14px;
  background: var(--color-bg-3);
}

.app-layout :deep(.arco-layout-footer),
.app-layout :deep(.arco-layout-content) {
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: var(--color-white);
  font-size: 16px;
  font-stretch: condensed;
  text-align: center;
}

.app-layout :deep(.arco-tabs) {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.app-layout :deep(.arco-tabs-content) {
  box-sizing: border-box;
  padding: 0;
  width: 100%;
  flex: 1;
  overflow: hidden;
}

.app-layout :deep(.arco-tabs-content-list) {
  display: flex;
  width: 100%;
  height: 100%;
}

.app-layout :deep(.arco-tabs-content-item-active) {
  height: 100%;
}

.app-layout :deep(.arco-tabs-pane) {
  height: 100%;
}

/* .app-layout :deep(.arco-tabs) {
  overflow: hidden;
  flex: 1;
  display: flex;
  flex-direction: column;
} */
</style>
