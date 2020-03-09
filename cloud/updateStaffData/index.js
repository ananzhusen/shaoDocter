// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  try {
    return await cloud.database().collection('TuinaData').where({
      TechID:event.TID
    }).update({
      data:{
        TechName:event.TName,
        TechPhone:event.TPhone,
        TechGrade:event.TGrade,
        TechWorkExperience:event.TWorkExperience,
        TechEvaluation:event.TEvaluation,
        TechPicture:event.TPicture
      }
      })
  } catch (e) {
    console.error("ERROR",e)
  }
}
