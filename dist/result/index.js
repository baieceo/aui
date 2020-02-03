// aui/packages/result/index.js
Component({
  externalClasses: ['a-class', 'aui-class'],
  /**
   * 组件的属性列表
   */
  properties: {
    // 结果的状态,决定图标和颜色
    // 'success' | 'error' | 'info' | 'warning'| '404' | '403' | '500'
    // 默认值： 'info'
    status: {
      type: String,
      value: 'info'
    },
    // title 文字
    title: {
      type: String
    },
    // subTitle 文字
    subTitle: {
      type: String
    },
    // 图标大小
    iconSize: {
      type: String,
      value: '150rpx'
    },
    // 图标颜色
    iconColor: {
      type: String
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    iconMode: 'aspectFit',
    iconColorDefault: {
      success: '#FF6A4C',
      error: '#FF6A4C',
      warning: '#FF6A4C',
      info: '#FF6A4C'
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
