import {mockRequest} from '@/service/mock/base';

/**
 * 获取 banner列表
 */
export const getBanners = () => {
  return mockRequest([
    'https://imagecdn.rocketbird.cn/minprogram/uni-member/banner.png',
  ])
}
