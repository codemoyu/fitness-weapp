import {mockRequest} from '@/service/mock/base';


/**
 * 获取活动列表
 */
export const getActivityList = () => {
  return mockRequest([{
    'id': 4700,
    'name': '14天减脂营·RITUALHIIT高效训练营',
    'thumb': 'https:\/\/imagecdn.rocketbird.cn\/online\/image\/68e683300967c01cc326ac0490845784.png',
    'about_number': '50',
    'is_top': 0,
    'description': '此卡仅限购买一次，新课专享课程开始时间及使用规则请联系门店022-83456699一经报名成功，我们将在48小时内与您取得联系您可以优先购买获得首发优惠名额排课时间将在8月初',
    'type': 3,
    'sign_count': 9,
    'cutoff_date': '2024\/08\/31 00:00',
    'beg_date': '2024\/08\/01 00:00',
    'end_date': '2024\/08\/31 00:00'
  }]);
}

export const getActivityDetail = () => {
  return mockRequest({
    'id': 4700,
    'merchants_id': 1900,
    'bus_id': 2915,
    'name': '14天减脂营·RITUALHIIT高效训练营',
    'type': 3,
    'thumb': 'https:\/\/imagecdn.rocketbird.cn\/online\/image\/68e683300967c01cc326ac0490845784.png',
    'share_pic': '',
    'about_number': 0,
    'is_top': 0,
    'description': '<p style="text-align: center;"><strong>此卡仅限购买一次，新课专享</strong></p><p style="text-align: center;"><strong>课程开始时间及使用规则请联系门店</strong></p><p style="text-align: center;"><strong>022-83456699</strong></p><p style="text-align: center;"><strong>一经报名成功，我们将在48小时内与您取得联系</strong></p><p style="text-align: center;">您可以优先购买获得首发优惠名额</p><p style="text-align: center;">排课时间将在8月初</p><p style="text-align: center;"><br></p><p style="text-align: center;"><img src="https://imagecdn.rocketbird.cn/online/image/61cce062d3a8176c0d2a060f9ade9b2a.JPG@70q_1pr"></p>'.replace(/\<img/gi, '<img style="width:100%";height:auto'),
    'buy_num_limit': 2,
    'buy_obj_limit': 0,
    'qnj_qrcode_path': 'https:\/\/imagecdn.rocketbird.cn\/online\/image\/qrcode1723264857.png',
    'qrcode_path': 'https:\/\/imagecdn.rocketbird.cn\/online\/image\/qrcode1719829544.png',
    'create_time': 1719829543,
    'edit_time': 0,
    'sign_count': 0,
    'deadline': '2024年08月31日 00:00',
    'activity_time': '2024年08月01日 00:00~08月31日 00:00',
    'user_is_efficient': false,
    'user_buy_sum': 0,
    'sell_cards': [{
      'card_id': 420349,
      'card_name': '高效训练小团私教体验包',
      'card_type_id': 2,
      'ori_cost': '1390.00',
      'curr_cost': '399.00',
      'sell_num_limit': 50,
      'pt_class_num': 0,
      'card_use_tip': ['有效天数:14天', '可用次数:14次'],
      'ae_id': 7511,
      'is_pt_time_limit_card': 0,
      'per_day_pt_class_num': 1,
      'universal_card': 1,
      'end_time': 14,
      'number': 14,
      'thumb': 'https:\/\/imagecdn.rocketbird.cn\/mainsite-fe\/diy\/card-cover-3.png',
      'gift_number': 0,
      'mc_gift_number': 0,
      'activation_restriction': 0,
      'stock_balance': 41,
      'point': 0,
      'extra_point': 0,
      'is_point_activity': 0,
      'user_buy': 0,
      'can_buy_status': 1
    }],
    'sign_status': 0
  });
}
