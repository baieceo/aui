// aui/packages/rate/index.js
Component({
  externalClasses: ['a-class', 'aui-class'],
  /**
   * 组件的属性列表
   */
  properties: {
    // 是否允许再次点击后清除
    allowClear: {
      type: Boolean,
      value: true
    },

    // 是否只读，无法进行交互
    disabled: {
      type: Boolean,
      value: false
    },

    // 是否允许半星
    allowHalf: {
      type: Boolean,
      value: true
    },

    // 最大分值
    max: {
      type: Number,
      value: 10
    },

    // 星星数
    count: {
      type: Number,
      value: 5
    },

    // 评分
    value: {
      type: Number,
      value: 0,
      observer: function () {
        this.generateRate()
      }
    },

    // 颜色
    color: {
      type: String,
      value: '#FF6A4C'
    },
    // 背景颜色
    normalColor: {
      type: String,
      value: '#CCC'
    },
    // 文字颜色
    textColor: {
      type: String,
      value: '#FF6A4C'
    },
    // 星星大小
    size: {
      type: String,
      value: '28rpx'
    },
    // 是否显示分数文字
    showText: {
      type: Boolean,
      value: true
    },

    // 每颗星星文字
    texts: Array,

    // 文字显示位置 left/right
    orientation: {
      type: String,
      value: 'right'
    },
    // 文字大小
    textSize: {
      type: String,
      value: '32rpx'
    },
    // 星星宽度
    starWidth: {
      type: String,
      value: 'auto'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    full: 0,
    half: 0,
    percent: 0,
    textValue: 0
  },

  /**
   * 组件的生命周期 
   */
  lifetimes: {
    attached: function () {
      this.generateRate()
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 创建星星
    generateRate: function () {
      const count = this.data.count
      const max = this.data.max
      const ratio = max / count

      let value = Number(this.data.value)

      if (value > count * ratio) value = count * ratio
      if (value < 0) value = 0

      const full = Math.floor(value / ratio)
      const percent = ((value / ratio) - parseInt(value / ratio)) * 100
      const textValue = value ? ((Math.round(value * 10)) / 10).toFixed(1) : 0

      this.setData({
        full: full,
        percent: percent,
        textValue: textValue
      })
    },
    // 处理星星点击
    handleClickStar: function (ev) {
      if (this.data.disabled) return

      const ratio = this.data.max / this.data.count

      let index = ev.currentTarget.dataset.index
      let value

      value = (index + 1) * ratio
      
      if (this.data.allowClear && (value === this.data.value)) {
        value = 0
      }

      this.triggerEvent('change', {
        value
      })
    }
  }
})
