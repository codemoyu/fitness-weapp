<route lang="json5">
{
style: {
navigationBarTitleText: '卡课列表',
},
}
</route>
<template>
  <view class="page-card">
    <wd-tabs v-model="tab">
      <wd-tab :title="item.title" :name="item.title" v-for="item in tabs" :key="item.type" :disabled="item.disabled">
        <view v-if="item.type === '1'" class="tab-content">
          <view class="card-tags">
            <wd-radio-group v-model="selectedTag" shape="button">
              <wd-radio :value="tag.value" v-for="tag in tags" :key="tag.value">{{ tag.title }}</wd-radio>
            </wd-radio-group>
          </view>
          <view class="card-list">
            <CardItem v-for="item in courseList" :key="item.card_id" :item="item" type="course"
                      @click="handleViewCourse" />
          </view>
        </view>
        <view v-if="item.type === '2'" class="tab-content">
          <view class="card-list">
            <CardItem v-for="item in cardList" :key="item.card_id" :item="item" @click="handleBuyCard" />
          </view>
        </view>
      </wd-tab>
    </wd-tabs>
  </view>
</template>

<script lang="ts" setup>
import CardItem from '@/pages/card/components/CardItem.vue';
import {getCardList, getCardTypes} from '@/service/mock/card';

defineOptions({
  name: 'CardList',
})

const tab = ref<string>('1');
const tabs = ref([])
const selectedTag = ref<number>(0)
const tags = ref([
  {
    title: '全部',
    value: 0,
  },
  {
    title: 'PT',
    value: 1
  },
  {
    title: '特色',
    value: 2
  },
  {
    title: '套餐一',
    value: 3
  },
  {
    title: '套餐二',
    value: 4
  },
  {
    title: '套餐三',
    value: 5
  }
])
const courseList = ref([])
const cardList = ref([])

function handleViewCourse(course) {
  uni.navigateTo(({
    url: '/pages/card/courseDetail'
  }))
}

function handleBuyCard(card) {
  uni.navigateTo(({
    url: '/pages/card/detail'
  }))
}

onShow(async () => {
  tabs.value = await getCardTypes()
  courseList.value = await getCardList('1')
  cardList.value = await getCardList('2')
})

</script>

<style lang="scss">
.tab-content {
  padding: 30rpx;
}

.card-tags {
  margin-bottom: 30rpx;

  .wd-radio.is-button {
    margin-bottom: 12rpx;
  }

  .wd-radio .wd-radio__label {
    line-height: 1 !important;
  }
}

.card-list {
}
</style>
