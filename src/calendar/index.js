// aui/packages/calendar/index.js
Component({
  externalClasses: ['a-class', 'aui-class'],

  options: {
    styleIsolation: 'isolated'
  },
  lifetimes: {
    attached() {
      this.updateDataByDate(this.data.value || this.data.defaultValue)
    }
  },
  /**
   * 组件的属性列表
   */
  properties: {
    // 当前选择日期, 传递 Date 对象会接收到空值，需转成时间戳传递过来
    value: {
      type: Date,
      value: null,
      observer(newVal, oldVal) {
        this.setData({
          currentDate: new Date(newVal)
        })
      }
    },
    // 设置可显示日期 ['2019/08/08', '2019/08/09'] 开启此设置后，非此数组日期禁用
    validRange: Array,
    // 日期设置，{ value: '2019/08/08', text: '提示文案' }
    options: Array,
    // 禁用上月按钮
    disabledPrev: {
      type: Boolean,
      value: false
    },
    // 禁用下月按钮
    disabledNext: {
      type: Boolean,
      value: false
    },
    // 当前日期，默认系统当日
    defaultValue: {
      type: Date,
      value: +new Date(),
      observer(newVal) {
        this.setDate({
          canDisabledPrev: this.getDisabledPrev()
        })
      }
    },
    // 周起始日 1 到 7
    firstDayOfWeek: {
      type: Number,
      value: 7
    },
    // 自定义星期几文字
    weeks: {
      type: Array,
      value: ['一', '二', '三', '四', '五', '六', '日']
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    // 当前日期
    currentDate: +new Date(),
    currentYear: '',
    currentMonth: '',
    currentDay: '',
    canDisabledPrev: true,
    // 日期数据
    dateData: []
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 获取当前日期所在月第一天
    getFirstDayOfMonth(value) {
      let date = new Date(value)

      date.setDate(1)
      
      return date
    },
    // 当前月共有多少天
    getDaysOfMonth(value) {
      let date = new Date(value)

      return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
    },
    // 获取上一月第一天
    getPrevMonthFirstDay(value) {
      let date = new Date(value)

      if (date.getMonth() === 0) {
        return new Date(date.getFullYear() - 1, 12, 0)
      } else {
        return new Date(date.getFullYear(), date.getMonth(), 0)
      }
    },
    // 获取下一月第一天
    getNextMonthFirstDay(value) {
      let date = new Date(value)

      if (date.getMonth() === 11) {
        return new Date(date.getFullYear() + 1, 1, 0)
      } else {
        return new Date(date.getFullYear(), date.getMonth() + 1 + 1, 0)
      }
    },
    // 生成日历数据
    generateDaysData(value) {
      const date = new Date(value)
      const firstDayOfWeek = this.data.firstDayOfWeek  // 周几开始
      let dateData = []  // 临时数组
      let result = []  // 返回数组
      let resultIndex = 0  // 返回数组索引
      const prevMonthFirstDate = this.getPrevMonthFirstDay(date)  // 上月第一天
      const nextMonthFirstDate = this.getNextMonthFirstDay(date)  // 下月第一天
      const prevMonthDays = this.getDaysOfMonth(this.getPrevMonthFirstDay(date))  // 上月天数
      const currentMonthFirstDay = this.getFirstDayOfMonth(date)  // 当月第一天
      const currentMonthDays = this.getDaysOfMonth(date)  // 当月天数
      
      // 当月第一天数组索引下标
      let currentMonthFirstDayIndex = (currentMonthFirstDay.getDay() || 7) - (firstDayOfWeek % 7)  
      if (currentMonthFirstDayIndex < 0) currentMonthFirstDayIndex = 7 + currentMonthFirstDayIndex

      currentMonthFirstDayIndex = currentMonthFirstDayIndex % 7

      // 填充上月数据
      for (let i = 0; i < currentMonthFirstDayIndex; i++) {
        dateData.unshift(this.generateDateObject(prevMonthFirstDate.setDate(prevMonthDays - i), 'prevMonth'))
      }

      // 填充本月数据
      for (let i = 0; i < currentMonthDays; i++) {
        dateData.push(this.generateDateObject(currentMonthFirstDay.setDate(i + 1), 'currentMonth'))
      }

      // 填充下月数据
      if (dateData.length % 7) {
        for (let i = 0; i < dateData.length % 7; i++) {
          dateData.push(this.generateDateObject(nextMonthFirstDate.setDate(i + 1), 'nextMonth'))
        }
      }

      // 一维数组转化为二维数组
      dateData.forEach((item, index) => {
        if (index % 7 === 0) {
          result.push([])
          resultIndex++
        }

        result[resultIndex - 1].push(item)
      })

      return result
    },
    // 生成日期对象
    generateDateObject(date, monthFlag) {
      let result = []
      let resultDate = new Date(date)
      const value = new Date(this.data.value)  // 当前选择日期
      const dateDefault = new Date(this.data.defaultValue)  // 当前默认日期
      const isDefaultPrev = resultDate.getFullYear() === dateDefault.getFullYear() && resultDate.getMonth() === dateDefault.getMonth() && resultDate.getDate() < dateDefault.getDate()
      const { options, validRange } = this.data

      let disabled
      let text

      // 禁用上月、下月日期
      if (
        monthFlag === 'prevMonth' || 
        monthFlag === 'nextMonth' ||
        isDefaultPrev
      ) {
        disabled = true
      } else {
        disabled = false
      }

      // 禁用非 validRange 数组内的日期
      for (let i = 0; i < validRange.length; i++) {
        let item = validRange[i]

        if (new Date(item).toLocaleDateString() === resultDate.toLocaleDateString()) {
          disabled = false

          break
        } else {
          disabled = true
        }
      }

      // 节假日
      let isFestival

      if (resultDate.getDay() === 0 || resultDate.getDay() === 6) {
        isFestival = true
      } else {
        isFestival = false
      }

      // 用户自定义日期配置项
      options.forEach(item => {
        if (new Date(item.value).toLocaleDateString() === resultDate.toLocaleDateString()) {
          if (item.text) {
            text = item.text
          }
          
          if (item.disabled) {
            disabled = true
          }
        }
      })

      return {
        day: resultDate.getDate(),
        date: new Date(resultDate),
        dateString: resultDate.toLocaleDateString(),
        isCurrentDate: resultDate.setHours(0, 0, 0, 0) === value.setHours(0, 0, 0, 0),  // 判断是否是当日
        isDefaultDate: resultDate.setHours(0, 0, 0, 0) === dateDefault.setHours(0, 0, 0, 0),
        isDefaultPrev,
        isPrevMonth: monthFlag === 'prevMonth',
        isCurrentMonth: monthFlag === 'currentMonth',
        isNextMonth: monthFlag === 'nextMonth',
        isFestival,
        disabled,
        text
      }
    },
    // 点击上一月
    handleTapPrev(e) {
      if (this.data.canDisabledPrev) return

      this.setData({
        currentDate: this.getPrevMonthFirstDay(this.data.currentDate)
      })

      let dateVal = new Date(this.data.currentDate)

      dateVal.setDate(1)

      this.triggerEvent('month-change', dateVal.toLocaleDateString())
    },
    // 点击下一月
    handleTapNext(e) {
      if (this.data.disabledNext) return

      this.setData({
        currentDate: this.getNextMonthFirstDay(this.data.currentDate)
      })

      let dateVal = new Date(this.data.currentDate)

      dateVal.setDate(1)

      this.triggerEvent('month-change', dateVal.toLocaleDateString())
    },
    // 点击日期
    handleTapDate(e) {
      if (e.target.dataset.disabled) return

      this.triggerEvent('change', new Date(e.target.dataset.dateString).toLocaleDateString())
    },
    // 判断是否禁用上一月按钮
    getDisabledPrev() {
      let disabled = true
      const defaultDate = new Date(this.data.defaultValue)
      const currentDate = new Date(this.data.currentDate)

      if (
        (
          currentDate.getFullYear() === defaultDate.getFullYear()  &&
          currentDate.getMonth() < defaultDate.getMonth()
        ) ||
        (
          currentDate.getFullYear() === defaultDate.getFullYear()  &&
          currentDate.getMonth() === defaultDate.getMonth()
        ) ||
        (
          currentDate.getFullYear() < defaultDate.getFullYear()
        )
      ) {
        disabled = true
      } else {
        disabled = false
      }

      return disabled
    },
    updateDataByDate(date) {
      const dateVal = new Date(date)

      this.setData({
        dateData: this.generateDaysData(dateVal),
        currentYear: dateVal.getFullYear().toString(),
        currentMonth: (dateVal.getMonth() + 1).toString().padStart(2, '0'),
        currentDay: dateVal.getDate().toString(),
        canDisabledPrev: this.getDisabledPrev()
      })
    }
  },
  observers: {
    'currentDate': function (newVal) {
      this.updateDataByDate(newVal)
    }
  }
})
