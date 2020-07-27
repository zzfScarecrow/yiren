// pages/about/about.js
Page({
  makeTheCall: function() {
    wx.makePhoneCall({
      phoneNumber: '18210305816',
    })
  }
})