// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imageList: ["../../images/hot.jpeg", "../../images/hot.jpeg", "../../images/hot.jpeg", "../../images/hot.jpeg", "../../images/hot.jpeg", "../../images/hot.jpeg", "../../images/hot.jpeg", "../../images/hot.jpeg", "../../images/hot.jpeg", "../../images/hot.jpeg", "../../images/hot.jpeg"],
    phone: '18210305816'
  },

  makeTheCall: function() {
    wx.makePhoneCall({
      phoneNumber: this.data.phone,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('options: ', options)
    // TODO get details from remote
  },

  preview: function(event) {
    let currentUrl = event.currentTarget.dataset.src
    console.log('currentUrl: ', currentUrl)
    wx.previewImage({
      current: "https://tse1-mm.cn.bing.net/th/id/OIP.7jvtf5utWZ4jsLwMUQkUNQHaEV?w=301&h=180&c=7&o=5&pid=1.7", // 当前显示图片的http链接
      urls: this.data.imageList // 需要预览的图片http链接列表
    })
  }
})