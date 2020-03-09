// pages/login/login.js
var app = getApp()
const userlogin = wx.cloud.database().collection('userlogin')

Page({
  data: {
    buttondisabled:true,
    userphone:0,
    userpwd:'',
    phoneisright:false,//手机格式
    ispass:false,
    isregister:false,//密码匹配
    isexist: false,//用户是否存在
    identity:'staff',
  },

//验证手机号格式是否正确
  isPhoneFormat:function(res){
    var reg = /^1[3456789]\d{9}$/;
    if(!reg.test(res.detail.value)){
      wx.showToast({
        title: '手机号格式错误',
        image: "/images/icon/defeat.png"
      })
      this.setData({
        phoneisright:false
      })
    }else{
      this.setData({
        phoneisright:true,
        userphone: res.detail.value
      })

      //格式无错误，验证用户是否存在
      let that = this
      userlogin.where({
        userPhone: that.data.userphone
      }).get({
        success: res=> {
          console.log("查询成功！1")
          console.log(res.data)
          if (res.data.length ===0) {
            console.log("进入")
            wx.showToast({
              image: "/images/icon/defeat.png",
              title: '手机号未注册',
            })
            that.setData({
              isexist: false
            })
          } else {
            console.log("找到用户号码")
            that.setData({
              isexist: true,
            })
          }
        }
      })
    }   
  },

//获取输入的密码
  getuserpwd:function(res){
    //var userpwd = res.detail.value
    this.setData({
      userpwd: res.detail.value
    })
    console.log(this.data.userpwd)
  },

  //登录成功后跳转到首页
  switchToBar:function(){
    console.log("点击登录")
    //手机号存在，验证密码是否匹配
    let that = this
  userlogin.where({
      userPhone: that.data.userphone,
      userPwd: that.data.userpwd
    }).get({
      success: function (res) {
        console.log("找到账号",res.data)
        if (res.data.length===0) {
          console.log("进入")
          wx.showToast({
            image: "/images/icon/defeat.png",
            title: '密码错误',
          })
          that.setData({
            isregister: false
          })
        } else {
          console.log("未进入a", res.data[0].identity)
          that.setData({
            isregister: true,
            identity: res.data[0].identity
          })
          console.log(that.data.phoneisright, that.data.isregister, that.data.isexist, that.data.identity)
        if ((that.data.phoneisright) && (that.data.isregister) && (that.data.isexist)) {
          app.userDate.userInfo = { //全局的产品用户信息
            userPhone: that.data.userphone, 
            userPwd: that.data.userpwd, 
            identity: that.data.identity,
            clubCard: res.data[0].clubCard,
            userBalance: res.data[0].userBalance,
            userName: res.data[0].userName,
            headPicture: res.data[0].headPicture
             }
        wx.showToast({
              title: '正在登录',
              icon: 'loading',
              duration: 2000,
              mask: true,
              success: function (res) {
                wx.showToast({
                  title: '登录成功',
                  icon: 'success',
                  duration: 1000,
                  mask: true,
                })
              //根据用户身份跳转到不同的页面
              if (that.data.identity=='user')//登录身份是用户
                 { wx.switchTab({
                    url: '/pages/guest/home/home',
                  })
                } 
              if (that.data.identity == 'staff'){//登录身份是员工
                  wx.switchTab({
                    url: '/pages/master/propaganda/propaganda',
                  })}
              },
              fail: function (res) {
                wx.showToast({
                  title: '登录失败',
                  image: '/images/icon/login_fail.png',
                  duration: 1000,
                  mask: true,
                })
              },
            })
          } else {
            if (!that.data.phoneisright) {
              wx.showToast({
                title: '请输入电话号码',
                image: '/images/icon/login_fail.png',
              })
            }
          }
        }
      },fail :function (res) {
        wx.showToast({
          image: "/images/icon/defeat.png",
          title: '系统出错',
        })
      }
    })
    }
})