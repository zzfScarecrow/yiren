// components/goods-list/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    dataSource: {
      type: "array",
      /**
       * status, item 状态，0：正常展示；1：审核中；2：已通过；3: 已驳回;4：已关闭（待付款）
       */
      default: [{
        picture: "/images/orange.svg",
        title: "Default Title",
        content: "default content",
        phone: "000000",
        status: 3,
        rejectReason: "信息违规"
      }]
    },
    canCall: {
      type: "bool",
      default: true,
    },
    showStatus: {
      type: "bool",
      default: false
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
