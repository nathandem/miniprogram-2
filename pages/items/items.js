// pages/newpage/newpage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  // let's add a comment

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(Date.now())
    console.log("Items page is loaded")
    wx.showNavigationBarLoading()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log(Date.now())
    console.log("Items page is ready")
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log(Date.now())
    console.log("Items page is shown")
    wx.setNavigationBarTitle({
      title: '新品',
      success: function(res){
        console.log(res)
      }
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log(Date.now())
    console.log("Items page is hidden")
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

  }
})
