<route lang="json5">
{
style: {
navigationBarTitleText: '我的',
},
}
</route>
<template>
  <view class="page-user-my">
    <view class="user-profile" @click="handleEditProfile">
      <view class="user-avatar">
        <image :src="userInfo.avatar" />
      </view>
      <view class="user-info">
        <view class="info-row">
          <view class="nickname">{{ userInfo.nickname }}</view>
          <view class="qrcode">
            <wd-icon name="qrcode" size="26px" color="#999"></wd-icon>
          </view>
        </view>
        <view class="info-row">
          <view class="user-phone">
            <wd-icon name="phone" size="14px" color="#FF7427"></wd-icon>
            <text class="value">{{ userInfo.phone }}</text>
          </view>
          <view class="user-point">
            <view class="icon-point">
              <wd-icon name="heart" size="9px" color="#FF7427"></wd-icon>
            </view>
            <text class="value">{{ userInfo.point }}</text>
          </view>
        </view>
      </view>
      <view class="user-balance" @click.stop>
        <text class="balance-desc">余额
          <text class="num">{{ userInfo.balance }}</text>
        </text>
        <text class="btn-charge">充值</text>
      </view>
    </view>

    <view class="menu-wrapper">
      <view class="menu-box" @click="handleLogin">
        <view class="box-hd">
          <view class="box-icon">
            <wd-icon name="goods" size="16px" color="#FF7427"></wd-icon>
          </view>
          <view class="box-title">我的权益</view>
        </view>
        <view class="box-bd">
          <view class="menu-list">
            <view class="menu-item">
              <view class="menu-icon">
                <wd-icon name="creditcard" size="32px"></wd-icon>
              </view>
              <view class="menu-title">会员卡课</view>
            </view>
            <view class="menu-item">
              <view class="menu-icon">
                <wd-icon name="note" size="28px"></wd-icon>
              </view>
              <view class="menu-title">入场凭证</view>
            </view>
            <view class="menu-item">
              <view class="menu-icon">
                <wd-icon name="calendar" size="32px"></wd-icon>
              </view>
              <view class="menu-title">预约记录</view>
            </view>
            <view class="menu-item">
              <view class="menu-icon">
                <wd-icon name="wallet" size="32px"></wd-icon>
              </view>
              <view class="menu-title">我的折扣券</view>
            </view>
          </view>
        </view>
      </view>
      <view class="menu-box">
        <view class="box-hd">
          <view class="box-icon">
            <wd-icon name="user-avatar" size="16px" color="#FF7427"></wd-icon>
          </view>
          <view class="box-title">个人数据</view>
        </view>
        <view class="box-bd">
          <view class="menu-list">
            <view class="menu-item">
              <view class="menu-icon">
                <wd-icon name="list" size="28px"></wd-icon>
              </view>
              <view class="menu-title">运动记录</view>
            </view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script lang="ts" setup>
defineOptions({
  name: 'UserMyHome',
})
const userInfo = ref({
  'user_id': '1',
  'username': '微信潜客',
  'nickname': '微信潜客',
  'sex': '',
  'phone': '13888888888',
  'avatar': 'https:\/\/imagecdn.rocketbird.cn\/default\/man_user_avatar.png',
  'point': 0,
  'reservation_count': 0,
  'ticket': 0,
  'merchants_id': 1900,
  'merchants_name': '优适健身奥城店',
  'bind_wx_palmservice': false,
  'organization_id': null,
  'balance': '0.00'
});


function handleEditProfile() {
  uni.navigateTo({
    url: '/pages/user/profile'
  })
}

function handleLogin() {
  uni.navigateTo({
    url: '/pages/user/login'
  })
}
</script>

<style lang="scss">
page {
  background-color: var(--app-page-bg-color);
}

.page-user-my {

}

.user-profile {
  padding: 40rpx;
  background-color: #fff;
  display: flex;

  .user-avatar {
    width: 148rpx;
    height: 148rpx;
    border-radius: 50%;
    overflow: hidden;
  }

  .user-info {
    flex: 1;
    margin-left: 24rpx;
  }

  .info-row {
    display: flex;
    margin-bottom: 24rpx;

    &:last-child {
      margin-bottom: 0;
    }
  }

  .nickname {
    font-size: 36rpx;
    font-weight: 500;
  }

  .qrcode {
    margin-left: 16rpx;
  }

  .user-point {
    margin-left: 16rpx;
    display: flex;
    align-items: center;
  }

  .value {
    margin-left: 8rpx;
  }

  .icon-point {
    width: 24rpx;
    height: 24rpx;
    line-height: 18rpx;
    border-radius: 50%;
    border: 1rpx solid var(--app-highlight-color);
    color: #fff;
  }

  .user-balance {
    padding-top: 32rpx;


    color: var(--app-highlight-color);

    .num {
      font-weight: 500;
    }

    .btn-charge {
      margin-left: 8rpx;
      background-color: var(--app-highlight-color);
      color: #fff;
      padding: 2rpx 6rpx;
      border-radius: 16rpx;
    }
  }
}


.menu-wrapper {
  padding: 30rpx 24rpx;
}

.menu-box {
  background-color: #fff;
  margin-bottom: 40rpx;
  border-radius: 12rpx;

  .box-hd {
    padding: 24rpx;
    display: flex;
  }

  .box-icon {
    margin-right: 12rpx;
  }

  .box-title {
    font-size: 30rpx;
    font-weight: 500;
  }

  .box-bd {
    padding: 30rpx;
  }

  .menu-list {
    display: flex;
    flex-wrap: wrap;
  }

  .menu-item {
    margin: 0 55rpx 24rpx 0;
    text-align: center;

    &:nth-child(4) {
      margin-right: 0;
    }

    .menu-icon {
      width: 120rpx;
      height: 120rpx;
      border: 3rpx solid var(--app-highlight-color);
      border-radius: 50%;
      overflow: hidden;

      display: flex;
      justify-content: center;
      align-items: center;
    }

    .menu-title {
      margin-top: 12rpx;
    }
  }
}
</style>
