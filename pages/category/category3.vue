<script setup lang="ts">
  // import CustomNavbar  from "//components/CustomNavbar.vue"index
  const { safeAreaInsets } = uni.getSystemInfoSync()
</script>

<template>
  <view class="navbar" :style="{ paddingTop: safeAreaInsets!.top + 10 + 'px' }">
    <!-- logo文字 -->
    <view class="logo">
      <image class="logo-image" src="@/static/images/logo.png"></image>
      <text class="logo-text">“碳益”减排证券</text>
    </view>
    <view class="search">
      <text class="icon-search">徐州农机公司</text>
    </view>
  </view>

  <view class="viewport">
    <!-- 搜索框 -->
    <view class="search">

      <!--     <view class="input">
        <text class="icon-search">栖霞市西城中惠果园基地</text>
      </view> -->

    </view>
    <!-- 分类 -->
    <view class="categories">
      <!-- 左侧：一级分类 -->
      <scroll-view class="primary" scroll-y>
        <view v-for="(item, index) in 1" :key="item" class="item" :class="{ active: index === 1 }">
          <text class="name"> 减排证券 </text>
        </view>

        <view class="item" :class="{ active: true }">
          <text class="name"> 农机租赁 </text>
        </view>

        <view class="item">
          <text class="name"> 碳排放交易 </text>
        </view>


      </scroll-view>

      <!-- 右侧：二级分类 -->
      <scroll-view class="secondary" scroll-y>
        <!-- 内容区域 -->

        <uni-card title="徐州新天地农机有限公司" :isFull="true" sub-title="Tel:138 888 8888" extra="查看详情"
          thumbnail="/static/images/car.png">
          <text class="uni-body">主营农业生产机械业务\n</text>
          <text class="uni-body">江苏省徐州市云龙区郭庄路8号</text>
          <uni-rate :touchable="false" :value="5" />
        </uni-card>

        <uni-card title="徐州农机公司" :isFull="true" sub-title="Tel:138 888 8888" extra="查看详情"
          thumbnail="/static/images/car.png">
          <text class="uni-body">主营播种机\n徐州市铜山区S322与环镇南路交叉路口往东北约90米</text>
          <uni-rate :touchable="false" :value="5" />
        </uni-card>

        <uni-card title="徐州第一农机租赁公司" :isFull="true" sub-title="Tel:138 888 8888" extra="查看详情"
          thumbnail="/static/images/car.png">
          <text class="uni-common-mt">主营农用飞机，可施农药、播种\n江苏省徐州市云龙区xx街道888号</text>
          <uni-rate :touchable="false" :value="5" />
        </uni-card>

        <uni-card title="徐州第二农机租赁公司" :isFull="true" sub-title="Tel:138 888 8888" extra="查看详情"
          thumbnail="/static/images/car.png">
          <text class="uni-common-mt">主营农用飞机，可施农药、播种\n江苏省徐州市泉山区xx街道999号</text>
          <uni-rate :touchable="false" :value="5" />
        </uni-card>



      </scroll-view>
    </view>
  </view>
</template>

<style lang="scss">
  page {
    height: 100%;
    overflow: hidden;
  }

  .viewport {
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  .search {
    padding: 0 30rpx 20rpx;
    background-color: #fff;

    .input {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 64rpx;
      padding-left: 26rpx;
      color: #8b8b8b;
      font-size: 28rpx;
      border-radius: 32rpx;
      background-color: #f3f4f4;
    }
  }

  .icon-search {
    &::before {
      margin-right: 10rpx;
    }
  }

  /* 分类 */
  .categories {
    flex: 1;
    min-height: 400rpx;
    display: flex;
  }

  /* 一级分类 */
  .primary {
    overflow: hidden;
    width: 180rpx;
    flex: none;
    background-color: #f6f6f6;

    .item {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 96rpx;
      font-size: 26rpx;
      color: #595c63;
      position: relative;

      &::after {
        content: '';
        position: absolute;
        left: 42rpx;
        bottom: 0;
        width: 96rpx;
        border-top: 1rpx solid #e3e4e7;
      }
    }

    .active {
      background-color: #fff;

      &::before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 8rpx;
        height: 100%;
        background-color: #27ba9b;
      }
    }
  }

  .primary .item:last-child::after,
  .primary .active::after {
    display: none;
  }

  /* 二级分类 */
  .secondary {
    background-color: #fff;

    .carousel {
      height: 200rpx;
      margin: 0 30rpx 20rpx;
      border-radius: 4rpx;
      overflow: hidden;
    }

    .panel {
      margin: 0 30rpx 0rpx;
    }

    .title {
      height: 60rpx;
      line-height: 60rpx;
      color: #333;
      font-size: 28rpx;
      border-bottom: 1rpx solid #f7f7f8;

      .more {
        float: right;
        padding-left: 20rpx;
        font-size: 24rpx;
        color: #999;
      }
    }

    .more {
      &::after {
        font-family: 'erabbit' !important;
        content: '\e6c2';
      }
    }

    .section {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      padding: 20rpx 0;

      .goods {
        width: 150rpx;
        margin: 0rpx 30rpx 20rpx 0;

        &:nth-child(3n) {
          margin-right: 0;
        }

        image {
          width: 150rpx;
          height: 150rpx;
        }

        .name {
          padding: 5rpx;
          font-size: 22rpx;
          color: #333;
        }

        .price {
          padding: 5rpx;
          font-size: 18rpx;
          color: #cf4444;
        }

        .number {
          font-size: 24rpx;
          margin-left: 2rpx;
        }
      }
    }
  }




  /* 自定义导航条 */
  .navbar {
    background-image: url(@/static/images/navigator_bg.png);
    background-size: cover;
    position: relative;
    display: flex;
    flex-direction: column;
    padding-top: 20px;

    .logo {
      display: flex;
      align-items: center;
      height: 64rpx;
      padding-left: 30rpx;

      .logo-image {
        width: 266rpx;
        height: 39rpx;
      }

      .logo-text {
        flex: 1;
        line-height: 28rpx;
        color: #fff;
        margin: 2rpx 0 0 20rpx;
        padding-left: 20rpx;
        border-left: 1rpx solid #fff;
        font-size: 26rpx;
      }
    }

    .search {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 10rpx 0 26rpx;
      height: 64rpx;
      margin: 16rpx 20rpx;
      color: #fff;
      font-size: 28rpx;
      border-radius: 32rpx;
      background-color: rgba(255, 255, 255, 0.5);
    }

    .icon-search {
      &::before {
        margin-right: 10rpx;
      }
    }

    .icon-scan {
      font-size: 30rpx;
      padding: 15rpx;
    }
  }
</style>
