// pages/myGames/myGames.js
Page({
  data: {
    savedGames: [],
    activityTypeMap: {
      'indoor': '室内',
      'outdoor': '户外',
      'travel': '旅行',
      'party': '派对',
      'water': '水上'
    },
    gameTypeMap: {
      'puzzle': '益智',
      'sports': '运动',
      'creative': '创意',
      'roleplay': '角色扮演'
    },
    durationMap: {
      'short': '5-15分钟',
      'medium': '15-30分钟',
      'long': '30分钟以上'
    }
  },

  onLoad: function (options) {
    this.loadSavedGames();
  },

  onShow: function () {
    // 每次页面显示时重新加载，以确保数据最新
    this.loadSavedGames();
  },

  // 加载保存的游戏
  loadSavedGames: function () {
    const app = getApp();
    const savedGames = wx.getStorageSync('savedGames') || [];
    
    // 更新全局数据
    app.globalData.savedGames = savedGames;
    
    this.setData({
      savedGames
    });
  },

  // 打开游戏详情
  openGame: function (e) {
    const gameId = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: `/pages/gameExecution/gameExecution?gameId=${gameId}`
    });
  },

  // 删除游戏
  deleteGame: function (e) {
    const gameId = e.currentTarget.dataset.id;
    
    wx.showModal({
      title: '确认删除',
      content: '确定要删除这个游戏吗？',
      success: res => {
        if (res.confirm) {
          const app = getApp();
          let savedGames = app.globalData.savedGames || [];
          
          // 过滤掉要删除的游戏
          savedGames = savedGames.filter(game => game.id !== gameId);
          
          // 更新全局数据和本地存储
          app.globalData.savedGames = savedGames;
          wx.setStorageSync('savedGames', savedGames);
          
          // 更新页面数据
          this.setData({
            savedGames
          });
          
          wx.showToast({
            title: '删除成功',
            icon: 'success'
          });
        }
      }
    });
  },

  // 分享游戏
  shareGame: function (e) {
    const gameId = e.currentTarget.dataset.id;
    const game = this.data.savedGames.find(game => game.id === gameId);
    
    if (game) {
      wx.showShareMenu({
        withShareTicket: true,
        menus: ['shareAppMessage']
      });
    }
  },

  // 分享功能
  onShareAppMessage: function (res) {
    if (res.from === 'button') {
      const gameId = res.target.dataset.id;
      const game = this.data.savedGames.find(game => game.id === gameId);
      
      if (game) {
        return {
          title: `推荐亲子游戏：${game.title}`,
          path: `/pages/gameExecution/gameExecution?gameId=${game.id}`,
          imageUrl: '/images/share-image.png' // 可以自定义分享图片
        };
      }
    }
    
    // 默认分享
    return {
      title: '亲子游戏生成器',
      path: '/pages/index/index',
      imageUrl: '/images/share-image.png' // 可以自定义分享图片
    };
  },

  // 跳转到首页
  goToHome: function () {
    wx.switchTab({
      url: '/pages/index/index'
    });
  }
}); 