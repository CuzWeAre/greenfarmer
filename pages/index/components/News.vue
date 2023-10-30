<script>
  export default {
    components: {},
    data() {
      return {
        cover: 'https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/shuijiao.jpg',
        avatar: 'https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/shuijiao.jpg',
        extraIcon: {
          color: '#00ff00',
          size: '22',
          type: 'gear-filled'
        }
      }
    },
    methods: {
      onClick(e) {
        console.log(e)
      },
      actionsClick(text) {
        uni.showToast({
          title: text,
          icon: 'none'
        })
      }
    }
  }
</script>


<template>
  <view class="container">


    <uni-section title="新闻速览" type="line">
      <uni-card title="2022年碳排放强度比2005年下降超51%" sub-title="全球一半以上新能源汽车行驶在中国" extra="点击查看" thumbnail='/static/images/news.jpeg' @click="onClick">
        <text class="uni-body">生态环境部召开10月例行新闻发布会，回应外界关切，并发布《中国应对气候变化的政策与行动2023年度报告》。</text>
      </uni-card>
    </uni-section>

  </view>



</template>
