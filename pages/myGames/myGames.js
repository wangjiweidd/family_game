// pages/myGames/myGames.js
Page({
  data: {
    // 历史游戏列表
    gameList: [
      {
        id: '1',
        title: '趣味找不同',
        description: '一个锻炼孩子观察力和专注力的游戏，适合在室内进行。',
        createTime: '2025-06-23 10:30'
      },
      {
        id: '2',
        title: '故事接龙',
        description: '激发孩子想象力和语言表达能力的互动游戏。',
        createTime: '2025-06-22 15:45'
      }
    ],
    // 是否正在加载
    isLoading: false,
    // 是否没有更多数据
    noMoreData: false
  },
  
  onLoad: function() {
    // 页面加载时的初始化逻辑
    // 实际开发中，这里会从云数据库获取游戏历史
  },
  
  onPullDownRefresh: function() {
    // 下拉刷新
    wx.stopPullDownRefresh();
  },
  
  onReachBottom: function() {
    // 上拉加载更多
    if (this.data.noMoreData || this.data.isLoading) return;
    
    this.setData({
      isLoading: true
    });
    
    // 模拟加载更多数据
    setTimeout(() => {
      this.setData({
        isLoading: false,
        noMoreData: true
      });
    }, 1000);
  },
  
  // 查看游戏详情
  viewGameDetail: function(e) {
    const gameId = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: '/pages/gameExecution/gameExecution?id=' + gameId
    });
  },
  
  // 删除游戏记录
  deleteGame: function(e) {
    const gameId = e.currentTarget.dataset.id;
    
    wx.showModal({
      title: '确认删除',
      content: '确定要删除这个游戏记录吗？',
      success: (res) => {
        if (res.confirm) {
          // 实际开发中，这里会调用云函数删除数据库中的记录
          const newGameList = this.data.gameList.filter(game => game.id !== gameId);
          this.setData({
            gameList: newGameList
          });
          
          wx.showToast({
            title: '删除成功',
            icon: 'success',
            duration: 2000
          });
        }
      }
    });
  },
  
  // 跳转到生成游戏页面
  goToGenerate: function() {
    wx.switchTab({
      url: '/pages/index/index'
    });
  }
}); 