// 导入公用模块
var common = require("../../common/common.js")

// 获取APP实例
var instance = getApp();



Page({

  /**
   * 页面的初始数据
   */
  data: {
    showText:"简单数据绑定",
    id:"test",
    condition:true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log("打印oneString>>>"+instance.oneString)
    common.show("就是我")
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  },

  // 按钮响应
  buttonAction: function(event) {
    wx.navigateTo({
      url: '../scrollView/scrollView',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },

  // 天伦卷闸门
  buttonjzmAction: function(event) {
    wx.navigateTo({
      url: '../jzm/jzm',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  }
})