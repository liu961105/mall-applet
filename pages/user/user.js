// pages/user/user.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userinfo: {},
  },
  onShow() {
    const userinfo = wx.getStorageSync("userinfo");
    this.setData({
      userinfo
    })
  },
  
  getUserProfile(e) {
    wx.getUserProfile({
      desc: '展示用户信息',
      success: (res) => {
        this.setData({
          userinfo: res.userInfo
        })
        wx.setStorageSync("userinfo",res.userInfo);
      }
    })
  }
})