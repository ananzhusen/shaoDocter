//app.js
App({
  onLaunch: function () {
    wx.cloud.init({
      env: "test4-ht5oe"
    })
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })

  },
  userDate:{
    userInfo: null
  },
  globalData: {
  }, 
  onTabBar: function (key) { //key传递的是角色
    var _curPageArr = getCurrentPages();//当前页面栈
    var _curPage = _curPageArr[_curPageArr.length - 1];//当前页面，-2就为上一个页面
    var _pagePath = _curPage.route;//当前页的路径
    if (_pagePath.indexOf('/') != 0) {//返回首次出现的位置
      _pagePath = '/' + _pagePath;//获取相对路径
    }
    var tabBar = this.tabBarData[key]; //从下面的两个选择相应的TabBar
    for (var i = 0; i < tabBar.list.length; i++) {
      tabBar.list[i].active = false;
      if (tabBar.list[i].pagePath == _pagePath) {
        tabBar.list[i].active = true; // 根据页面地址设置当前页面状态    
      }
    }
    //console.log(tabBar.list[0].pagePath)
    _curPage.setData({
      tabBar: tabBar
    });
  },
  tabBarData: {
   // userInfo: null,
    pop: 2,
    num: 0,
    user: {
      "color": "#ccc",
      "selectedColor": "#000",
      "backgroundColor": "#fff",
      "borderStyle": "black",
      "list": [
        {
          "pagePath": "/pages/guest/home/home",
          "text": "首页",
          "iconPath": "/images/icon/home.png",
          "selectedIconPath": "/images/icon/home_selected.png",
            "clas": "tabbar-item",
          "active": true
        },
        {
          "pagePath": "/pages/guest/store/store",
          "text": "商品和订单",
          "iconPath": "/images/icon/store.png",
          "selectedIconPath": "/images/icon/store_selected.png",
            "clas": "tabbar-item",
          "active": false
        },
        {
          "pagePath": "/pages/user/user",
          "text": "我的",
          "iconPath": "/images/icon/user.png",
          "selectedIconPath": "/images/icon/user_selected.png",
          "clas": "tabbar-item",
          "active": false
        }
      ]
    },
    staff: {
      "color": "#dbdbdb",
      "selectedColor": "#1296db",
      "backgroundColor": "white",
      "borderStyle": "white",
      "position": "bottom",
      "list": [
        {
          "pagePath": "/pages/master/propaganda/propaganda",
          "text": "宣传",
          "iconPath": "/images/icon/master/propaganda1.png",
          "selectedIconPath": "/images/icon/master/propaganda0.png",
          "clas": "tabbar-item",
          "active": true
        },
        {
          "pagePath": "/pages/master/mainten/mainten",
          "text": "维护",
          "iconPath": "/images/icon/master/mainten1.png",
          "selectedIconPath": "/images/icon/master/mainten0.png",
          "clas": "tabbar-item",
          "active": false
        },
        {
          "pagePath": "/pages/user/user",
          "text": "我的",
          "iconPath": "/images/icon/user.png",
          "selectedIconPath": "/images/icon/user_selected.png",
          "clas": "tabbar-item",
          "active": false
        }
      ]
    }
  }
})