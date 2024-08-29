<route lang="json5">
{
style: {
navigationBarTitleText: '教练',
},
}
</route>
<template>
  <view class="page-coach-list">
    <z-paging ref="paging" v-model="coachList" @query="queryList" safe-area-inset-bottom :fixed="false">
      <view class="coach-item" v-for="(item,index) in coachList" :key="item.coach_id" @click="handleViewCoach(item)">
        <view class="coach-avatar">
          <image :src="item.avatar" />
        </view>
        <view class="coach-content">
          <view class="coach-name">{{ item.name }}
            <text class="coach-position ellipsis">{{ item.position }}</text>
          </view>
          <view class="coach-desc ellipsis">{{ item.specialty }}</view>
          <view class="coach-courses" v-if="item.permitted_class && item.permitted_class.length">
            <view class="course-name" v-for="course in item.permitted_class" :key="course">{{ course }}</view>
          </view>
        </view>
        <view class="coach-price" v-if="item.min_price">￥{{ item.min_price }}/节 起</view>
      </view>
    </z-paging>
  </view>
</template>

<script lang="ts" setup>
import {queryCoachList} from '@/service/mock/coach';

defineOptions({
  name: 'CoachList',
})

const paging = ref(null)
const coachList = ref([])

async function queryList(pageNo, pageSize) {
  const list = await queryCoachList(pageNo, pageSize);
  paging.value.complete(list);
}

function handleViewCoach(coach) {
  uni.navigateTo({
    url: '/pages/coach/detail'
  })
}
</script>

<style lang="scss">
.page-coach-list {
  padding: 0 0 60rpx;
  height: 100vh;
  overflow: hidden;
}

.coach-item {
  display: flex;
  border-bottom: 1rpx solid #eee;
  margin: 30rpx 40rpx;
  padding-bottom: 30rpx;
}

.coach-avatar {
  height: 110rpx;
  width: 110rpx;
  border-radius: 50%;
  overflow: hidden;
}

.coach-content {
  margin-left: 24rpx;
  max-width: 360rpx;
  overflow: hidden;

  .coach-name {
    display: flex;
    align-items: center;
    font-size: 28rpx;
  }

  .coach-position {
    margin-left: 14rpx;
    border: 1px solid var(--app-main-color);
    border-radius: 12rpx;
    color: var(--app-desc-color);
    font-size: 20rpx;
    padding: 0 8rpx;
    max-width: 148rpx;
  }

  .coach-desc {
    margin: 8rpx 0;
    color: var(--app-desc-color);
  }

  .coach-courses {
    display: flex;
    flex-wrap: wrap;
  }

  .course-name {
    margin: 4rpx 8rpx 0 0;
    border-radius: 8rpx;
    font-size: 22rpx;
    background-color: var(--app-main-bg-color);
    padding: 4rpx 8rpx;
    color: #333;
  }
}

.coach-price {
  flex: 1;
  text-align: right;
  color: var(--app-highlight-color);
  font-size: 28rpx;
  font-weight: 500;
}
</style>
