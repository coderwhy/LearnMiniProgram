// pages/button/button.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  onBindContact() {
    console.log('打开了客服会话')
  },
  onGetUserInfo(e) {
    console.log('获取用户的信息', e)
  }
})