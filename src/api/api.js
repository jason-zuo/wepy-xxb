
import wepy from 'wepy';

const wxRequest = async (params = {}, url, method) => {
    wepy.showToast({
      title: "加载中",
      icon: "loading"
    })
    
    let data = params.query || {};
    let res = await wepy.request({
      url: url,
      method: params.method || 'POST',
      data: data,
      header: { 'Content-Type': 'application/json' },
      success: function (data) {
        wepy.hideToast();
      }
    });
    return res;
};


module.exports = {
  wxRequest
}
