// pages/register/register.js
var app = getApp()
const userlogin = wx.cloud.database().collection('userlogin')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    buttondisabled: true,
    buttontype: 'default',
    userphone:0,
    firstpwdData: '',
    secPwdData: '',
    phoneisright: false, //手机号格式
    isMatch: false, //两次密码是否匹配
    vericode:false,//验证码是否正确
    codename:'获取验证码',
    isPwdRight:false,//密码格式是否正确
    tipHidden:true,//密码格式错误提示信息是否隐藏
    disabled:true,
    isAgree:false,//同意用户条款
    isregister: false,//是否已经注册
  },
  //验证手机号格式是否正确
  isPhoneFormat: function (res) {
    console.log(res.detail.value)
    var reg = /^1[3456789]\d{9}$/;
    if (!reg.test(res.detail.value)) {
      wx.showToast({
        title: '手机号格式错误',
        image: "/images/icon/defeat.png"
      })
      this.setData({
        phoneisright: false
      })
    } else {
      this.setData({
        phoneisright: true,
        userphone:res.detail.value
      })
    }

    //格式无错误，验证手机号是否已经注册
    let that = this
    const userphone1 = res.detail.value
    userlogin.where({
      userPhone: userphone1
    }).get({
      success: function (res) {
        console.log("查询成功！")
        console.log(res.data)
        if (res.data == '') {
          that.setData({
            isregister: true
          })
        } else {
          wx.showToast({
            image: "/images/icon/defeat.png",
            title: '手机号已注册',
          })
          that.setData({
            isregister: false
          })
        }
      }
    })
  },
//获取验证码
  getVcode:function(){
    if(this.data.disabled){
      console.log(this.data.disabled)
    let that = this
    var num = 61;
    var timer = setInterval(function () {
      num--;
      if (num <= 0) {
        clearInterval(timer);
        that.setData({
          codename: '重新发送',
          disabled: true
        })
        console.log(that.data.disabled)

      } else {
        that.setData({
          codename: num + "s",
          disabled:false
        })
      }
    }, 1000)
    }
  },

//验证码是否正确
  isVericodeRight:function(){
     //验证成功修改vericode为true
  },

  //获取第一次输入的密码
  firstpwd: function (res) {
    console.log(res.detail.value)
    var reg = /^(\w){6,20}$/;
    if (!reg.test(res.detail.value)) {//验证密码格式
      this.setData({
        isPwdRight: false,//密码格式是否正确
        tipHidden:false,
      })
    } else {
      this.setData({
        isPwdRight: true,
        tipHidden: true,
        firstpwdData: res.detail.value
      })
    }
  },


  //获取第二次输入的密码
  secondpwd: function (res) {
    this.setData({
      secPwdData: res.detail.value
    })
    console.log(this.data.secPwdData)
    let a = this.data.firstpwdData
    let b = this.data.secPwdData
    if (a == b) {
      this.setData({
        isMatch: true,
      })
    }
    else{
      wx.showToast({
        title: '密码不相同',
        image: "/images/icon/defeat.png"
      })
      this.setData({
        isMatch: false
      })
    }

  },
  
  bindAgreeChange:function(){
    if (!this.data.isAgree){
      this.setData({
        isAgree:true
      })
      console.log(this.data.isAgree)
    }else{
      this.setData({
        isAgree: false
      })
      console.log(this.data.isAgree)
    }
  },

  //注册后跳转到填写信息页面
  switchToInfo: function () {
    if (this.data.isPwdRight){
    if (this.data.phoneisright){
      if (this.data.isregister){
      if ((this.data.isMatch) && (this.data.isAgree) ) {
        console.log("添加小程序用户")
      let that = this
      userlogin.add({
        data:{
          userPhone: that.data.userphone,
          userPwd: that.data.firstpwdData,
          identity:'',
          clubCard:'',
          userBalance:'',
          userName:'',
          headPicture: '../../images/icon/weixing.png',
        }, success: function (res) {
          // res 是一个对象，其中有 _id 字段标记刚创建的记录的 id
          console.log(res)
          console.log("添加数据成功！")
          console.log(that.data.userphone, that.data.firstpwdData)
          app.userDate.userInfo = { //全局的小程序用户信息
            userPhone: that.data.userphone,
            userPwd: that.data.firstpwdData,
            headPicture: "../../images/icon/weixing.png",
          }
          console.log("电话：",app.userDate.userInfo.userPhone)
        }
      })
   wx.redirectTo({
      url: '/pages/select/select',
      success: function (res) {
        wx: wx.showToast({
          title: '注册成功',
          icon: 'success',
          duration: 2000,
          mask: true,
        })
      },
    })
    }
    else{
      wx.showToast({
        title: '请先同意条款',
        image: '/images/icon/defeat.png',
      })
    }}else{
        wx.showToast({
          image: "/images/icon/defeat.png",
          title: '手机号已注册',
        })
    }}
    else {
        wx.showToast({
          title: '请输入手机号',
          image: '/images/icon/defeat.png',
        })
      }
  }
  }
})