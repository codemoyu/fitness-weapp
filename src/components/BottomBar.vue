<template>
  <view class="bottom-bar" :class="{'is-fixed': fixed, 'is-flex': flex}">
    <slot></slot>
  </view>
</template>

<script lang="ts" setup>
defineOptions({
  name: 'BottomBar',
  options: {
    addGlobalClass: true,
    virtualHost: true,
    styleIsolation: 'shared'
  }
})
defineProps({
  fixed: {
    type: Boolean,
    default: true
  },
  flex: {
    type: Boolean,
    default: false
  }
})
</script>

<style lang="scss">
.bottom-bar {
  width: 100%;
  min-height: 120rpx;
  box-shadow: 0 0 6rpx rgba(27, 27, 27, .1);
  padding: 20rpx 30rpx;
  z-index: 98;
  background-color: #fff;


  &.is-fixed {
    position: fixed;
    left: 0;
    bottom: 0;
    padding-bottom: constant(safe-area-inset-bottom);
    padding-bottom: env(safe-area-inset-bottom);
  }

  &.is-flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
