// pages/select/select.js
const userlogin = wx.cloud.database().collection('userlogin')
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hidInput:true,//选择推拿师时，需要输入密码
    cPwd:""//公司密码
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  onShow:function(options){
    wx.hideHomeButton({
      complete: (res) => {
        console.log("隐藏成功！")
      },
    })
  },
 //选择顾客
  selectUser:function(){
    this.setData({
      hidInput: true
    })
    console.log("hahhaha")
    app.userDate.userInfo.identity ='user'
    app.userDate.userInfo.userName ='推拿用户'
    console.log("sfhhaha")
    wx.cloud.callFunction({
      name: "update",
      data: {
        phone: app.userDate.userInfo.userPhone,
        id: 'user',
        name: "推拿用户"
      }, success(res) {
        console.log("更新小程序用户身份成功", res, app.userDate.userInfo.userPhone)
      },fail(res){
        console.log("更新身份失败",res)
      }
    })
    wx.navigateTo({
      url: '/pages/information/information',
    })
  },
  companyPwd: function (res) {
     this.setData({
       cPwd: res.detail.value
     })
  },
  //选择推拿师
  selectStaff:function(){
    this.setData({
      hidInput:false
    })
    app.userDate.userInfo.identity='staff'
    app.userDate.userInfo.userName="推拿师"
    wx.cloud.callFunction({
      name:"update",
      data:{
        phone: app.userDate.userInfo.userPhone,
        id:'staff',
        name: "推拿师"
      },success(res){
        console.log("更新小程序用户身份成功")
      }
    })
  },
  isPwdRight:function(){
    if (this.data.cPwd == "anan1234") {//会不会不太安全，如果员工离职情况，密码泄露，向老板发送验证码？
      wx.switchTab({
        url: '/pages/master/propaganda/propaganda',
      })
    }else{
      
    }
  },
})