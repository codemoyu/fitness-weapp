<route lang="json5">
{
style: {
navigationBarTitleText: '团课预约',
},
}
</route>
<template>
  <view
    class="page-booking-confirm"
  >
    <view class="course-card">
      <view class="course-image">
        <image :src="bookingDetail.thumb" />
      </view>
      <view class="course-info">
        <view class="info-row">
          <view class="course-title">{{ bookingDetail.class_name }}</view>
        </view>
        <view class="info-row">
          <view class="coach-name">{{ bookingDetail.coach_name }}</view>
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
          <view class="classroom ellipsis mr-left">{{ bookingDetail.classroom_name }}</view>
          <view class="desc">| 空余
            <text class="num">{{ bookingDetail.surplus }}</text>
            位
          </view>
        </view>
      </view>
    </view>

    <view class="booking-info">
      <wd-cell-group>
        <wd-cell title="预约用卡" center>
          <text class="link">无/不使用会员卡</text>
        </wd-cell>
        <wd-cell title="单价">
          <text class="desc">支付49.00元/人</text>
        </wd-cell>
        <wd-cell title="预约人数">
          <wd-input-number v-model="buyNum" @change="handleChange" />
        </wd-cell>
        <wd-cell>
          <template #title>
            <view style="display: flex; align-items: center;">
              <view class="coupon-tag">券</view>
              折扣券抵扣
            </view>
          </template>
          <text class="desc">暂无可用抵用券</text>
        </wd-cell>
      </wd-cell-group>
    </view>

    <BottomBar flex>
      <view class="price">￥{{ bookingDetail.class_price }}</view>
      <wd-button type="primary" custom-class="btn-buy" :round="false">立即预约</wd-button>
    </BottomBar>
  </view>
</template>

<script lang="ts" setup>
import BottomBar from '@/components/BottomBar.vue';
import {getBookingDetail} from '@/service/mock/booking';

defineOptions({
  name: 'BookingConfirm',
})

const bookingDetail = ref({});
const buyNum = ref<number>(1)

function handleChange({value}) {
  buyNum.value = value;
}

onShow(async () => {
  bookingDetail.value = await getBookingDetail();
})
</script>

<style lang="scss">
page {
  background-color: var(--app-page-bg-color);
}

.page-booking-confirm {

}

.course-card {
  padding: 30rpx;
  display: flex;
  border-radius: 8rpx;
  background-color: #fff;

  .course-image {
    width: 220rpx;
    height: 120rpx;
    overflow: hidden;
    border-radius: 8rpx;
    margin-right: 28rpx;
  }

  .course-info {
    flex: 1;
  }

  .course-title {
    font-size: 30rpx;
    font-weight: bold;
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


.booking-info {
  padding: 24rpx;


  .coupon-tag {
    background-color: var(--app-main-color);
    border-radius: 6rpx;
    color: #000;
    font-size: 21rpx;
    font-weight: 500;
    height: 32rpx;
    line-height: 32rpx;
    margin-right: 12rpx;
    text-align: center;
    width: 32rpx;
  }

  .desc, .wd-picker__value {
    font-weight: 500;
  }

  .link {
    color: var(--app-highlight-color);
  }

  .explain {
    color: var(--app-highlight-color);
    font-size: 22rpx;
  }

  .wd-picker__cell {
    padding: 0 !important;
  }

  .wd-input-number {
    background-color: var(--app-page-bg-color);
  }

  .label {
    display: flex;
    align-items: center;

    .label-icon {
      width: 48rpx;
      height: 48rpx;
    }
  }
}

.price {
  color: var(--app-highlight-color);
  font-size: 36rpx;
  font-weight: 500;
}

.btn-buy {
  width: 286rpx !important;
}
</style>
