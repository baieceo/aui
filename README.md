# aui
微信小程序UI组件库

# 如何使用
到 [GitHub](https://github.com/baieceo/aui) 下载 aui 的代码，将 dist 目录拷贝到自己的项目中。然后按照如下的方式使用组件，以 Button 为例：

1. 添加需要的组件。在页面的 json 中配置（路径根据自己项目位置配置）：
```
"usingComponents": {
    "aui-button": "../../src/button/index"
}
```
2. 在 wxml 中使用组件：
```
<aui-button type="primary" bind:click="handleClick">这是一个按钮</i-button>
```

# 组件列表
1. Avatar 头像组件
在 .json 中引入组件
```
"usingComponents": {
    "aui-avatar": "../../dist/avatar/index",
}
```
示例
```
<aui-avatar aui-class="aui-comment__avatar" src="{{ avatar }}" size="82" border-width="0" />
```
Avatar properties

属性|说明|类型|默认值
-|-|-|-
aui-class|自定义 class 类名|String|-
size|头像大小 rpx|Number|160
borderColor|边框颜色|String|#FF7740
borderWidth|边框大小|Number|2
background|背景颜色|String|#F8F8F8

2. Button 按钮组件
在 .json 中引入组件
```
"usingComponents": {
    "aui-button": "../../dist/button/index",
}
```

示例
```
<aui-button type="primary" shape="circle" size="large" long bindtap="handleAddAddress">按钮</aui-button>
```
Button properties
|属性|说明|类型|默认值|
|-|-|-|-|
|i-class|自定义 class 类名|String|-|
|type|按钮类型，可选值为 default, primary, ghost, info, success, warning, error 或者不设置|String|-|
|inline|是否为行内元素，开启后宽度为自适应|Boolean|false|
|size|按钮大小，可选值为 large、small、default 或者不设置|String|-|
|shape|按钮形状，可选值为 circle 和 square|String|square|
|disabled|设置按钮为禁用状态|Boolean|false|
|loading|设置按钮为加载中状态|Boolean|false|
|long|开启后，按钮没有间距|Boolean|false|
|open-type|微信开放能力|String|-|
|app-parameter|打开 APP 时，向 APP 传递的参数|String|-|
|hover-start-time|按住后多久出现点击态，单位毫秒|Number|20|
|hover-stay-time|手指松开后点击态保留时间，单位毫秒|Number|70|
|session-from|会话来源|String|-|
|send-message-title|会话内消息卡片标题|String|当前标题|
|send-message-path|会话内消息卡片点击跳转小程序路径|String|当前分享路径|
|send-message-img|会话内消息卡片图片|String|截图|
|send-message-card|显示会话内消息卡片|Boolean|false|
Button events
|事件名|说明|返回值|
|-|-|-|
|bind:click|按钮在可用状态被点击时触发|-|
|bind:getuserinfo|用户点击该按钮时，会返回获取到的用户信息，从返回参数的detail中获取到的值同wx.getUserInfo|-|
|bind:contact|客服消息回调|-|
|bind:getphonenumber|获取用户手机号回调|-|
bind:error	当使用开放能力时，发生错误的回调|-|

3. Calendar 日历组件
在 .json 中引入组件
```
"usingComponents": {
    "aui-calendar": "../../dist/calendar/index",
}
```

示例
```
<aui-calendar 
    value="{{ dateId }}"
    options="{{ calendarOptions }}"
    valid-range="{{ calendarValidRange }}"
    bind:change="handleCalendarDateClick"
    bind:month-change="handleMonthChange"
/>
```
Calendar properties
|属性|说明|类型|默认值|
|-|-|-|-|
|value|当前选择日期, 传递 Date 对象会接收到空值，需转成时间戳传递过来|Date|-|
|validRange|设置可显示日期 ['2019/08/08', '2019/08/09'] 开启此设置后，非此数组日期禁用|Array|-|
|options|日期设置，[{ value: '2019/08/08', text: '提示文案' }]|Array|-|
|disabledPrev|禁用上月按钮|Boolean|false|
|options|日期设置，[{ value: '2019/08/08', text: '提示文案' }]|Array|-|
|defaultValue|当前日期，默认系统当日|Date|new Date()|
|firstDayOfWeek|周起始日 1 到 7|Number|7|
|weeks|自定义星期几文字|Array|['一', '二', '三', '四', '五', '六', '日']|
Calendar events
|事件名|说明|返回值|
|-|-|-|
|bind:change|日期选择回调|String|
|bind:month|月份选择回调|String|



4. Row 行组件
在 .json 中引入组件
```
"usingComponents": {
    "aui-row": "../../dist/row/index",
}
```
示例
```
<aui-row type="flex" align="middle" gutter="30">
    <aui-col>
      <text>第1列</text>
    </aui-col>
    <aui-col wx:if="{{ model.groupPrice !== undefined }}">
      <text>第2列</text>
    </aui-col>
</aui-row>
```
Row properties
|属性|说明|类型|默认值|
|-|-|-|-|
|aui-class|自定义 class 类名|String|-|
|type|类型，可选 flex 弹性布局|String|-|
|gutter|栅格间距，单位 rpx，左右平分|Number|0|
|align|flex 布局下的垂直排列方式 top/middle/bottom|String|top|
|justify|flex 布局下的水平排列方式 start/end/center/space-around/space-between|String|start|




5. Col 列组件
在 .json 中引入组件
```
"usingComponents": {
    "aui-col": "../../dist/col/index",
}
```
示例
```
<aui-row type="flex" align="middle" gutter="30">
    <aui-col>
      <text>第1列</text>
    </aui-col>
    <aui-col wx:if="{{ model.groupPrice !== undefined }}">
      <text>第2列</text>
    </aui-col>
</aui-row>
```
Col properties
|属性|说明|类型|默认值|
|-|-|-|-|
|aui-class|自定义 class 类名|String|-|
|gutter|栅格间距，单位 rpx，左右平分|Number|0|
|span|栅格的占位格数，可选值为0~24的整数，为 0 时，相当于display:none|Number|-|
|push|栅格向右移动格数|Number|-|
|pull|栅格向左移动格数|Number|-|




6. Comment 评论组件
在 .json 中引入组件
```
"usingComponents": {
    "aui-comment": "../../dist/comment/index",
}
```
示例
```
<aui-comment avatar="imageUrl" author="作者" score="{{ 5 }}" likes="{{ 100 }}" content="评论内容" praised="{{ false }}" imageList="{{ [图片数组] }}" />
```
Comment properties
|属性|说明|类型|默认值|
|-|-|-|-|
|aui-class|自定义 class 类名|String|-|
|avatar|头像Url|String|-|
|author|作者|String|-|
|score|评分|Number|-|
|likes|点赞数|Number|-|
|content|评论内容|String|-|
|praised|是否已点赞|Boolean|-|
|imageList|图片列表|Array|-|




7. CountDown 倒计时组件
在 .json 中引入组件
```
"usingComponents": {
    "aui-count-down": "../../dist/countdown/index",
}
```
示例
```
<aui-count-down
    format="{{ format }}"
    target="{{ target }}"
    aui-class="aui-countdown"
    aui-class-text="aui-countdown__text"
    bind:callback="handleCountdownEnd"
/>
```
CountDown properties
|属性|说明|类型|默认值|
|-|-|-|-|
|aui-class|自定义 class 类名|String|-|
|aui-class-text|自定义倒计时文字 class 类名|String|-|
|auto|自动开始倒计时|Boolean|true|
|format|倒计时文字格式|String|HH:mm:ss|
|target|倒计时目标时间戳|Number|-|

CountDown events
|事件名|说明|返回值|
|-|-|-|
|bind:callback|倒计时结束回调|-|




8. Divider 分割线组件
在 .json 中引入组件
```
"usingComponents": {
    "aui-divider": "../../dist/divider/index",
}
```
示例
```
<aui-divider />
```
Divider properties
|属性|说明|类型|默认值|
|-|-|-|-|
|aui-class|自定义 class 类名|String|-|
|type|水平还是垂直类型，可选值为 horizontal 或 vertical|String|horizontal|
|dashed|是否为虚线|Boolean|false|
|size|分割线大小 rpx|Number|10|





9. Drawer 抽屉组件
在 .json 中引入组件
```
"usingComponents": {
    "aui-drawer": "../../dist/drawer/index",
}
```
示例
```
<aui-drawer
    aui-class="modal-share"
    visible="{{ visible }}"
    maskClosable="{{ true }}"
    closable="{{ false }}"
    bind:cancel="handleCancel"
  >
  <view class="container">
    <text>抽屉组件</text>
  </view>
</aui-drawer>
```
Drawer properties
|属性|说明|类型|默认值|
|-|-|-|-|
|aui-class|自定义 class 类名|String|-|
|visible|是否显示|Boolean|false|
|mask|是否遮罩|Boolean|true|
|maskClosable|点击遮罩关闭|Boolean|true|
|closable|是否显示右上角关闭按钮|Boolean|true|
|mode|弹出方向 left right top bottom|String|bottom|
|duration|动画时长 秒|Number|.3|
|title|标题|Number|-|
|showTitle|显示标题|Boolean|false|
|maxWidth|最大宽度|String|100vw|
|maxHeight|最大高度|String|100vh|

Drawer events
|事件名|说明|返回值|
|-|-|-|
|bind:close|关闭回调|-|
|bind:cancel|取消回调|-|




10. Result 结果组件
在 .json 中引入组件
```
"usingComponents": {
    "aui-result": "../../dist/result/index",
}
```
示例
```
<aui-result title="暂时没有相关订单" sub-title="更多精彩内容等您发现">
    <view slot="extra">
      <aui-button type="primary" shape="circle" size="large" long bindtap="handleGo">看演出</aui-button>
    </view>
</aui-result>
```
Result properties
|属性|说明|类型|默认值|
|-|-|-|-|
|aui-class|自定义 class 类名|String|-|
|status|结果的状态,决定图标和颜色 success/error/info/warning|String|info|
|title|文字|String|-|
|subTitle|子标题|String|-|
|iconSize|图标大小|String|150rpx|
|iconColor|图标颜色|String|-|

Result slot
|名称|说明|
|-|-|
|-|默认插槽|
|extra|额外信息|



11. Rate 评分组件
在 .json 中引入组件
```
"usingComponents": {
    "aui-rate": "../../dist/rate/index",
}
```
示例
```
<aui-rate value="{{ 10 }}" bind:change="handleChange" />
```
Rate properties
|属性|说明|类型|默认值|
|-|-|-|-|
|aui-class|自定义 class 类名|String|-|
|allowClear|是否允许再次点击后清除|Boolean|true|
|disabled|是否只读，无法进行交互|Boolean|false|
|allowHalf|是否允许半星|Boolean|true|
|max|最大分值|Number|10|
|count|星星数|Number|5|
|value|评分|Number|0|
|color|颜色|String|#FF6A4C|
|normalColor|背景颜色|String|#CCC|
|textColor|文字颜色|String|#FF6A4C|
|size|星星大小|String|28rpx|
|showText|是否显示分数文字|Boolean|true|
|texts|每颗星星文字|Array|-|
|orientation|文字显示位置 left/right|String|right|
|textSize|文字大小|String|32rpx|
|starWidth|星星宽度|String|auto|

Rate events
|事件名|说明|返回值|
|-|-|-|
|bind:change|数值改变回调|-|




12. Spin 加载中组件
在 .json 中引入组件
```
"usingComponents": {
    "aui-spin": "../../dist/spin/index",
}
```
示例
```
<aui-spin />
```
Spin properties
|属性|说明|类型|默认值|
|-|-|-|-|
|aui-class|自定义 class 类名|String|-|
|fix|是否固定，需要父级有 relative 或 absolute|Boolean|true|



13. WhiteSpace 上下补白组件
在 .json 中引入组件
```
"usingComponents": {
    "aui-white-space": "../../dist/white-space/index",
}
```
示例
```
<aui-white-space>
  <text>上下补白</text>
</aui-white-space>
```
WhiteSpace properties
|属性|说明|类型|默认值|
|-|-|-|-|
|aui-class|自定义 class 类名|String|-|
|size|上下间距 rpx|Number|20|



14. WingBlank 两侧补白组件
在 .json 中引入组件
```
"usingComponents": {
    "aui-wing-blank": "../../dist/wing-blank/index",
}
```
示例
```
<aui-wing-blank>
  <text>两侧补白</text>
</aui-wing-blank>
```
WhiteSpace properties
|属性|说明|类型|默认值|
|-|-|-|-|
|aui-class|自定义 class 类名|String|-|
|size|两侧间距 rpx|Number|20|




15. Panel 面板组件
在 .json 中引入组件
```
"usingComponents": {
    "aui-panel": "../../dist/panel/index",
}
```
示例
```
<aui-panel title="标题">
  <view slot="content"><text>内容</text></view>
  <view slot="footer"><text>脚注</text></view>
</aui-panel>
```
Panel slot
|名称|说明|
|-|-|
|-|默认插槽|
|content|内容|
|footer|脚注|
