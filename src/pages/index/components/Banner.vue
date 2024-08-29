<template>
  <wd-swiper
    class="banner-swiper"
    :list="list"
    autoplay
    v-model:current="current"
    height="460rpx"
    :indicator="{ type: 'fraction' }"
    indicatorPosition="bottom-right"
    @click="handleClick"
    @change="onChange"
  >
    <template #indicator="{ current, total }">
      <view class="custom-indicator">
        <wd-icon name="image" size="12px"></wd-icon>
        <text class="indicator-text">{{ current + 1 }}/{{ total }}</text>
      </view>
    </template>
  </wd-swiper>
</template>

<script lang="ts" setup>
defineOptions({
  name: 'Banner',
})
const props = defineProps({
  list: {
    type: Array,
    default: () => []
  }
})
const emit = defineEmits(['click', 'change'])
const current = ref<number>(0)

function handleClick(e) {
  emit('click', e, current)
}

function onChange(e) {
  emit('change', e)
}
</script>

<style lang="scss">
.custom-indicator {
  position: absolute;
  bottom: 24rpx;
  right: 24rpx;
  padding: 0 12rpx;
  height: 36rpx;
  line-height: 36rpx;
  border-radius: 18rpx;
  background: rgba(0, 0, 0, 0.6);
  color: #ffffff;
  font-size: 24rpx;

  .indicator-text {
    margin-left: 12rpx;
  }
}
</style>
