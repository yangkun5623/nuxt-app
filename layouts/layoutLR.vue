<template>
  <a-layout has-sider>
    <a-layout-sider
        :style="{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0, top: 0, bottom: 0, background: 'white' }"
    >
      <div class="header-avatar">
        <img height="60" src="@/static/avatar.jpg"/>
      </div>
      <a-menu v-model:selectedKeys="selectedKeys" theme="light" style="border: none" mode="inline">
        <a-menu-item key="1">
          <user-outlined />
          <span class="nav-text">nav 1</span>
        </a-menu-item>
        <a-menu-item key="2">
          <video-camera-outlined />
          <span class="nav-text">nav 2</span>
        </a-menu-item>
        <a-menu-item key="3">
          <upload-outlined />
          <span class="nav-text">nav 3</span>
        </a-menu-item>
        <a-menu-item key="4">
          <bar-chart-outlined />
          <span class="nav-text">nav 4</span>
        </a-menu-item>
        <a-menu-item key="5">
          <cloud-outlined />
          <span class="nav-text">nav 5</span>
        </a-menu-item>
        <a-menu-item key="6">
          <appstore-outlined />
          <span class="nav-text">nav 6</span>
        </a-menu-item>
        <a-menu-item key="7">
          <team-outlined />
          <span class="nav-text">nav 7</span>
        </a-menu-item>
        <a-menu-item key="8">
          <shop-outlined />
          <span class="nav-text">nav 8</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout :style="{ marginLeft: '200px',  overflow: 'auto'  }"  class="beautifyScrollbar">
      <a-layout-content :style="{ margin: '10px',}">
        <slot/>
      </a-layout-content>
      <a-layout-footer :style="{ textAlign: 'center' }">
        Nuxt App By Shieru
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  BarChartOutlined,
  CloudOutlined,
  AppstoreOutlined,
  TeamOutlined,
  ShopOutlined,
} from '@ant-design/icons-vue';
const selectedKeys = ref<string[]>(['4']);
</script>
<style scoped>
.header-avatar{
  height: 80px;
  display: flex;
  align-items: center;
  padding: 0 20px;
}
</style>
