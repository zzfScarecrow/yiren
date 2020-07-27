// pages/me/index.js
const app = getApp()
Page({
  data: {
    version: app.globalData.version
  },
  gotoAbout: function() {
    wx.navigateTo({
      url: '../about/about',
    })
  },
  gotoContact: function() {
    wx.navigateTo({
      url: '../contact/index',
    })
  }
})