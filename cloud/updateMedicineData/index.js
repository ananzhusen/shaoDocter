// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  try {
    return await cloud.database().collection('MedicineData').where({
      MedicID:event.MID
    }).update({
      data:{
        MedicName:event.MName,
        MedicImage:event.MImage,
        MedicBriefIntro:event.MBriefIntro,
        MedicPrice:event.MPrice,
        MedicSurplus:event.MSurplus,
        MedicDetailIntro:event.MDetailIntro,
        MedicSales:event.MSales
      }
      })
  } catch (e) {
    console.error("ERROR",e)
  }
}