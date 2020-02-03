// aui/packages/divider/index.js
Component({
  externalClasses: ['a-class', 'aui-class'],
  options: {
    styleIsolation: 'isolated'
  },
  /**
   * 组件的属性列表
   */
  properties: {
    // 水平还是垂直类型，可选值为 horizontal 或 vertical
    type: {
      type: String,
      value: 'horizontal'
    },
    dashed: {
      type: Boolean,
      value: false
    },
    size: {
      type: Number,
      value: 10
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
