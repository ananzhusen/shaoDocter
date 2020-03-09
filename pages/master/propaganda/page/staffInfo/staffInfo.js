// pages/master/propaganda/page/stuffInfo/stuffInfo.js

//打开员工信息数据库
const db = wx.cloud.database()
const _ = db.command
const staffInformationDB=db.collection('staffInformationData')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    searchInput:'',
    StaffNum:0,
    formHidden:true,//表单是否隐藏
    cannotInput:true,//输入框能否输入操作（true:不能）
    oneStaff:'',//一个员工信息
    TName:'',
    newOK:false, //新建确定
    searchDisabled:false,//输入栏可输入？
    twobuttonhiden:false,//查看页面隐藏
    surebuttonhiden:true,//确定按钮隐藏
    StaffPicture:'',//临时照片地址
//编辑信息
    SName:'',
    SPhone:'',
    SGrade:'',
    SExperince:'',
    SExplain:'',
    SPicture:'',
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
    wx.hideHomeButton({
      complete: (res) => {
        console.log("隐藏首页按钮成功")
      }
    })
  },
 //获取输入
  getInput:function(e){
    this.setData({
      searchInput:e.detail.value
    })
    console.log("检测到输入",this.data.searchInput)
  },

  //点击搜索
  clickSearch:function(){
    wx.showToast({
      title:'正在搜索...',
      icon:'loading',
      duration:1000,
      mask:true,//透明蒙层
    })
    let that = this
    staffInformationDB.where(_.or([{
      TechID:this.data.searchInput
    },{
      TechName:this.data.searchInput
    }])).get().then(res => {
      console.log(res)
      if(res.data==''){
        console.log("未搜索到数据")
        wx.showToast({
          title: '编号错误',
          image:'/images/icon/defeat.png'
        })
        that.setData({
          formHidden:true
        })
      }
      else{
        console.log("搜索到数据")
        that.setData({
          formHidden:false,
          oneStaff:res.data[0],
          StaffNum:res.data[0].TechID,
          StaffPicture:res.data[0].TechPicture
          //TName:res.data[0].TechName
        })
      }
    })
  },

  //按钮转跳到员工个人详细信息页面
  naviToDetail:function(){
    var that = this
    wx.navigateTo({
      url: '../staffInfo/staffDetailInfo/staffDataInfo?StaffNum='+that.data.StaffNum,
    })
  },

  getStaffName:function(e){
    console.log(e.detail.value)
    if(e.detail.value!=''){
      this.setData({
        SName:e.detail.value
      })
    }
  console.log(this.data.SName)
  },
  getStaffPhone:function(e){
    if(e.detail.value!=''){
    console.log(e.detail.value)
    this.setData({
      SPhone:e.detail.value
    })
  }
  },
  getStaffGrade:function(e){
    if(e.detail.value!=''){
    console.log(e.detail.value)
    this.setData({
      SGrade:e.detail.value
    })
  }
  },
  getStaffWorkExprience:function(e){
    if(e.detail.value!=''){
    console.log(e.detail.value)
    this.setData({
      SExperince:e.detail.value
    })
  }
  },
  getStaffExplain:function(e){
    if(e.detail.value!=''){
    console.log(e.detail.value)
    this.setData({
      SExplain:e.detail.value
    })
  }
  },
  uploadPicture:function(){
    if(this.data.cannotInput){
      console.log("不能点击上传图片")
    }
    else{
      console.log("点击上传图片")
      let that = this
      wx.chooseImage({
        count: 1,
        sizeType: ['original', 'compressed'],
        sourceType: ['album', 'camera'],
        success(res) {
          console.log(res)
          that.uploadtocloud(res.tempFilePaths[0])
        }
      })
  }
  },
  //上传到云地址
  uploadtocloud:function(fileUrl){
    let that = this
    wx.cloud.uploadFile({
      cloudPath:  that.data.StaffNum+new Date().getTime()+'.jpg', // 上传至云端的路径
      filePath: fileUrl, // 小程序临时文件路径
      success: res => {
        console.log("上传到云成功!"+res.fileID)
        that.setData({
          StaffPicture:res.fileID,
        })
      },
      fail: console.error
    })
  },

  //点击确定按钮
  surebutton:function(){
    let that=this
    var isok=false
    if(that.data.newOK){
      staffInformationDB.add({
        data:{
          TechID:that.data.StaffNum,
          TechName:that.data.SName,
          TechPhone:that.data.SPhone,
          TechGrade:that.data.SGrade,
          TechWorkExperience:that.data.SExperince,
          TechEvaluation:that.data.SExplain,
          TechPicture:that.data.StaffPicture
        },success:function(res){
          isok=true
          console.log(res,"哈哈")
          that.setData({
            newOK:false
          })
        },fail:console.error
      })
  }
  else{
    wx.cloud.callFunction({
      name:'updateStaffData',
      data:{
        TID:that.data.StaffNum,
        TName:that.data.SName,
        TPhone:that.data.SPhone,
        TGrade:that.data.SGrade,
        TWorkExperience:that.data.SExperince,
        TEvaluation:that.data.SExplain,
        TPicture:that.data.StaffPicture
      },success: res => {
        wx.showToast({
          title: '更新成功！',
          icon:'success',
          duration:1000,
          mask:true,//透明蒙层
        })
        isok=true
        wx.cloud.deleteFile({ //删除以前的图片
          fileList: [that.data.SPicture],
          success: res => {
            console.log("删除云文件成功",res.fileList)
          },
          fail:res=>{
            wx.showToast({
              title: '更新失败！',
              image:'/images/icon/defeat.png',
              duration:1000,
              mask:true,//透明蒙层
            })
          }
        })
      },
      fail: err => {
        console.log(err)
        isok=false
      }
    })
  }
   if(isok){ 
      staffInformationDB.where({
        TechID:that.data.StaffNum
      }).get().then(res => {
        console.log("进入")
        console.log("重新加载！",res)
          that.setData({
            oneStaff:res.data[0],
            StaffPicture:res.data[0].TechPicture
          })
      })
  }
    that.setData({
      cannotInput:true,
      twobuttonhiden:false,
      surebuttonhiden:true,
      searchDisabled:false,
      newBtndisable:false,
    })
  },
  //点击取消按钮
  cancelbutton:function(){
    wx.cloud.deleteFile({ //删除以前的图片
      fileList: [this.data.StaffPicture],
      success: res => {
        console.log("删除云文件成功",res.fileList)
      },
      fail: console.error
    })
    this.setData({
      oneStaff:this.data.oneStaff,
      cannotInput:true,
      twobuttonhiden:false,
      surebuttonhiden:true,
      searchDisabled:false,
      newBtndisable:false,
      StaffPicture:this.data.SPicture,
    })
  },

  
  //点击编辑员工信息按钮
  editStuffInfo:function(){
    this.setData({
      cannotInput:false,
      twobuttonhiden:true,
      surebuttonhiden:false,
      searchDisabled:true,
      //员工信息编辑
      SName:this.data.oneStaff.TechName,
      SPhone:this.data.oneStaff.TechPhone,
      SGrade:this.data.oneStaff.TechGrade,
      SExperince:this.data.oneStaff.TechWorkExperience,
      SExplain:this.data.oneStaff.TechEvaluation,
      SPicture:this.data.oneStaff.TechPicture
    })
},
  //点击删除按钮
  //考虑到新员工编号是通过遍历集合得到的所以删除的话是不会删除记录的，只会清空除与员工号以外的数据
  deleteStuffInfo:function(){
   var that=this
   wx.cloud.callFunction({
    name:'updateStaffData',
    data:{
      TID:that.data.StaffNum,
      TName:"该数据已被删除",
      TPhone:'',
      TGrade:'',
      TWorkExperience:'',
      TEvaluation:'',
      TPicture:''
    },success: res => {
      console.log("删除员工数据成功！")
      wx.showToast({
        title: '删除成功！',
        image:'/images/icon/defeat.png',
        duration: 2000,
        mask: true,
      })
      that.setData({
        formHidden:true,
        searchDisabled:false,
      })
    },fail:res=>{
      console.log("删除员工数据失败！")
    }
   })
  },

  //点击新建按钮
  newbuiltInfo:function(){
    let that = this
    var isgetNum=false

    staffInformationDB.where({}).count({//获取集合中记录个数
      success:function(res){
        console.log(res.total,"获取员工总人数成功")
        isgetNum=true
        var Snum=res.total 
        Snum =Snum + 1 //记录数加1作为新的员工号
        that.setData({
          StaffNum:'SYS'+(("000"+Snum).slice(-4))
        })
        console.log(that.data.StaffNum)
        that.setData({
          formHidden:false,
          cannotInput:false,
          twobuttonhiden:true,
          surebuttonhiden:false,
          searchDisabled:true,
          newBtndisable:true,
          oneStaff:'',
          StaffPicture:'',
          newOK:true,
          "oneStaff.TechID":that.data.StaffNum
        })
      },
      fail:function(res){
        console.log("获取员工总人数失败")
      }
    })
  },
})