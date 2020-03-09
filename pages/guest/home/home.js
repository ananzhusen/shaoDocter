// pages/guest/home/home.js
const app = getApp()

//引用
var fileData = require('../../../utils/data.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    banner_url: fileData.getBannerData(),//轮播图数据
    indicatordots: true,
    autoplay: true,
    interval: 3000,
    duration: 4000,
    navTopItem_style: 'navTopItem',
    navTopItems: fileData.getIndexNavData(),
    current_id: 1,
    current_index: 0,
    flag: true,
    navDetail: fileData.getNavDetailData(),
    addressMarker: [{
      id: 1,
      latitude: 30.349770,
      longitude: 112.186240,
      title: '公司地址',
      iconPath: '/images/icon/mapAddress.png',
      width: 20,
      height: 20,
      callout: {
        content: "这里是公司所在地",
        bgcolor: 'yellow'
      }
    }],
    hiddenMap: true,
    localLongitude: 0,
    localLatitude: 0,
    circles: [{
      latitude: 30.331972,
      longitude: 112.213712,
      color: '#7CFC00',
      fillColor: '#32CD32',
      radius: 10,
      strokeWidth: 5,
    }],
    polyline: [{
      points: [{
        longitude: 112.186240,
        latitude: 30.349770
      }, {
        longitude: 112.186240,
        latitude: 30.349770
      }],
      color: "#FF0000DD",
      width: 2,
      dottedLine: true
    }],
    sign: false,
  },
  select_nav: function (e) { //轮播图图标变化逻辑
    console.log(e.currentTarget.dataset.index)
    let id = e.currentTarget.dataset.id - 1
    let index = e.currentTarget.dataset.index
    let icon_first1 = 'navTopItems[' + id + '].icon'
    let icon_first2 = 'navTopItems[' + id + '].selectIcon'
    let icon_second1 = this.data.navTopItems[id].icon
    let icon_second2 = this.data.navTopItems[id].selectIcon

    let cur_id = this.data.current_id - 1
    let cur_icon_first1 = 'navTopItems[' + cur_id + '].icon'
    let cur_icon_first2 = 'navTopItems[' + cur_id + '].selectIcon'
    let cur_icon_second1 = this.data.navTopItems[cur_id].icon
    let cur_icon_second2 = this.data.navTopItems[cur_id].selectIcon
    // console.log(cur_icon_second1 + cur_icon_second2)
    if (cur_id == id) {

    }
    else {
      this.setData({
        //确保之前的icon变化
        [cur_icon_first1]: cur_icon_second2,
        [cur_icon_first2]: cur_icon_second1,
        current_id: id + 1,
        current_index: index,
        //确保点击后icon变化
        [icon_first1]: icon_second2,
        [icon_first2]: icon_second1
      })
    }
    console.log(this.data.navDetail[this.data.current_index])
  },

  clickNavIcon: function () {
    this.setData({
      hiddenMap: !this.data.hiddenMap,//隐藏/显示地图
    })
    let that = this
    if (!that.data.hiddenMap) {
      wx.getLocation({  //获取用户地理位置
        success: function (res) {
          console.log(res)
          wx.showModal({
            title: '小程序要获取你当前的位置',
          })
          console.log(that.data.polyline[0].points[1].latitude, '')
          that.setData({
            localLatitude: res.latitude,
            localLongitude: res.longitude,
            "circles[0].latitude": res.latitude,
            "circles[0].longitude": res.longitude,
            "polyline[0].points[2].latitude": res.latitude,
            "polyline[0].points[2].longitude": res.longitude,
          })
          console.log(that.data.circles[0].longitude, that.data.circles[0].latitude)
        },
      })
    }
  },
  makeAcall: function () {
    wx.makePhoneCall({
      phoneNumber: '10086',
      success: function () {
        console.log("拨打电话成功")
      }
    })
  },
  makeAcallSave: function () {
    wx.addPhoneContact({
      firstName: '安师傅',
      mobilePhoneNumber: '15712341234',
      weChatNumber: '138912490',
      addressState: "湖北省",
      addressCity: "荆州市",
      addressStreet: "荆州区城南街道1号",
      organization: '邵医生儿童推拿',
      success: function (res) {
        console.log(res)
      }
    })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //正在加载弹框
    wx.showToast({
      title: '正在加载...',
      icon: 'loading',
      duration: 1000,
      mask: true,//透明蒙层
      success: function (res) {
      }
    })
    this.setData({
      list: this.data.navDetail
    })
    wx.hideToast()
  },

  onShow: function () {
    wx.hideTabBar({
      success: function () {
        console.log("隐藏Tabbar")
        app.onTabBar('user');
      }
    })
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function (res) {
    console.log("res = ", res)
    if (res.from == 'button') {
      console.log('res.target' + res.target)
    }
    //返回对象
    return {
      title: '你好，我是小程序',
      path: 'pages/guest/home/home',
      imageUrl: '/images/icon/ic_feixiang.png'//网页图片或者本地图片
    }
  }
})