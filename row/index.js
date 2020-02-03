// aui/packages/row/index.js
Component({
  externalClasses: ['a-class', 'aui-class'],
  options: {
    styleIsolation: 'isolated'
  },
  relations: {
    '../col/index': {
      type: 'child',
      linked(target) {
        this.changeItem(target)
      },
      linkChanged(target) {
        this.changeItem(target)
      },
      unlinked(target) {
        this.changeItem(target)
      }
    }
  },

  /**
   * 组件的属性列表
   */
  properties: {
    type: String,
    // 栅格间距，单位 rpx，左右平分
    gutter: {
      type: Number,
      value: 0
    },
    // flex 布局下的垂直排列方式 top/middle/bottom
    align: {
      type: String,
      value: 'top'
    },
    // flex 布局下的水平排列方式 start/end/center/space-around/space-between
    justify: {
      type: String,
      value: 'start'
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
    changeItem(target) {
      let me = this
      let nodes = this.getRelationNodes('../col/index')

      nodes.forEach((node, index) => {
        node.setData({
          gutter: me.data.gutter
        })
      })
    },
  }
})
