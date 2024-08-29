import {mockRequest} from '@/service/mock/base';


/**
 * 获取首页的教练列表
 */
export const getHomeCoachList = () => {
  return mockRequest([{
    'id': 151369,
    'sex': 1,
    'name': 'Ziel',
    'avatar': 'https:\/\/imagecdn.rocketbird.cn\/online\/image\/4281d7e958ea7924f703710a7bd80166.png',
    'aptitude': 'Zumba B1认证教练&lt;br \/&gt;Zumba B2认证教练&lt;br \/&gt;Zumba Step认证教练&lt;br \/&gt;Zumba Strong认证教练&lt;br \/&gt;LESMILLS BODYATTACK认证教练&lt;br \/&gt;LESMILLS BODYPUMP认证教练&lt;br \/&gt;LESMILLS BODYCOMBAT认证教练',
    'other_intr': '&lt;p&gt;Ziel&lt;\/p&gt;&lt;p&gt;毕业于天津体育学院 2013年大二期间，因为热爱开始接触健身行业，2014年开始正规的体系培训和学习。&lt;\/p&gt;&lt;p&gt;2014年考取zumba B1 B2基础认证，并考取zumba step认证，成为较早一批zumba系统教练员。&lt;\/p&gt;&lt;p&gt;2015年—2017年两年的的时间依次考取bodyattack bodypump bodycombat等5项莱美认证。&lt;\/p&gt;&lt;p&gt;2016年学习培训Strong Nation（原strong by zumba）课程，并成为全国首批认证教练。&lt;\/p&gt;&lt;p&gt;2017年学习Trainfitness体系课程，取得Stomp fx 、pump fx、blast fx教练认证 。&lt;\/p&gt;&lt;p&gt;2018年至今，学习并教授垫上普拉提课程，创编小团体课程（战绳、奥利来小器械等）&lt;\/p&gt;&lt;p&gt;从业至今，完成大约6000节课课时量，拥有较强的线下课程的经验和历练，并在疫情期间参与线上课程的直播课节目录制。&lt;\/p&gt;',
    'specialty': '塑形,增肌,减脂,瑜伽,舞蹈,功能性训练,室内骑行,臀腿训练,维秘翘臀,搏击,体态调整,力量瑜伽,协调性',
    'position': '团课教练,全能教练',
    'permitted_class': [],
    'min_price': ''
  }, {
    'id': 173154,
    'sex': 1,
    'name': 'Eurus',
    'avatar': 'https:\/\/imagecdn.rocketbird.cn\/online\/image\/a1e44b04a130f55f6abe7afb3e69d624.png',
    'aptitude': 'Body pump认证教练&lt;br \/&gt;Body combat认证教练&lt;br \/&gt;Body combat PRE-AT预备高阶教练&lt;br \/&gt;Tone认证教练&lt;br \/&gt;Core教练&lt;br \/&gt;AASFP 亚洲体适能教练&lt;br \/&gt;Trx认证教练&lt;br \/&gt;Trigger Point泡沫轴&lt;br \/&gt;Virp 认证教练&lt;br \/&gt;',
    'other_intr': '&lt;p&gt;孟煜&lt;\/p&gt;&lt;p&gt;认证资质：&lt;\/p&gt;&lt;p&gt;Les mills &lt;\/p&gt;&lt;p&gt;Body pump认证教练&lt;\/p&gt;&lt;p&gt;Body combat认证教练&lt;\/p&gt;&lt;p&gt;Body combat PRE-AT预备高阶教练&lt;\/p&gt;&lt;p&gt;Tone认证教练&lt;\/p&gt;&lt;p&gt;Core教练&lt;\/p&gt;&lt;p&gt;AASFP 亚洲体适能教练&lt;\/p&gt;&lt;p&gt;Trx认证教练&lt;\/p&gt;&lt;p&gt;Trigger Point泡沫轴&lt;\/p&gt;&lt;p&gt;Virp 认证教练&lt;\/p&gt;',
    'specialty': '塑形,增肌,减脂,功能性训练,体能训练,力量训练启蒙,有氧训练',
    'position': '团课教练,全能教练',
    'permitted_class': [],
    'min_price': ''
  }, {
    'id': 175978,
    'sex': 1,
    'name': '大超Ray',
    'avatar': 'https:\/\/imagecdn.rocketbird.cn\/online\/image\/17f8ece8ce0c44d49eb8d395835b93a5.png',
    'aptitude': 'LesMills BODYPUMP教练认证&lt;br \/&gt;LesMills BODYBALANCE教练认证&lt;br \/&gt;完成 LesMills BODYPUMP 高级教练员AIM1培训&lt;br \/&gt;完成 LesMills BODYBALANCE 高级教练员AIM1培训&lt;br \/&gt;Keep Real Be Brave United',
    'other_intr': '&lt;p&gt;Ray：&lt;\/p&gt;&lt;p&gt;&lt;br&gt;&lt;\/p&gt;&lt;p&gt;LesMills BODYPUMP教练认证&lt;\/p&gt;&lt;p&gt;LesMills BODYBALANC教练认证&lt;\/p&gt;&lt;p&gt;完成 LesMills BODYPUMP 高级教练员AIM1培训&lt;\/p&gt;&lt;p&gt;完成 LesMills BODYBALANCE 高级教练员AIM1培训&lt;\/p&gt;&lt;p&gt;Keep Real Be Brave United&lt;\/p&gt;',
    'specialty': '塑形,增肌,减脂,体态调整,塑形瑜伽,线性拉伸',
    'position': '团课教练',
    'permitted_class': [],
    'min_price': ''
  }]);
}


export const queryCoachList = (pageNo, pageSize) => {
  if (pageNo >= 2) {
    return mockRequest([]);
  }
  return mockRequest([{
    'id': 67259,
    'sex': 1,
    'name': 'Ziel',
    'avatar': 'https:\/\/imagecdn.rocketbird.cn\/online\/image\/0cf7002bbf7bec552ff7f5d5ca73878d.png',
    'aptitude': 'Zumba B1认证教练&lt;br \/&gt;Zumba B2认证教练&lt;br \/&gt;Zumba Step认证教练&lt;br \/&gt;Zumba Strong认证教练&lt;br \/&gt;LESMILLS BODYATTACK认证教练&lt;br \/&gt;LESMILLS BODYPUMP认证教练&lt;br \/&gt;LESMILLS BODYCOMBAT认证教练&lt;br \/&gt;',
    'other_intr': '&lt;p&gt;Ziel&lt;\/p&gt;&lt;p&gt;毕业于天津体育学院 2013年大二期间，因为热爱开始接触健身行业，2014年开始正规的体系培训和学习。&lt;\/p&gt;&lt;p&gt;2014年考取zumba B1 B2基础认证，并考取zumba step认证，成为较早一批zumba系统教练员。&lt;\/p&gt;&lt;p&gt;2015年—2017年两年的的时间依次考取bodyattack bodypump bodycombat等5项莱美认证。&lt;\/p&gt;&lt;p&gt;2016年学习培训Strong Nation（原strong by zumba）课程，并成为全国首批认证教练。&lt;\/p&gt;&lt;p&gt;2017年学习Trainfitness体系课程，取得Stomp fx 、pump fx、blast fx教练认证 。&lt;\/p&gt;&lt;p&gt;2018年至今，学习并教授垫上普拉提课程，创编小团体课程（战绳、奥利来小器械等）&lt;\/p&gt;&lt;p&gt;从业至今，完成大约6000节课课时量，拥有较强的线下课程的经验和历练，并在疫情期间参与线上课程的直播课节目录制。&lt;\/p&gt;',
    'specialty': '塑形,增肌,减脂,瑜伽,舞蹈,功能性训练,体态调整,室内骑行,臀腿训练,力量瑜伽,维密翘臀,协调性,搏击',
    'position': '全能教练,团操教练',
    'permitted_class': ['器械普拉提 体验课程'],
    'min_price': 199
  }, {
    'id': 154527,
    'sex': 2,
    'name': '普拉提精炼',
    'avatar': 'https:\/\/imagecdn.rocketbird.cn\/online\/image\/40136c88191fbb03be83705b6657f1fb.png',
    'aptitude': '',
    'other_intr': '',
    'specialty': '增肌,减脂,产后训练,产后恢复,体态调整,呼吸控制法,线性拉伸',
    'position': '全能教练,私人教练',
    'permitted_class': ['器械普拉提 体验课程'],
    'min_price': 199
  }, {
    'id': 173827,
    'sex': 1,
    'name': 'Eurus',
    'avatar': 'https:\/\/imagecdn.rocketbird.cn\/online\/image\/32cfcf720e53899a09a5f04b68aa669e.png',
    'aptitude': 'Body pump认证教练&lt;br \/&gt;Body combat认证教练&lt;br \/&gt;Body combat PRE-AT预备高阶教练&lt;br \/&gt;Tone认证教练&lt;br \/&gt;Core教练&lt;br \/&gt;AASFP 亚洲体适能教练&lt;br \/&gt;Trx认证教练&lt;br \/&gt;Trigger Point泡沫轴&lt;br \/&gt;Virp 认证教练&lt;br \/&gt;',
    'other_intr': '&lt;p&gt;Body pump认证教练&lt;\/p&gt;&lt;p&gt;Body combat认证教练&lt;\/p&gt;&lt;p&gt;Body combat PRE-AT预备高阶教练&lt;\/p&gt;&lt;p&gt;Tone认证教练&lt;\/p&gt;&lt;p&gt;Core教练&lt;\/p&gt;&lt;p&gt;AASFP 亚洲体适能教练&lt;\/p&gt;&lt;p&gt;Trx认证教练&lt;\/p&gt;&lt;p&gt;Trigger Point泡沫轴&lt;\/p&gt;&lt;p&gt;Virp 认证教练&lt;\/p&gt;&lt;p&gt;&lt;br&gt;&lt;\/p&gt;',
    'specialty': '塑形,增肌,减脂,功能性训练,体能训练,体态调整,臀腿训练,力量训练启蒙,有氧训练',
    'position': '团操教练',
    'permitted_class': [],
    'min_price': ''
  }, {
    'id': 184242,
    'sex': 1,
    'name': '大超Ray',
    'avatar': 'https:\/\/imagecdn.rocketbird.cn\/online\/image\/9fdf3886f729caa1be2ed058c3f6afe9.png',
    'aptitude': '',
    'other_intr': '',
    'specialty': '塑形,增肌,减脂',
    'position': '全能教练,团操教练',
    'permitted_class': [],
    'min_price': ''
  }, {
    'id': 188118,
    'sex': 2,
    'name': 'Merida',
    'avatar': 'https:\/\/imagecdn.rocketbird.cn\/online\/image\/c48f35eb39b63288d496c50e5162223d.png',
    'aptitude': '',
    'other_intr': '',
    'specialty': '塑形,减脂,功能性训练,体能训练,体态调整,呼吸控制法,线性拉伸',
    'position': '私人教练',
    'permitted_class': [],
    'min_price': ''
  }, {
    'id': 207057,
    'sex': 2,
    'name': 'Trista',
    'avatar': 'https:\/\/imagecdn.rocketbird.cn\/online\/image\/21d6918e84046275261ad6e945a0a953.png',
    'aptitude': '',
    'other_intr': '',
    'specialty': '塑形,增肌,减脂,瑜伽,体态调整,臀腿训练',
    'position': '全能教练,私人教练',
    'permitted_class': ['60分钟私教定制体验课程', '器械普拉提 体验课程'],
    'min_price': 98
  }, {
    'id': 23733,
    'sex': 2,
    'name': 'Cynthia',
    'sort': 2,
    'avatar': 'https:\/\/imagecdn.rocketbird.cn\/online\/image\/06035c08eff2a5eed98e5e46b342ec80.png',
    'aptitude': '优适健身明星团操教练&lt;br \/&gt;LESMIILS GRIT SERIES认证教练&lt;br \/&gt;LESMIILS BODYCOMBAT认证教练&lt;br \/&gt;LESMILLS BODYBALANCE认证教练&lt;br \/&gt;LESMILLS CXWORX教练员&lt;br \/&gt;普拉提认证教练员',
    'other_intr': '&lt;p style=&quot;text-align: center;&quot;&gt;&lt;br&gt;&lt;\/p&gt;&lt;p style=&quot;text-align: center;&quot;&gt;&lt;br&gt;&lt;\/p&gt;&lt;p style=&quot;text-align: center;&quot;&gt;&lt;br&gt;&lt;\/p&gt;&lt;p style=&quot;text-align: center;&quot;&gt;因为遇见GRIT，发掘自己无限的潜能&lt;\/p&gt;&lt;p style=&quot;text-align: center;&quot;&gt;放弃轻易就能站在原地，而每一次突破代表不断推翻自己的极限&lt;\/p&gt;&lt;p style=&quot;text-align: center;&quot;&gt;直面挑战，不忘初衷，坚持不懈&lt;\/p&gt;&lt;p style=&quot;text-align: center;&quot;&gt;&lt;br&gt;&lt;\/p&gt;&lt;p style=&quot;text-align: center;&quot;&gt;未穿越黑暗 不知有光&lt;\/p&gt;&lt;p style=&quot;text-align: center;&quot;&gt;Be brave.&lt;\/p&gt;&lt;p style=&quot;text-align: center;&quot;&gt;Break your limits.&lt;\/p&gt;',
    'specialty': '塑形,减脂,功能性训练,体能训练,HIIT训练',
    'position': '团操教练',
    'permitted_class': [],
    'min_price': ''
  }, {
    'id': 23734,
    'sex': 2,
    'name': 'Kiwi',
    'sort': 3,
    'avatar': 'https:\/\/imagecdn.rocketbird.cn\/online\/image\/9b0c1e3ee01110361ba6742aa1bd4899.png',
    'aptitude': 'UBond认证&lt;br \/&gt;李欣普拉提康复认证&lt;br \/&gt;孕产认证&lt;br \/&gt;国家营养师认证',
    'other_intr': '&lt;p&gt;Kiwi毕业于体育院校，动静皆宜，是集活泼与安静一身的射手座女神。力量与柔韧皆备，杠铃课时有力量，蹦床课时有活力，普拉提课程静若处子。天生乐观，热爱运动，跟她一起仿佛没有任何烦恼，只需全身心投入到运动中去。私教授课超过4000课时，是真正的全能型教练员。&lt;\/p&gt;',
    'specialty': '塑形,增肌,减脂,康复训练,体态调整',
    'position': '全能教练,团操教练,私人教练',
    'permitted_class': ['器械普拉提 体验课程'],
    'min_price': 199
  }, {
    'id': 132641,
    'sex': 2,
    'name': 'Zendaya',
    'sort': 3,
    'avatar': 'https:\/\/imagecdn.rocketbird.cn\/online\/image\/fc41bc5ed414174914f614a416f8c821.png',
    'aptitude': '',
    'other_intr': '&lt;p&gt;更新中。。。。&lt;\/p&gt;',
    'specialty': '塑形,增肌,减脂,舞蹈,功能性训练,体能训练,室内骑行,臀腿训练,维密翘臀,搏击',
    'position': '团操教练',
    'permitted_class': [],
    'min_price': ''
  }, {
    'id': 23750,
    'sex': 1,
    'name': 'Ss',
    'sort': 4,
    'avatar': 'https:\/\/imagecdn.rocketbird.cn\/online\/image\/bb98510e82a20eb3ffbdfd2d493d6fec.png',
    'aptitude': 'LESMILLS RPM教练员&lt;br \/&gt;LESMILLS BODYPUMP教练员&lt;br \/&gt;LESMILLS BODYBALANCE认证教练&lt;br \/&gt;LESMILLS CXWORX教练员&lt;br \/&gt;AFAA健身教练',
    'other_intr': '&lt;p&gt;&lt;br&gt;&lt;\/p&gt;&lt;p&gt;Double-s一个拥有15年篮球经历的体育人，&lt;\/p&gt;&lt;p&gt;&lt;br&gt;&lt;\/p&gt;&lt;p&gt;因为热爱运动，喜欢集体性训练及挑战，开始投身于健身事业。&lt;\/p&gt;&lt;p&gt;&lt;br&gt;&lt;\/p&gt;&lt;p&gt;成为一个拥有6年专业、系统训练的职业健身教练！&lt;\/p&gt;',
    'specialty': '塑形,增肌,减脂,体能训练,体态调整',
    'position': '全能教练,团操教练,私人教练',
    'permitted_class': [],
    'min_price': ''
  }, {
    'id': 65548,
    'sex': 1,
    'name': 'Wayne',
    'sort': 11,
    'avatar': 'https:\/\/imagecdn.rocketbird.cn\/online\/image\/b145add982c076aa6af3925cfe7375fc.png',
    'aptitude': 'PUMP FX  国际认证教练&lt;br \/&gt;PILOXING国际认证教练&lt;br \/&gt;国家竞技健美操裁判员&lt;br \/&gt;国家啦啦操六级运动员&lt;br \/&gt;国家啦啦操二级级裁判员&lt;br \/&gt;全国全民健身操裁判员&lt;br \/&gt;体育教师资格证&lt;br \/&gt;',
    'other_intr': '&lt;p&gt;毕业于体育学院&lt;\/p&gt;&lt;p&gt;闻音便躁动。&lt;\/p&gt;&lt;p&gt;阳光之下包含着将阳光冲破的决心&lt;\/p&gt;&lt;p&gt;安静时书生意气，&lt;\/p&gt;&lt;p&gt;动时便是最灿烂的自己。&lt;\/p&gt;&lt;p&gt;对于生活来说，&lt;\/p&gt;&lt;p&gt;没有什么不是一次畅爽的运动能解决的&lt;\/p&gt;',
    'specialty': '塑形,减脂,舞蹈,体能训练,有氧训练,协调性',
    'position': '团操教练',
    'permitted_class': [],
    'min_price': ''
  }, {
    'id': 76032,
    'sex': 1,
    'name': 'Sandy',
    'sort': 99,
    'avatar': 'https:\/\/imagecdn.rocketbird.cn\/online\/image\/15d4dface9be2de8ed2605678031461c.png',
    'aptitude': '',
    'other_intr': '',
    'specialty': '塑形,增肌,减脂,功能性训练,线性拉伸,臀腿训练,力量训练启蒙,有氧训练',
    'position': '私人教练',
    'permitted_class': [],
    'min_price': ''
  }, {
    'id': 136169,
    'sex': 2,
    'name': '常琪',
    'sort': 100,
    'avatar': 'https:\/\/imagecdn.rocketbird.cn\/online\/image\/6732a95805fab72aefef18866f1b2228.png',
    'aptitude': '',
    'other_intr': '',
    'specialty': '塑形,增肌,减脂,产后训练,产后恢复,功能性训练,体能训练,HIIT训练,康复训练,体态调整,呼吸控制法,线性拉伸,臀腿训练,力量训练启蒙,有氧训练,维密翘臀,协调性',
    'position': '私人教练',
    'permitted_class': [],
    'min_price': ''
  }])
}


export const getCoachDetail = () => {
  return mockRequest({
    'sex': 1,
    'coach_name': 'Ziel',
    'avatar': 'https:\/\/imagecdn.rocketbird.cn\/online\/image\/0cf7002bbf7bec552ff7f5d5ca73878d.png',
    'brief': '<p>Ziel</p><p>毕业于天津体育学院 2013年大二期间，因为热爱开始接触健身行业，2014年开始正规的体系培训和学习。</p><p>2014年考取zumba B1 B2基础认证，并考取zumba step认证，成为较早一批zumba系统教练员。</p><p>2015年—2017年两年的的时间依次考取bodyattack bodypump bodycombat等5项莱美认证。</p><p>2016年学习培训Strong Nation（原strong by zumba）课程，并成为全国首批认证教练。</p><p>2017年学习Trainfitness体系课程，取得Stomp fx 、pump fx、blast fx教练认证 。</p><p>2018年至今，学习并教授垫上普拉提课程，创编小团体课程（战绳、奥利来小器械等）</p><p>从业至今，完成大约6000节课课时量，拥有较强的线下课程的经验和历练，并在疫情期间参与线上课程的直播课节目录制。</p>',
    'aptitude': 'Zumba B1认证教练<br />Zumba B2认证教练<br />Zumba Step认证教练<br />Zumba Strong认证教练<br />LESMILLS BODYATTACK认证教练<br />LESMILLS BODYPUMP认证教练<br />LESMILLS BODYCOMBAT认证教练<br />',
    'course': 'BODYATTACK、BODYPUMP、BODYCOMBAT、Zumba B1、 Zumba B2、 Zumba Step、Zumba Strong、普拉提',
    'coach_type': '操课教练,私人教练',
    'promotional_photo': '',
    'specialty': ['塑形', '增肌', '减脂', '瑜伽', '舞蹈', '功能性训练', '体态调整', '室内骑行', '臀腿训练', '力量瑜伽', '维密翘臀', '协调性', '搏击'].join(','),
    'position': '全能教练、团操教练',
    'able_mark': true,
    'class_list': [{
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
      'is_pt_time_limit_card': 0,
      'description': '<p>本课程为私教定制化体验课程，用户仅限首次使用，不可以叠加使用，最终解释权归BOOM所有。<\/p>',
      'per_day_pt_class_num': 1,
      'universal_card': 0,
      'experience_card': 0,
      'class_duration': 60,
      'user_no': 1,
      'enable_time_limit': 0,
      'activation_restriction': 0,
      'is_point_activity': 0
    }]
  })
}
