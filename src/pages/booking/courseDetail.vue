<route lang="json5">
{
style: {
navigationBarTitleText: '团课详情',
},
}
</route>
<template>
  <view class="page-booking-detail">
    <view class="course-image">
      <image :src="course.thumb" />
    </view>
    <view class="course-title">{{ course.class_name }}</view>
    <view class="course-desc">{{ course.begin_mark }}</view>

    <CourseCard :data="course" />

    <Box title="课程描述">
      <view class="rich-text">
        <rich-text :nodes="course.description"></rich-text>
      </view>
    </Box>
    <Box title="预约须知">
      <view class="notice-list">
        <view class="list-item">请您根据自身情况，选择合适强度的课程</view>
        <view class="list-item">上课前1分钟停止预约，240分钟停止取消</view>
      </view>
    </Box>
    <BottomBar flex>
      <wd-button type="warning" block :round="false" open-type="share">约朋友</wd-button>
      <wd-button type="primary" block :round="false" @click="handleBooking">立即预约</wd-button>
    </BottomBar>
  </view>
</template>

<script lang="ts" setup>
import Box from '@/components/Box.vue';
import BottomBar from '@/components/BottomBar.vue';
import CourseCard from '@/pages/booking/components/CourseCard.vue';
import {getBookingCourseDetail} from '@/service/mock/booking';

defineOptions({
  name: 'BookingCourseDetail',
})
const course = ref({});

function handleShare() {
  uni.share({});
}

function handleBooking() {
  uni.navigateTo({
    url: '/pages/booking/confirm',
  })
}

onShow(async () => {
  course.value = await getBookingCourseDetail();
})
</script>

<style lang="scss">
.page-booking-detail {
  height: 100%;
  overflow-y: auto;
  padding: 20rpx 30rpx 178rpx;


  //覆盖组件样式.
  .box {
    padding: 24rpx 0;
  }
}

.course-image {
  margin: 0 auto;
  width: 690rpx;
  height: 400rpx;
  border-radius: 8rpx;
  overflow: hidden;
}

.course-title {
  margin-top: 30rpx;
  font-size: 36rpx;
  font-weight: 500;
}

.course-desc {
  margin-top: 28rpx;
  color: var(--app-desc-color);
}

.btn-share {
  width: 100% !important;
  background: var(--app-highlight-color) !important;
  color: #fff !important;
  font-size: 30rpx !important;
  font-weight: 500 !important;
  border-radius: 0 !important;
}


.notice-list {
  padding: 30rpx;
  line-height: 1.9;
}
</style>
