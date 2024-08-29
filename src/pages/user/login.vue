<route lang="json5">
{
style: {
navigationStyle: 'custom',
navigationBarTitleText: '登录',
},
}
</route>
<template>
  <view class="page-login" :style="pageStyle">
    <wd-navbar fixed left-arrow :bordered="false" @click-left="handleClickLeft" safeAreaInsetTop
               custom-style="background-color: transparent !important;"></wd-navbar>

    <view class="login-form">
      <view class="brand-logo">
        <image :src="pageConfig.bus_logo" />
      </view>
      <wd-button custom-class="btn-login" open-type="getPhoneNumber" @getphonenumber="handleGetPhoneNumber" @error="">
        一键登录
      </wd-button>
      <view class="more-login">
        <view class="">验证码登录</view>
      </view>
    </view>

    <view class="privacy">
      <wd-checkbox v-model="isAgreePrivacy" @change="handleChangeAgree">
        <view class="privacy-text">
          <text>我已阅读并同意</text>
          <text class="link" @click.prevent.stop="handleViewPrivacy">《隐私政策》</text>
          <text class="link" @click.prevent.stop="handleViewAgreement">《最终用户许可协议》</text>
        </view>
      </wd-checkbox>
    </view>
  </view>
</template>

<script lang="ts" setup>
defineOptions({
  name: 'UserLogin',
})

const pageConfig = ref({
  'background_type': '1',
  'background_img': 'https:\/\/imagecdn.rocketbird.cn\/minprogram\/uni-member\/login-bg.jpg',
  'bus_logo': 'https:\/\/imagecdn.rocketbird.cn\/online\/image\/d7ec98432784fc12f5dbf15bb28f6e33.png',
  'bus_protocol_name': '',
  'is_open_bus_protocol': 0
});
const pageStyle = computed(() => {
  return {
    'background-image': `url("${ pageConfig.value.background_img }")`
  }
})

function handleClickLeft(e) {
  uni.navigateBack()
}

function handleGetPhoneNumber(e) {
  if (e.errMsg === 'getPhoneNumber:ok') {
    //TODO 处理手机号授权登录
    const {code, encryptedData, errMsg, iv} = e;
  }
}

const isAgreePrivacy = ref<boolean>(false)

function handleChangeAgree({value}) {
  isAgreePrivacy.value = value
}

function handleViewPrivacy() {

}

function handleViewAgreement() {

}
</script>

<style lang="scss">
.page-login {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-repeat: no-repeat;
  background-size: contain;
}

.login-form {
  margin: 0 auto;
  padding: 0 100rpx;
}

.brand-logo {
  margin: 300rpx auto 100rpx;
  width: 180rpx;
  height: 180rpx;
}

.btn-login {
  width: 100% !important;
  background: var(--app-main-color) !important;
  color: #000 !important;
  font-size: 30rpx !important;
  font-weight: 500 !important;
}

.more-login {
  margin-top: 24rpx;
  text-align: right;
  color: #fff;
}

.privacy {
  position: fixed;
  left: 50rpx;
  bottom: 120rpx;
  width: 650rpx;

  .wd-checkbox {
    display: flex !important;
  }

  &-text {
    margin-top: -4rpx;
    color: #fff;
    white-space: pre-wrap;
    text-align: center;
  }

  .link {
    color: #4d80f0;
  }
}
</style>
