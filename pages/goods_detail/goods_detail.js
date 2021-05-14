// pages/goods_detail/goods_detail.js
import { request } from "../../request/index.js"
import regeneratorRuntime from "../../lib/runtime/runtime"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goodsObj:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const {goods_id} = options;
    this.getGoodsDetail(goods_id);
  },
  async getGoodsDetail(goods_id){
    const goodsObj =await request({url:"/goods/detail",data:{goods_id}});
    this.setData({
      goodsObj
    })
  }
})