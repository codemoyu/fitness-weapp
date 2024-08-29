<route lang="json5">
{
style: {
navigationBarTitleText: '个人信息',
},
}
</route>
<template>
  <view class="page-profile-edit">
    <view class="icon-vip">
      <wd-icon name="user-circle" size="28px"></wd-icon>
    </view>
    <wd-form ref="form" :model="model" :rules="rules">
      <wd-cell-group border>
        <wd-input
          label="昵称"
          placeholder="请输入"
          label-width="100px"
          prop="nickname"
          v-model="model.nickname"
        />
        <wd-picker
          label="性别"
          placeholder="请选择"
          label-width="100px"
          prop="gender"
          v-model="model.gender"
          :columns="genderList"
        />
        <wd-datetime-picker
          label="出生日期"
          placeholder="请选择"
          label-width="100px"
          prop="birthday"
          type="date"
          v-model="model.birthday"
          :minDate="minDate"
          :default-value="defaultBirthday"
          :formatter="dateFormatter"
          :displayFormat="formatBirthday"
        />
      </wd-cell-group>
    </wd-form>

    <BottomBar>
      <wd-button type="primary" block :round="false" @click="handleSubmit">确认</wd-button>
    </BottomBar>
  </view>
</template>

<script lang="ts" setup>
import {useToast} from 'wot-design-uni'
import {FormRules} from 'wot-design-uni/components/wd-form/types'
import BottomBar from '@/components/BottomBar.vue';

defineOptions({
  name: 'UserProfileEdit',
})
const toast = useToast()
const minDate = ref<number>(0)
const defaultBirthday = ref<number>(Date.now())
const model = reactive<{
  nickname: string
  gender: string
  birthday: string
}>({
  nickname: '昵称未加载',
  gender: undefined,
  birthday: undefined
})
const form = ref()
const rules: FormRules = {
  nickname: [
    {
      required: true,
      message: '请填写昵称',
      validator: (value) => {
        if (value) {
          return Promise.resolve()
        } else {
          return Promise.reject('请填写昵称')
        }
      }
    }
  ],
  gender: [
    {
      required: true,
      message: '请选择性别',
    }
  ],
  birthday: [
    {
      required: true,
      message: '请选择出生日期',
    }
  ],
}
const genderList = ref<any[]>([
  {
    value: 'male',
    label: '男'
  },
  {
    value: 'female',
    label: '女'
  }
])
const dateFormatter = (type, value) => {
  switch (type) {
    case 'year':
      return value + '年'
    case 'month':
      return value + '月'
    case 'date':
      return value + '日'
    case 'hour':
      return value + '时'
    case 'minute':
      return value + '分'
    default:
      return value
  }
}
const formatBirthday = (items) => {
  return `${ items[0].label }年${ items[1].label }月${ items[2].label }日`
}

function handleSubmit() {
  form.value
    .validate()
    .then(({valid, errors}) => {
      if (valid) {
        toast.show({
          msg: '修改成功'
        })
      }
    })
    .catch((error) => {
      console.log(error, 'error')
    })
}

</script>

<style lang="scss">
page {
  background-color: var(--app-page-bg-color);
}

.page-profile-edit {
  padding: 24rpx;
}

.icon-vip {
  margin: 40rpx auto;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100rpx;
  height: 80rpx;
  border-radius: 10rpx;
  background: #fff;
}
</style>
