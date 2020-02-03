// aui/packages/navbar/index.js
const app = getApp()

Component({
  externalClasses: ['a-class', 'aui-class'],
  // 启用插槽
  options: {
    multipleSlots: true,
    styleIsolation: 'isolated'
  },

  lifetimes: {
    attached: function () {
      const self = this

      if (app.globalData.statusBarHeight) {
        this.setData({
          statusBarHeight: app.globalData.statusBarHeight
        })
      } else {
        wx.getSystemInfo({
          success: e => {
            const { statusBarHeight } = e

            app.globalData.statusBarHeight = statusBarHeight

            this.setData({
              statusBarHeight
            })
          }
        })
      }
    }
  },
  
  /**
   * 组件的属性列表
   */
  properties: {
    title: String,
    // 标题大小 small/large
    titleSize: {
      type: String,
      value: 'small'
    },
    // 隐藏返回按钮
    hideBack: {
      type: Boolean,
      value: false
    },
    // 隐藏首页按钮
    hideHome: {
      type: Boolean,
      value: false
    },
    // 自定义返回函数
    customBack: Boolean,
    // 自定义首页函数
    customHome: Boolean
  },

  /**
   * 组件的初始数据
   */
  data: {
    navBarHeight: 0,
    statusBarHeight: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 返回上一页
    handleGotoBack: function () {
      if (this.data.customBack) {
        this.triggerEvent('back')
      } else {
        const pages = getCurrentPages()

        if (pages.length > 1) {
          wx.navigateBack()
        } else {
          this.handleGotoHome()
        }
      }

      this.triggerEvent('tap-back')
    },
    // 返回首页
    handleGotoHome: function () {
      if (this.data.customHome) {
        this.triggerEvent('on-home')
      } else {
        wx.reLaunch({
          url: '/pages/index/index'
        })
      }
      
      this.triggerEvent('tap-home')
    }
  }
})
