import { defineUniPages } from '@uni-helper/vite-plugin-uni-pages'

export default defineUniPages({
  globalStyle: {
    navigationStyle: 'default',
    navigationBarTitleText: '健身房会员端',
    navigationBarBackgroundColor: '#fff',
    navigationBarTextStyle: 'black',
    backgroundColor: '#FFFFFF',
  },
  easycom: {
    autoscan: true,
    custom: {
      '^wd-(.*)': 'wot-design-uni/components/wd-$1/wd-$1.vue',
      '^(?!z-paging-refresh|z-paging-load-more)z-paging(.*)':
        'z-paging/components/z-paging$1/z-paging$1.vue',
    },
  },
  tabBar: {
    color: '#999',
    selectedColor: '#333',
    backgroundColor: '#fff',
    borderStyle: 'black',
    height: '48px',
    fontSize: '10px',
    iconWidth: '20px',
    spacing: '3px',
    list: [
      {
        iconPath: 'static/tabbar/home.png',
        selectedIconPath: 'static/tabbar/home-selected-dark.png',
        pagePath: 'pages/index/index',
        text: '首页',
      },
      {
        iconPath: 'static/tabbar/reserve.png',
        selectedIconPath: 'static/tabbar/reserve-selected-dark.png',
        pagePath: 'pages/booking/index',
        text: '预约',
      },
      {
        iconPath: 'static/tabbar/my.png',
        selectedIconPath: 'static/tabbar/my-selected-dark.png',
        pagePath: 'pages/user/my',
        text: '我的',
      },
    ],
  },
})
