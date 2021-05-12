//  轮播图接口   https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata
// 首页 导航 接口 https://api-hmugo-web.itheima.net/api/public/v1/home/catitems
// 楼层 https://api-hmugo-web.itheima.net/api/public/v1/home/floordata
// 引入用来发送请求的方法
import { request } from "../../request/index.js"
Page({
  data: {
    /**
     *  预览时无法请求到 网络数据 ，所以将数据提前渲染出来
     */
    swiperList: [{
      "image_src": "https://api-hmugo-web.itheima.net/pyg/banner1.png",
      "open_type": "navigate",
      "goods_id": 129,
      "navigator_url": "/pages/goods_detail/main?goods_id=129"
    },
    {
      "image_src": "https://api-hmugo-web.itheima.net/pyg/banner2.png",
      "open_type": "navigate",
      "goods_id": 395,
      "navigator_url": "/pages/goods_detail/main?goods_id=395"
    },
    {
      "image_src": "https://api-hmugo-web.itheima.net/pyg/banner3.png",
      "open_type": "navigate",
      "goods_id": 38,
      "navigator_url": "/pages/goods_detail/main?goods_id=38"
    }],
    catesList: [{
      "name": "分类",
      "image_src": "https://api-hmugo-web.itheima.net/pyg/icon_index_nav_4@2x.png",
      "open_type": "switchTab",
      "navigator_url": "/pages/category/main"
    },
    {
      "name": "秒杀拍",
      "image_src": "https://api-hmugo-web.itheima.net/pyg/icon_index_nav_3@2x.png"
    },
    {
      "name": "超市购",
      "image_src": "https://api-hmugo-web.itheima.net/pyg/icon_index_nav_2@2x.png"
    },
    {
      "name": "母婴品",
      "image_src": "https://api-hmugo-web.itheima.net/pyg/icon_index_nav_1@2x.png"
    }],
    floorList:[{
      "floor_title":{
          "name":"时尚女装",
          "image_src":"https://api-hmugo-web.itheima.net/pyg/pic_floor01_title.png"
      },
      "product_list":[
          {
              "name":"优质服饰",
              "image_src":"https://api-hmugo-web.itheima.net/pyg/pic_floor01_1@2x.png",
              "image_width":"232",
              "open_type":"navigate",
              "navigator_url":"/pages/goods_list?query=服饰"
          },
          {
              "name":"春季热门",
              "image_src":"https://api-hmugo-web.itheima.net/pyg/pic_floor01_2@2x.png",
              "image_width":"233",
              "open_type":"navigate",
              "navigator_url":"/pages/goods_list?query=热"
          },
          {
              "name":"爆款清仓",
              "image_src":"https://api-hmugo-web.itheima.net/pyg/pic_floor01_3@2x.png",
              "image_width":"233",
              "open_type":"navigate",
              "navigator_url":"/pages/goods_list?query=爆款"
          },
          {
              "name":"倒春寒",
              "image_src":"https://api-hmugo-web.itheima.net/pyg/pic_floor01_4@2x.png",
              "image_width":"233",
              "open_type":"navigate",
              "navigator_url":"/pages/goods_list?query=春季"
          },
          {
              "name":"怦然心动",
              "image_src":"https://api-hmugo-web.itheima.net/pyg/pic_floor01_5@2x.png",
              "image_width":"233",
              "open_type":"navigate",
              "navigator_url":"/pages/goods_list?query=心动"
          }
      ]
  },
  {
      "floor_title":{
          "name":"户外活动",
          "image_src":"https://api-hmugo-web.itheima.net/pyg/pic_floor02_title.png"
      },
      "product_list":[
          {
              "name":"勇往直前",
              "image_src":"https://api-hmugo-web.itheima.net/pyg/pic_floor02_1@2x.png",
              "image_width":"232",
              "open_type":"navigate",
              "navigator_url":"/pages/goods_list?query=户外"
          },
          {
              "name":"户外登山包",
              "image_src":"https://api-hmugo-web.itheima.net/pyg/pic_floor02_2@2x.png",
              "image_width":"273",
              "open_type":"navigate",
              "navigator_url":"/pages/goods_list?query=登山包"
          },
          {
              "name":"超强手套",
              "image_src":"https://api-hmugo-web.itheima.net/pyg/pic_floor02_3@2x.png",
              "image_width":"193",
              "open_type":"navigate",
              "navigator_url":"/pages/goods_list?query=手套"
          },
          {
              "name":"户外运动鞋",
              "image_src":"https://api-hmugo-web.itheima.net/pyg/pic_floor02_4@2x.png",
              "image_width":"193",
              "open_type":"navigate",
              "navigator_url":"/pages/goods_list?query=运动鞋"
          },
          {
              "name":"冲锋衣系列",
              "image_src":"https://api-hmugo-web.itheima.net/pyg/pic_floor02_5@2x.png",
              "image_width":"273",
              "open_type":"navigate",
              "navigator_url":"/pages/goods_list?query=冲锋衣"
          }
      ]
  },
  {
      "floor_title":{
          "name":"箱包配饰",
          "image_src":"https://api-hmugo-web.itheima.net/pyg/pic_floor03_title.png"
      },
      "product_list":[
          {
              "name":"清新气质",
              "image_src":"https://api-hmugo-web.itheima.net/pyg/pic_floor03_1@2x.png",
              "image_width":"232",
              "open_type":"navigate",
              "navigator_url":"/pages/goods_list?query=饰品"
          },
          {
              "name":"复古胸针",
              "image_src":"https://api-hmugo-web.itheima.net/pyg/pic_floor03_2@2x.png",
              "image_width":"263",
              "open_type":"navigate",
              "navigator_url":"/pages/goods_list?query=胸针"
          },
          {
              "name":"韩版手链",
              "image_src":"https://api-hmugo-web.itheima.net/pyg/pic_floor03_3@2x.png",
              "image_width":"203",
              "open_type":"navigate",
              "navigator_url":"/pages/goods_list?query=手链"
          },
          {
              "name":"水晶项链",
              "image_src":"https://api-hmugo-web.itheima.net/pyg/pic_floor03_4@2x.png",
              "image_width":"193",
              "open_type":"navigate",
              "navigator_url":"/pages/goods_list?query=水晶项链"
          },
          {
              "name":"情侣表",
              "image_src":"https://api-hmugo-web.itheima.net/pyg/pic_floor03_5@2x.png",
              "image_width":"273",
              "open_type":"navigate",
              "navigator_url":"/pages/goods_list?query=情侣表"
          }
      ]
  }]
  },
  onLoad: function (options) {
    //轮播图
    //  this.getSwiperList();
    //导航
    //  this.getCatesList();
  //  this.getFloorList();
  },
  //获取轮播图数据
  getSwiperList() {
    request({ url: "https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata" })
      .then(result => {
        this.setData({
          swiperList: result.data.message
        })
      })
  },
  //获取导航数据
  getCatesList() {
    request({ url: "https://api-hmugo-web.itheima.net/api/public/v1/home/catitems" })
      .then(result => {
        this.setData({
          catesList: result.data.message
        })
      })
  },
  //获取楼层
  getFloorList(){
    request({ url: "https://api-hmugo-web.itheima.net/api/public/v1/home/floordata" })
    .then(result => {
      this.setData({
        floorList: result.data.message
      })
    })
  }
})
