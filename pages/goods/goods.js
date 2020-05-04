// pages/goods/goods.js
Page({

  /**
   * Page initial data
   */
    data: {
      goods:[],
      selected:true,
      selected1:false,
      goods_num:"" 
    },
    selectBrief(e){
      this.setData({
        selected:true,
        selected1:false
      });
    },
    selectParameter(e){
      this.setData({
        selected:false,
        selected1:true
      });
    },
    //点击加入购物车按钮跳到商品属性选择页面
    toSelect(e){
      const id=e.currentTarget.dataset.id;
      wx.navigateTo({
        url:`../selectGoods/selectGoods?id=${id}`
      });
    },
    goCart(){
      wx.switchTab({
        url: "../cart/cart"
      })
    },
    previewImage(e){
      const index=e.currentTarget.dataset.index;	//获取swiper里的图片的下标
      const slide=this.data.goods.goods_slides; //获取商品轮播图
      const imgList=[]; //定义一个数组来存放轮播图的url
      // console.log(slide);
      slide.map(item=>{
        imgList.push(item.slide_url);
      });
      wx.previewImage({
        current: imgList[index], // 当前显示图片的链接，不填则默认为 urls 的第一张
        urls: imgList
      })
    },


  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    console.log(options);
    const id=options.id;
    console.log(id);
    const goods=app.globalData.goodsDetail.filter(item=>{
      return item.id==id;
    });
    console.log(goods);
    this.setData({
      goods:goods[0]
    });
  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {
    const goods_num=wx.getStorageSync('goods_sum');
    this.setData({
      goods_num
    });
  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  }
})