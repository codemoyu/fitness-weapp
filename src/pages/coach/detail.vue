<route lang="json5">
{
style: {
navigationStyle: 'custom',
navigationBarTitleText: '教练',
},
}
</route>
<template>
  <view class="page-coach-detail">
    <wd-navbar fixed left-arrow :bordered="false" @click-left="handleClickLeft" safeAreaInsetTop
               custom-style="background-color: transparent !important;"></wd-navbar>

    <view class="coach-gallery">
      <image class="main-image"
             :src="coach.promotional_photo || 'https://imagecdn.rocketbird.cn//minprogram/uni-member/coach-detail-bg.jpeg'" />
      <view class="gallery-mask"></view>
    </view>
    <view class="coach-base-info">
      <view class="coach-avatar">
        <image :src="coach.avatar" />
      </view>
      <view class="coach-info-right">
        <view class="specialty ellipsis">擅长：{{ coach.specialty }}</view>
        <view class="name">{{ coach.coach_name }}</view>
        <view class="position">{{ coach.position }}</view>
      </view>
    </view>
    <view class="coach-detail">
      <rich-text :nodes="coach.brief || coach.aptitude"></rich-text>
    </view>
    <Box title="在售私教课">
      <view class="course-list">
        <CardItem v-for="item in coach.class_list" :item="item"></CardItem>
      </view>
    </Box>

    <BottomBar>
      <wd-button type="primary" block :round="false">立即预约</wd-button>
    </BottomBar>
  </view>
</template>

<script lang="ts" setup>
import Box from '@/components/Box.vue';
import CardItem from '@/pages/card/components/CardItem.vue';
import BottomBar from '@/components/BottomBar.vue';
import {getCoachDetail} from '@/service/mock/coach';

defineOptions({
  name: 'CoachDetail',
})
const coach = ref({});

function handleClickLeft(e) {
  uni.navigateBack()
}

onShow(async () => {
  coach.value = await getCoachDetail();
})

</script>

<style lang="scss">
.page-coach-detail {
  padding-bottom: 128rpx;
}

.coach-gallery {
  position: relative;
  width: 750rpx;
  height: 730rpx;

  .main-image {

  }

  .gallery-mask {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(0deg, #ffffff 0%, transparent 100%);;
  }
}


.coach-base-info {
  position: relative;
  margin-top: -44rpx;
  z-index: 99;
  display: flex;

  .coach-avatar {
    margin-left: 30rpx;
    margin-right: 23rpx;
    width: 140rpx;
    height: 140rpx;
    background: #fff;
    border-radius: 50%;
    overflow: hidden;
  }

  .coach-info-right {
    flex: 1;
  }

  .specialty {
    background: var(--app-main-color);
    border-radius: 8rpx;
    max-width: 500rpx;
    padding: 0 24rpx;
    height: 44rpx;
    line-height: 44rpx;
  }

  .name {
    margin: 8rpx 0 12rpx;
    font-size: 36rpx;
    font-weight: 500;
  }

  .position {
    color: var(--app-desc-color);
  }
}

.coach-detail {
  line-height: 36rpx;
  padding: 30rpx;
}
</style>
