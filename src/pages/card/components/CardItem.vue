<template>
  <view class="card-item" @click="handleClick">
    <view class="card-image">
      <image :src="item.thumb" />
    </view>
    <view class="card-content">
      <view class="card-title ellipsis"> {{ item.name }}</view>
      <view class="card-desc">次卡 | 多店 | 有效期{{ item.end_time }}天</view>
      <view class="card-time" v-if="isCourse">时长：{{ item.duration }}分钟</view>
      <view class="card-price" v-else>
        <text class="price-value" v-if="item.current_price > 0">￥{{ item.current_price }}</text>
        <text class="price-value" v-else>价格面议</text>
        <text class="card-times"> {{ item.number }} {{ item.card_type_id === 3 ? '元' : '次' }}</text>
      </view>
    </view>
    <view class="card-right" v-if="isCourse">
      <view class="card-price">￥{{ item.single_price }}
        <text class="price-unit">/节</text>
      </view>
    </view>
  </view>
</template>

<script lang="ts" setup>
defineOptions({
  name: 'CardItem',
})
const props = defineProps({
  item: {
    type: Object,
  },
  type: {
    type: String,
    default: 'card'
  }
})
const isCourse = computed(() => {
  return props.type === 'course';
})

const emit = defineEmits(['click'])

function handleClick(e) {
  emit('click', e)
}
</script>

<style lang="scss">

.card-item {
  display: flex;
  margin-bottom: 30rpx;
  padding: 30rpx 20rpx;
  border: 1px solid var(--wot-color-theme);
  border-radius: 20rpx;
  font-size: 24rpx;


  .card-image {
    width: 160rpx;
    height: 94rpx;
  }

  .card-content {
    margin-left: 24rpx;
    flex: 1;
    overflow: hidden;
  }

  .card-title {
    font-size: 30rpx;
    font-weight: 500;
    margin-bottom: 13rpx;
  }

  .card-desc {
    color: var(--app-desc-color);
    margin-bottom: 13rpx;
  }

  .card-price {
    color: #ff7427;
    font-size: 30rpx;
    font-weight: 500;

    .price-unit {
      font-size: 24rpx;
      font-weight: 400;
    }
  }

  .card-times {
    margin-left: 12rpx;
    border: 1rpx solid #ff7427;
    border-radius: 14rpx;
    color: #ff7427;
    font-size: 20rpx;
    height: 29rpx;
    line-height: 29rpx;
    padding: 0 14rpx;
    text-align: center;
  }

  .card-right {
    display: flex;
    align-items: center;
  }
}
</style>
