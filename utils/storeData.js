//商品和订单页面（store)所需数据库

//在商品展示页面的推拿师选择所用到的数据（技师）
function getTuinaData(){
  var TuinaArr=[
    {
      TuinaName:"邵技师推拿",//推拿名（商品名）
      TuinaID:"T0001", //推拿ID（商品ID 即主键）以T开头 //当用户将该商品加入订单，商品ID就会提交到订单界面
      //为了后面好操作，上传图片更少,所以json文件中每一项的商品ID都是用的T0001，但是要明白在每个商品ID是不同的
      TuinaGrade:"店长推拿",//推拿级别 [老板推拿，高级推拿，普通推拿]
      TuinaImage:"cloud://test4-ht5oe.7465-test4-ht5oe-1300471109/T0001.jpg",
      //推拿图片云地址，只需要一张 cloud://+环境名组合+文件名（商品ID） //商品图片名与ID对应
      TuinaBriefIntro:"手法娴熟力道深厚评价很高",//商品简介
      TuinaPrice:"100.88",//价格
      IsServiceable:true,//true 或者 false，该类商品只有一个，
      TuinaNum:"20",//商品销售量,也就是商品的付款量
      TuinaDetailIntro:["cloud://test4-ht5oe.7465-test4-ht5oe-1300471109/T000101.jpg",
                        "cloud://test4-ht5oe.7465-test4-ht5oe-1300471109/T000102.jpg",
                        "cloud://test4-ht5oe.7465-test4-ht5oe-1300471109/T000103.jpg"],
                        //具体介绍 以图片的方式介绍（eg:淘宝的详情就是通过图片展示的）
                       // cloud://+环境名组合+文件名（商品ID+序号）
    },
    {
      TuinaName:"李技师推拿",//推拿名（商品名）
      TuinaID:"T0002", //推拿ID（商品ID）以T开头 //当用户将该商品加入订单，商品ID就会提交到订单界面
      TuinaGrade:"高级推拿",//推拿级别 [老板推拿，高级推拿，普通推拿]
      TuinaImage:"cloud://test4-ht5oe.7465-test4-ht5oe-1300471109/T0002.jpg", //json文件还是用的T0001图片，
      //推拿图片云地址，只需要一张 cloud://+环境名组合+文件名（商品ID）
      TuinaBriefIntro:"手法娴熟力道深厚评价很高",//商品简介
      TuinaPrice:"100.88",//价格
      IsServiceable:true,//true 或者 false，该类商品只有一个，
      TuinaNum:"20",//商品月销售量,也就是商品的付款量
      TuinaDetailIntro:["cloud://test4-ht5oe.7465-test4-ht5oe-1300471109/T000201.jpg",
                        "cloud://test4-ht5oe.7465-test4-ht5oe-1300471109/T000202.jpg",
                        "cloud://test4-ht5oe.7465-test4-ht5oe-1300471109/T000203.jpg"],
                        //具体介绍 以图片的方式介绍（eg:淘宝的详情就是通过图片展示的）
                       // cloud://+环境名组合+文件名（商品ID+序号）
    },
    {
      TuinaName:"赵技师推拿",//推拿名（商品名）
      TuinaID:"T0003", //推拿ID（商品ID）以T开头 //当用户将该商品加入订单，商品ID就会提交到订单界面
      TuinaGrade:"普通推拿",//推拿级别 [老板推拿，高级推拿，普通推拿]
      TuinaImage:"cloud://test4-ht5oe.7465-test4-ht5oe-1300471109/T0001.jpg",
      //推拿图片云地址，只需要一张 cloud://+环境名组合+文件名（商品ID）
      TuinaBriefIntro:"手法娴熟力道深厚评价很高",//商品简介
      TuinaPrice:"100.88",//价格
      IsServiceable:true,//true 或者 false，该类商品只有一个，
      TuinaNum:"20",//商品月销售量,也就是商品的付款量
      TuinaDetailIntro:["cloud://test4-ht5oe.7465-test4-ht5oe-1300471109/T000101.jpg",
                        "cloud://test4-ht5oe.7465-test4-ht5oe-1300471109/T000102.jpg",
                        "cloud://test4-ht5oe.7465-test4-ht5oe-1300471109/T000103.jpg"],
                        //具体介绍 以图片的方式介绍（eg:淘宝的详情就是通过图片展示的）
                       // cloud://+环境名组合+文件名（商品ID+序号）
    },
  ]
  return TuinaArr
}

//药品（药店）
function getMedicineData(){
  var MedicineArr=[{
      MedicName:"999感冒灵颗粒",//药品名
      MedicID:"M0001",//药品类 以M开头
      MedicImage:"cloud://test4-ht5oe.7465-test4-ht5oe-1300471109/M0001.jpg",//药品图片云地址，只需要一张
      MedicBriefIntro:"清热解毒见效快",//商品简介
      MedicPrice:"100.88",//价格
      MedicSales:"8" ,//销售量（历史销售）
      MedicSurplus:"20",//剩余量（库存还剩，随时更新）
      MedicDetailIntro:["cloud://test4-ht5oe.7465-test4-ht5oe-1300471109/M000101.jpg",
                        "cloud://test4-ht5oe.7465-test4-ht5oe-1300471109/M000102.jpg",
                        "cloud://test4-ht5oe.7465-test4-ht5oe-1300471109/M000103.jpg",
                        "cloud://test4-ht5oe.7465-test4-ht5oe-1300471109/M000104.jpg"],//具体介绍 以图片的方式介绍 包括说明书，用法等
  },
  {
    MedicName:"999感冒灵颗粒",//药品名
    MedicID:"M0001",//药品类 以M开头
    MedicImage:"cloud://test4-ht5oe.7465-test4-ht5oe-1300471109/M0001.jpg",//药品图片云地址，只需要一张
    MedicBriefIntro:"清热解毒见效快",//商品简介
    MedicPrice:"100.88",//价格
    MedicSales:"8" ,//销售量（历史销售）
    MedicSurplus:"20",//剩余量（库存还剩，随时更新）
    MedicDetailIntro:["cloud://test4-ht5oe.7465-test4-ht5oe-1300471109/M000101.jpg",
                      "cloud://test4-ht5oe.7465-test4-ht5oe-1300471109/M000102.jpg",
                      "cloud://test4-ht5oe.7465-test4-ht5oe-1300471109/M000103.jpg",
                      "cloud://test4-ht5oe.7465-test4-ht5oe-1300471109/M000104.jpg"],//具体介绍 以图片的方式介绍 包括说明书，用法等
},
{
  MedicName:"999感冒灵颗粒",//药品名
  MedicID:"M0001",//药品类 以M开头
  MedicImage:"cloud://test4-ht5oe.7465-test4-ht5oe-1300471109/M0001.jpg",//药品图片云地址，只需要一张
  MedicBriefIntro:"清热解毒见效快",//商品简介
  MedicPrice:"100.88",//价格
  MedicSales:"8" ,//销售量（历史销售）
  MedicSurplus:"20",//剩余量（库存还剩，随时更新）
  MedicDetailIntro:["cloud://test4-ht5oe.7465-test4-ht5oe-1300471109/M000101.jpg",
                    "cloud://test4-ht5oe.7465-test4-ht5oe-1300471109/M000102.jpg",
                    "cloud://test4-ht5oe.7465-test4-ht5oe-1300471109/M000103.jpg",
                    "cloud://test4-ht5oe.7465-test4-ht5oe-1300471109/M000104.jpg"],//具体介绍 以图片的方式介绍 包括说明书，用法等
},
]
  return MedicineArr
}

//其他服务（其他）
function getSidelineData(){
  var TuinaArr=[
    {
      SidelineName:"邵技师拔罐",//其他服务名（商品名）
      SidelineID:"S0001", //服务ID（商品ID） 以S开头
      SidelineImage:"cloud://test4-ht5oe.7465-test4-ht5oe-1300471109/S0001.jpg",//图片云地址，只需要一张
      SidelineBriefIntro:"适用于风湿痹痛、腹痛、消化不良",//商品简介
      SidelinePrice:"100.88",//价格
      IsServiceable:true,//true 或者 false，该类商品只有一个，
      SidelineNum:"20",//商品月销售量,也就是商品的付款量
      SidelineDetailIntro:["cloud://test4-ht5oe.7465-test4-ht5oe-1300471109/S000101.jpg",
                           "cloud://test4-ht5oe.7465-test4-ht5oe-1300471109/S000102.jpg",
                           "cloud://test4-ht5oe.7465-test4-ht5oe-1300471109/S000103.jpg"],
                           //具体介绍 以图片的方式介绍
    },
    {
      SidelineName:"邵技师拔罐",//其他服务名（商品名）
      SidelineID:"S0002", //服务ID（商品ID） 以S开头
      SidelineImage:"cloud://test4-ht5oe.7465-test4-ht5oe-1300471109/S0002.jpg",//图片云地址，只需要一张
      SidelineBriefIntro:"适用于风湿痹痛、腹痛、消化不良",//商品简介
      SidelinePrice:"100.88",//价格
      IsServiceable:true,//true 或者 false，该类商品只有一个，
      SidelineNum:"20",//商品月销售量,也就是商品的付款量
      SidelineDetailIntro:["cloud://test4-ht5oe.7465-test4-ht5oe-1300471109/S000201.jpg",
                           "cloud://test4-ht5oe.7465-test4-ht5oe-1300471109/S000202.jpg",
                           "cloud://test4-ht5oe.7465-test4-ht5oe-1300471109/S000203.jpg"],
                           //具体介绍 以图片的方式介绍
    },
    {
      SidelineName:"邵技师拔罐",//其他服务名（商品名）
      SidelineID:"S0003", //服务ID（商品ID） 以S开头
      SidelineImage:"cloud://test4-ht5oe.7465-test4-ht5oe-1300471109/S0003.jpg",//图片云地址，只需要一张
      SidelineBriefIntro:"适用于风湿痹痛、腹痛、消化不良",//商品简介
      SidelinePrice:"100.88",//价格
      IsServiceable:true,//true 或者 false，该类商品只有一个，
      SidelineNum:"20",//商品月销售量,也就是商品的付款量
      SidelineDetailIntro:["cloud://test4-ht5oe.7465-test4-ht5oe-1300471109/S000301.jpg",
                           "cloud://test4-ht5oe.7465-test4-ht5oe-1300471109/S000302.jpg",
                           "cloud://test4-ht5oe.7465-test4-ht5oe-1300471109/S000303.jpg"],
                           //具体介绍 以图片的方式介绍
    },
  ]
  return TuinaArr
}

//评论 考虑到用户的个人安全，所以评论全部为 匿名评价 所以商品与评论1对多关系通过商品ID确定
function getCommentsData(){ 
  var CommentsArr=[
    {
      CommentID:"T0001",//推拿ID、药品ID、其他服务ID中的一个，通过这个与具体的商品绑定，多条评论对应一种商品
      CommentNum:2,//评论条数
      Comments:[{ //匿名评论累加，CommentID与Comments一对多
        Coverall:"3",//几星 （1~5星）
        Ccontent:"对顾客热情、有耐心,真正的站在顾客的角度为解决各种身体问题",//文字评论
        Cimages:["cloud://test4-ht5oe.7465-test4-ht5oe-1300471109/T0001001C01.jpg",
                 "cloud://test4-ht5oe.7465-test4-ht5oe-1300471109/T0001001C02.jpg",
                 "cloud://test4-ht5oe.7465-test4-ht5oe-1300471109/T0001001C03.jpg"],//最多三张
        CDate:"2019-11-12"//评论日期
      },
      {
        Coverall:"3",//几星 （1~5星）
        Ccontent:"对顾客热情、有耐心,真正的站在顾客的角度为解决各种身体问题",//文字评论
        Cimages:["cloud://test4-ht5oe.7465-test4-ht5oe-1300471109/T0001002C01.jpg",
                 "cloud://test4-ht5oe.7465-test4-ht5oe-1300471109/T0001002C02.jpg",
                 "cloud://test4-ht5oe.7465-test4-ht5oe-1300471109/T0001002C03.jpg"],//最多三张
        CDate:"2019-11-12"//评论日期
      },
    ]
    },
    {
      CommentID:"S0001",//推拿ID、药品ID、其他服务ID中的一个，通过这个与具体的商品绑定，多条评论对应一种商品
      CommentNum:1,//评论条数
      Comments:[{ //匿名评论累加，
        Coverall:"3",//几星 （1~5星）
        Ccontent:"对顾客热情、有耐心,真正的站在顾客的角度为解决各种身体问题",//文字评论
        Cimages:["cloud://test4-ht5oe.7465-test4-ht5oe-1300471109/S0001001C01.jpg",
                 "cloud://test4-ht5oe.7465-test4-ht5oe-1300471109/S0001001C02.jpg",
                 "cloud://test4-ht5oe.7465-test4-ht5oe-1300471109/S0001001C03.jpg"],//最多三张
        CDate:"2019-11-12"//评论日期
      },
    ]
    },
    {
      CommentID:"M0001",//推拿ID、药品ID、其他服务ID中的一个，通过这个与具体的商品绑定，多条评论对应一种商品
      CommentNum:1,//评论条数
      Comments:[{ //匿名评论累加，
        Coverall:"3",//几星 （1~5星）
        Ccontent:"对顾客热情、有耐心,真正的站在顾客的角度为解决各种身体问题",//文字评论
        Cimages:["cloud://test4-ht5oe.7465-test4-ht5oe-1300471109/M0001001C01.jpg",
                 "cloud://test4-ht5oe.7465-test4-ht5oe-1300471109/M0001001C02.jpg",
                 "cloud://test4-ht5oe.7465-test4-ht5oe-1300471109/M0001001C03.jpg"],//最多三张
        CDate:"2019-11-12"//评论日期
      },
    ]
    },
  ]
  return CommentsArr
}
//订单数据（一位用户的）
function getOrderData(){
  OrderArr=[
    {
        UserID:"15703040304",//下单用户ID（也就是用户手机号）
        UserOrder:[
          {
            OrderID:"M0001",//推拿（以T开头）、药品（以M开头）、其他服务（以S开头）的ID，一订单对应一件商品，
            OrderNum:"2", //购买数量
            OrderData:"2019-11-11 12:30",//下单时间
            TransactionAmount:"200.88",//交易金额(考虑价格会发生改变)
            Isevaluated:true//是否评价过一次
          },
          {
            OrderID:"S0001",
            OrderNum:"1" ,//推拿和其他服务购买数量为1
            TransactionAmount:"100.88",//交易金额(考虑价格会发生改变)
            OrderData:"2019-11-11 12:30",//下单时间
            Isevaluated:false//是否评价
          },
          {
            OrderID:"T0001",
            OrderNum:"1" ,//推拿和其他服务购买数量为1
            TransactionAmount:"100.88",//交易金额(考虑价格会发生改变)
            OrderData:"2019-12-12 12:30",//下单时间
            Isevaluated:true//是否评价
          }
    ]
    }
  ]
}

//技师
function getStuffInformation(){
  TechnicianArr=[
    {
    TechName:"张xx技师", //名字
    TechID:"SYS0001", //技师TD 会对应一张具体的员工信息表（员工入职需要填写），这里只是小程序所展示的表
    TechPhone:"157030340304",//员工电话
    TechGrade:"高级推拿员",//店内职责[老板，高级推拿员，普通推拿员]
    TechPicture:"cloud://test4-ht5oe.7465-test4-ht5oe-1300471109/SYS0001.jpg",//员工图片 //云地址
    TechWorkExperience:"4",//工作经验 几年
    TechEvaluation:"对客人认真，手法娴熟，善于交谈" //员工评价
  }
  ]
}


//家庭基本信息
function getFamilyInformation(){
  FamilyArr=[
    {
      FamilyNum:"0001", //家庭编号
      FamilyMem:{  //家庭成员
        Guardian:[{ //监护人
          //由用户自己填写
          GdnName:"",  //监护人姓名
          GdnSex:"男",  //性别
          GdnBirth:"",  //生日
          GdnPhone:"",  //电话号码
          GdnAdress:"", //家庭地址
          GdnRelation:"", //与儿童的关系
          GdnWorkplase:"", //工作地址
          //由推拿师填写
          GdnCall:"",//本所对他的称呼
          GdnHobby:"",//爱好
        },
        {
          GdnName:"",
          GdnSex:"男",
          GdnBirth:"",
          GdnPhone:"",
          GdnAdress:"",
          GdnRelation:"",
          GdnWorkplase:"",
          GdnCall:"",
          GdnHobby:"",
        }],
        children:[//儿童
          {
            ChildName:"",//儿童名字
            ChildSex:"", //性别
            ChildBirth:"",//生日
            //由推拿师填写
            ChildHobby:"",//爱好
          },
          {
            ChildName:"",
            ChildSex:"",
            ChildBirth:"",
            ChildHobby:"",
          }
        ]
      }
    }
  ]
}

//儿童的身体状况 //由推拿师填写
function getChildPhysicalCondition(){
  PhyConditionArr=[
    {
      FamilyNum:"0001", //家庭编号
      FamilyChild:[
        {
          ChildName:"大宝",//姓名
          ChildPhy:[
          {
            PhyDate:"", //生病日期
            Physical:"", //体质状况
            Pathogeny:"",//生病原因
          },
          {
            PhyDate:"",
            Physical:"",
            Pathogeny:"",
          },
          {
            PhyDate:"",
            Physical:"",
            Pathogeny:"",
          }
        ]
        },
        {
          ChildName:"二宝",
          ChildPhy:[
            {
              PhyDate:"",
              Physical:"", 
              Pathogeny:"",
            },
            {
              PhyDate:"",
              Physical:"",
              Pathogeny:"",
            }
          ]
        }
      ]
    }
  ]
}

//员工业绩表
function getPersonalAchievement(){
  PersonalAchieveArr=[
    {
      TechID:"SYS0001",
      UserAchieve:[
        {
          OrderName:"邵技师推拿",//交易商品名称
          TransactioNum:"1", //交易数量
          TransactionAmount:"100.88",//交易金额(考虑价格会发生改变)
          OrderData:"2018-11-11 12:30",//下单时间
        },
        {
          OrderName:"",
          TransactioNum:"1",
          TransactionAmount:"100.88",//交易金额(考虑价格会发生改变)
          OrderData:"2019-11-12 12:30",//下单时间
        },
        {
          OrderName:"T0001",
          TransactioNum:"1",
          TransactionAmount:"100.88",//交易金额(考虑价格会发生改变)
          OrderData:"2019-12-12 12:30",//下单时间
        }
      ]
    }
  ]
}

//技师对应商品
function getStuffandStore(){
  StuffandStoreArr=[
    {
      StuffID:"SYS0001",
      StoreID:["T0001","S0001"]
    },
    {
      StuffID:"SYS0002",
      StoreID:["T0002"]
    }
  ] 
}

//顾客用户对应家庭编号，家庭编号对应
function getUserandFamilyNum(){
  UserandFamilyNumArr=[
    {
      UserID:"15703040304",//电话号码
      FamilyNum:"0001" //家庭编号
    },
    {
      UserID:"15703040324",//电话号码
      FamilyNum:"0002"
    }
  ]
}
module.exports={
  getTuinaData:getTuinaData,
  getMedicineData:getMedicineData,
  getSidelineData:getSidelineData,
  getCommentsData:getCommentsData,
}