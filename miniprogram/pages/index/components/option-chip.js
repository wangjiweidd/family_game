Component({
  properties: {
    icon: {
      type: String,
      value: '🧩'
    },
    label: {
      type: String,
      value: '选项'
    },
    type: {
      type: String,
      value: ''
    },
    selected: {
      type: Boolean,
      value: false
    }
  },

  methods: {
    onSelect() {
      this.triggerEvent('select', { type: this.properties.type });
    }
  }
}) 