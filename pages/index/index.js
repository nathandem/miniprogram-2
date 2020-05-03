//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
      movies:[  
      {url:'https://images.pexels.com/photos/908184/pexels-photo-908184.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'} ,  
      {url:'https://images.pexels.com/photos/1616096/pexels-photo-1616096.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'} ,  
      {url:'https://images.pexels.com/photos/848205/pexels-photo-848205.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'} ,  
      {url:'https://images.pexels.com/photos/147637/pexels-photo-147637.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'}   
      ], 
      inputShowed: false,
      inputVal: ""
  },
  onLoad() {
      this.setData({
          search: this.search.bind(this)
      })
  },
  search: function (value) {
      return new Promise((resolve, reject) => {
          setTimeout(() => {
              resolve([{text: '搜索结果', value: 1}, {text: '搜索结果2', value: 2}])
          }, 200)
      })
  },
  selectResult: function (e) {
      console.log('select result', e.detail)
    },

  onLoad: function () {
    console.log(Date.now());
    console.log("Index page is loaded");
  },

  onChange(e) {
    console.log('onChange', e)
    this.setData({
        value: e.detail.value,
    })
  },
  onFocus(e) {
    console.log('onFocus', e)
  },
  onBlur(e) {
    console.log('onBlur', e)
  },
  onConfirm(e) {
    console.log('onConfirm', e)
  },
  onClear(e) {
    console.log('onClear', e)
    this.setData({
        value: '',
    })
  },
  onCancel(e) {
    console.log('onCancel', e)
  }
})


