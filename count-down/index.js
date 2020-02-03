// aui/packages/count-down/index.js
Component({
  externalClasses: ['a-class', 'aui-class', 'aui-class-text', 'aui-class-normal'],
  properties: {
    auto: {
      type: Boolean,
      value: true
    },
    target: {
      type: Number,
      observer: function () {
        this.getFormat()
      }
    },
    callback: String,
    format: {
      type: String,
      value: 'HH:mm:ss'
    },
    clearTimer: Boolean
  },
  data: {
    time: []
  },
  ready() {
    this.getFormat()
  },
  methods: {
    getFormat() {
      this.getLastTime()
    },
    init() {
      const self = this

      if (this.data.auto) {
        setTimeout(function () {
          self.getLastTime.call(self)
        }, 1000)
      }
    },
    getLastTime() {
      const data = this.data
      const gapTime = Math.ceil((data.target - new Date().getTime()) / 1000)

      let result = ''
      let time = this.getFormatResult(0, 0, 0, 0)
      let day = ''

      if (gapTime > 0) {
        let lastTime = gapTime

        if (/DD/.test(this.data.format)) {
          day = this.formatNum(parseInt(gapTime / 86400))

          lastTime = gapTime % 86400
        }

        const hour = this.formatNum(parseInt(lastTime / 3600))

        lastTime = lastTime % 3600
        
        const minute = this.formatNum(parseInt(lastTime / 60))
        const second = this.formatNum(lastTime % 60)

        time = this.getFormatResult(day, hour, minute, second)

        if (!data.clearTimer) this.init.call(this)
      } else {
        this.endfn()
      }

      result = time

      this.setData({
        time: result
      })

    },
    formatNum(num) {
      return num > 9 ? num : `0${num}`
    },
    getFormatResult(day, hour, minute, second) {
      const slef = this
      let format = this.data.format
      let result = []
      const options = [
        ['D', day], ['DD', day],
        ['H', hour], ['HH', hour],
        ['m', minute], ['mm', minute],
        ['s', second], ['ss', second]
      ]
      const regText = /^\{\{([^\{\}]*)\}\}$/

      options.forEach(item => {
        const [letter, value] = item

        format = format.replace(new RegExp(letter, 'g'), (matchValue, matchIndex, source) => {
          if (source[matchIndex - 1] !== matchValue[0] && source[matchIndex + matchValue.length] !== matchValue[0]) {
            if (letter.length === 1) {
              return '$${{' + value.toString().replace(/^0/, '') + '}}$$'
            } else if (letter.length === 2) {
              return '$${{' + slef.formatNum(parseInt(value)) + '}}$$'
            }
          }

          return matchValue
        })
      })

      result = format.split('$$')

      result = result.filter(item => item !== '')

      result = result.map(item => {
        if (regText.test(item)) {
          return {
            type: 'text',
            value: item.match(regText)[1]
          }
        } else {
          return {
            type: 'normal',
            value: item
          }
        }
      })

      return result
    },
    endfn() {
      this.triggerEvent('callback')
    }
  }
})