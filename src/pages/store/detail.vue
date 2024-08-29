<route lang="json5">
{
style: {
navigationStyle: 'custom',
navigationBarTitleText: '品牌故事',
},
}
</route>
<template>
  <view class="page-store-detail">
    <wd-navbar fixed left-arrow :bordered="false" @click-left="handleClickLeft" safeAreaInsetTop
               custom-style="background-color: transparent !important;"></wd-navbar>
    <view class="banner-container">
      <Banner :list="swiperList" />
    </view>
    <view class="main-wrap">
      <StoreBox :store="storeInfo" />
      <Box title="品牌故事">
        <view class="rich-text">
          <rich-text :nodes="storeInfo.description"></rich-text>
        </view>
      </Box>
    </view>
  </view>
</template>

<script lang="ts" setup>
import Box from '@/components/Box.vue';
import Banner from '@/pages/index/components/Banner.vue';
import {getBanners} from '@/service/mock/global';
import {getStoreInfo} from '@/service/mock/store';
import StoreBox from '@/pages/index/components/StoreBox.vue';

defineOptions({
  name: 'StoreDetail',
})
const swiperList = ref([])
const storeInfo = ref({})

function handleClickLeft(e) {
  uni.navigateBack()
}

onShow(async () => {
  swiperList.value = await getBanners();
  storeInfo.value = await getStoreInfo();
})

</script>

<style lang="scss">
page {
  background-color: var(--app-page-bg-color);
}

.banner-container {
  width: 100%;
  height: 460rpx;

  .banner-swiper {
    height: 100%;
  }
}

.main-wrap {
  padding: 20rpx;
}

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
