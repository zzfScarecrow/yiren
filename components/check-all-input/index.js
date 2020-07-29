// components/check-all-input/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    value: {
      type: String,
      default: ""
    },
    placeholder: {
      type: String,
      default: "搜索"
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    showInput: false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onFocus: function() {
      console.log('triggerFocus')
      this.setData({
        showInput: true
      })
      this.triggerEvent("focus")
    },
    onBlur: function() {
      this.setData({
        showInput: false
      })
      this.triggerEvent("blur")
    },
    onInput: function(e) {
      const value = e.detail.value
      this.triggerEvent("input", value)
    },
    onConfirm: function(e) {
      const value = e.detail.value
      this.onBlur()
      this.triggerEvent("confirm", value)
    }
  }
})
