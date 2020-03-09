//数据的模块化处理
//轮播图的图片 
function getBannerData(){
var arr=[
  'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1570455126642&di=77b79c5c6145778e1df8b8f5d3390f6f&imgtype=jpg&src=http%3A%2F%2Fn.sinaimg.cn%2Fsinacn20121%2F114%2Fw548h366%2F20190104%2Fbf07-hrfcctm3973955.jpg',
  'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1570455126266&di=5c443a914f8aa7d19252746b95b3df67&imgtype=0&src=http%3A%2F%2Fn.sinaimg.cn%2Fsinacn%2Fw640h427%2F20180309%2F17a8-fxpwyhw3058357.jpg',
  'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1570455126266&di=4855635db36d0520ce584d4f8e57f029&imgtype=0&src=http%3A%2F%2Fs8.sinaimg.cn%2Fmw690%2F006uJceozy7fLMRvMzle7%26690',
]
return arr
}
//导航
function getIndexNavData(){
  var arr=[
    {
      id:1,
      icon:'/images/icon/navigation_01.png',
      selectIcon: '/images/icon/navigation_1.png',
      title:'公司文化',
    },
    {
      id: 2,
      icon: '/images/icon/navigation_2.png',
      selectIcon: '/images/icon/navigation_02.png',
      title: '团队介绍',
    },
    {
      id: 3,
      icon: '/images/icon/navigation_3.png',
      selectIcon:'/images/icon/navigation_03.png',
      title: '推拿文化',
    }, 
    {
      id: 4,
      icon: '/images/icon/navigation_4.png',
      selectIcon: '/images/icon/navigation_04.png',
      title: '联系我们',
    }
  ]
  return arr
}

//导航对应的具体信息获取
function getNavDetailData(){
  var arr=[
    [
      {
        picture_path:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1571228594&di=1948f4b45a84be6f4ed575c627f45ff3&imgtype=jpg&er=1&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01ae8758ff086ba8012145504b9cab.jpg',
        text_content1: '&emsp;&emsp;邵医生推拿有限公司已有18年的发展历史,共为50万人（次）慢性病患者提供康复理疗服务, 有效率达93%以上,顾客满意度达96%以上。创始人李远枚女士曾就职于华西医科大附一院和重庆医科大学附一院，后专门从事中医康复疗养的学习、研究和实践，现为全国著名的慢性病康复疗养专家,并于2014年被中国医促会推选为健康服务专业委员会副主任委员。',
        text_content2:' &emsp;&emsp;十八年以来，“太和堂”以“让天下人不再受痛苦的折磨”为企业使命，以“诚信做人，慈悲爱人，专业救人，健康共赢”为企业理念，以中华传统养生文化为底蕴，已经探索出一条彰显“中医推拿 + 康复疗养”的特色之路；以服务社会、造福人类为宗旨，强力打造慢性病康复疗养第一品牌——尚真推拿，并立志把这一养生文化精品扎根重庆，传遍全国，推向世界。'
      }
    ],
    [
      {
        name:'anan',
        picture:'',
        profession:'高级推拿师',
        experience: '5年',
        goodAt:'擅长运用区位反射法加养生保健体操调理、治疗：腰痛、颈椎痛、肩膀痛、腿痛、肌肉僵硬、关节疼痛等症。',
        selfIntroduction:''
      },
      {
        name: 'bnbn',
        picture: '',
        profession: '中级推拿师',
        experience: '3年',
        goodAt: '擅长运用区位反射法加养生保健体操调理、治疗：腰痛、颈椎痛、肩膀痛、腿痛、肌肉僵硬、关节疼痛等症。',
        selfIntroduction: ''
      },
      {
        name: 'cncn',
        picture: '',
        profession: '中级推拿师',
        experience: '3年',
        goodAt: '擅长运用区位反射法加养生保健体操调理、治疗：腰痛、颈椎痛、肩膀痛、腿痛、肌肉僵硬、关节疼痛等症。',
        selfIntroduction: ''
      },
      {
        name: 'dndn',
        picture: '',
        profession: '标准推拿师',
        experience: '2年',
        goodAt: '擅长运用区位反射法加养生保健体操调理、治疗：腰痛、颈椎痛、肩膀痛、腿痛、肌肉僵硬、关节疼痛等症。',
        selfIntroduction: ''
      }
    ],
    [
      {
        text:''
      }
    ],
    [{
      theCompanyName:'邵医生儿童推拿',
      address:'荆州市荆州区',
      telephone:'15712341234', 
      theCompanyWechat:'weixin_15712341234'
    }]
  ]
  return arr
}

function getUserFunction(){
  var arr=[
    {
      icon:'/images/icon/vip_cord.png',
      functiontip:'会员卡',
    },
    {
      icon: '/images/icon/wallet.png',
      functiontip: '钱包',
    },
    {
      icon: '/images/icon/collection.png',
      functiontip: '收藏',
    },
    {
      icon: '/images/icon/feedback.png',
      functiontip: '意见反馈',
    },
    {
      icon: '/images/icon/setting.png',
      functiontip: '设置',
    },
  ]
  return arr
}

//选择喜欢的推拿师进行服务
function getMassageService(){
  arr=[
    {
      techName:"X技师",
      techGrade:"老板推拿",//老板推拿，高级推拿，普通推拿
      //技师名字和级别拼接在一起构成“推拿师商品”供用户选择。
      techPicture:"http://www.bestb2b.com/business_34996449.htm",//从云端获取图片云地址
      techPrice:"000.00",
      techIntroduce:"页面路径",//点击跳转到推拿师详细介绍页面介绍，
      serviceable:true,//true or false
      evaluation:"8.8",
      serviceNum:"8",  
    },
    {
      techName: "X技师",
      techGrade: "老板推拿",
      techPicture: "从云端获取图片云地址",
      techPrice: "000.00",
      techIntroduce: "页面路径",
      serviceable: true,
      evaluation: "8.8",
      serviceNum: "8",
    },
    {
      techName: "X技师",
      techGrade: "老板推拿",
      techPicture: "从云端获取图片云地址",
      techPrice: "000.00",
      techIntroduce: "页面路径",
      serviceable: true,
      evaluation: "8.8",
      serviceNum: "8",
    },
    {
      techName: "X技师",
      techGrade: "老板推拿",
      techPicture: "从云端获取图片云地址",
      techPrice: "000.00",
      techIntroduce: "页面路径",
      serviceable: true,
      evaluation: "8.8",
      serviceNum: "8",
    },
    {
      techName: "X技师",
      techGrade: "老板推拿",
      techPicture: "从云端获取图片云地址",
      techPrice: "000.00",
      techIntroduce: "页面路径",
      serviceable: true,
      evaluation: "8.8",
      serviceNum: "8",
    },
  ]
  return arr
}

//暴露接口
module.exports={
  getBannerData: getBannerData,
  getIndexNavData: getIndexNavData,
  getNavDetailData: getNavDetailData,
  getUserFunction: getUserFunction,
  getMassageService: getMassageService,

}