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
    isGenerating: false
  },
  
  onLoad: function() {
    // 页面加载时的初始化逻辑
  },
  
  // 家长身份选择器变化事件
  bindParentIdentityChange: function(e) {
    this.setData({
      parentIdentityIndex: e.detail.value
    });
  },
  
  // 孩子年龄段选择器变化事件
  bindAgeRangeChange: function(e) {
    this.setData({
      ageRangeIndex: e.detail.value
    });
  },
  
  // 游戏类型选择器变化事件
  bindGameTypeChange: function(e) {
    this.setData({
      gameTypeIndex: e.detail.value
    });
  },
  
  // 可用时间选择器变化事件
  bindAvailableTimeChange: function(e) {
    this.setData({
      availableTimeIndex: e.detail.value
    });
  },
  
  // 生成游戏按钮点击事件
  generateGame: function() {
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
      this.setData({
        isGenerating: false
      });
      
      // 跳转到游戏执行页面
      wx.navigateTo({
        url: '/pages/gameExecution/gameExecution'
      });
    }, 2000);
  }
}); 