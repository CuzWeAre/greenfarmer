<script setup lang="ts">
  import CustomNavbar from "./components/CustomNavbar.vue"
  import CategoryPanel from "./components/CategoryPanel.vue"
  import HotPanel from "./components/HotPanel.vue"
  import News from "./components/News.vue"

</script>

<template>
  <CustomNavbar />
  <CyjSwiper />
  <CategoryPanel />
  <HotPanel />
  <News />
  <!-- <view class="index">绿农创益家©版权所有</view> -->
</template>

<style lang="scss">
  page {
    background-color: #F7F7F7;
  }
</style>
