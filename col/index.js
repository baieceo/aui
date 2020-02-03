// aui/packages/col/index.js
Component({
  externalClasses: ['a-class', 'aui-class'],
  options: {
    styleIsolation: 'isolated'
  },
  relations: {
    '../row/index': {
      type: 'parent',
      linked(target) {
        this.change()
      },
      linkChanged(target) {
        this.change()
      },
      unlinked(target) {
        this.change()
      }
    }
  },
  /**
   * 组件的属性列表
   */
  properties: {
    gutter: {
      type: Number,
      value: 0
    },
    span: Number,  // 栅格的占位格数，可选值为0~24的整数，为 0 时，相当于display:none
    push: Number,  // 栅格向右移动格数
    pull: Number  // 栅格向左移动格数
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
    change(event) {

    }
  }
})
