// aui/packages/drawer/index.js
Component({
  externalClasses: ['a-class', 'aui-class'],

  /**
   * 组件的属性列表
   */
  properties: {
    visible: {
      type: Boolean,
      value: false
    },

    mask: {
      type: Boolean,
      value: true
    },

    maskClosable: {
      type: Boolean,
      value: true
    },

    // 是否显示右上角关闭按钮
    closable: {
      type: Boolean,
      value: true
    },

     // left right top bottom
    mode: {
      type: String,
      value: 'bottom'
    },

    // 动画时长
    duration: {
      type: Number,
      value: .3
    },

    // 标题
    title: String,

    // 显示标题
    showTitle: {
      type: Boolean,
      value: false
    },

    // 最大宽度
    maxWidth: {
      type: String,
      value: '100vw'
    },

    // 最大高度
    maxHeight: {
      type: String,
      value: '100vh'
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
    handleMaskClick() {
      if (!this.data.maskClosable) {
        return
      }
      
      this.triggerEvent('close')
      this.triggerEvent('cancel')
    }
  }
})
