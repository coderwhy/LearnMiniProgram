// pages/image/image.js
Page({
  data: {
    imagePath: ''
  },
  handleChooseAlbum() {
    // 系统API,让用户在相册中选择图片(或者拍照)
    wx.chooseImage({
      success: (res) => {
        // 1.取出路径
        const path = res.tempFilePaths[0]

        // 2.设置imagePath
        // this: undefined
        this.setData({
          imagePath: path
        })
      },
    })
  },
  handleImageLoad() {
    console.log('图片加载完成')
  }
})