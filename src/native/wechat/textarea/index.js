Component({
  properties: {
    placeholder: { type: String, value: '' },
    placeholderStyle: { type: String, value: '' },
    placeholderClass: { type: String, value: '' },
    disabled: { type: Boolean, value: false },
    autoFocus: { type: Boolean, value: false },
    focus: { type: Boolean, value: false },
    autoHeight: { type: Boolean, value: false },
    fixed: { type: Boolean, value: false },
    cursorSpacing: { type: Number | String, value: 0 },
    cursor: { type: Number, value: 0 },
    showConfirmBar: { type: Boolean, value: true },
    selectionStart: { type: Number, value: -1 },
    selectionEnd: { type: Number, value: -1 },
    adjustPosition: { type: Boolean, value: true },
    maxlength: { type: Number, value: 140 },
    value: { type: String, value: '' }
  },
  methods: {
    proxy (e) {
      this.triggerEvent(e.type, e.detail)
    }
  }
})
