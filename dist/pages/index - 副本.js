'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

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

var _classDetail = require('./../components/classDetail.js');

var _classDetail2 = _interopRequireDefault(_classDetail);

var _classList = require('./../components/classList.js');

var _classList2 = _interopRequireDefault(_classList);

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
    }, _this.$repeat = {}, _this.$props = { "tab": { "xmlns:v-on": "", "xmlns:v-bind": "", "v-bind:currentTab.sync": "currentTab", "v-bind:tabList.sync": "tabList" }, "ClassDetail": { "xmlns:wx": "", "v-bind:detailList.once": "detail" }, "classList": { "v-bind:singles.sync": "singles" } }, _this.$events = { "tab": { "v-on:currentTab": "getCurrentTab" } }, _this.components = {
      tab: _tab2.default,
      ClassDetail: _classDetail2.default,
      classList: _classList2.default
    }, _this.mixins = [_test2.default], _this.data = {
      mockImg: "http://fs.xuexibao.cn/educhain/course/11/cover.jpg",
      tabList: ["课程介绍", "课程列表"],
      currentTab: 0,
      is_empty: false,
      detail: '<div style="background-color:#FFF" width="100%"><img width="100%" src="http://fs.91xuexibao.com/educhain/course/11/1.jpg"/><img width="100%" src="http://fs.91xuexibao.com/educhain/course/11/2.jpg"/><img width="100%" src="http://fs.91xuexibao.com/educhain/course/11/3.jpg"/><img width="100%" src="http://fs.91xuexibao.com/educhain/course/11/4.jpg"/><img width="100%" src="http://fs.91xuexibao.com/educhain/course/11/5.jpg"/><img width="100%" src="http://fs.91xuexibao.com/educhain/course/11/6.jpg"/><img width="100%" src="http://fs.91xuexibao.com/educhain/course/11/7.jpg"/></div>',
      singles: [{ name: "【好学1】让孩子主动学习，关键在引导", progress: 1.7578125, id: 25, type: 2 }, { name: "【好学2】如何处理负面情绪，保护孩子学习热情", id: 26, type: 2 }, { name: "【好学3】激发孩子对学习的内在动机", id: 27, type: 2 }, { name: "【好学4】兴趣迁移法：让孩子不知不觉爱上学习", id: 28, type: 2 }]
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
      }
    }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad() {}
  }]);

  return Index;
}(_wepy2.default.page);

exports.default = Index;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4IC0g5Ymv5pysLmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIm5hdmlnYXRpb25CYXJCYWNrZ3JvdW5kQ29sb3IiLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJ0YWIiLCJDbGFzc0RldGFpbCIsImNsYXNzTGlzdCIsIm1peGlucyIsImRhdGEiLCJtb2NrSW1nIiwidGFiTGlzdCIsImN1cnJlbnRUYWIiLCJpc19lbXB0eSIsImRldGFpbCIsInNpbmdsZXMiLCJuYW1lIiwicHJvZ3Jlc3MiLCJpZCIsInR5cGUiLCJjb21wdXRlZCIsIm1ldGhvZHMiLCJnZXRDdXJyZW50VGFiIiwiY3VyIiwiZXZ0IiwidGhhdCIsIiRhcHBseSIsImJpbmRDaGFuZ2UiLCJlIiwiY3VycmVudCIsIm9uU2hhcmVBcHBNZXNzYWdlIiwidGl0bGUiLCJwYXRoIiwiZXZlbnRzIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFFQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7O0FBSEE7OztJQUtxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCLE1BRGpCO0FBRVBDLG9DQUE4QjtBQUZ2QixLLFFBSVZDLE8sR0FBVSxFLFFBQ2JDLE0sR0FBUyxFQUFDLE9BQU0sRUFBQyxjQUFhLEVBQWQsRUFBaUIsZ0JBQWUsRUFBaEMsRUFBbUMsMEJBQXlCLFlBQTVELEVBQXlFLHVCQUFzQixTQUEvRixFQUFQLEVBQWlILGVBQWMsRUFBQyxZQUFXLEVBQVosRUFBZSwwQkFBeUIsUUFBeEMsRUFBL0gsRUFBaUwsYUFBWSxFQUFDLHVCQUFzQixTQUF2QixFQUE3TCxFLFFBQ1RDLE8sR0FBVSxFQUFDLE9BQU0sRUFBQyxtQkFBa0IsZUFBbkIsRUFBUCxFLFFBQ1RDLFUsR0FBYTtBQUNYQyx3QkFEVztBQUVYQyx3Q0FGVztBQUdYQztBQUhXLEssUUFNVkMsTSxHQUFTLGdCLFFBRVRDLEksR0FBTztBQUNMQyxlQUFTLG9EQURKO0FBRUxDLGVBQVMsQ0FBQyxNQUFELEVBQVMsTUFBVCxDQUZKO0FBR0xDLGtCQUFZLENBSFA7QUFJUkMsZ0JBQVUsS0FKRjtBQUtSQyxjQUFTLHFrQkFMRDtBQU1SQyxlQUFVLENBQ1gsRUFBQ0MsTUFBTSxvQkFBUCxFQUE2QkMsVUFBVSxTQUF2QyxFQUFrREMsSUFBSSxFQUF0RCxFQUEwREMsTUFBTSxDQUFoRSxFQURXLEVBRVgsRUFBQ0gsTUFBTSx3QkFBUCxFQUFpQ0UsSUFBSSxFQUFyQyxFQUF5Q0MsTUFBTSxDQUEvQyxFQUZXLEVBR1gsRUFBQ0gsTUFBTSxtQkFBUCxFQUE0QkUsSUFBSSxFQUFoQyxFQUFvQ0MsTUFBTSxDQUExQyxFQUhXLEVBSVgsRUFBQ0gsTUFBTSx3QkFBUCxFQUFpQ0UsSUFBSSxFQUFyQyxFQUF5Q0MsTUFBTSxDQUEvQyxFQUpXO0FBTkYsSyxRQWNQQyxRLEdBQVcsRSxRQUlYQyxPLEdBQVU7QUFDUkMsbUJBRFEseUJBQ01DLEdBRE4sRUFDV0MsR0FEWCxFQUNnQjtBQUN0QixZQUFJQyxPQUFPLElBQVg7QUFDQUEsYUFBS2IsVUFBTCxHQUFrQlcsR0FBbEI7QUFDQUUsYUFBS0MsTUFBTDtBQUNELE9BTE87O0FBTVI7OztBQUdBQyxnQkFUUSxzQkFTR0MsQ0FUSCxFQVNNO0FBQ1osWUFBSUgsT0FBTyxJQUFYO0FBQ05BLGFBQUtiLFVBQUwsR0FBa0JnQixFQUFFZCxNQUFGLENBQVNlLE9BQTNCO0FBQ01KLGFBQUtDLE1BQUw7QUFDRCxPQWJPOztBQWNSSSx5QkFBbUIsNkJBQVk7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFPO0FBQ0xDLGlCQUFPLFdBREY7QUFFTEMsZ0JBQU07QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFSTyxTQUFQO0FBVUQ7QUE3Qk8sSyxRQWdDVkMsTSxHQUFTLEU7Ozs7OzZCQUlBLENBRVI7Ozs7RUF4RWdDLGVBQUtDLEk7O2tCQUFuQnJDLEsiLCJmaWxlIjoiaW5kZXggLSDlia/mnKwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcclxuICBpbXBvcnQgVG9hc3QgZnJvbSAnd2VweS1jb20tdG9hc3QnXHJcbiAgaW1wb3J0IGFwaSBmcm9tICcuLi9hcGkvYXBpLmpzJztcclxuICBpbXBvcnQgdGVzdE1peGluIGZyb20gJy4uL21peGlucy90ZXN0J1xyXG4gIC8vIOS4i+WNiumDqOS4uuW8leeUqOeahOe7hOS7tlxyXG4gIGltcG9ydCBUYWIgZnJvbSAnLi4vY29tcG9uZW50cy90YWInXHJcbiAgaW1wb3J0IENsYXNzRGV0YWlsIGZyb20gJy4uL2NvbXBvbmVudHMvY2xhc3NEZXRhaWwnXHJcbiAgaW1wb3J0IGNsYXNzTGlzdCBmcm9tICcuLi9jb21wb25lbnRzL2NsYXNzTGlzdCdcclxuXHJcbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG4gICAgY29uZmlnID0ge1xyXG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn6K++56iL6K+m5oOFJyxcclxuICAgICAgbmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvcjogJyNmZmQ4NDUnXHJcbiAgICB9XHJcbiAgICRyZXBlYXQgPSB7fTtcclxuJHByb3BzID0ge1widGFiXCI6e1wieG1sbnM6di1vblwiOlwiXCIsXCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOmN1cnJlbnRUYWIuc3luY1wiOlwiY3VycmVudFRhYlwiLFwidi1iaW5kOnRhYkxpc3Quc3luY1wiOlwidGFiTGlzdFwifSxcIkNsYXNzRGV0YWlsXCI6e1wieG1sbnM6d3hcIjpcIlwiLFwidi1iaW5kOmRldGFpbExpc3Qub25jZVwiOlwiZGV0YWlsXCJ9LFwiY2xhc3NMaXN0XCI6e1widi1iaW5kOnNpbmdsZXMuc3luY1wiOlwic2luZ2xlc1wifX07XHJcbiRldmVudHMgPSB7XCJ0YWJcIjp7XCJ2LW9uOmN1cnJlbnRUYWJcIjpcImdldEN1cnJlbnRUYWJcIn19O1xyXG4gY29tcG9uZW50cyA9IHtcclxuXHQgIHRhYjogVGFiICxcclxuXHQgIENsYXNzRGV0YWlsIDogQ2xhc3NEZXRhaWwgLFxyXG5cdCAgY2xhc3NMaXN0IDogY2xhc3NMaXN0XHJcbiAgICB9XHJcblxyXG4gICAgbWl4aW5zID0gW3Rlc3RNaXhpbl1cclxuXHJcbiAgICBkYXRhID0ge1xyXG4gICAgICBtb2NrSW1nOiBcImh0dHA6Ly9mcy54dWV4aWJhby5jbi9lZHVjaGFpbi9jb3Vyc2UvMTEvY292ZXIuanBnXCIsXHJcbiAgICAgIHRhYkxpc3Q6IFtcIuivvueoi+S7i+e7jVwiLCBcIuivvueoi+WIl+ihqFwiXSxcclxuICAgICAgY3VycmVudFRhYjogMCxcclxuXHQgIGlzX2VtcHR5OiBmYWxzZSAsXHJcblx0ICBkZXRhaWwgOiAnPGRpdiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6I0ZGRlwiIHdpZHRoPVwiMTAwJVwiPjxpbWcgd2lkdGg9XCIxMDAlXCIgc3JjPVwiaHR0cDovL2ZzLjkxeHVleGliYW8uY29tL2VkdWNoYWluL2NvdXJzZS8xMS8xLmpwZ1wiLz48aW1nIHdpZHRoPVwiMTAwJVwiIHNyYz1cImh0dHA6Ly9mcy45MXh1ZXhpYmFvLmNvbS9lZHVjaGFpbi9jb3Vyc2UvMTEvMi5qcGdcIi8+PGltZyB3aWR0aD1cIjEwMCVcIiBzcmM9XCJodHRwOi8vZnMuOTF4dWV4aWJhby5jb20vZWR1Y2hhaW4vY291cnNlLzExLzMuanBnXCIvPjxpbWcgd2lkdGg9XCIxMDAlXCIgc3JjPVwiaHR0cDovL2ZzLjkxeHVleGliYW8uY29tL2VkdWNoYWluL2NvdXJzZS8xMS80LmpwZ1wiLz48aW1nIHdpZHRoPVwiMTAwJVwiIHNyYz1cImh0dHA6Ly9mcy45MXh1ZXhpYmFvLmNvbS9lZHVjaGFpbi9jb3Vyc2UvMTEvNS5qcGdcIi8+PGltZyB3aWR0aD1cIjEwMCVcIiBzcmM9XCJodHRwOi8vZnMuOTF4dWV4aWJhby5jb20vZWR1Y2hhaW4vY291cnNlLzExLzYuanBnXCIvPjxpbWcgd2lkdGg9XCIxMDAlXCIgc3JjPVwiaHR0cDovL2ZzLjkxeHVleGliYW8uY29tL2VkdWNoYWluL2NvdXJzZS8xMS83LmpwZ1wiLz48L2Rpdj4nICxcclxuXHQgIHNpbmdsZXMgOiBbXHRcdCAgXHJcblx0XHR7bmFtZTogXCLjgJDlpb3lraYx44CR6K6p5a2p5a2Q5Li75Yqo5a2m5Lmg77yM5YWz6ZSu5Zyo5byV5a+8XCIsIHByb2dyZXNzOiAxLjc1NzgxMjUsIGlkOiAyNSwgdHlwZTogMn0sXHJcblx0XHR7bmFtZTogXCLjgJDlpb3lraYy44CR5aaC5L2V5aSE55CG6LSf6Z2i5oOF57uq77yM5L+d5oqk5a2p5a2Q5a2m5Lmg54Ot5oOFXCIsIGlkOiAyNiwgdHlwZTogMn0sXHJcblx0XHR7bmFtZTogXCLjgJDlpb3lraYz44CR5r+A5Y+R5a2p5a2Q5a+55a2m5Lmg55qE5YaF5Zyo5Yqo5py6XCIsIGlkOiAyNywgdHlwZTogMn0sXHJcblx0XHR7bmFtZTogXCLjgJDlpb3lraY044CR5YW06Laj6L+B56e75rOV77ya6K6p5a2p5a2Q5LiN55+l5LiN6KeJ54ix5LiK5a2m5LmgXCIsIGlkOiAyOCwgdHlwZTogMn1cclxuXHQgIF1cclxuICAgIH1cclxuXHJcbiAgICBjb21wdXRlZCA9IHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgbWV0aG9kcyA9IHtcclxuICAgICAgZ2V0Q3VycmVudFRhYihjdXIsIGV2dCkge1xyXG4gICAgICAgIGxldCB0aGF0ID0gdGhpcztcclxuICAgICAgICB0aGF0LmN1cnJlbnRUYWIgPSBjdXI7XHJcbiAgICAgICAgdGhhdC4kYXBwbHkoKTtcclxuICAgICAgfSxcclxuICAgICAgLyoqXHJcbiAgICAgICAqIOa7keWKqOWIh+aNonRhYlxyXG4gICAgICAgKi9cclxuICAgICAgYmluZENoYW5nZShlKSB7XHJcbiAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xyXG5cdFx0dGhhdC5jdXJyZW50VGFiID0gZS5kZXRhaWwuY3VycmVudDtcclxuICAgICAgICB0aGF0LiRhcHBseSgpO1xyXG4gICAgICB9LFxyXG4gICAgICBvblNoYXJlQXBwTWVzc2FnZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vIGlmIChyZXMuZnJvbSA9PT0gJ2J1dHRvbicpIHtcclxuICAgICAgICAvLyAgICAgLy8g5p2l6Ieq6aG16Z2i5YaF6L2s5Y+R5oyJ6ZKuXHJcbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKHJlcy50YXJnZXQpXHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICB0aXRsZTogJ+WtpuS5oOWuneWFjei0ueivvueoi+ivleWQrCcsXHJcbiAgICAgICAgICBwYXRoOiAnL3BhZ2VzL2luZGV4JyxcclxuICAgICAgICAvLyAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICAvLyAgICAgLy8g6L2s5Y+R5oiQ5YqfXHJcbiAgICAgICAgLy8gICB9LFxyXG4gICAgICAgIC8vICAgZmFpbDogZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgIC8vICAgICAvLyDovazlj5HlpLHotKVcclxuICAgICAgICAvLyAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBldmVudHMgPSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuIl19