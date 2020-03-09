// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  try {
    return await cloud.database().collection('SidelineData').where({
      SidelineID:event.TID
    }).update({
      data:{
        SidelineName:event.SName,
        SidelineGrade:event.SGrade,
        SidelineImage:event.SImage,
        SidelineBriefIntro:event.SBriefIntro,
        SidelinePrice:event.SPrice,
        IsServiceable:event.SIsService,
        SidelineDetailIntro:event.SDetailIntro
      }
      })
  } catch (e) {
    console.error("ERROR",e)
  }
}