<template>
  <a-layout style="height: 100%">
    <a-layout-header class="header" :style="{position: 'fixed', zIndex: 1, width: '100%'}">
      <div class="header-avatar">
        <img height="48" src="@/static/avatar.jpg"/>
      </div>
      <a-menu
          v-model:selectedKeys="selectedKeys1"
          theme="light"
          mode="horizontal"
          class="header-menu"
      >
        <a-menu-item key="1">前端</a-menu-item>
        <a-menu-item key="2">后端</a-menu-item>
        <a-menu-item key="3">其他</a-menu-item>
      </a-menu>
    </a-layout-header>
    <a-layout-content class="beautifyScrollbar" :style="{padding: '10px', height: ' calc(100% - 60px)',overflowY: 'auto', marginTop: '60px'}">
      <slot/>
      <a-layout-footer style="text-align: center">
        Nuxt App By Shieru
      </a-layout-footer>
    </a-layout-content>
  </a-layout>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons-vue';
const selectedKeys1 = ref<string[]>(['2']);
const selectedKeys2 = ref<string[]>(['1']);
const openKeys = ref<string[]>(['sub1']);
</script>
<style scoped lang="less">
.header{
  display: flex;
  padding: 0 10px;
  background: white;
  height: 60px;


  .header-avatar{
    align-items: center;
    padding: 6px 10px 0 0 ;
  }

  .header-menu{
    height: 60px;
  }
}
</style>
