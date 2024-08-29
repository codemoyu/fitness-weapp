<template>
  <view class="box">
    <view class="box-hd">
      <view class="box-hd__title">
        <slot name="title">
          <text>{{ title }}</text>
        </slot>
      </view>
      <slot name="more">
        <view class="box-hd__more" v-if="more" @click="handleClickMore">
          <text>{{ more }}</text>
          <wd-icon name="chevron-right" size="20px"></wd-icon>
        </view>
      </slot>
    </view>
    <view class="box-bd">
      <slot></slot>
    </view>
  </view>
</template>

<script lang="ts" setup>
defineOptions({
  name: 'Box',
})
const props = defineProps({
  title: {
    type: String,
    default: ''
  },
  more: {
    type: String,
    default: ''
  },
  to: {
    type: String,
    default: ''
  }
})
const emit = defineEmits(['more'])

function handleClickMore() {
  emit('more')
  if (props.to) {
    uni.navigateTo({
      url: props.to
    })
  }
}
</script>

<style lang="scss">
.box {
  margin-top: 20rpx;
  width: 100%;
  background-color: #fff;
  padding: 24rpx 20rpx;

  &-hd {
    border-left: 4px solid #A1EA2B;
    display: flex;
    justify-content: space-between;
    align-items: center;

    &__title {
      color: #000;
      font-size: 30rpx;
      font-weight: 500;
      padding-left: 20rpx;
    }

    &__more {
      font-size: 24rpx;
      color: #141414;
      display: flex;
      align-items: center;
    }
  }

  &-bd {
    padding: 18rpx 0;
    font-size: 24rpx;
  }
}
</style>
