import {mockRequest} from '@/service/mock/base';

/**
 * 获取门店信息
 */
export const getStoreInfo = () => {
  return mockRequest({
    'name': 'BOOM | 奥城店',
    'thumb': 'https:\/\/imagecdn.rocketbird.cn\/online\/image\/d7ec98432784fc12f5dbf15bb28f6e33.png',
    'phone': '13888888888',
    'address': '天津南开区天津市南开区凌宾路奥城商业广场8号楼彩柒汇生活广场',
    'description': '<p><span style="color: rgb(53, 53, 53);">BOOM不设年卡，单次付费。课程采用预约付费的制度，灵活，高效。点滴微小的投入，会让你收获超值的体验和效果。与Boom一起，点燃神经，轰炸身体，让每一次训练变成一次燃烧和释放。</span></p>',
    'banners': [{
      'img_url': 'https:\/\/imagecdn.rocketbird.cn\/minprogram\/uni-member\/banner.png',
      'img_name': '默认',
      'img_link': ''
    }],
    'lng': '117.17165',
    'lat': '39.075736',
  })
}

/**
 * 获取门店列表
 */
export const getStoreList = () => {
  return mockRequest([{
    'id': '1',
    'name': 'BOOM | 奥城店',
    'thumb': 'https:\/\/imagecdn.rocketbird.cn\/online\/image\/d7ec98432784fc12f5dbf15bb28f6e33.png',
    'phone': '13888888888',
    'address': '天津南开区天津市南开区凌宾路奥城商业广场8号楼',
    'distance': '1000000.0km'
  }, {
    'id': '2',
    'name': 'BOOM | 中冶和悦汇店',
    'thumb': 'https:\/\/imagecdn.rocketbird.cn\/online\/image\/a5a9cc341284af64b6c0953823c83511.png',
    'phone': '13888888888',
    'address': '天津河西区黑牛城道于洪泽路交口',
    'distance': '1000000.0km'
  }, {
    'id': '3',
    'name': 'BOOM | 南开大悦城店',
    'thumb': 'https:\/\/imagecdn.rocketbird.cn\/online\/image\/cbc8e9a8630a8e34deea1c0bc711bb8c.png',
    'phone': '13888888888',
    'address': '天津南开区南门外大街大悦城旺街1F J0A',
    'distance': '1000000.0km'
  }])
}

/**
 * 获取城市列表
 */
export const getCityIndexes = () => {
  return mockRequest([
    {
      index: 'A',
      data: ['阿坝', '阿拉善', '阿里', '安康', '安庆', '鞍山', '安顺', '安阳', '澳门']
    },
    {
      index: 'B',
      data: ['北京', '白银', '保定', '宝鸡', '保山', '包头', '巴中', '北海', '蚌埠', '本溪', '毕节', '滨州', '百色', '亳州']
    },
    {
      index: 'C',
      data: [
        '重庆',
        '成都',
        '长沙',
        '长春',
        '沧州',
        '常德',
        '昌都',
        '长治',
        '常州',
        '巢湖',
        '潮州',
        '承德',
        '郴州',
        '赤峰',
        '池州',
        '崇左',
        '楚雄',
        '滁州',
        '朝阳'
      ]
    },
    {
      index: 'D',
      data: ['大连', '东莞', '大理', '丹东', '大庆', '大同', '大兴安岭', '德宏', '德阳', '德州', '定西', '迪庆', '东营']
    },
    {
      index: 'E',
      data: ['鄂尔多斯', '恩施', '鄂州']
    },
    {
      index: 'F',
      data: ['福州', '防城港', '佛山', '抚顺', '抚州', '阜新', '阜阳']
    },
    {
      index: 'G',
      data: ['广州', '桂林', '贵阳', '甘南', '赣州', '甘孜', '广安', '广元', '贵港', '果洛']
    },
    {
      index: 'H',
      data: [
        '杭州',
        '哈尔滨',
        '合肥',
        '海口',
        '呼和浩特',
        '海北',
        '海东',
        '海南',
        '海西',
        '邯郸',
        '汉中',
        '鹤壁',
        '河池',
        '鹤岗',
        '黑河',
        '衡水',
        '衡阳',
        '河源',
        '贺州',
        '红河',
        '淮安',
        '淮北',
        '怀化',
        '淮南',
        '黄冈',
        '黄南',
        '黄山',
        '黄石',
        '惠州',
        '葫芦岛',
        '呼伦贝尔',
        '湖州',
        '菏泽'
      ]
    }
  ])
}
