<route lang="json5">
{
style: {
navigationBarTitleText: '场内活动',
},
}
</route>
<template>
  <view class="page-activity-list">
    <view class="activity-list">
      <view class="activity-item" v-for="item in list" :key="item.id" @click="handleViewDetail(item)">
        <image class="activity-image" :src="item.thumb" />
        <view class="activity-info">
          <view class="activity-title ellipsis">{{ item.name }}</view>
          <view class="activity-date">{{ item.beg_date }}~{{ item.end_date }}</view>
        </view>
      </view>
    </view>
  </view>
</template>

<script lang="ts" setup>
import {getActivityList} from '@/service/mock/activity';

defineOptions({
  name: 'ActivityList',
})
const list = ref([]);

function handleViewDetail(item) {
  uni.navigateTo({
    url: '/pages/activity/detail'
  })
}

onShow(async () => {
  list.value = await getActivityList();
})

</script>

<style lang="scss">
.page-activity-list {

}

.activity-list {
  padding: 30rpx;
}

.activity-item {
  position: relative;
  overflow: hidden;
  border-radius: 12rpx;
  width: 100%;
  height: 400rpx;

  .activity-image {
    width: 100%;
    height: 100%;
  }

  .activity-info {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    padding: 0 28rpx 32rpx;
    background-color: rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    color: #fff;
    text-shadow: 0 3px 5px rgba(0, 0, 0, 0.5);
  }

  .activity-title {
    font-size: 40rpx;
    font-weight: 500;
    margin-bottom: 8rpx;
  }
}
</style>
