<template>
  <view class="store-info" @click="handleClick">
    <view class="store-info-hd">
      <view class="store-logo">
        <image class="logo-image" :src="store.thumb" />
      </view>
      <view class="store-name">{{ store.name }}</view>
      <wd-icon v-if="more" name="chevron-right" size="20px"></wd-icon>
    </view>
    <view class="store-info-bd">
      <wd-icon name="location" size="32rpx" color="#A7ADBB"></wd-icon>
      <view class="store-address" @click.stop="handleViewMap">{{ store.address }}</view>
      <view class="store-phone" @click.stop="handlePhoneCall">
        <wd-icon name="call" size="26px" color="#A1EA2B"></wd-icon>
        <text>电话</text>
      </view>
    </view>
  </view>
</template>

<script lang="ts" setup>
defineOptions({
  name: 'StoreBox',
})
const props = defineProps({
  store: {
    type: Object,
    default: () => {
    }
  },
  more: {
    type: Boolean,
    default: false
  }
})
const emit = defineEmits(['click'])

function handleClick(e) {
  emit('click', e);
}

function handleViewMap() {
  uni.openLocation({
    latitude: +props.store?.lat,
    longitude: +props.store?.lng,
    // name: props.store?.name,
    // address: props.store?.address
  });
}

function handlePhoneCall() {
  uni.makePhoneCall({
    phoneNumber: props.store?.phone,
  })
}

</script>

<style lang="scss">

.store-info {
  height: 240rpx;
  padding: 20rpx;
  border-radius: 16rpx;
  background-color: #fff;
  font-size: 24rpx;

  &-hd {
    height: 44rpx;
    display: flex;
    align-items: flex-end;
  }

  &-bd {
    margin-top: 32rpx;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }

  .store-logo {
    position: relative;
    width: 110rpx;
    height: 100%;

    .logo-image {
      position: absolute;
      top: -60rpx;
      width: 110rpx;
      height: 110rpx;
      border-radius: 20rpx;
    }
  }

  .store-name {
    margin-left: 12rpx;
    flex: 1;
    font-size: 36rpx;
    font-weight: 500;
  }

  .store-address {
    margin-left: 12rpx;
    padding-right: 180rpx;
    font-size: 24rpx;
    font-weight: 500;
  }
}
</style>
