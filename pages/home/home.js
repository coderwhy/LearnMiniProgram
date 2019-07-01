// pages/home/home.js
import {
 getMultiData
} from '../../service/home.js'

Page({
  data: {
    banners: [],
    recommends: [],
    titles: ['流行', '新款', '精选']
  },
  onLoad: function (options) {
    // 1.请求轮播图以及推荐数据
    getMultiData().then(res => {
      // 取出轮播图和推荐的数据
      const banners = res.data.data.banner.list;
      const recommends = res.data.data.recommend.list;
      
      // 将banners和recommends放到data中
      this.setData({
        banners,
        recommends
      })
    })
  },
  handleTabClick(event) {
    // 取出index
    const index = event.detail.index;
    console.log(index)
  }
})