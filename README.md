# aui
微信小程序UI组件库

如何使用 #
到 GitHub 下载 Aui 的代码，将 src 目录拷贝到自己的项目中。然后按照如下的方式使用组件，以 Button 为例：

1. 添加需要的组件。在页面的 json 中配置（路径根据自己项目位置配置）：

"usingComponents": {
    "aui-button": "../../src/button/index"
}
2. 在 wxml 中使用组件：

<aui-button type="primary" bind:click="handleClick">这是一个按钮</i-button>
