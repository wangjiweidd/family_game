// pages/index/index.js
Page({
  data: {
    activityType: 'indoor', // 默认选择室内活动
    gameTypes: {
      puzzle: true,  // 默认选择益智游戏
      sports: false,
      creative: false,
      roleplay: false
    },
    duration: 'medium', // 默认选择中等时长
    sliderPosition: 50  // 默认滑块位置在中间
  },

  onLoad: function (options) {
    // 初始化云开发
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力');
    } else {
      wx.cloud.init({
        env: 'cloud1-8g2rcmqjc4e4e5a3', // 替换为你的云环境ID
        traceUser: true,
      });
    }
  },

  // 选择活动类型
  selectActivityType: function (e) {
    const type = e.detail.type;
    this.setData({
      activityType: type
    });
  },

  // 切换游戏类型
  toggleGameType: function (e) {
    const type = e.detail.type;
    const gameTypes = this.data.gameTypes;
    gameTypes[type] = !gameTypes[type];
    
    // 确保至少选择一种游戏类型
    const hasSelected = Object.values(gameTypes).some(value => value);
    if (!hasSelected) {
      gameTypes[type] = true; // 如果没有选择任何类型，则保持当前类型选中
    }
    
    this.setData({
      gameTypes
    });
  },

  // 选择游戏时长
  selectDuration: function (e) {
    const duration = e.currentTarget.dataset.duration;
    let sliderPosition = 50; // 默认中等时长
    
    if (duration === 'short') {
      sliderPosition = 16.67; // 短时间
    } else if (duration === 'long') {
      sliderPosition = 83.33; // 长时间
    }
    
    this.setData({
      duration,
      sliderPosition
    });
  },

  // 生成游戏
  generateGame: function () {
    // 检查是否至少选择了一种游戏类型
    const gameTypes = this.data.gameTypes;
    const selectedGameTypes = Object.keys(gameTypes).filter(key => gameTypes[key]);
    
    if (selectedGameTypes.length === 0) {
      wx.showToast({
        title: '请至少选择一种游戏类型',
        icon: 'none'
      });
      return;
    }
    
    // 准备用户选择数据
    const userChoices = {
      activityType: this.data.activityType,
      gameTypes: selectedGameTypes,
      duration: this.data.duration
    };
    
    // 跳转到游戏执行页面
    wx.navigateTo({
      url: `/pages/gameExecution/gameExecution?choices=${JSON.stringify(userChoices)}`
    });
  }
}); 