<template>
  <view class="date-bar">
    <view class="dates">
      <view class="date-item" v-for="(item,index) in dates" :key="item.value" :class="{'selected': (current === index)}"
            @click="changeDate(item,index)">
        <view class="label">{{ item.label }}</view>
        <view class="num">{{ item.dayOfMonth }}</view>
      </view>
    </view>
  </view>
</template>

<script lang="ts" setup>
import dayjs from 'dayjs';

defineOptions({
  name: 'DateBar',
  options: {
    addGlobalClass: true,
    virtualHost: true,
    styleIsolation: 'shared'
  }
})

const props = defineProps({
  price: {
    type: Number,
  },
  buttonText: {
    type: String,
    default: ''
  }
})

function getNextSevenDays() {
  const labels = ['今天', '明天', '后天'];
  const days = [];

  for (let i = 0; i < 7; i++) {
    const currentDay = dayjs().add(i, 'day');
    const dayOfWeek = currentDay.format('ddd'); // 获取周几
    const label = labels[i] || dayOfWeek; // 如果没有固定标签，则使用周几

    days.push({
      label: label,
      dayOfMonth: currentDay.date(),
      value: currentDay.format('YYYY-MM-DD')
    });
  }

  return days;
}

const emit = defineEmits(['change'])
const dates = computed(() => {
  return getNextSevenDays();
})
const current = ref<number>(0)

function changeDate(item, index) {
  current.value = index;
  emit('change', item, index)
}
</script>

<style lang="scss">
.date-bar {
  padding: 24rpx 0 32rpx;
  background-color: #fff;

  .dates {
    display: flex;
    justify-content: space-between;
  }

  .date-item {
    width: 14.28%;
    text-align: center;

    &.selected {
      .num {
        background-color: var(--app-main-color);
        border-radius: 50%;
      }
    }
  }

  .num {
    margin: 8px auto 0;
    width: 64rpx;
    height: 64rpx;
    line-height: 64rpx;
    font-size: 28rpx;
    font-weight: 500;
  }
}
</style>
