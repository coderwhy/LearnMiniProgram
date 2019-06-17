// pages/wxml/wxml.js
Page({
  data: {
    message: '你好小程序',
    firstname: 'kobe',
    lastname: 'bryant',
    age: 12,
    nowTime: new Date().toLocaleString(),
    isActive: false,
    isShow: true,
    score: 45,
    movies: ['星际穿越', '盗梦空间', '大话西游'],
    nums: [
      [10, 14, 11, 18],
      [20, 24, 31, 48],
      [110, 124, 211, 318],
    ],
    letters: ['a', 'b', 'c']
  },
  onLoad() {
    setInterval(() => {
      this.setData({
        nowTime: new Date().toLocaleString() 
      })
    }, 1000)
  },
  handleSwitchColor(event) {
    this.setData({
      isActive: !this.data.isActive
    })
  },
  handleSwitchShow() {
    this.setData({
      isShow: !this.data.isShow
    })
  },
  handleIncrement() {
    this.setData({
      score: this.data.score + 6
    })
  },
  numberFoFixed(value) {
    return value.foFixed(2)
  }
})