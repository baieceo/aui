// aui/packages/avatar/index.js
Component({
  externalClasses: ['a-class', 'aui-class'],

  options: {
    styleIsolation: 'isolated'
  },
  /**
   * 组件的属性列表
   */
  properties: {
    src: String,
    size: {
      type: Number,
      value: 160
    },
    borderColor: {
      type: String,
      value: '#FF7740'
    },
    borderWidth: {
      type: Number,
      value: 2
    },
    background: {
      type: String,
      value: '#F8F8F8'
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
