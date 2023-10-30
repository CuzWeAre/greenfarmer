<script setup lang="ts">
//
</script>

<template>
  <view class="category">

    <navigator
      class="category-item"
      hover-class="none"
      url="/pages/index/index"
    >
      <image
        class="icon"
        src="/static/images/存款.png"
      ></image>
      <text class="text">存款</text>
    </navigator>


    <navigator
      class="category-item"
      hover-class="none"
      url="/pages/index/index"
    >
      <image
        class="icon"
        src="/static/images/贷款.png"
      ></image>
      <text class="text">贷款</text>
    </navigator>

    <navigator
      class="category-item"
      hover-class="none"
      url="/pages/index/index"
    >
      <image
        class="icon"
        src="/static/images/证券交易.png"
      ></image>
      <text class="text">证券</text>
    </navigator>


    <navigator
      class="category-item"
      hover-class="none"
      url="/pages/index/index"
    >
      <image
        class="icon"
        src="/static/images/农机.png"
      ></image>
      <text class="text">农机</text>
    </navigator>


    <navigator
      class="category-item"
      hover-class="none"
      url="/pages/index/index"
    >
      <image
        class="icon"
        src="/static/images/CO2.png"
      ></image>
      <text class="text">碳排放</text>
    </navigator>





  </view>
</template>

<style lang="scss">
/* 前台类目 */
.category {
  margin: 20rpx 0 0;
  padding: 10rpx 0;
  display: flex;
  flex-wrap: wrap;
  min-height: 28rpx; //这里可以设置上下间距

  .category-item {
    width: 150rpx;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;

    .icon {
      width: 100rpx;
      height: 100rpx;
    }
    .text {
      font-size: 26rpx;
      color: #666;
    }
  }
}
</style>
