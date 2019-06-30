// pages/detail/detail.js
Page({
  onLoad: function (options) {
    console.log(options)
  },
  onUnload() {
    // 1.获取首页的页面对象
    // getCurrentPages当前所有栈的页面
    const pages = getCurrentPages()
    const home = pages[pages.length - 2]

    // 2.调用页面对象的setData
    home.setData({
      title: '呵呵呵'
    })
  },
  handleBackHome() {
    wx.navigateBack({
      delta: 1
    })
  }
})