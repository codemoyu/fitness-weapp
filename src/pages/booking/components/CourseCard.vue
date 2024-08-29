<template>
  <view class="course-card">
    <view class="coach-avatar">
      <image :src="data.coach?.avatar" />
    </view>
    <view class="coach-info">
      <view class="coach-name">{{ data.coach?.name }}</view>
      <view class="coach-position ellipsis">{{ data.coach?.position }}</view>
    </view>
    <view class="course-info">
      <view class="info-row">
        <view class="level">
          <text class="level-label">强度</text>
          <wd-icon name="star-filled" size="12px" color="#FF7427"></wd-icon>
          <wd-icon name="star-filled" size="12px" color="#FF7427"></wd-icon>
          <wd-icon name="star-filled" size="12px" color="#FF7427"></wd-icon>
          <wd-icon name="star-filled" size="12px" color="#FF7427"></wd-icon>
        </view>
        <view class="desc">| 时长
          <text class="num">60</text>
          分钟
        </view>
      </view>
      <view class="info-row">
        <wd-icon name="time-filled" size="12px" color="#A1EA2B"></wd-icon>
        <view class="date mr-left">2024-08-28</view>
        <view class="time">18:30-19:30</view>
      </view>
      <view class="info-row">
        <view class="icon-home">
          <wd-icon name="home" size="8px" color="#fff"></wd-icon>
        </view>
        <view class="classroom ellipsis mr-left">{{ data.classroom_name }}</view>
        <view class="desc">| 空余
          <text class="num">{{ data.surplus }}</text>
          位
        </view>
      </view>
    </view>
  </view>
</template>

<script lang="ts" setup>
defineOptions({
  name: 'CourseCard',
  options: {
    addGlobalClass: true,
    virtualHost: true,
    styleIsolation: 'shared'
  }
})

const props = defineProps({
  data: {
    type: Object,
  }
})
</script>

<style lang="scss">

.course-card {
  margin-top: 24rpx;
  border: 1px solid var(--app-main-color);
  padding: 30rpx;
  display: flex;
  border-radius: 8rpx;

  .coach-avatar {
    width: 120rpx;
    height: 120rpx;
    overflow: hidden;
  }

  .coach-info {
    width: 100rpx;
    display: flex;
    flex-direction: column;
    justify-content: center;
    overflow: hidden;

    .coach-name {
      font-size: 30rpx;
      font-weight: 500;
    }

    .coach-position {
      color: var(--app-desc-color);
      font-size: 22rpx;
    }
  }

  .course-info {
    flex: 1;
  }

  .info-row {
    margin-bottom: 8rpx;
    display: flex;
    align-items: center;
  }

  .icon-home {
    background-color: var(--app-main-color);
    width: 20rpx;
    height: 20rpx;
    line-height: 18rpx;
    text-align: center;
    border-radius: 50%;
  }

  .desc {
    margin-left: 12rpx;
    color: var(--app-desc-color);
    white-space: nowrap;
  }

  .time {
    margin-left: 24rpx;
    font-weight: 500;
    color: var(--app-main-color);
  }

  .num {
    color: var(--app-highlight-color);
  }

  .level-label {
    margin-right: 4rpx;
  }

  .mr-left {
    margin-left: 4rpx;
  }
}
</style>
