// app.js
App({
  onLaunch: function () {
    // 初始化云开发环境
    if (wx.cloud) {
      wx.cloud.init({
        env: 'family-game-cloud', // 云开发环境ID
        traceUser: true // 是否记录用户访问记录
      });
      
      // 获取用户信息
      wx.getSetting({
        success: res => {
          if (res.authSetting['scope.userInfo']) {
            wx.getUserInfo({
              success: res => {
                this.globalData.userInfo = res.userInfo;
              }
            });
          }
        }
      });
    } else {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力');
    }
  },
  
  // 全局数据
  globalData: {
    userInfo: null,
    // 每日游戏生成次数限制
    dailyGenerationLimit: 3,
    // 当前已生成次数
    generationCount: 0,
    // 最后一次生成日期
    lastGenerationDate: null
  }
}); 