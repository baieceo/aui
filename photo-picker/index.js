// aui/packages/photo-picker/index.js
Component({
  externalClasses: ['a-class', 'aui-class'],
  behaviors: ['wx://form-field'],
  options: {
    styleIsolation: 'isolated',
    multipleSlots: true
  },
  /**
   * 组件的属性列表
   */
  properties: {
    title: {
      type: String,
      value: ''
    },
    key: {
      type: String,
      value: ''
    },
    image: {
      type: String,
      value: ''
    },
    button: {
      type: Boolean,
      value: true
    },
    buttonText: {
      type: String,
      value: '点击拍摄'
    },
    loading: {
      type: Boolean,
      value: false
    },
    width: {
      type: String,
      value: '640rpx'
    },
    height: {
      type: String,
      value: '380rpx'
    },
    disabled: {
      type: Boolean,
      value: false
    },
    // album	从相册选图	camera	使用相机
    sourceType: {
      type: String,
      value: [ 'album', 'camera' ]
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
    handleClickPick () {
      if (this.data.loading || this.data.disabled) return false

      const me = this

      wx.chooseImage({
        count: 1,
        sizeType: ['original', 'compressed'],
        sourceType: this.data.sourceType,
        success(res) {
          // tempFilePath可以作为img标签的src属性显示图片
          const tempFilePaths = res.tempFilePaths

          /* me.changeUrl(tempFilePaths)
          
          me.setData({
            canVisiblePick: false
          }) */

          const myEventDetail = {
            key: me.data.key,
            paths: tempFilePaths
          }  // detail对象，提供给事件监听函数
          const myEventOption = {}  // 触发事件的选项

          me.triggerEvent('success', myEventDetail, myEventOption)
          me.triggerEvent('change', myEventDetail, myEventOption)
        }
      })
    }
  }
})
