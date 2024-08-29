<route lang="json5">
{
style: {
navigationBarTitleText: '预约',
},
}
</route>
<template>
  <view class="page-booking-index">
    <wd-tabs v-model="current">
      <wd-tab :title="tab.name" :name="tab.type" v-for="tab in tabs" :key="tab.type" :disabled="tab.disabled">
        <view v-if="tab.type === '1'" class="tab-content">
          <DateBar @change="handleChangeDate" />
          <view class="course-list">
            <view class="course-item" v-for="item in list" :key="item.course_schedule_id"
                  @click="handleViewCourse(item)">
              <view class="course-coach">
                <image :src="item.avatar" />
              </view>
              <view class="course-content">
                <view class="course-title ellipsis">{{ item.class_name }}</view>
                <view class="course-desc">
                  <view class="time-tag">{{ item.begin_time }}-{{ item.end_time }}</view>
                  <view class="coach-name">{{ item.coach_name }}</view>
                </view>
                <view class="course-classroom ellipsis">
                  <view class="icon-classroom">
                    <wd-icon name="home" size="10px" color="#fff"></wd-icon>
                  </view>
                  <text>{{ item.classroom_name }}</text>
                </view>
              </view>
              <view class="course-action" @click.stop.prevent="handleBooking(item)">
                <view class="btn-booking" :class="{disabled: item.disabled}">
                  <view class="inner-text">{{ item.disabled ? '已结束' : '预约' }}</view>
                </view>
              </view>
            </view>
          </view>
        </view>
        <view v-else-if="tab.type === '2'" class="tab-content">
          <DateBar @change="handleChangeDate" />
          <view class="course-list">
            <view class="course-item" v-for="item in coachList" :key="item.coach_id">
              <view class="course-coach">
                <image :src="item.avatar" />
              </view>
              <view class="course-content">
                <view class="course-title ellipsis">{{ item.coach_name }}</view>
                <view class="course-names" v-if="item.permitted_class && item.permitted_class.length">
                  <view class="course-name" v-for="course in item.permitted_class" :key="course">{{ course }}</view>
                </view>
              </view>
              <view class="course-seats">余5席</view>
              <view class="course-action">
                <view class="btn-booking" :class="{disabled: item.disabled}">
                  <view class="inner-text">{{ item.disabled ? '已结束' : '预约' }}</view>
                </view>
              </view>
            </view>
          </view>
        </view>
      </wd-tab>
    </wd-tabs>
  </view>
</template>

<script lang="ts" setup>
import DateBar from '@/pages/booking/components/DateBar.vue';
import {getBookingCoachList, getBookingCourseList} from '@/service/mock/booking';

defineOptions({
  name: 'BookingIndex',
})

const current = ref<string>('1');
const tabs = ref([{
  'type': '1',
  'name': '团课',
}, {
  'type': '2',
  'name': '私教课',
}, {
  'type': '4',
  'name': '训练营',
  disabled: true
}, {
  'type': '3',
  'name': '场地',
  disabled: true
}]);

const list = ref([]);
const coachList = ref([]);

function handleChangeDate(value) {

}

function handleViewCourse(value) {
  uni.navigateTo({
    url: '/pages/booking/courseDetail'
  })
}

function handleBooking(item) {
  if (item.disabled) {
    return;
  }
  uni.navigateTo({
    url: '/pages/booking/confirm'
  })
}

onShow(async () => {
  list.value = await getBookingCourseList();
  coachList.value = await getBookingCoachList();
})

</script>

<style lang="scss">
page {
  background-color: var(--app-page-bg-color);
}

.tab-content {
}

.course-list {
  height: calc(100vh - 170rpx - 90rpx);
  overflow-y: scroll;
  padding: 30rpx;
}

.course-item {
  display: flex;
  align-items: center;
  border: 1px solid var(--app-main-color);
  background-color: #fff;
  padding: 30rpx;
  margin-bottom: 30rpx;
  border-radius: 16rpx;

  .course-coach {
    width: 120rpx;
    height: 120rpx;
    border-radius: 50%;
    overflow: hidden;
    margin-right: 26rpx;
  }

  .course-content {
    flex: 1;
    overflow: hidden;
  }

  .course-title {
    font-size: 32rpx;
    font-weight: 500;
  }

  .course-desc {
    margin: 8rpx 0;
    display: flex;
    align-items: center;
  }

  .time-tag {
    height: 32rpx;
    background-color: var(--app-main-color);
    padding: 0 4rpx;
    border-radius: 6rpx;
    font-size: 20rpx;
  }

  .coach-name {
    margin-left: 8rpx;
  }

  .course-classroom {
    display: flex;
    align-items: center;
  }

  .icon-classroom {
    margin-right: 8rpx;
    color: #fff;
    background-color: var(--app-main-color);
    border-radius: 50%;
    width: 24rpx;
    height: 24rpx;
    line-height: 22rpx;
    text-align: center;
  }

  .course-names {
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

  .course-seats {
    margin-right: 8rpx;
  }

  .course-action {
    width: 102rpx;
    display: flex;
    justify-content: flex-end;
  }

  .btn-booking {
    position: relative;

    .inner-text {
      position: relative;
      width: 94rpx;
      height: 94rpx;
      line-height: 94rpx;
      background: var(--app-main-color);
      color: #333;
      font-weight: 500;
      border-radius: 50%;
      text-align: center;
      z-index: 3;
    }

    &::before {
      position: absolute;
      top: -4px;
      left: -4px;
      width: 102rpx;
      height: 102rpx;
      z-index: 1;
      border-radius: 50%;
      content: " ";
      border: 4rpx solid var(--app-main-color);
      background-color: transparent;
    }

    &::after {
      position: absolute;
      top: -4px;
      right: -4px;
      width: 48rpx;
      height: 48rpx;
      background: #fff;
      content: " ";
      z-index: 2;
    }

    &.disabled {
      &::before {
        border-color: #DEDEDE;
      }

      &::after {
        display: none;
      }

      .inner-text {
        background-color: #DEDEDE;
        color: #999;
      }
    }
  }
}
</style>
