'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _wepyComToast = require('./../npm/wepy-com-toast/toast.js');

var _wepyComToast2 = _interopRequireDefault(_wepyComToast);

var _api = require('./../api/api.js');

var _api2 = _interopRequireDefault(_api);

var _test = require('./../mixins/test.js');

var _test2 = _interopRequireDefault(_test);

var _tab = require('./../components/tab.js');

var _tab2 = _interopRequireDefault(_tab);

var _classList = require('./../components/classList.js');

var _classList2 = _interopRequireDefault(_classList);

var _contant = require('./../untils/contant.js');

var _apilist = require('./../api/apilist.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// 下半部为引用的组件


var Index = function (_wepy$page) {
  _inherits(Index, _wepy$page);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '课程详情',
      navigationBarBackgroundColor: '#ffd845'
    }, _this.$repeat = {}, _this.$props = { "tab": { "xmlns:v-on": "", "xmlns:v-bind": "", "v-bind:currentTab.sync": "currentTab", "v-bind:tabList.sync": "tabList" } }, _this.$events = { "tab": { "v-on:currentTab": "getCurrentTab" } }, _this.components = {
      tab: _tab2.default,
      classList: _classList2.default
    }, _this.mixins = [_test2.default], _this.data = {
      price: '',
      mockImg: "",
      tabList: ["课程介绍", "课程列表"],
      currentTab: 1,
      is_empty: false,
      arrList: '',
      singles: [],
      alreadyBuy: false,
      productType: 1,
      imgSrc: '',
      freeCount: 0
    }, _this.computed = {}, _this.methods = {
      getCurrentTab: function getCurrentTab(cur, evt) {
        var that = this;
        that.currentTab = cur;
        that.$apply();
      },

      /**
       * 滑动切换tab
       */
      bindChange: function bindChange(e) {
        var that = this;
        that.currentTab = e.detail.current;
        that.$apply();
      },

      onShareAppMessage: function onShareAppMessage() {
        // if (res.from === 'button') {
        //     // 来自页面内转发按钮
        //     console.log(res.target)
        // }
        return {
          title: '学习宝免费课程试听',
          path: '/pages/index'
          //   success: function (res) {
          //     // 转发成功
          //   },
          //   fail: function (res) {
          //     // 转发失败
          //   }
        };
      },
      pay: function pay() {
        // 读取支付所需要的参数
        var that = this;
        console.log("###" + that.courseId);
        var tokenId = _wepy2.default.getStorageSync(_contant.USER_SPECICAL_INFO);
        (0, _apilist.getOrder)({
          query: {
            token: tokenId,
            id: that.courseId
          },
          id: that.courseId
        }).then(function (resp) {
          var rlt = resp.data;
          //存储token

          that.$apply();
        });
        wx.requestPayment({
          'timeStamp': '',
          'nonceStr': '',
          'package': '',
          'signType': 'MD5',
          'paySign': '',
          'success': function success(res) {
            //支付成功
          },
          'fail': function fail(res) {
            //支付失败 或 取消支付
          }
        });
      }
    }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'imgSrcFn',
    value: function imgSrcFn() {
      return '../images/audio.png';
    }
  }, {
    key: 'count',
    value: function count() {
      console.log(111);
    }
  }, {
    key: 'splitIMg',
    value: function splitIMg(string) {
      // 创建空数组将原接口中的img抽离出来
      var _thius = this;
      var imgReg = /<img.*?(?:>|\/>)/gi;
      var srcReg = /src=[\'\"]?([^\'\"]*)[\'\"]?/i;
      var arr = string.match(imgReg);
      var imgList = [];
      for (var i = 0; i < arr.length; i++) {
        var src = arr[i].match(srcReg);
        //获取图片地址
        imgList.push(src[1]);
        // console.log(imgList)
      }
      _thius.arrList = imgList;
      _thius.$apply();
    }
  }, {
    key: 'getSetcourse',
    value: function getSetcourse(courseId) {
      var that = this;
      var tokenId = _wepy2.default.getStorageSync(_contant.USER_SPECICAL_INFO);
      (0, _apilist.getsetcourse)({
        query: {
          token: tokenId,
          id: courseId
        },
        id: courseId
      }).then(function (resp) {
        var rlt = resp.data;
        //存储token
        that.detail = rlt.result.tryContent;
        that.splitIMg(rlt.result.tryContent);
        that.singles = rlt.result.singles;

        //存储free课程的下标,如果index < 该下标说明是免费的
        that.freeCount = rlt.result.freeCount;
        that.mockImg = rlt.result.cover;
        that.alreadyBuy = rlt.result.alreadyBuy;
        that.price = rlt.result.price;
        that.courseId = courseId;
        that.productType = rlt.result.type;
        that.getIconType(rlt.result.type);
        that.$apply();
      });
    }
  }, {
    key: 'getIconType',
    value: function getIconType(val) {
      // let val = this.productType ;
      console.log(val);
      var that = this;
      switch (val) {
        case 2:
          return that.imgSrc = '../images/audio.png';
        case 3:
          return that.imgSrc = '../images/video.png';
        case 1:
          return that.imgSrc = '../images/text.png';
        default:
          return that.imgSrc = '../images/audio.png';
          that.$apply();
      }
    }
  }, {
    key: 'freeFn',
    value: function freeFn() {
      console.log('计算是否是');
    }
  }, {
    key: 'onLoad',
    value: function onLoad(opt) {
      console.log(opt);
      // 销毁从下一个单品页面点击返回按钮时候的音频实例
      this.getSetcourse(opt.courseId);
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIm5hdmlnYXRpb25CYXJCYWNrZ3JvdW5kQ29sb3IiLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJ0YWIiLCJjbGFzc0xpc3QiLCJtaXhpbnMiLCJkYXRhIiwicHJpY2UiLCJtb2NrSW1nIiwidGFiTGlzdCIsImN1cnJlbnRUYWIiLCJpc19lbXB0eSIsImFyckxpc3QiLCJzaW5nbGVzIiwiYWxyZWFkeUJ1eSIsInByb2R1Y3RUeXBlIiwiaW1nU3JjIiwiZnJlZUNvdW50IiwiY29tcHV0ZWQiLCJtZXRob2RzIiwiZ2V0Q3VycmVudFRhYiIsImN1ciIsImV2dCIsInRoYXQiLCIkYXBwbHkiLCJiaW5kQ2hhbmdlIiwiZSIsImRldGFpbCIsImN1cnJlbnQiLCJvblNoYXJlQXBwTWVzc2FnZSIsInRpdGxlIiwicGF0aCIsInBheSIsImNvbnNvbGUiLCJsb2ciLCJjb3Vyc2VJZCIsInRva2VuSWQiLCJnZXRTdG9yYWdlU3luYyIsInF1ZXJ5IiwidG9rZW4iLCJpZCIsInRoZW4iLCJybHQiLCJyZXNwIiwid3giLCJyZXF1ZXN0UGF5bWVudCIsInJlcyIsImV2ZW50cyIsInN0cmluZyIsIl90aGl1cyIsImltZ1JlZyIsInNyY1JlZyIsImFyciIsIm1hdGNoIiwiaW1nTGlzdCIsImkiLCJsZW5ndGgiLCJzcmMiLCJwdXNoIiwicmVzdWx0IiwidHJ5Q29udGVudCIsInNwbGl0SU1nIiwiY292ZXIiLCJ0eXBlIiwiZ2V0SWNvblR5cGUiLCJ2YWwiLCJvcHQiLCJnZXRTZXRjb3Vyc2UiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFJQTs7Ozs7Ozs7O0FBUEE7OztJQVdxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdB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MEMsR0FBUjtBQUNFLGFBQUssQ0FBTDtBQUNFLGlCQUFPMUMsS0FBS1AsTUFBTCxHQUFjLHFCQUFyQjtBQUNGLGFBQUssQ0FBTDtBQUNFLGlCQUFPTyxLQUFLUCxNQUFMLEdBQWMscUJBQXJCO0FBQ0YsYUFBSyxDQUFMO0FBQ0UsaUJBQU9PLEtBQUtQLE1BQUwsR0FBYyxvQkFBckI7QUFDRjtBQUNFLGlCQUFPTyxLQUFLUCxNQUFMLEdBQWMscUJBQXJCO0FBQ0pPLGVBQUtDLE1BQUw7QUFUQTtBQVdGOzs7NkJBRVM7QUFDUlMsY0FBUUMsR0FBUixDQUFZLE9BQVo7QUFDRDs7OzJCQU1PZ0MsRyxFQUFLO0FBQ1JqQyxjQUFRQyxHQUFSLENBQVlnQyxHQUFaO0FBQ0E7QUFDQSxXQUFLQyxZQUFMLENBQWtCRCxJQUFJL0IsUUFBdEI7QUFDSDs7OztFQWpMZ0MsZUFBS2lDLEk7O2tCQUFuQnpFLEsiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcclxuICBpbXBvcnQgVG9hc3QgZnJvbSAnd2VweS1jb20tdG9hc3QnXHJcbiAgaW1wb3J0IGFwaSBmcm9tICcuLi9hcGkvYXBpLmpzJztcclxuICBpbXBvcnQgdGVzdE1peGluIGZyb20gJy4uL21peGlucy90ZXN0J1xyXG4gIC8vIOS4i+WNiumDqOS4uuW8leeUqOeahOe7hOS7tlxyXG4gIGltcG9ydCBUYWIgZnJvbSAnLi4vY29tcG9uZW50cy90YWInXHJcbiAgaW1wb3J0IGNsYXNzTGlzdCBmcm9tICcuLi9jb21wb25lbnRzL2NsYXNzTGlzdCdcclxuICBpbXBvcnQgeyBcclxuICAgVVNFUl9TUEVDSUNBTF9JTkZPICxcclxuICAgVVNFUl9JTkZPXHJcbn0gZnJvbSAnLi4vdW50aWxzL2NvbnRhbnQnXHJcbiAgaW1wb3J0IHtcclxuICAgIGdldHNldGNvdXJzZSAsXHJcbiAgICBnZXRPcmRlclxyXG4gIH0gZnJvbSBcIi4uL2FwaS9hcGlsaXN0XCJcclxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAgICBjb25maWcgPSB7XHJcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfor77nqIvor6bmg4UnLFxyXG4gICAgICBuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yOiAnI2ZmZDg0NSdcclxuICAgIH1cclxuICAgJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJ0YWJcIjp7XCJ4bWxuczp2LW9uXCI6XCJcIixcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6Y3VycmVudFRhYi5zeW5jXCI6XCJjdXJyZW50VGFiXCIsXCJ2LWJpbmQ6dGFiTGlzdC5zeW5jXCI6XCJ0YWJMaXN0XCJ9fTtcclxuJGV2ZW50cyA9IHtcInRhYlwiOntcInYtb246Y3VycmVudFRhYlwiOlwiZ2V0Q3VycmVudFRhYlwifX07XHJcbiBjb21wb25lbnRzID0ge1xyXG5cdCAgdGFiOiBUYWIgLFxyXG5cdCAgY2xhc3NMaXN0IDogY2xhc3NMaXN0XHJcbiAgICB9XHJcblxyXG4gICAgbWl4aW5zID0gW3Rlc3RNaXhpbl1cclxuXHJcbiAgICBkYXRhID0ge1xyXG4gICAgICBwcmljZTonJyxcclxuICAgICAgbW9ja0ltZzogXCJcIixcclxuICAgICAgdGFiTGlzdDogW1wi6K++56iL5LuL57uNXCIsIFwi6K++56iL5YiX6KGoXCJdLFxyXG4gICAgICBjdXJyZW50VGFiOiAxLFxyXG4gICAgICBpc19lbXB0eTogZmFsc2UgLFxyXG4gICAgICBhcnJMaXN0ICA6ICcnICxcclxuICAgICAgc2luZ2xlcyA6IFtcdFx0ICBcclxuICAgICAgICAgIFxyXG4gICAgICBdLFxyXG4gICAgICBhbHJlYWR5QnV5IDogZmFsc2UgLFxyXG4gICAgICBwcm9kdWN0VHlwZSA6IDEgICxcclxuICAgICAgaW1nU3JjIDogJycgLFxyXG4gICAgICBmcmVlQ291bnQgOiAwIFxyXG4gICAgfVxyXG5cclxuICAgIGNvbXB1dGVkID0ge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBtZXRob2RzID0ge1xyXG4gICAgICBnZXRDdXJyZW50VGFiKGN1ciwgZXZ0KSB7XHJcbiAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xyXG4gICAgICAgIHRoYXQuY3VycmVudFRhYiA9IGN1cjtcclxuICAgICAgICB0aGF0LiRhcHBseSgpO1xyXG4gICAgICB9LFxyXG4gICAgICAvKipcclxuICAgICAgICog5ruR5Yqo5YiH5o2idGFiXHJcbiAgICAgICAqL1xyXG4gICAgICBiaW5kQ2hhbmdlKGUpIHtcclxuICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XHJcblx0XHQgICAgdGhhdC5jdXJyZW50VGFiID0gZS5kZXRhaWwuY3VycmVudDtcclxuICAgICAgICB0aGF0LiRhcHBseSgpO1xyXG4gICAgICB9LFxyXG4gICAgICBvblNoYXJlQXBwTWVzc2FnZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vIGlmIChyZXMuZnJvbSA9PT0gJ2J1dHRvbicpIHtcclxuICAgICAgICAvLyAgICAgLy8g5p2l6Ieq6aG16Z2i5YaF6L2s5Y+R5oyJ6ZKuXHJcbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKHJlcy50YXJnZXQpXHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICB0aXRsZTogJ+WtpuS5oOWuneWFjei0ueivvueoi+ivleWQrCcsXHJcbiAgICAgICAgICBwYXRoOiAnL3BhZ2VzL2luZGV4JyxcclxuICAgICAgICAvLyAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICAvLyAgICAgLy8g6L2s5Y+R5oiQ5YqfXHJcbiAgICAgICAgLy8gICB9LFxyXG4gICAgICAgIC8vICAgZmFpbDogZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgIC8vICAgICAvLyDovazlj5HlpLHotKVcclxuICAgICAgICAvLyAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIHBheSgpe1xyXG4gICAgICAgIC8vIOivu+WPluaUr+S7mOaJgOmcgOimgeeahOWPguaVsFxyXG4gICAgICAgIHZhciB0aGF0ID0gdGhpcyA7IFxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiIyMjXCIgKyB0aGF0LmNvdXJzZUlkKVxyXG4gICAgICAgIGxldCB0b2tlbklkID0gIHdlcHkuZ2V0U3RvcmFnZVN5bmMoVVNFUl9TUEVDSUNBTF9JTkZPKSA7XHJcbiAgICAgICAgZ2V0T3JkZXIoe1xyXG4gICAgICAgICAgcXVlcnk6IHtcclxuICAgICAgICAgICAgdG9rZW4gOiB0b2tlbklkICxcclxuICAgICAgICAgICAgaWQgOiB0aGF0LmNvdXJzZUlkXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgaWQgOiB0aGF0LmNvdXJzZUlkXHJcbiAgICAgICAgfSkudGhlbihyZXNwID0+IHtcclxuICAgICAgICAgICB2YXIgcmx0ID0gcmVzcC5kYXRhO1xyXG4gICAgICAgICAgIC8v5a2Y5YKodG9rZW5cclxuICAgICAgICAgICBcclxuICAgICAgICAgICAgdGhhdC4kYXBwbHkoKVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHd4LnJlcXVlc3RQYXltZW50KHtcclxuICAgICAgICAgICd0aW1lU3RhbXAnOiAnJyxcclxuICAgICAgICAgICdub25jZVN0cic6ICcnLFxyXG4gICAgICAgICAgJ3BhY2thZ2UnOiAnJyxcclxuICAgICAgICAgICdzaWduVHlwZSc6ICdNRDUnLFxyXG4gICAgICAgICAgJ3BheVNpZ24nOiAnJyxcclxuICAgICAgICAgICdzdWNjZXNzJzpmdW5jdGlvbihyZXMpe1xyXG4gICAgICAgICAgICAvL+aUr+S7mOaIkOWKn1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgICdmYWlsJzpmdW5jdGlvbihyZXMpe1xyXG4gICAgICAgICAgICAvL+aUr+S7mOWksei0pSDmiJYg5Y+W5raI5pSv5LuYXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGltZ1NyY0ZuICgpIHtcclxuICAgICAgICByZXR1cm4gJy4uL2ltYWdlcy9hdWRpby5wbmcnXHJcbiAgICB9XHJcbiAgICBjb3VudCAoKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKDExMSlcclxuICAgIH1cclxuICAgIHNwbGl0SU1nIChzdHJpbmcpIHtcclxuICAgICAgICAgICAgLy8g5Yib5bu656m65pWw57uE5bCG5Y6f5o6l5Y+j5Lit55qEaW1n5oq956a75Ye65p2lXHJcbiAgICAgICAgICAgIGxldCBfdGhpdXMgPSB0aGlzIFxyXG4gICAgICAgICAgICBsZXQgaW1nUmVnID0gLzxpbWcuKj8oPzo+fFxcLz4pL2dpIDtcclxuICAgICAgICAgICAgbGV0IHNyY1JlZyA9IC9zcmM9W1xcJ1xcXCJdPyhbXlxcJ1xcXCJdKilbXFwnXFxcIl0/L2kgO1xyXG4gICAgICAgICAgICB2YXIgYXJyID0gc3RyaW5nLm1hdGNoKGltZ1JlZykgO1xyXG4gICAgICAgICAgICB2YXIgaW1nTGlzdCA9IFtdIDtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHZhciBzcmMgPSBhcnJbaV0ubWF0Y2goc3JjUmVnKTtcclxuICAgICAgICAgICAgICAgIC8v6I635Y+W5Zu+54mH5Zyw5Z2AXHJcbiAgICAgICAgICAgICAgICBpbWdMaXN0LnB1c2goc3JjWzFdKSA7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhpbWdMaXN0KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF90aGl1cy5hcnJMaXN0ID0gaW1nTGlzdFxyXG4gICAgICAgICAgICBfdGhpdXMuJGFwcGx5KClcclxuICAgICAgICB9XHJcbiAgICBnZXRTZXRjb3Vyc2UgKGNvdXJzZUlkKSB7XHJcbiAgICAgICAgdmFyIHRoYXQgPSB0aGlzIDsgXHJcbiAgICAgICAgbGV0IHRva2VuSWQgPSAgd2VweS5nZXRTdG9yYWdlU3luYyhVU0VSX1NQRUNJQ0FMX0lORk8pIDtcclxuICAgICAgICBnZXRzZXRjb3Vyc2Uoe1xyXG4gICAgICAgICAgcXVlcnk6IHtcclxuICAgICAgICAgICAgdG9rZW4gOiB0b2tlbklkICxcclxuICAgICAgICAgICAgaWQgOiBjb3Vyc2VJZFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGlkIDogY291cnNlSWRcclxuICAgICAgICB9KS50aGVuKHJlc3AgPT4ge1xyXG4gICAgICAgICAgIHZhciBybHQgPSByZXNwLmRhdGE7XHJcbiAgICAgICAgICAgLy/lrZjlgqh0b2tlblxyXG4gICAgICAgICAgICB0aGF0LmRldGFpbCA9IHJsdC5yZXN1bHQudHJ5Q29udGVudCA7XHJcbiAgICAgICAgICAgIHRoYXQuc3BsaXRJTWcocmx0LnJlc3VsdC50cnlDb250ZW50KTtcclxuICAgICAgICAgICAgdGhhdC5zaW5nbGVzID0gcmx0LnJlc3VsdC5zaW5nbGVzIDtcclxuXHJcbiAgICAgICAgICAgIC8v5a2Y5YKoZnJlZeivvueoi+eahOS4i+aghyzlpoLmnpxpbmRleCA8IOivpeS4i+agh+ivtOaYjuaYr+WFjei0ueeahFxyXG4gICAgICAgICAgICB0aGF0LmZyZWVDb3VudCA9IHJsdC5yZXN1bHQuZnJlZUNvdW50IDtcclxuICAgICAgICAgICAgdGhhdC5tb2NrSW1nID0gcmx0LnJlc3VsdC5jb3ZlciA7XHJcbiAgICAgICAgICAgIHRoYXQuYWxyZWFkeUJ1eSA9IHJsdC5yZXN1bHQuYWxyZWFkeUJ1eSA7XHJcbiAgICAgICAgICAgIHRoYXQucHJpY2UgPSBybHQucmVzdWx0LnByaWNlIDtcclxuICAgICAgICAgICAgdGhhdC5jb3Vyc2VJZCA9IGNvdXJzZUlkIDtcclxuICAgICAgICAgICAgdGhhdC5wcm9kdWN0VHlwZSA9IHJsdC5yZXN1bHQudHlwZSA7XHJcbiAgICAgICAgICAgIHRoYXQuZ2V0SWNvblR5cGUoIHJsdC5yZXN1bHQudHlwZSlcclxuICAgICAgICAgICAgdGhhdC4kYXBwbHkoKVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEljb25UeXBlICAodmFsKSAge1xyXG4gICAgICAvLyBsZXQgdmFsID0gdGhpcy5wcm9kdWN0VHlwZSA7XHJcbiAgICAgIGNvbnNvbGUubG9nKHZhbClcclxuICAgICAgbGV0IHRoYXQgPSB0aGlzIFxyXG4gICAgICBzd2l0Y2ggKHZhbCkge1xyXG4gICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgIHJldHVybiB0aGF0LmltZ1NyYyA9ICcuLi9pbWFnZXMvYXVkaW8ucG5nJ1xyXG4gICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgIHJldHVybiB0aGF0LmltZ1NyYyA9ICcuLi9pbWFnZXMvdmlkZW8ucG5nJztcclxuICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICByZXR1cm4gdGhhdC5pbWdTcmMgPSAnLi4vaW1hZ2VzL3RleHQucG5nJyA7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgIHJldHVybiB0aGF0LmltZ1NyYyA9ICcuLi9pbWFnZXMvYXVkaW8ucG5nJ1xyXG4gICAgICB0aGF0LiRhcHBseSgpXHJcbiAgICAgIH1cclxuICAgfVxyXG5cclxuICAgZnJlZUZuICgpIHtcclxuICAgICBjb25zb2xlLmxvZygn6K6h566X5piv5ZCm5pivJylcclxuICAgfVxyXG4gIFxyXG4gICAgZXZlbnRzID0ge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBvbkxvYWQob3B0KSB7XHJcbiAgICAgICAgY29uc29sZS5sb2cob3B0KVxyXG4gICAgICAgIC8vIOmUgOavgeS7juS4i+S4gOS4quWNleWTgemhtemdoueCueWHu+i/lOWbnuaMiemSruaXtuWAmeeahOmfs+mikeWunuS+i1xyXG4gICAgICAgIHRoaXMuZ2V0U2V0Y291cnNlKG9wdC5jb3Vyc2VJZClcclxuICAgIH1cclxuICB9XHJcblxyXG4iXX0=