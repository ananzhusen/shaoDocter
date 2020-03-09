// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  try {
    return await cloud.database().collection('staffInformationData').where({
      TechID:event.TID
    }).remove()
  } catch (e) {
    console.error("ERROR:删除失败",e)
  }
}