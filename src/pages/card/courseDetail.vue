<route lang="json5">
{
style: {
navigationBarTitleText: '课程详情',
},
}
</route>
<template>
  <view class="page-course-detail">
    <view class="course-image">
      <image :src="detail.thumb" />
    </view>
    <view class="course-title">{{ detail.name }}</view>
    <view class="course-desc">私教 | 多节 | 单节有效期15天</view>
    <view class="course-detail-box">
      <Box title="购买详情">
        <wd-cell-group>
          <wd-cell title="单节售价" value="98元" />
          <wd-cell title="起售节数" value="1节" />
          <wd-cell title="单节时长" value="60分钟" />
          <wd-cell title="单节有效期" value="15天" />
          <wd-cell title="课程方式" value="1对1" />
        </wd-cell-group>
      </Box>
    </view>
    <Box title="课程描述">
      <view class="rich-text">
        <rich-text :nodes="detail.description"></rich-text>
      </view>
    </Box>
    <BottomBar flex>
      <view class="price">￥98</view>
      <wd-button type="primary" :round="false" @click="handleBuy">立即购买</wd-button>
    </BottomBar>
  </view>
</template>

<script lang="ts" setup>
import Box from '@/components/Box.vue';
import BottomBar from '@/components/BottomBar.vue';
import {getCourseDetail} from '@/service/mock/card';

defineOptions({
  name: 'CourseDetail',
})

const detail = ref({})


function handleBuy() {

}

onShow(async () => {
  detail.value = await getCourseDetail();
})

</script>

<style lang="scss">
.page-course-detail {
  height: 100%;
  overflow-y: auto;
  padding: 20rpx 30rpx 178rpx;
  font-size: 24rpx;
  font-weight: 400;

  //覆盖组件样式.
  .box {
    padding: 24rpx 0;
  }
}

.course-image {
  margin: 0 auto;
  width: 690rpx;
  height: 400rpx;
  border-radius: 20rpx;
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

.course-detail-box {
  margin-top: 38rpx;
  border-top: 1rpx solid #E8E8E8;
  border-bottom: 1rpx solid #E8E8E8;

  --wot-cell-line-height: 24rpx;
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
