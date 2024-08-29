<!-- 使用 type="home" 属性设置首页，其他页面不需要设置，默认为page；推荐使用json5，更强大，且允许注释 -->
<route lang="json5" type="home">
{
style: {
navigationStyle: 'custom',
navigationBarTitleText: '首页',
},
}
</route>
<template>
  <view class="page-index">
    <wd-navbar fixed safeAreaInsetTop rightDisabled custom-style="background-color: transparent !important;"
               :bordered="false">
      <template #left>
        <view class="navbar">
          <view class="navbar-item" @click="handleViewQRCode">
            <wd-icon name="qrcode" size="18px"></wd-icon>
            <text>入场凭证</text>
          </view>
          <view class="navbar-item" @click="handleClickStore">
            <wd-icon name="location" size="18px"></wd-icon>
            <text>{{ storeInfo.name }}</text>
          </view>
        </view>
      </template>
    </wd-navbar>
    <view class="banner-container">
      <Banner :list="swiperList" />
    </view>
    <view class="main-wrap">
      <StoreBox :store="storeInfo" more @click="handleViewStore" />

      <Box title="卡课推荐" more="查看更多" to="/pages/card/list">
        <view class="card-list">
          <view class="card-item" v-for="item in cardList" :key="item.card_id" @click="handleViewCard(item)">
            <view class="card-image">
              <image :src="item.thumb" />
            </view>
            <view class="card-content">
              <view class="card-title">{{ item.name }}</view>
              <view class="card-desc">
                <view class="times" v-if="item.card_type_id === 4">
                  单节时长
                  <text class="num">{{ item.duration }}</text>
                  分钟
                </view>
                <view v-else>
                  <text class="num">{{ item.number }}</text>
                  次
                </view>
                <view class="expiration">| 有效期{{ item.end_time }}天</view>
              </view>
              <view class="card-price">
                <text v-if="item.single_price > 0">￥{{ item.single_price }}/节</text>
                <text v-else-if="!item.current_price">价格面议</text>
                <text v-else>￥{{ item.current_price }}</text>
              </view>
            </view>
          </view>
        </view>
      </Box>
      <Box title="明星教练" more="查看更多" to="/pages/coach/list">
        <view class="coach-list">
          <view class="coach-item" v-for="item in coachList" :key="item.id" @click="handleViewCoach(item)">
            <view class="coach-avatar">
              <image :src="item.avatar" mode="aspectFill" :alt="item.name" />
            </view>
            <view class="coach-name">{{ item.name }}</view>
            <view class="coach-position">{{ item.position }}</view>
          </view>
        </view>
      </Box>
      <Box more="查看更多" to="/pages/activity/list">
        <template #title>
          <view class="box-title">热门活动
            <image class="icon-hot" src="https://imagecdn.rocketbird.cn/minprogram/uni-member/hot.png" />
          </view>
        </template>
        <view class="activity-list">
          <view class="activity-item" v-for="item in activityList" :key="item.id" @click="handleViewActivity(item)">
            <view class="cover-image">
              <image :src="item.thumb" mode="scaleToFill" />
            </view>
            <view class="activity-info">
              <view class="activity-title">{{ item.name }}</view>
              <view class="activity-sign">
                已报:
                <text>{{ item.sign_count }}</text>
              </view>
            </view>
            <view class="activity-date">活动时间
              <text>{{ item.beg_date }}~{{ item.end_date }}</text>
            </view>
            <view class="activity-date">报名截止时间
              <text>{{ item.cutoff_date }}</text>
            </view>
          </view>
        </view>
      </Box>
    </view>
  </view>
</template>

<script lang="ts" setup>
import Box from '@/components/Box.vue';
import Banner from '@/pages/index/components/Banner.vue';
import StoreBox from '@/pages/index/components/StoreBox.vue';
import {getStoreInfo} from '@/service/mock/store';
import {getBanners} from '@/service/mock/global';
import {getHomeCardList} from '@/service/mock/card';
import {getHomeCoachList} from '@/service/mock/coach';
import {getActivityList} from '@/service/mock/activity';

defineOptions({
  name: 'Home',
})
const storeInfo = ref({});
const swiperList = ref([])
const cardList = ref([]);
const coachList = ref([]);
const activityList = ref([]);

function handleViewQRCode() {
  uni.navigateTo({
    url: '/pages/index/qrcode',
  })
}

function handleClickStore() {
  uni.navigateTo({
    url: '/pages/store/list',
  })
}

function handleViewStore(e) {
  uni.navigateTo({
    url: '/pages/store/detail',
  })
}

function handleViewCard(card) {
  uni.navigateTo({
    url: '/pages/card/detail',
  })
}

function handleViewCoach(coach) {
  uni.navigateTo({
    url: '/pages/coach/detail',
  })
}

function handleViewActivity(activity) {
  uni.navigateTo({
    url: '/pages/activity/detail',
  })
}

onShow(async () => {
  storeInfo.value = await getStoreInfo();
  swiperList.value = await getBanners();
  cardList.value = await getHomeCardList();
  coachList.value = await getHomeCoachList();
  activityList.value = await getActivityList();
})
</script>

<style lang="scss">
page {
  background-color: var(--app-page-bg-color);
}

.page-index {
  .box-hd__title {
    font-size: 36rpx;
  }
}

.navbar {
  display: flex;
  justify-content: space-between;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 31rpx;
  padding: 0 10rpx;
  line-height: 1;
  font-size: 24rpx;

  &-item {
    display: flex;
    align-items: center;
    padding: 8rpx 10rpx;
  }
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


.card-item {
  padding: 22rpx 0;
  display: flex;
  line-height: 1.1;
  justify-content: space-between;

  .card-image {
    width: 260rpx;
    height: 134rpx;
    margin-right: 24rpx;
  }

  .card-content {
    flex: 1;
  }

  .card-title {
    font-size: 28rpx;
    font-weight: 500;
    margin-bottom: 13rpx;
  }

  .card-desc {
    padding: 16rpx 0 24rpx;
    color: var(--app-desc-color);
    display: flex;
  }

  .num {
    color: #FF7427;
  }

  .expiration {
    margin-left: 8rpx;
  }

  .card-price {
    color: #FF7427;
    font-size: 30rpx;
    font-weight: 500;
  }
}

.coach-list {
  display: flex;
  justify-content: space-between;
  align-items: center;

  .coach-item {
    width: 207rpx;
    margin-bottom: 30rpx;
    margin-right: 20rpx;
    font-size: 24rpx;
    text-align: center;
  }

  .coach-avatar {
    border: 1rpx solid #f6f6f8;
    border-radius: 20rpx;
    height: 205rpx;
    margin-bottom: 20rpx;
    width: 100%;
  }

  .coach-name {
    text-align: center;
    font-weight: 500;
    margin-bottom: 12rpx;
  }

  .coach-position {
    color: var(--app-desc-color);
    font-size: 22rpx;
    margin-bottom: 10rpx;
  }
}

.box-title {
  display: flex;
  align-items: center;
}

.icon-hot {
  margin-left: 10rpx;
  width: 62rpx;
  height: 22rpx;
}

.activity-list {

  .activity-item {
    font-size: 24rpx;
  }

  .cover-image {
    width: 670rpx;
    height: 387rpx;
    border-radius: 20rpx;
    overflow: hidden;
  }

  .activity-info {
    margin-top: 20rpx;
    display: flex;
    justify-content: space-between;
  }

  .activity-title {
    font-size: 30rpx;
    font-weight: 500;
    width: 510rpx;
  }

  .activity-sign {
    background: rgba(161, 234, 43, 0.2);
    border-radius: 21rpx;
    color: #535353;
    font-size: 22rpx;
    height: 41rpx;
    line-height: 41rpx;
    padding: 0 18rpx;
  }

  .activity-date {
    color: var(--app-desc-color);
    margin-top: 15rpx;
  }

  .activity-deadline {

  }
}
</style>
