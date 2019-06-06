// 注册一个小程序示例
App({
  // 小程序初始化完成时
  onLaunch: function (options) {
    // 获取用户信息
    console.log(options)
  },
  // 小程序显示出来时
  onShow: function (options) {
    // 1.判断小程序的进入场景
    console.log(options)
    switch(options.scene) {
      case 1001:
        break;
      case 1005:
        break;
    }

    // 2.获取用户的信息, 并且获取到用户信息之后, 将用户的信息传递给服务器
    wx.getUserInfo({
      success: function(res) {
        console.log(res)
      }
    })
  },
  // 小程序隐藏时
  onHide: function () {
    
  },
  // 小程序产生一些错误
  onError: function (msg) {
    
  },
  globalData: {
    name: 'coderwhy',
    age: 18
  }
})
