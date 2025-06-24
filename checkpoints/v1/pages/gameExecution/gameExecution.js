// pages/gameExecution/gameExecution.js
Page({
  data: {
    // 游戏信息
    game: {
      title: '趣味找不同',
      description: '一个锻炼孩子观察力和专注力的游戏，适合在室内进行。',
      steps: [
        '准备几个相似但有细微差别的物品（如两支相似的笔、两个相似的玩具等）。',
        '将物品摆放在桌子上，让孩子仔细观察。',
        '让孩子闭上眼睛，家长偷偷调换或移动其中一个物品的位置或方向。',
        '让孩子睁开眼睛，找出哪个物品被移动或改变了。',
        '可以增加难度，如移动多个物品或做更细微的改变。'
      ]
    },
    // 当前步骤索引
    currentStepIndex: 0,
    // 是否已完成所有步骤
    isCompleted: false
  },
  
  onLoad: function(options) {
    // 页面加载时的初始化逻辑
    // 实际开发中，这里会从全局数据或云数据库获取游戏信息
  },
  
  // 下一步按钮点击事件
  nextStep: function() {
    if (this.data.currentStepIndex < this.data.game.steps.length - 1) {
      this.setData({
        currentStepIndex: this.data.currentStepIndex + 1
      });
    } else {
      // 所有步骤已完成
      this.setData({
        isCompleted: true
      });
    }
  },
  
  // 重新开始按钮点击事件
  restart: function() {
    this.setData({
      currentStepIndex: 0,
      isCompleted: false
    });
  },
  
  // 保存到我的游戏
  saveGame: function() {
    // 实际开发中，这里会调用云函数保存游戏到数据库
    wx.showToast({
      title: '已保存到我的游戏',
      icon: 'success',
      duration: 2000
    });
  },
  
  // 重新生成游戏
  regenerateGame: function() {
    wx.navigateBack();
  }
}); 