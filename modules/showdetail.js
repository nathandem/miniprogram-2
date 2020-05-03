const showDetail=(e)=>{
  const id=e.currentTarget.dataset.pid; //获取每个商品的id
  wx.navigateTo({
      url: `/pages/goods/show?id=${id}`
  })
};
export default showDetail;