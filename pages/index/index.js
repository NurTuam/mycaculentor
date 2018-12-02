import Scratch from '../../utils/scratch.js'

Page({
  data: {
    data: [],
    password: [1, 4, 7, 8, 9]
  },
  onLoad: function (options) {
    new Scratch(this, {
      canvasId: 'canvas-demo'
    })
  },
  onEnd(data) {
    this.setData({
      data: data.detail
    });
  }
})