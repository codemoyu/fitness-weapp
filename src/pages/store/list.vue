<route lang="json5">
{
style: {
navigationBarTitleText: '场馆选择',
},
}
</route>
<template>
  <view class="page-store-list">
    <wd-search v-model="searchKeyword" hide-cancel>
      <template #prefix>
        <view class="search-type" @click="handleChangeCity">
          <text>{{ cityName || '全部' }}</text>
          <wd-icon custom-class="icon-arrow" name="fill-arrow-down"></wd-icon>
        </view>
      </template>
    </wd-search>


    <view class="store-list">
      <view class="store-item" v-for="item in storeList" :key="item.id" @click="handleChangeStore(item)">
        <view class="store-hd">
          <view class="store-title">{{ item.name }}</view>
          <view class="store-distance"> {{ item.distance }}</view>
        </view>
        <view class="store-desc">
          <wd-icon name="location" size="24rpx"></wd-icon>
          <text class="text">{{ item.address }}</text>
        </view>
        <view class="store-desc">
          <wd-icon name="call" size="24rpx"></wd-icon>
          <text class="text">{{ item.phone }}</text>
        </view>
      </view>
    </view>


    <view class="city-picker" v-show="cityPickerVisible">
      <view class="city-quick-box">
        <view class="hot-city">
          <view class="hot-city-title">热门城市</view>
          <view class="hot-city-list">
            <view class="hot-city-item" v-for="city in hotCities" :key="city" @click="handleClickCity(city)">
              {{ city }}
            </view>
          </view>
        </view>
      </view>
      <view class="index-wrapper">
        <wd-index-bar sticky>
          <view v-for="item in cities" :key="item.index">
            <wd-index-anchor :index="item.index" />
            <wd-cell border clickable v-for="city in item.data" :key="city" :title="city"
                     @click="handleClickCity(city)"></wd-cell>
          </view>
        </wd-index-bar>
      </view>
    </view>
  </view>
</template>

<script lang="ts" setup>
import {getStoreList, getCityIndexes} from '@/service/mock/store';

defineOptions({
  name: 'StoreList',
})
const searchKeyword = ref<string>('')
const cityName = ref<string>('')
const cityPickerVisible = ref<boolean>(false)
const storeList = ref([]);
const hotCities = ref(['全部', '天津市'])
const cities = ref([])


function handleChangeStore(store) {
  //TODO 更新记录当前门店
  uni.navigateBack();
}

function handleChangeCity() {
  cityPickerVisible.value = true;
}

function handleClickCity(city) {
  cityName.value = city;
  cityPickerVisible.value = false;
}

onShow(async () => {
  storeList.value = await getStoreList();
  cities.value = await getCityIndexes();
})

</script>

<style lang="scss">
.page-store-list {
}

.search-type {
  position: relative;
  padding: 0 8px 0 16px;
  font-size: 28rpx;

  &::after {
    position: absolute;
    content: '';
    width: 1px;
    right: 0;
    top: 5px;
    bottom: 5px;
    background: rgba(0, 0, 0, 0.25);
  }

  :deep(.icon-arrow) {
    display: inline-block;
    font-size: 16px;
    color: #ff7427;
  }
}

.city-picker {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #fff;
}

$quick-box-height: 220rpx;
.city-quick-box {
  height: $quick-box-height;
  padding: 20rpx;
  background-color: var(--wot-color-gray-2, #f2f3f5);
}

.index-wrapper {
  height: calc(100vh - var(--window-top) - $quick-box-height);
  height: calc(100vh - var(--window-top) - constant(safe-area-inset-bottom) - $quick-box-height);
  height: calc(100vh - var(--window-top) - env(safe-area-inset-bottom) - $quick-box-height);
}

.hot-city {
  padding-left: 24rpx;

  &-title {
    color: #9b9b9b;
    font-size: 14px;
    line-height: 80rpx;
  }

  &-list {
    display: flex;
    flex-wrap: wrap;
  }

  &-item {
    border: 1px solid #ebebf0;
    color: #4a4a4a;
    background-color: #fff;
    font-size: 14px;
    height: 62rpx;
    line-height: 62rpx;
    margin-bottom: 12rpx;
    margin-right: 32rpx;
    overflow: hidden;
    padding: 0 10rpx;
    width: 200rpx;
    text-align: center;
  }
}


.store-list {
  padding: 0 24rpx;

  .store-item {
    position: relative;
    margin-top: 30rpx;
    padding: 28rpx;
    background: rgba(161, 234, 43, 0.2);
    border: 1px solid #a1ea2b;
    border-radius: 20rpx;
    color: var(--app-desc-color);
    font-size: 24rpx;
    overflow: hidden;
  }

  .store-hd {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .store-title {
    font-size: 30rpx;
    font-weight: 500;
  }

  .store-distance {

  }

  .store-desc {
    margin-top: 20rpx;

    .text {
      margin-left: 8rpx;
    }
  }
}
</style>
