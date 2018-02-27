App({

  // 生命周期

  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function () {
    console.log("当小程序初始化完成时，会触发 onLaunch（全局只触发一次）")
  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function (options) {

    // 调用私有方法和属性
    this.oneFun(this.oneString)
  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {
    
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {
    
  },

  // 其他属性、方法
  oneString:"我只是一个文本而已啊",

  oneFun:function(str){
    console.log(str)
  }








})
