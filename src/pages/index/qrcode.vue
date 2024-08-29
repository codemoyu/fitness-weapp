<route lang="json5">
{
style: {
navigationBarTitleText: '凭证',
},
}
</route>
<template>
  <view class="page-qrcode">
    <wd-tabs v-model="current">
      <wd-tab :title="item.title" :name="item.type" v-for="item in tabs" :key="item.type" :disabled="item.disabled">
        <view v-if="item.type === 'vip'" class="tab-content">
          <image class="qrcode-image"
                 src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOYAAADmAQMAAAD7pGv4AAAABlBMVEX///8AAABVwtN+AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAA7klEQVRYhe3Y2w3DIAwFUEsZgJG6OiNlgEgu+AHYIW0GuP5AUQ5fV7GhJUK9rw9bEZWLmM/DX5zQrKdEdnRtr6o8kQM0ao+uLS1TS1LShf5S+eokSehfFXhMErp2KNnmff9Cl8mvIT6dC9C1bJrRvqBk3ejpcS1svQq9ab9HSDd6iEffImcANCuR30+1QymOOeiiRb62a0nS4iToTa9wXY2ZQoOOkslfZTOvHQp1HUNfQ6xl3i2gWUdf6o1iLJokNGhozqp/RfihCd3rHPpyaKYkoSFJ9t/TdhpAbzo6ND9Bs4bJr8vcAuUcGOpFfQH9MMvfh8sIuAAAAABJRU5ErkJggg==" />
          <view class="tips">请将二维码放在读取器上</view>
        </view>
        <view v-if="item.type === 'ticket'" class="tab-content">暂无内容</view>
      </wd-tab>
    </wd-tabs>
  </view>
</template>

<script lang="ts" setup>
defineOptions({
  name: 'UserTicket',
})
const current = ref<string>('vip');
const tabs = ref([
  {
    title: '会员凭证',
    type: 'vip',
  },
  {
    title: '可用票凭证',
    type: 'ticket',
    disabled: true,
  }
])

onLoad(() => {

})
</script>

<style lang="scss">
page {
  background-color: var(--app-page-bg-color);
}

.tab-content {
  margin: 60rpx 30rpx 0;
  padding: 30rpx;
  border-radius: 8rpx;
  background-color: #fff;
  text-align: center;

  .qrcode-image {
    margin: 0 auto;
    width: 630rpx;
    height: 630rpx;
  }

  .tips {
    margin-top: 24rpx;
  }
}
</style>
