// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goods: [{
      picture: "../../images/hot.jpeg",
      title: "我有土鸡蛋我有土鸡蛋我有土鸡蛋我有土鸡蛋我有土鸡蛋我有土鸡蛋我有土鸡蛋",
      content: "请联系我请联系我请联系我请联系我请联系我请联系我请联系我请联系我请联系我请联系我请联系我请联系我请联系我请联系我请联系我",
      phone: "000000",
      status: 3,
      rejectReason: "信息违规",
      itemId: "111"
    },{
      picture: "../../images/hot.jpeg",
      title: "2222222",
      content: "请联系",
      phone: "000000",
      status: 3,
      rejectReason: "信息违规",
      itemId: "111"
    }],
    inputFocused: true,
    search: "",
    tags: wx.getStorageSync('history') || [],
  },

  onFocus: function() {
    console.log('onFocus...')
    this.setData({
      inputFocused: true
    })
  },

  onBlur: function() {
    console.log('onBlur...')
    this.setData({
      inputFocused: false
    })
  },

  onInput: function(e) {
    console.log('input: ', e.detail)
    this.onChange(e.detail)
  },

  onTapTag: function(e) {
    const {
      value
    } = e.target.dataset
    this.onChange(value)
  },

  onChange: function(value) {
    this.setData({
      search: value
    })
  },

  deleteHistory: function() {
    this.setData({
      tags: [],
      inputFocused: true
    })
    wx.removeStorage({
      key: 'history'
    })
  },

  onConfirm: function(e) {
    const value = e.detail
    const currentHistory = wx.getStorageSync('history') || []
    const valueIndex = currentHistory.indexOf(value)
    if (valueIndex >= 0) {
      currentHistory.splice(valueIndex, 1)
    }
    currentHistory.unshift(value)
    if (currentHistory.length > 10) {
      currentHistory.pop()
    }
    wx.setStorageSync('history', currentHistory)
    this.setData({
      tags: wx.getStorageSync('history') || []
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  onCancel: wx.navigateBack
})