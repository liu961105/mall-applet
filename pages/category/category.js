import { request } from "../../request/index.js"
import regeneratorRuntime from "../../lib/runtime/runtime"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //左侧的菜单数据
    leftMenuList: [],
    rightContent: [],
    currentIndex: 0,
    scrollTop:0
  },
  Cates: [],

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //判断是否有缓存，无则 发送请求
    const Cates = wx.getStorageSync("cates");
    if (!Cates) {
      this.getCates();
    } else {
      if (Date.now() - Cates.time > 1000 * 10) {
        this.getCates();
      } else {
        this.Cates = Cates.data;
        let leftMenuList = this.Cates.map(v => v.cat_name);
        let rightContent = this.Cates[0].children;
        this.setData({
          leftMenuList,
          rightContent
        })
      }
    }
  },
  
  async getCates() {
    // request({
    //   url: "/categories"
    // }).then(res => {
    //   this.Cates = res.data.message
    //   wx.setStorageSync("cates", { time: Date.now, data: this.Cates });

    //   //构造左侧的大菜单数据
    //   let leftMenuList = this.Cates.map(v => v.cat_name);
    //   //构造右侧的商品数据
    //   let rightContent = this.Cates[0].children;
    //   this.setData({
    //     leftMenuList,
    //     rightContent
    //   })
    // })
    const res = await request({url:"/categories"})
    this.Cates = res;
    wx.setStorageSync("cates", { time: Date.now, data: this.Cates });
     //构造左侧的大菜单数据
     let leftMenuList = this.Cates.map(v => v.cat_name);
       //构造右侧的商品数据
     let rightContent = this.Cates[0].children;
     this.setData({
      leftMenuList,
      rightContent
    })
  },
  handleItemTap(e) {
    const { index } = e.currentTarget.dataset;
    let rightContent = this.Cates[index].children;
    // this.setData({
    //   leftMenuList,
    // })
    this.setData({
      currentIndex: index,
      rightContent,
      scrollTop:0
    })
  }
})