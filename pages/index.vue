<template>
      <v-chart class="chart" :option="option" />
</template>

<script setup lang="ts">
import VChart from 'vue-echarts';
import { ref } from 'vue';

setTimeout(() => {
  navigateTo({
    path: '/home/homeChild1'
  })
},3000)
const option = ref({
  graphic: {
    elements: [
      {
        type: 'text',
        left: 'center',
        top: 'center',
        style: {
          text: 'Nuxt App By Shieru',
          fontSize: 80,
          fontWeight: 'bold',
          lineDash: [0, 200],
          lineDashOffset: 0,
          fill: 'transparent',
          stroke: '#22a6b3',
          lineWidth: 1
        },
        keyframeAnimation: {
          duration: 3200,
          loop: false,
          keyframes: [
            {
              percent: 0.5,
              style: {
                fill: 'transparent',
                lineDashOffset: 200,
                lineDash: [200, 0]
              }
            },
            {
              // Stop for a while.
              percent: 0.6,
              style: {
                fill: '#22a6b3'
              }
            },
            {
              percent: 1,
              style: {
                fill: '#22a6b3'
              }
            }
          ]
        }
      }
    ]
  }
});


</script>

<style scoped lang="less">
.chart {
  height: 90vh;
  width: 100%;
}
</style>
