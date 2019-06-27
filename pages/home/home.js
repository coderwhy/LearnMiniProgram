// pages/home/home.js
Page({
  data: {
    counter: 0
  },
  handleIncrement(event) {
    console.log('---------', event)
    this.setData({
      counter: this.data.counter + 1
    })
  },
  handleTabClick(event) {
    console.log(event)
  }
})