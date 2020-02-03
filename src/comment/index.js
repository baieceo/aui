// aui/packages/comment/index.js
Component({
  externalClasses: ['a-class', 'aui-class'],

  options: {
    styleIsolation: 'isolated'
  },

  /**
   * 组件的属性列表
   */
  properties: {
    // 头像
    avatar: String,
    // 作者
    author: String,
    // 评分
    score: Number,
    // 点赞数
    likes: Number,
    // 内容
    content: String,
    // 是否已点赞
    praised: Boolean,
    // 图片列表
    imageList: Array
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
    handleClickLike() {
      this.triggerEvent('like')
    }
  }
})
