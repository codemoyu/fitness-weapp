<route lang="json5">
{
style: {
navigationBarTitleText: '订单详情',
},
}
</route>
<template>
  <view class="page-card-detail">
    <CardItem :item="card" />
    <wd-cell-group>
      <wd-cell title="适用门店" center>
        <text class="desc">3家</text>
        <text class="link">查看适用门店</text>
      </wd-cell>
      <wd-cell title="开卡方式" center>
        <wd-picker :columns="activateOptions" v-model="activateRestrictionValue" @confirm="handleConfirm" />
        <text class="explain">7天未到场，将自动激活</text>
      </wd-cell>
      <wd-cell title="有效天数">
        <text class="desc">10天</text>
      </wd-cell>
      <wd-cell title="可用次数">
        <text class="desc">1次</text>
      </wd-cell>
      <wd-cell title="有效期">
        <text class="desc">2024-08.27 ~ 未知</text>
      </wd-cell>
      <wd-cell title="会员卡描述" vertical>
        <view class="description">
          <rich-text :nodes="card.description"></rich-text>
        </view>
      </wd-cell>
      <wd-cell>
        <template #title>
          <view style="display: flex; align-items: center;">
            <view class="coupon-tag">券</view>
            折扣券抵扣
          </view>
        </template>
        <text class="desc">暂无可用抵用券</text>
      </wd-cell>
      <wd-cell title="赠送积分">
        <text class="desc">{{ card.current_price }}</text>
      </wd-cell>
      <wd-cell title="销售人员">
        <template v-if="marketers && marketers.length">
          <wd-picker :columns="marketers" value-key="id" label-key="name" v-model="selectedMarketerValue"
                     @confirm="handleChangeMarketer" />
        </template>
      </wd-cell>
      <wd-cell title="支付方式" vertical>
        <!-- button 按钮式单选 -->
        <wd-radio-group v-model="payType" shape="dot" @change="handeChangePayType">
          <wd-radio :value="1">
            <view class="label">
              <image class="label-icon" src="https://imagecdn.rocketbird.cn/minprogram/uni-member/stadium/wx.png" />
              微信
            </view>
          </wd-radio>
          <wd-radio :value="2">
            <view class="label">
              <image class="label-icon" src="https://imagecdn.rocketbird.cn/minprogram/uni-member/stadium/vip.png" />
              储值卡
            </view>
          </wd-radio>
        </wd-radio-group>
      </wd-cell>
    </wd-cell-group>


    <BottomBar flex>
      <view class="price">￥{{ card.current_price }}</view>
      <wd-button type="primary" custom-class="btn-buy" :round="false" @click="handleBuy">立即支付</wd-button>
    </BottomBar>
  </view>
</template>

<script lang="ts" setup>
import CardItem from '@/pages/card/components/CardItem.vue';
import BottomBar from '@/components/BottomBar.vue';
import {getCardDetail, getMarketers} from '@/service/mock/card';

defineOptions({
  name: 'CardDetail',
})

const card = ref({});
const marketers = ref([]);


const activateOptions = ref(['立即开卡', '到场后再激活'])
const activateRestrictionValue = ref('到场后再激活')
const selectedMarketerValue = ref<number>(undefined)
const payType = ref<number>(1)

function handleConfirm({value}) {
  activateRestrictionValue.value = value
}

function handleChangeMarketer({value}) {
  selectedMarketerValue.value = value
}

function handeChangePayType({value}) {
  payType.value = value
}

function handleBuy() {

}

onShow(async () => {
  card.value = await getCardDetail();
  marketers.value = await getMarketers();
})

</script>

<style lang="scss">
.page-card-detail {
  height: 100%;
  padding: 20rpx 30rpx 178rpx;
  overflow-y: auto;
}

.coupon-tag {
  margin-right: 12rpx;
  width: 32rpx;
  height: 32rpx;
  line-height: 32rpx;
  border-radius: 6rpx;
  color: var(--app-font-color);
  background-color: var(--app-main-color);
  font-size: 21rpx;
  font-weight: 500;
  text-align: center;
}

.desc, .wd-picker__value {
  font-weight: 500;
}

.link {
  color: var(--app-highlight-color);
}

.explain {
  color: var(--app-highlight-color);
  font-size: 22rpx;
}

.wd-picker__cell {
  padding: 0 !important;
}

.label {
  display: flex;
  align-items: center;

  .label-icon {
    width: 48rpx;
    height: 48rpx;
  }
}

.price {
  color: var(--app-highlight-color);
  font-size: 36rpx;
  font-weight: 500;
}

.btn-buy {
  width: 286rpx !important;
}
</style>
