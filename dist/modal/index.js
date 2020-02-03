// aui/packages/modal/index.js
Component({
  externalClasses: ['a-class', 'aui-class', 'a-class-mask', 'aui-class-mask', 'aui-class-body'],
  
  /**
   * 组件的属性列表
   */
  properties: {
    // 是否显示右上角关闭按钮
    closable: {
      type: Boolean,
      value: true
    },
    maskClosable: {
      type: Boolean,
      value: true
    },
    // 是否显示组件
    visible: {
      type: Boolean,
      value: false
    },
    // 标题
    title: {
      type: String,
      value: ''
    },
    // 是否显示取消按钮
    showCancel: {
      type: Boolean,
      value: true
    },
    width: {
      type: String,
      value: '70vw'
    },
    height: {
      type: String,
      value: 'auto'
    },
    maxHeight: {
      type: String,
      value: '80vh'
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
    handleClickItem({ currentTarget = {} }) {
      const dataset = currentTarget.dataset || {}
      const { index } = dataset
      this.triggerEvent('click', { index })
    },
    handleClickOk() {
      this.triggerEvent('ok')
    },
    handleClickCancel() {
      this.triggerEvent('cancel')
    },
    handleMaskClick() {
      if (!this.data.maskClosable) {
        return
      }

      this.triggerEvent('close')
      this.triggerEvent('cancel')
    }
  }
})
