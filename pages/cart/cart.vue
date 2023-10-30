<script>
  export default {
    data() {
      return {
        // 基础表单数据
        baseFormData: {
          name: '孙权',
          telephone: '138 8888 8888',
          address: '江苏省 徐州市 铜山区 中国矿业大学',
          usr_type: 0,
          hobby: [5],
          datetimesingle: 1698796800000
        },
        // 表单数据
        alignmentFormData: {
          name: '',
          telephone: '',
        },
        // 单选数据源
        usr_type: [{
          text: '果农',
          value: 0
        }, {
          text: '企业',
          value: 1
        }, {
          text: '合作社',
          value: 2
        }]
      }
    }
    }
</script>

<template>
  <view class="container">
    <uni-notice-bar show-icon text="接入绿农创益家,尽享双碳支持!" />

    <view class="example">
      <!-- 基础用法，不包含校验规则 -->
      <uni-forms ref="baseForm" :modelValue="baseFormData">
        <uni-forms-item label="姓名">
          <uni-easyinput v-model="baseFormData.name" placeholder="请输入姓名" />
        </uni-forms-item>
        <uni-forms-item label="年龄">
          <uni-easyinput v-model="baseFormData.telephone" placeholder="请输入姓名" />
        </uni-forms-item>
        <uni-forms-item label="地址">
          <uni-easyinput v-model="baseFormData.address" placeholder="请输入姓名" />
        </uni-forms-item>
        <uni-forms-item label="用户类型">
          <uni-data-checkbox v-model="baseFormData.usr_type" :localdata="usr_type" />
        </uni-forms-item>

        <uni-forms-item label="注册时间">
          <uni-datetime-picker type="datetime" return-type="timestamp" v-model="baseFormData.datetimesingle" />
        </uni-forms-item>
      </uni-forms>



      <uni-card :isFull="true" :is-shadow="true">
        <uni-card :isFull="true" :is-shadow="false" margin='0px' :border="false">
          <uni-icons type="wallet" size="20" style="padding-right: 1ex;"></uni-icons>
          <text class="uni-body" style="font-size: medium;">工行卡号：62302 3232 3232</text>
        </uni-card>

        <uni-card :isFull="true" :is-shadow="false" :border="false">
          <uni-icons type="shop" size="20" style="padding-right: 1ex;"></uni-icons>
          <text class="uni-body" style="font-size: medium;">主要种植作物：苹果</text>
        </uni-card>

        <uni-card :isFull="true" :is-shadow="false" :border="false">
          <uni-icons type="star" size="20" style="padding-right: 1ex;"></uni-icons>
          <text class="uni-body" style="font-size: medium;">碳币余额：50 枚</text>
        </uni-card>

      </uni-card>


      <uni-card :isFull="true" :is-shadow="true" margin="100px">
        <uni-icons type="person" size="20" style="padding-right: 1ex;"></uni-icons>
        <text class="uni-body" style="font-size: medium;">身份证信息：点击查看</text>
      </uni-card>

      <uni-card :isFull="true" :is-shadow="true">
        <uni-icons type="headphones" size="20" style="padding-right: 1ex;"></uni-icons>
        <text class="uni-body" style="font-size: medium;">联系我们</text>
      </uni-card>

    </view>


  </view>
</template>


<style lang="scss">
  .example {
    padding: 15px;
    background-color: #fff;
  }

  .segmented-control {
    margin-bottom: 15px;
  }

  .button-group {
    margin-top: 15px;
    display: flex;
    justify-content: space-around;
  }

  .form-item {
    display: flex;
    align-items: center;
  }

  .button {
    display: flex;
    align-items: center;
    height: 35px;
    margin-left: 10px;
  }
</style>
