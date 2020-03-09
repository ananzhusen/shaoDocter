// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  try {
    return await cloud.database().collection('TuinaData').where({
      TuinaID:event.TID
    }).update({
      data:{
        TuinaName:event.TName,
        TuinaGrade:event.TGrade,
        TuinaImage:event.TImage,
        TuinaBriefIntro:event.TBriefIntro,
        TuinaPrice:event.TPrice,
        IsServiceable:event.TIsService,
        TuinaDetailIntro:event.TDetailIntro
      }
      })
  } catch (e) {
    console.error("ERROR",e)
  }
}