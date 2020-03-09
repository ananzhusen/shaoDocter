// pages/master/propaganda/page/storeInfo/storeInfo.js

const db = wx.cloud.database()
const _ = db.command
const TuinaInforDB=db.collection('TuinaData')
const MedicineDB=db.collection('MedicineData')
const SidelineDB=db.collection('SidelineData')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentClick:1,
    formHidden:true,
    search_explain:"请输入以T开头商品ID或商品名",
    oneStore:'',
    searchInput:'',
    cannotInput:true,
    twobuttonhiden:false,//查看页面隐藏
    surebuttonhiden:true,//确定按钮隐藏
    searchDisabled:false,//输入栏可输入？

    stroeID:'',//商品ID
    storePicture:'',//商品图片
    storeDetailPictures:[],//详细信息图片
    temstorePicture:'', //临时存入原图片地址
    temstoreDetailPictures:[]
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
        console.log("隐藏成功")
      },
    })
  },

  clickNavT:function(){
    this.setData({
      currentClick:1,  //当前导航栏
      search_explain:"请输入以T开头商品ID或商品名",
      formHidden:true,
    })
  },
  clickNavM:function(){
    this.setData({
      currentClick:2,
      search_explain:"请输入以M开头商品ID或商品名",
      formHidden:true,
    })
  },
  clickNavS:function(){
    this.setData({
      currentClick:3,
      search_explain:"请输入以S开头商品ID或商品名",
      formHidden:true,
    })
  },
  //获取输入
  getInput:function(e){
    this.setData({
      searchInput:e.detail.value
    })
    console.log("检测到输入：",this.data.searchInput)
  },

  //点击搜索
  clickSearch:function(){
    let that=this
    if(that.data.currentClick==1){
    TuinaInforDB.where(_.or([{
      TuinaID:that.data.searchInput
    },{
      TuinaName:that.data.searchInput
    }])).get().then(res => {
      console.log(res.data[0])
      if(res.data==''){
        console.log("未搜索到数据")
        wx.showToast({
          title: '编号或名字错误',
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
          oneStore:res.data[0],
          cannotInput:true,
          storePicture:res.data[0].TuinaImage,
          storeDetailPictures:res.data[0].TuinaDetailIntro,
          stroeID:res.data[0].TuinaID
        })
      }
    })
  }else if(that.data.currentClick==2){
    MedicineDB.where(_.or([{
      MedicID:that.data.searchInput
    },{
      MedicName:that.data.searchInput
    }])).get().then(res => {
      console.log(res.data[0])
      if(res.data==''){
        console.log("未搜索到数据")
        wx.showToast({
          title: '编号或名字错误',
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
          oneStore:res.data[0],
          cannotInput:true,
          storePicture:res.data[0].MedicImage,
          storeDetailPictures:res.data[0].MedicDetailIntro,
          stroeID:res.data[0].MedicID
        })
      }
    })
  }else{
    SidelineDB.where(_.or([{
      SidelineID:that.data.searchInput
    },{
      SidelineName:that.data.searchInput
    }])).get().then(res => {
      console.log(res.data[0])
      if(res.data==''){
        console.log("未搜索到数据")
        wx.showToast({
          title: '编号或名字错误',
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
          oneStore:res.data[0],
          cannotInput:true,
          storePicture:res.data[0].SidelineImage,
          storeDetailPictures:res.data[0].SidelineDetailIntro,
          stroeID:res.data[0].SidelineID
        })
      }
    })
  }
    },

    //点击编辑信息
  editStoreInfo:function(){
      this.setData({
        cannotInput:false,
        twobuttonhiden:true,
        surebuttonhiden:false,
        searchDisabled:true,
      })
  },

//选择一张图片
  uploadPicture:function(){
    if(this.data.cannotInput){
      console.log("不能点击上传图片")
    }
    else{
      console.log("点击上传图片")
      let that = this
      that.setData({
        temstorePicture:that.data.storePicture
      })
      wx.chooseImage({
        count: 1,
        sizeType: ['original', 'compressed'],
        sourceType: ['album', 'camera'],
        success(res) {
          console.log(res)
          that.uploadtocloud(res.tempFilePaths[0],null)
        }
      })
  }
  },
  //选择不多于9张图片
  uploadPictures:function(){
    if(this.data.cannotInput){
      console.log("不能点击上传图片")
    }
    else{
      console.log("点击上传图片")
      let that = this
      that.setData({
        temstoreDetailPictures:that.data.storeDetailPictures
      })
      wx.chooseImage({
        count: 9,
        sizeType: ['original', 'compressed'],
        sourceType: ['album', 'camera'],
        success(res) {
          that.setData({
            storeDetailPictures:[]  
          })
          for(var i=0;i<res.tempFilePaths.length;i++){
            console.log(res.tempFilePaths[i])
            that.uploadtocloud(res.tempFilePaths[i],i)
          }      
        }
      })
    }
  },
  //图片上传到云地址
  uploadtocloud:function(fileUrl,i){
    let that = this
    console.log(that.data.oneStore.TuinaImage,i)
    wx.cloud.uploadFile({
      cloudPath:  that.data.stroeID+i+new Date().getTime()+'.jpg', // 上传至云端的路径
      filePath: fileUrl, // 小程序临时文件路径
      success: res => {
      if(i==null){
          that.setData({
            storePicture:res.fileID,
          })
          console.log("进入一张图片",that.data.storePicture)
      }else{
       //选择图片后，更新当前页面
       console.log("进入多张图片",that.data.storeDetailPictures)
       console.log("上传到云成功!"+res.fileID)
       that.data.storeDetailPictures.push(res.fileID)
        that.setData({
          storeDetailPictures:that.data.storeDetailPictures,
        })
      }
      },
      fail: console.error
    })
  },

  //点击确认按钮 
  sureStoreInfo:function(res){
    console.log(res.detail.value)
    let that=this
    let storevalue=res.detail.value
    var isok=false
    if(that.data.currentClick==1){
      wx.cloud.callFunction({
        name:'updateTuinaData',
        data:{
          TName:storevalue.name,
          TID:storevalue.id,
          TGrade:storevalue.grade,
          TImage:that.data.storePicture,
          TBriefIntro:storevalue.briefInfo,
          TPrice:storevalue.price,
          TIsService:storevalue.isservice,
          TDetailIntro:that.data.storeDetailPictures
        },success:res => {
          wx.showToast({
            title: '更新成功！',
            icon:'success',
            duration:1000,
            mask:true,//透明蒙层
          })
          console.log("更新成功")
          isok=true
          console.log("临时删除原图片路径",that.data.temstorePicture,that.data.temstoreDetailPictures)
          wx.cloud.deleteFile({ //删除以前的图片
            fileList: [that.data.temstorePicture].concat(that.data.temstoreDetailPictures),
            success: res => {
              console.log("删除云文件成功",res.fileList)
            },
            fail:res=>{
              console.log("删除云数据失败")
            }
          })
      },fail:res=>{
        wx.showToast({
          title: '更新失败！',
          image:'/images/icon/defeat.png',
          duration:1000,
          mask:true,//透明蒙层
        })
      }
      })
  }else if(that.data.currentClick==2){

  }else{
    
  }
  if(isok){ 
    TuinaInforDB.where({
      TechID:storevalue.id
    }).get().then(res => {
      console.log("进入")
      console.log("重新加载！",res)
        that.setData({
          oneStore:res.data[0],
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

  //点击取消 //删除上传的图片不更新数据库，再刷新一次
  cancelbutton:function(){
    let that = this
    wx.cloud.deleteFile({ //删除临时传的图片
      fileList: [that.data.storePicture].concat(that.data.storeDetailPictures),
      success: res => {
        console.log("删除云文件成功",res.fileList)
      },
      fail: console.error
    })
    that.setData({
      oneStore:that.data.oneStore,
      cannotInput:true,
      twobuttonhiden:false,
      surebuttonhiden:true,
      searchDisabled:false,
      newBtndisable:false,
      storePicture:that.data.oneStore.TuinaImage,
      storeDetailPictures:that.data.oneStore.TuinaDetailIntro
    })
    if(that.data.currentClick==1){
      that.setData({
        storePicture:that.data.oneStore.TuinaImage,
        storeDetailPictures:that.data.oneStore.TuinaDetailIntro
      })
    }else if(that.data.currentClick==2){
      that.setData({
        storePicture:that.data.oneStore.MedicImage,
        storeDetailPictures:that.data.oneStore.MedicDetailIntro
      })
    }else{
      that.setData({
        storePicture:that.data.oneStore.SidelineImage,
        storeDetailPictures:that.data.oneStore.SidelineDetailIntro
      })
    }
  }
})