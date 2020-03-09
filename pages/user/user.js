// pages/user/user.js
var app = getApp()
var fileData = require('../../utils/data.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    function_item: fileData.getUserFunction(),
    userImage: '../../images/icon/weixing.png',
    userName:'推拿顾客',
    userNumber:'12312341234',

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if(app.userDate.userInfo==null){
      wx.redirectTo({
        url: '/pages/login/login',
      })
    }else{
      console.log("为界面传数据")
      this.setData({//向界面传值（用户电话、用户名、头像）
        userNumber: app.userDate.userInfo.userPhone,
        userName: app.userDate.userInfo.userName,
        userImage: app.userDate.userInfo.headPicture
      })
    }
  },

  switchToLogin:function(){
    wx.reLaunch({
      url: '/pages/login/login',
    })
  },
  bindgetuserinfo:function(e){
    console.log(e)
    let username=e.detail.userInfo.nickName
    let userimage = e.detail.userInfo.avatarUrl
    this.setData({
      userName:username,
      userImage:userimage
    })
    },
  onShow: function () {
    wx.hideTabBar({
      success: function () {
        console.log("隐藏Tabbar")
        //根据不同的身份得到不同的TabBar
        app.onTabBar(app.userDate.userInfo.identity);
      }
    })
  }
})