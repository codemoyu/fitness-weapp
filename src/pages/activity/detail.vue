<route lang="json5">
{
style: {
navigationBarTitleText: '活动详情',
},
}
</route>
<template>
  <view class="page-activity-detail">
    <view class="activity-image">
      <image :src="activity.thumb" />
    </view>
    <view class="title">{{ activity.name }}</view>
    <view class="promotion">
      <view class="promotion-label">
        <wd-icon name="time" size="12px" color="#FF7427"></wd-icon>
        <text>抢购中</text>
      </view>
      <wd-count-down :time="countDownTime">
        <template #default="{ current }">
          <view class="count-down">
            <text>距抢购结束还有</text>
            <text class="count-num">{{ current.days }}</text>
            <text class="count-unit">天</text>
            <text class="count-num">{{ current.hours }}</text>
            <text class="count-unit">时</text>
            <text class="count-num">{{ current.minutes }}</text>
            <text class="count-unit">分</text>
            <text class="count-num">{{ current.seconds }}</text>
            <text class="count-unit">秒</text>
          </view>
        </template>
      </wd-count-down>
    </view>
    <view class="detail-info">
      <Box title="活动详情">
        <view class="detail-row">
          <text>活动时间</text>
          <text>{{ activity.activity_time }}</text>
        </view>
        <view class="detail-row">
          <text>抢购截止时间</text>
          <text>{{ activity.deadline }}</text>
        </view>
      </Box>
    </view>
    <Box title="会员卡">
      <template v-for="item in activity.sell_cards">
        <CardItem :item="item" />
      </template>
    </Box>
    <Box title="活动介绍">
      <view class="rich-text">
        <rich-text :nodes="activity.description"></rich-text>
      </view>
    </Box>
    <Box title="抢购须知">
      <view class="notice-list">
        <view class="notice-item">
          <view class="notice-icon">
            <image src="https://imagecdn.rocketbird.cn/minprogram/uni-member/activity-notice-user-icon.png" />
          </view>
          <view class="notice-content">
            <view class="notice-title">购买用户</view>
            <view class="notice-desc">无限制</view>
          </view>
        </view>
        <view class="notice-item">
          <view class="notice-icon">
            <image src="https://imagecdn.rocketbird.cn/minprogram/uni-member/activity-notice-car-icon.png" />
          </view>
          <view class="notice-content">
            <view class="notice-title">购买数量</view>
            <view class="notice-desc">每人限购一张</view>
          </view>
        </view>
      </view>
    </Box>


    <BottomBar flex>
      <wd-button type="warning" block :round="false">即刻分享</wd-button>
      <wd-button type="primary" block :round="false">立即报名</wd-button>
    </BottomBar>
  </view>
</template>

<script lang="ts" setup>
import Box from '@/components/Box.vue';
import CardItem from '@/pages/card/components/CardItem.vue';
import {getActivityDetail} from '@/service/mock/activity';
import BottomBar from '@/components/BottomBar.vue';

defineOptions({
  name: 'ActivityDetail',
})
const countDownTime = ref<number>(30 * 60 * 60 * 1000)
const activity = ref({});

onShow(async () => {
  activity.value = await getActivityDetail();
})

</script>

<style lang="scss">
.page-activity-detail {
  padding: 30rpx 30rpx 178rpx;

  .box {
    padding: 0;
  }
}

.activity-image {
  height: 400rpx;
  border-radius: 20rpx;
  overflow: hidden;
}

.title {
  margin: 30rpx 0 40rpx;
  font-size: 40rpx;
  font-weight: 500;
}

.promotion {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(255, 116, 39, .1);
  border-radius: 30rpx;
  height: 60rpx;
  padding: 0 20rpx;
  line-height: 1.5;
  --wd-count-down-line-height: 1.5;

  &-label {
    font-weight: 500;
  }
}

.count-down {
  font-size: 24rpx;

  .count-num {
    display: inline-block;
    width: 22px;
    color: #fff;
    font-size: 12px;
    font-weight: 500;
    text-align: center;
    background-color: #FF7427;
    border-radius: 2px;
  }

  .count-unit {
    display: inline-block;
    margin: 0 4px;
    color: #FF7427;
  }
}


.detail-info {
  background: #f6f6f8;
  border-radius: 10rpx;
  margin-top: 36rpx;
  overflow: hidden;
  padding: 0 20rpx;
  color: var(--app-desc-color);
  margin-bottom: 13rpx;

  .box {
    background-color: transparent;
  }

  .detail-row {
    display: flex;
    justify-content: space-between;
    margin: 24rpx 0;
  }
}


.notice-list {
  border: 1rpx solid #dedee0;
  border-radius: 20rpx;
  padding: 30rpx;
}

.notice-item {
  display: flex;
  margin-bottom: 24rpx;

  .notice-icon {
    width: 64rpx;
    height: 64rpx;
  }

  .notice-content {
    margin-left: 24rpx;
  }

  .notice-title {
    font-weight: 500;
  }
}
</style>
