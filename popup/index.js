// aui/packages/popup/index.js
Component({
  externalClasses: ['a-class', 'aui-class'],
  options: {
    multipleSlots: true,
    styleIsolation: 'isolated'
  },
  /**
   * 组件的属性列表
   */
  properties: {
    // 是否可显示
    visible: {
      type: Boolean,
      value: false
    },
    // 弹出层标题
    title: {
      type: String,
      value: ''
    },
    // 是否显示遮罩层
    mask: {
      type: Boolean,
      value: true
    },
    // 点击遮罩层是否可以关闭弹层
    maskClosable: {
      type: Boolean,
      value: false
    },
    // 右上角是否显示关闭按钮
    closable: {
      type: Boolean,
      value: true
    },
    // 弹出方向 top/right/bottom/left
    position: {
      type: String,
      value: 'bottom'
    },
    duration: {
      type: Number,
      value: 1
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
    changeValue (value) {
      let timer = null

      if (!value) {
        this.triggerEvent('cancel')
      }

      const ctx = this
      const events = ['sync', 'input', 'update', 'visible-change']
      const options = [
        { value }
      ]

      events.forEach(type => {
        ctx.triggerEvent(
          type,
          ...options
        )
      })
    },
    // 处理点击遮罩层事件
    handleMaskClick () {
      if (this.data.maskClosable) {
        this.handleClose()
      }
    },
    handleClose () {
      this.changeValue(false)
    },
    changeVisible(visible) {
      let timer = null
      
      if (visible) {
      } else {
        timer = setTimeout(() => {
          clearTimeout(timer)

          timer = null
        }, this.data.duration * 1000)
      }
    }
  },
  ready () {
  }
})
