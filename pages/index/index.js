//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    kingkongPosData: [{
      img: '../../images/farm.png',
      text: '农副产品',
      themeColor: '#fb773e'
    },
    {
      img: '../../images/transport.png',
      text: '公共交通',
      themeColor: 'rgb(0, 132, 255)'
    },
    {
      img: '../../images/decoration.png',
      text: '装修装饰',
      themeColor: '#AC4848'
    },
    {
      img: '../../images/life.png',
      text: '本地生活',
      themeColor: 'rgb(41, 204, 164)'
    },
    {
      img: '../../images/coopration.png',
      text: '商家入驻',
      themeColor: '#EE2929'
    }],
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
    }]
  },
  gotoSearch: function() {
    wx.navigateTo({
      url: '../search/search'
    })
  },
  gotoAbout: function() {
    wx.navigateTo({
      url: '../about/about'
    })
  },
  gotoDetail: function(e) {
    const {
      detail
    } = e
    const { itemId } = detail
    wx.navigateTo({
      url: `../detail/detail?id=${itemId}`
    })
  },
  makePhoneCall: function(e) {
    const {
      phone
    } = e.target.dataset
    wx.makePhoneCall({
      phoneNumber: phone,
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
