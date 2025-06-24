Page({
  data: {
    // 家长身份选项
    parentIdentities: ['爸爸', '妈妈', '其他'],
    parentIdentityIndex: 0,
    
    // 孩子年龄段选项
    ageRanges: ['3-5岁', '6-9岁', '10-12岁'],
    ageRangeIndex: 0,
    
    // 游戏类型选项
    gameTypes: ['安静类', '体能类', '语言类', '创造类'],
    gameTypeIndex: 0,
    
    // 可用时间选项
    availableTimes: ['5分钟', '10分钟', '15分钟以上'],
    availableTimeIndex: 0,
    
    // 是否正在生成游戏
    isGenerating: false,
    
    // 生成次数
    generationCount: 0,
    
    // 最近生成的游戏
    recentGames: [
      {
        id: '1',
        title: '趣味找不同'
      },
      {
        id: '2',
        title: '故事接龙'
      }
    ]
  },
  
  onLoad: function() {
    // 页面加载时的初始化逻辑
    this.loadGenerationCount();
    this.loadRecentGames();
  },
  
  // 加载生成次数
  loadGenerationCount: function() {
    // 实际开发中，这里会从本地存储或云数据库获取生成次数
    const app = getApp();
    if (app.globalData.generationCount !== undefined) {
      this.setData({
        generationCount: app.globalData.generationCount
      });
    }
  },
  
  // 加载最近生成的游戏
  loadRecentGames: function() {
    // 实际开发中，这里会从云数据库获取最近生成的游戏
  },
  
  // 选择家长身份
  selectParentIdentity: function(e) {
    this.setData({
      parentIdentityIndex: e.currentTarget.dataset.index
    });
  },
  
  // 选择孩子年龄段
  selectAgeRange: function(e) {
    this.setData({
      ageRangeIndex: e.currentTarget.dataset.index
    });
  },
  
  // 选择游戏类型
  selectGameType: function(e) {
    this.setData({
      gameTypeIndex: e.currentTarget.dataset.index
    });
  },
  
  // 时间滑块变化
  timeSliderChange: function(e) {
    this.setData({
      availableTimeIndex: e.detail.value
    });
  },
  
  // 生成游戏按钮点击事件
  generateGame: function() {
    // 检查生成次数限制
    const app = getApp();
    if (app.globalData.generationCount >= app.globalData.dailyGenerationLimit) {
      wx.showToast({
        title: '今日生成次数已用完',
        icon: 'none',
        duration: 2000
      });
      return;
    }
    
    // 设置生成中状态
    this.setData({
      isGenerating: true
    });
    
    // 获取用户选择的参数
    const params = {
      parentIdentity: this.data.parentIdentities[this.data.parentIdentityIndex],
      ageRange: this.data.ageRanges[this.data.ageRangeIndex],
      gameType: this.data.gameTypes[this.data.gameTypeIndex],
      availableTime: this.data.availableTimes[this.data.availableTimeIndex]
    };
    
    // 在实际开发中，这里会调用云函数
    // 目前先模拟API调用
    setTimeout(() => {
      // 更新生成次数
      app.globalData.generationCount += 1;
      this.setData({
        isGenerating: false,
        generationCount: app.globalData.generationCount
      });
      
      // 跳转到游戏执行页面
      wx.navigateTo({
        url: '/pages/gameExecution/gameExecution'
      });
    }, 2000);
  },
  
  // 快速生成游戏
  quickGenerate: function() {
    // 检查生成次数限制
    const app = getApp();
    if (app.globalData.generationCount >= app.globalData.dailyGenerationLimit) {
      wx.showToast({
        title: '今日生成次数已用完',
        icon: 'none',
        duration: 2000
      });
      return;
    }
    
    // 使用默认设置生成游戏
    this.setData({
      isGenerating: true
    });
    
    // 模拟API调用
    setTimeout(() => {
      // 更新生成次数
      app.globalData.generationCount += 1;
      this.setData({
        isGenerating: false,
        generationCount: app.globalData.generationCount
      });
      
      // 跳转到游戏执行页面
      wx.navigateTo({
        url: '/pages/gameExecution/gameExecution'
      });
    }, 1500);
  },
  
  // 查看最近生成的游戏
  viewRecentGame: function(e) {
    const gameId = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: '/pages/gameExecution/gameExecution?id=' + gameId
    });
  }
}); 