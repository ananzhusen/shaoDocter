// pages/information/information.js

const informationDB=wx.cloud.database().collection('FamilyInformationData')
var util = require('../../utils/util.js')

var FamilyNum=0;//家庭数量
var FamilyMem={//家庭成员
  "Guardian":[],
  "children":[]
}
//监护人信息
var GuardianInformation={ 
  "GdnName":"",
  "GdnSex":"",  
  "GdnBirth":"",
  "GdnPhone":"", 
  "GdnAdress":"", 
  "GdnRelation":"", 
  "GdnWorkplase":"", 
  "GdnCall":"无",
  "GdnHobby":"无"
}

//儿童信息
var ChildrenInformation={
  "ChildName":"",
  "ChildSex":"", 
  "ChildBirth":"",
  "ChildHobby":"无"  
}

Page({

  /**
   * 页面的初始数据
   */
  data: {
    birthIndex: util.formatDate,
    currentDate: '',
    GdnbirthData:'',
    ChildbirthData:[],
    childrenNumber: 1,
    GuardianInformationData: GuardianInformation,
    ChildrenInformationData:[]
  },


  //获取监护人基本信息
  getGuardianName:function(e){
    this.setData({
      "GuardianInformationData.GdnName": e.detail.value
    })
    console.log(this.data.GuardianInformationData)
  },
  getGuardianSex:function(e){
    this.setData({
      "GuardianInformationData.GdnSex": e.detail.value
    })
  },
  getGdnBirth:function(e){
    this.setData({
      GdnbirthData:e.detail.value,
      "GuardianInformationData.GdnBirth":e.detail.value
    })
  },
  getGdnRelation:function(e){
    this.setData({
      "GuardianInformationData.GdnRelation":e.detail.value
    })
  },
  getGdnAdress:function(e){
    this.setData({
      "GuardianInformationData.GdnAdress":e.detail.value
    })
  },
  getGdnWorkplase:function(e){
    this.setData({
      "GuardianInformationData.GdnWorkplase":e.detail.value
    })
  },

  //获取儿童信息
  getChildName:function(e){
    this.setData({
      ['ChildrenInformationData['+e.target.id+'].ChildName']:e.detail.value
    })
  },
  getChildSex:function(e){
    this.setData({
      ['ChildrenInformationData['+e.target.id+'].ChildSex']:e.detail.value
    })
  }, 

  getChildBirth:function(e){
   
      this.setData({
        ['ChildbirthData['+e.target.id+']']: e.detail.value,
        ['ChildrenInformationData['+e.target.id+'].ChildBirth']:e.detail.value,
        ['ChildrenInformationData['+e.target.id+'].ChildHobby']:"无",
      })
   console.log(this.data.ChildrenInformationData)

  },



  addChildNum: function () {
    var num = (this.data.childrenNumber) + 1;
    this.setData({
      childrenNumber: num
    })
    var DATE = util.formatDate(new Date());
    for(var i=0;i<this.data.childrenNumber;i++){
    this.setData({
     ['ChildbirthData['+i+']']:DATE
    });
  }
  },
  subChildNum: function () {
    var num = (this.data.childrenNumber)
    if (num > 0) {
      num--;
    }
    this.setData({
      childrenNumber: num
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(this.data.GuardianInformationData)
    var DATE = util.formatDate(new Date());
      this.setData({
        currentDate: DATE,
      // birthData: DATE,
        GdnbirthData:DATE,
       "ChildbirthData[0]":DATE
      })
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
        userphone:res.detail.value,
        "GuardianInformationData.GdnPhone":res.detail.value
      })
    }
  },

  switchToBar: function () {
    var Familynum=0
    let that=this
    informationDB.where({}).count({//获取集合中记录个数
      success:function(res){
        Familynum=res.total 
        Familynum =Familynum + 1 //记录数加1作为新的家庭编号
        console.log(res.total,Familynum)
        //添加儿童编号
        FamilyNum=("000"+Familynum).slice(-4)
        //分别添加填入的监护人和儿童信息
        FamilyMem.Guardian.push(that.data.GuardianInformationData)
        FamilyMem.children.push(that.data.ChildrenInformationData)
        console.log(FamilyMem)

        wx.showToast({
          title: '正在提交...',
          icon: 'loading',
          duration: 2000,
          mask: true
        })
        informationDB.add({
          data:{
            FamilyNum,
            FamilyMem
          },success:function(res){
            console.log(res,"哈哈")
            wx.showToast({
              title: '提交成功',
              icon: 'success',
              duration: 2000,
              mask: true,
                })
            wx.switchTab({
              url: '/pages/guest/home/home',
            })
          },
          fail:console.error
        })
      },fail:console.error
    })
  }

})