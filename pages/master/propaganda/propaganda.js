// pages/master/home/home.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    wx.hideTabBar({
      success: function () {
        app.onTabBar('staff');
      }
    })
  },
 //页面转跳
 navigateCompany:function(){
    wx.navigateTo({
      url: '/pages/master/propaganda/page/company/company',
    })
  },
  navigateStuffInfo:function(){
    wx.navigateTo({
      url: '/pages/master/propaganda/page/staffInfo/staffInfo',
    })
  } ,
  navigateStoreInfo:function(){
    wx.navigateTo({
      url: '/pages/master/propaganda/page/storeInfo/storeInfo',
    })
  } ,
  navigatePush:function(){
    wx.navigateTo({
      url: '/pages/master/propaganda/page/push/push',
    })
  }

})