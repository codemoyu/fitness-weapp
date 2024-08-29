import {mockRequest} from '@/service/mock/base';

/**
 * 获取首页卡课列表
 */
export const getHomeCardList = () => {
  return mockRequest([{
    'card_id': 419719,
    'current_price': 0,
    'single_price': 266.6,
    'name': '暑期1V1私教定制套餐3999元',
    'card_type_id': 4,
    'thumb': 'https:\/\/imagecdn.rocketbird.cn\/mainsite-fe\/diy\/card-cover-1.png',
    'number': 1,
    'gift_number': 0,
    'end_time': 7,
    'description': '&lt;p&gt;60天内有效，仅限8月31日前购买&lt;\/p&gt;&lt;p&gt;&lt;br&gt;&lt;\/p&gt;',
    'duration': 60,
    'activation_restriction': 0,
    'card_group_title': '',
    'is_point_activity': 0
  }, {
    'card_id': 393226,
    'current_price': 49,
    'single_price': 0,
    'buy_min_value': 1,
    'mc_gift_number': 0,
    'alipay_sale_status': 0,
    'card_group_id': 0,
    'name': '49元早课卡',
    'card_type_id': 2,
    'thumb': 'https:\/\/imagecdn.rocketbird.cn\/mainsite-fe\/diy\/card-cover-1.png',
    'number': 1,
    'gift_number': 0,
    'end_time': 15,
    'description': '<p>此卡为早课卡，购买后请您进入小程序约课界面进行预约<\/p>',
    'duration': 60,
    'activation_restriction': 0,
    'card_group_title': '',
    'is_point_activity': 0
  }, {
    'card_id': 341591,
    'current_price': 537,
    'single_price': 0,
    'buy_min_value': 1,
    'mc_gift_number': 0,
    'alipay_sale_status': 0,
    'card_group_id': 0,
    'name': '瑜伽精炼1V3-3次卡',
    'card_type_id': 2,
    'thumb': 'https:\/\/imagecdn.rocketbird.cn\/mainsite-fe\/diy\/card-cover-1.png',
    'number': 3,
    'gift_number': 0,
    'end_time': 30,
    'description': '',
    'duration': 60,
    'activation_restriction': 0,
    'card_group_title': '',
    'is_point_activity': 0
  }]);
}

export const getCardTypes = () => {
  return mockRequest([
    {
      title: '私教课',
      type: '1',
    },
    {
      title: '会员卡',
      type: '2'
    },
    {
      title: '套餐包',
      type: '3',
      disabled: true
    },
    {
      title: '训练营',
      type: '4',
      disabled: true
    }
  ]);
}


export const getCardList = (type: string) => {
  if (type === '1') {

    return mockRequest([{
      'm_id': 1900,
      'card_id': 274949,
      'current_price': 0,
      'single_price': 98,
      'buy_min_value': 1,
      'mc_gift_number': 0,
      'alipay_sale_status': 0,
      'card_group_id': 0,
      'name': '60分钟私教定制体验课程',
      'card_type_id': 4,
      'thumb': 'https:\/\/imagecdn.rocketbird.cn\/mainsite-fe\/diy\/card-cover-1.png',
      'number': 1,
      'gift_number': 0,
      'end_time': 15,
      'description': '<p>本课程为私教定制化体验课程，用户仅限首次使用，不可以叠加使用，最终解释权归BOOM所有。<\/p>',
      'duration': 60,
      'activation_restriction': 0,
      'card_group_title': '',
      'is_point_activity': 0
    }, {
      'm_id': 1900,
      'card_id': 280773,
      'current_price': 0,
      'single_price': 199,
      'buy_min_value': 1,
      'mc_gift_number': 0,
      'alipay_sale_status': 0,
      'card_group_id': 7500,
      'name': '器械普拉提 体验课程',
      'card_type_id': 4,
      'thumb': 'https:\/\/imagecdn.rocketbird.cn\/online\/image\/bc66ae2bffa1809542e865df1d02fc6a.png',
      'number': 1,
      'gift_number': 0,
      'end_time': 7,
      'description': '<p>本课程为私教定制化体验课程，用户仅限首次使用，不可以叠加使用，最终解释权归BOOM所有。<\/p>',
      'universal_card': 0,
      'duration': 60,
      'activation_restriction': 0,
      'card_group_title': '特色',
      'is_point_activity': 0
    }, {
      'm_id': 1900,
      'card_id': 287258,
      'current_price': 0,
      'single_price': 199,
      'buy_min_value': 1,
      'mc_gift_number': 0,
      'alipay_sale_status': 0,
      'card_group_id': 7500,
      'name': '60分钟私教搏击体验课程',
      'card_type_id': 4,
      'thumb': 'https:\/\/imagecdn.rocketbird.cn\/mainsite-fe\/diy\/card-cover-1.png',
      'number': 1,
      'gift_number': 0,
      'end_time': 15,
      'description': '&lt;p&gt;此卡为体验产品，每名用户仅可以在品牌内体验1次。最终解释权归门店所有。&lt;\/p&gt;',
      'duration': 60,
      'activation_restriction': 0,
      'card_group_title': '特色',
      'is_point_activity': 0
    }]);
  } else if (type === '2') {
    return mockRequest([{
      'm_id': 1900,
      'card_id': 124989,
      'current_price': 59,
      'single_price': 0,
      'buy_min_value': 1,
      'mc_gift_number': 0,
      'alipay_sale_status': 0,
      'card_group_id': 0,
      'name': '首次团体训练体验通卡',
      'card_type_id': 2,
      'thumb': 'https:\/\/imagecdn.rocketbird.cn\/mainsite-fe\/diy\/card-cover-1.png',
      'number': 1,
      'gift_number': 0,
      'end_time': 10,
      'description': '<p>首次体验通卡，支持49元、59元大团体训练课程预约体验！新用户可在微信公众号内点击“优惠券”，领取最新优惠！赶快邀约小伙伴一起流汗吧！<\/p>',
      'per_day_pt_class_num': 0,
      'duration': 60,
      'activation_restriction': 0,
      'card_group_title': '',
      'is_point_activity': 0
    }, {
      'm_id': 1900,
      'card_id': 143965,
      'current_price': 790,
      'single_price': 0,
      'buy_min_value': 1,
      'mc_gift_number': 0,
      'alipay_sale_status': 0,
      'card_group_id': 0,
      'name': '万能团课10次卡',
      'card_type_id': 2,
      'thumb': 'https:\/\/imagecdn.rocketbird.cn\/mainsite-fe\/diy\/card-cover-1.png',
      'number': 10,
      'gift_number': 0,
      'end_time': 90,
      'description': '<p>此卡为团课万能卡，任意大团课均可使用。<\/p>',
      'per_day_pt_class_num': 0,
      'duration': 60,
      'activation_restriction': 0,
      'card_group_title': '',
      'is_point_activity': 0
    }, {
      'm_id': 1900,
      'card_id': 230146,
      'current_price': 500,
      'single_price': 0,
      'buy_min_value': 1,
      'mc_gift_number': 0,
      'alipay_sale_status': 0,
      'card_group_id': 0,
      'name': '500元储值卡-奥城店',
      'card_type_id': 3,
      'thumb': 'https:\/\/imagecdn.rocketbird.cn\/mainsite-fe\/diy\/card-cover-1.png',
      'number': 500,
      'gift_number': 0,
      'end_time': 200,
      'description': '',
      'duration': 60,
      'activation_restriction': 0,
      'card_group_title': '',
      'is_point_activity': 0
    }, {
      'm_id': 1900,
      'card_id': 230147,
      'current_price': 2000,
      'single_price': 0,
      'buy_min_value': 1,
      'mc_gift_number': 0,
      'alipay_sale_status': 0,
      'card_group_id': 0,
      'name': '2100元储值卡-奥城店',
      'card_type_id': 3,
      'thumb': 'https:\/\/imagecdn.rocketbird.cn\/mainsite-fe\/diy\/card-cover-1.png',
      'number': 2100,
      'gift_number': 0,
      'end_time': 365,
      'description': '',
      'duration': 60,
      'activation_restriction': 0,
      'card_group_title': '',
      'is_point_activity': 0
    }, {
      'm_id': 1900,
      'card_id': 230148,
      'current_price': 5000,
      'single_price': 0,
      'buy_min_value': 1,
      'mc_gift_number': 0,
      'alipay_sale_status': 0,
      'card_group_id': 0,
      'name': '5500元储值卡-奥城店',
      'card_type_id': 3,
      'thumb': 'https:\/\/imagecdn.rocketbird.cn\/mainsite-fe\/diy\/card-cover-1.png',
      'number': 5500,
      'gift_number': 0,
      'end_time': 365,
      'description': '',
      'duration': 60,
      'activation_restriction': 0,
      'card_group_title': '',
      'is_point_activity': 0
    }, {
      'm_id': 1900,
      'card_id': 271926,
      'current_price': 1399,
      'single_price': 0,
      'buy_min_value': 1,
      'mc_gift_number': 0,
      'alipay_sale_status': 0,
      'card_group_id': 0,
      'name': '臀腿循环小团课10次套餐包',
      'card_type_id': 2,
      'thumb': 'https:\/\/imagecdn.rocketbird.cn\/mainsite-fe\/diy\/card-cover-1.png',
      'number': 10,
      'gift_number': 0,
      'end_time': 70,
      'description': '<p>此卡一经售卖不予退款。<\/p>',
      'universal_card': 0,
      'duration': 60,
      'activation_restriction': 0,
      'card_group_title': '',
      'is_point_activity': 0
    }, {
      'm_id': 1900,
      'card_id': 303242,
      'current_price': 0,
      'single_price': 0,
      'buy_min_value': 1,
      'mc_gift_number': 0,
      'alipay_sale_status': 0,
      'card_group_id': 0,
      'name': '臀腿循环小团课10次套餐包',
      'card_type_id': 2,
      'thumb': 'https:\/\/imagecdn.rocketbird.cn\/mainsite-fe\/diy\/card-cover-1.png',
      'number': 10,
      'gift_number': 0,
      'end_time': 70,
      'description': '&lt;p&gt;&lt;br&gt;&lt;\/p&gt;&lt;p&gt;次卡一经售卖不予退款&lt;\/p&gt;&lt;p&gt;&lt;br&gt;&lt;\/p&gt;',
      'duration': 60,
      'activation_restriction': 0,
      'card_group_title': '',
      'is_point_activity': 0
    }, {
      'm_id': 1900,
      'card_id': 309872,
      'current_price': 399,
      'single_price': 0,
      'buy_min_value': 1,
      'mc_gift_number': 0,
      'alipay_sale_status': 0,
      'card_group_id': 0,
      'name': '精炼3次卡',
      'card_type_id': 2,
      'thumb': 'https:\/\/imagecdn.rocketbird.cn\/mainsite-fe\/diy\/card-cover-1.png',
      'number': 3,
      'gift_number': 0,
      'end_time': 30,
      'description': '&lt;p&gt;购卡须知：&lt;\/p&gt;&lt;p&gt;·次卡为3次卡&lt;\/p&gt;&lt;p&gt;·有效期至2023年4月30日&lt;\/p&gt;&lt;p&gt;·精炼3次卡可预约BODYCOMBAT精炼课、BODYPUMP精炼课、BODYJAM精炼课&lt;\/p&gt;&lt;p&gt;·本卡可预约精炼班课程（总监精炼班除外）&lt;\/p&gt;&lt;p&gt;·每次预约精炼课程扣除一次&lt;\/p&gt;&lt;p&gt;·此卡预约精炼课程后，取消需要开课前4小时&lt;\/p&gt;&lt;p&gt;·此卡一经使用，无法退卡&lt;\/p&gt;&lt;p&gt;·以下人群不能参加：孕妇，产妇，有心血管疾病者，其他伤病（医嘱不建议剧烈运动者）&lt;\/p&gt;&lt;p&gt;·最终解释权归BOOM所有&lt;\/p&gt;',
      'duration': 60,
      'activation_restriction': 0,
      'card_group_title': '',
      'is_point_activity': 0
    }, {
      'm_id': 1900,
      'card_id': 335081,
      'current_price': 139,
      'single_price': 0,
      'buy_min_value': 1,
      'mc_gift_number': 0,
      'alipay_sale_status': 0,
      'card_group_id': 0,
      'name': '热练小团体1次训练卡',
      'card_type_id': 2,
      'thumb': 'https:\/\/imagecdn.rocketbird.cn\/mainsite-fe\/diy\/card-cover-1.png',
      'number': 1,
      'gift_number': 0,
      'end_time': 15,
      'description': '&lt;p&gt;此卡为1V8小团体精品课程体验课，此卡每人仅限使用一次。&lt;\/p&gt;&lt;p&gt;最终解释权归BOOM所有。&lt;\/p&gt;',
      'duration': 60,
      'activation_restriction': 7,
      'card_group_title': '',
      'is_point_activity': 0
    }]);
  }

  return mockRequest([]);
}


export const getCourseDetail = () => {
  return mockRequest({
    'm_id': 1900,
    'card_id': 274949,
    'current_price': 0,
    'single_price': 98,
    'buy_min_value': 1,
    'mc_gift_number': 0,
    'alipay_sale_status': 0,
    'card_group_id': 0,
    'name': '60分钟私教定制体验课程',
    'card_type_id': 4,
    'thumb': 'https:\/\/imagecdn.rocketbird.cn\/mainsite-fe\/diy\/card-cover-1.png',
    'number': 1,
    'gift_number': 0,
    'end_time': 15,
    'is_pt_time_limit_card': 0,
    'description': '<p>本课程为私教定制化体验课程，用户仅限首次使用，不可以叠加使用，最终解释权归BOOM所有。<\/p>',
    'per_day_pt_class_num': 1,
    'universal_card': 1,
    'experience_card': 0,
    'class_duration': 60,
    'user_no': 1,
    'enable_time_limit': 0,
    'activation_restriction': 0,
    'support_bus_count': 3,
    'week_times': [],
    'is_open_buycard_protocol': 0,
    'phone': '022-83456699',
    'is_point_activity': 0,
    'sale_type': [2]
  });
}


export const getCardDetail = () => {
  return mockRequest({
    'm_id': 1900,
    'card_id': 124989,
    'current_price': 59,
    'single_price': 0,
    'buy_min_value': 1,
    'mc_gift_number': 0,
    'alipay_sale_status': 0,
    'card_group_id': 0,
    'name': '首次团体训练体验通卡',
    'card_type_id': 2,
    'thumb': 'https:\/\/imagecdn.rocketbird.cn\/mainsite-fe\/diy\/card-cover-1.png',
    'number': 1,
    'gift_number': 0,
    'end_time': 10,
    'is_pt_time_limit_card': 0,
    'description': '<p>首次体验通卡，支持49元、59元大团体训练课程预约体验！新用户可在微信公众号内点击“优惠券”，领取最新优惠！赶快邀约小伙伴一起流汗吧！<\/p>',
    'per_day_pt_class_num': 0,
    'universal_card': 1,
    'experience_card': 0,
    'class_duration': 60,
    'user_no': 1,
    'enable_time_limit': 0,
    'activation_restriction': 0,
    'support_bus_count': 3,
    'week_times': [],
    'is_open_buycard_protocol': 0,
    'phone': '022-83456699',
    'is_point_activity': 0,
    'sale_type': [1]
  });
}


export const getMarketers = () => {
  return mockRequest([{
    'id': 31436,
    'name': '大丽'
  }, {
    'id': 46511,
    'name': '李敏'
  }, {
    'id': 52560,
    'name': '柒柒'
  }, {
    'id': 106597,
    'name': '张帅'
  }, {
    'id': 118564,
    'name': '阿璨'
  }, {
    'id': 177987,
    'name': '扈扈'
  }, {
    'id': 183394,
    'name': '任雨晴'
  }, {
    'id': 191118,
    'name': '赵晶美'
  }, {
    'id': 232798,
    'name': '马鑫'
  }, {
    'id': 292187,
    'name': '白晓彤'
  }, {
    'id': 295061,
    'name': '沐沐'
  }]);
}
