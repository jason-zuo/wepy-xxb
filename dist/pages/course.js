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

var _classVideo = require('./../components/classVideo.js');

var _classVideo2 = _interopRequireDefault(_classVideo);

var _classAudio = require('./../components/classAudio.js');

var _classAudio2 = _interopRequireDefault(_classAudio);

var _lockList = require('./../components/lockList.js');

var _lockList2 = _interopRequireDefault(_lockList);

var _classDetail = require('./../components/classDetail.js');

var _classDetail2 = _interopRequireDefault(_classDetail);

var _contant = require('./../untils/contant.js');

var _apilist = require('./../api/apilist.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// 引用页面组件


var imgSave = function (_wepy$page) {
    _inherits(imgSave, _wepy$page);

    function imgSave() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, imgSave);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = imgSave.__proto__ || Object.getPrototypeOf(imgSave)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
            navigationBarTitleText: '课程详情',
            navigationBarBackgroundColor: '#ffd845'
        }, _this.$repeat = {}, _this.$props = { "classVIdeo": { "xmlns:wx": "" }, "lockList": { "xmlns:v-bind": "", "v-bind:headImg.sync": "headImg" }, "classDetail": { "v-bind:detailList.once": "content" }, "classAudio": {} }, _this.$events = {}, _this.components = {
            classVIdeo: _classVideo2.default,
            lockList: _lockList2.default,
            classDetail: _classDetail2.default,
            classAudio: _classAudio2.default
        }, _this.mixins = [_test2.default], _this.data = {
            content: '<div style="background-color:#FFF" width="100%"><img src="http://fs.xuexibao.cn/educhain/course/13/single/1/1.jpg" width="100%" /><img src="http://fs.xuexibao.cn/educhain/course/13/single/1/2.jpg" width="100%" /><img src="http://fs.xuexibao.cn/educhain/course/13/single/1/3.jpg" width="100%" /></div>',
            headImg: ''
        }, _this.computed = {}, _this.methods = {
            saveCover: function saveCover() {}
        }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(imgSave, [{
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
        key: 'getInfocourse',
        value: function getInfocourse(courseId) {
            var that = this;
            var tokenId = _wepy2.default.getStorageSync(_contant.USER_SPECICAL_INFO);
            (0, _apilist.getinfocourse)({
                query: {
                    token: tokenId,
                    id: courseId
                },
                id: courseId
            }).then(function (resp) {
                var rlt = resp.data;
                //存储token
                that.detail = rlt.result.tryContent;
                that.type = rlt.result.type;
            });
            that.$apply();
        }
    }, {
        key: 'getUserHeadUmg',
        value: function getUserHeadUmg() {
            var userInfo = _wepy2.default.getStorageSync(_contant.USER_INFO);
            console.log(userInfo);
            this.headImg = userInfo.avatarUrl;
            this.$apply();
        }
    }, {
        key: 'onLoad',
        value: function onLoad(opt) {
            console.log(opt);
            this.getInfocourse(opt.id);
            this.getUserHeadUmg();
        }
    }, {
        key: 'onHide',
        value: function onHide() {
            // 在当前周期内销毁audio的播放状态，因为切换页面了,所以用invoke调用audio组件方法
            console.log("退出当前页面");
            this.$invoke("classAudio", "pauseAudio");
        }
    }, {
        key: 'onUnload',
        value: function onUnload() {
            // 在当前周期内销毁audio的播放状态，因为返回上一页面的时候该页面被销毁了,所以用invoke调用audio组件方法
            this.$invoke("classAudio", "pauseAudio");
        }
    }]);

    return imgSave;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(imgSave , 'pages/course'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvdXJzZS5qcyJdLCJuYW1lcyI6WyJpbWdTYXZlIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIm5hdmlnYXRpb25CYXJCYWNrZ3JvdW5kQ29sb3IiLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJjbGFzc1ZJZGVvIiwibG9ja0xpc3QiLCJjbGFzc0RldGFpbCIsImNsYXNzQXVkaW8iLCJtaXhpbnMiLCJkYXRhIiwiY29udGVudCIsImhlYWRJbWciLCJjb21wdXRlZCIsIm1ldGhvZHMiLCJzYXZlQ292ZXIiLCJldmVudHMiLCJzdHJpbmciLCJfdGhpdXMiLCJpbWdSZWciLCJzcmNSZWciLCJhcnIiLCJtYXRjaCIsImltZ0xpc3QiLCJpIiwibGVuZ3RoIiwic3JjIiwicHVzaCIsImFyckxpc3QiLCIkYXBwbHkiLCJjb3Vyc2VJZCIsInRoYXQiLCJ0b2tlbklkIiwiZ2V0U3RvcmFnZVN5bmMiLCJxdWVyeSIsInRva2VuIiwiaWQiLCJ0aGVuIiwicmx0IiwicmVzcCIsImRldGFpbCIsInJlc3VsdCIsInRyeUNvbnRlbnQiLCJ0eXBlIiwidXNlckluZm8iLCJjb25zb2xlIiwibG9nIiwiYXZhdGFyVXJsIiwib3B0IiwiZ2V0SW5mb2NvdXJzZSIsImdldFVzZXJIZWFkVW1nIiwiJGludm9rZSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBR0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFFRTs7QUFJQTs7Ozs7Ozs7OztBQVZGOzs7SUFhcUJBLE87Ozs7Ozs7Ozs7Ozs7OzRMQUNuQkMsTSxHQUFTO0FBQ1BDLG9DQUF3QixNQURqQjtBQUVQQywwQ0FBOEI7QUFGdkIsUyxRQUlWQyxPLEdBQVUsRSxRQUNiQyxNLEdBQVMsRUFBQyxjQUFhLEVBQUMsWUFBVyxFQUFaLEVBQWQsRUFBOEIsWUFBVyxFQUFDLGdCQUFlLEVBQWhCLEVBQW1CLHVCQUFzQixTQUF6QyxFQUF6QyxFQUE2RixlQUFjLEVBQUMsMEJBQXlCLFNBQTFCLEVBQTNHLEVBQWdKLGNBQWEsRUFBN0osRSxRQUNUQyxPLEdBQVUsRSxRQUNUQyxVLEdBQWE7QUFDTkMsNENBRE07QUFFTkMsd0NBRk07QUFHTkMsOENBSE07QUFJTkM7QUFKTSxTLFFBT1ZDLE0sR0FBUyxnQixRQUVUQyxJLEdBQU87QUFDRkMscUJBQVUsOFNBRFI7QUFFRkMscUJBQVU7QUFGUixTLFFBS1BDLFEsR0FBVyxFLFFBSVhDLE8sR0FBVTtBQUNSQyxxQkFEUSx1QkFDSyxDQUVaO0FBSE8sUyxRQU1WQyxNLEdBQVMsRTs7Ozs7aUNBR0VDLE0sRUFBUTtBQUNYO0FBQ0EsZ0JBQUlDLFNBQVMsSUFBYjtBQUNBLGdCQUFJQyxTQUFTLG9CQUFiO0FBQ0EsZ0JBQUlDLFNBQVMsK0JBQWI7QUFDQSxnQkFBSUMsTUFBTUosT0FBT0ssS0FBUCxDQUFhSCxNQUFiLENBQVY7QUFDQSxnQkFBSUksVUFBVSxFQUFkO0FBQ0EsaUJBQUssSUFBSUMsSUFBSSxDQUFiLEVBQWdCQSxJQUFJSCxJQUFJSSxNQUF4QixFQUFnQ0QsR0FBaEMsRUFBcUM7QUFDakMsb0JBQUlFLE1BQU1MLElBQUlHLENBQUosRUFBT0YsS0FBUCxDQUFhRixNQUFiLENBQVY7QUFDQTtBQUNBRyx3QkFBUUksSUFBUixDQUFhRCxJQUFJLENBQUosQ0FBYjtBQUNBO0FBQ0g7QUFDRFIsbUJBQU9VLE9BQVAsR0FBaUJMLE9BQWpCO0FBQ0FMLG1CQUFPVyxNQUFQO0FBQ0g7OztzQ0FDVUMsUSxFQUFVO0FBQ3JCLGdCQUFJQyxPQUFPLElBQVg7QUFDQSxnQkFBSUMsVUFBVyxlQUFLQyxjQUFMLDZCQUFmO0FBQ0Esd0NBQWM7QUFDWkMsdUJBQU87QUFDTEMsMkJBQVFILE9BREg7QUFFTEksd0JBQUtOO0FBRkEsaUJBREs7QUFLWk0sb0JBQUtOO0FBTE8sYUFBZCxFQU1HTyxJQU5ILENBTVEsZ0JBQVE7QUFDYixvQkFBSUMsTUFBTUMsS0FBSzdCLElBQWY7QUFDQTtBQUNDcUIscUJBQUtTLE1BQUwsR0FBY0YsSUFBSUcsTUFBSixDQUFXQyxVQUF6QjtBQUNBWCxxQkFBS1ksSUFBTCxHQUFZTCxJQUFJRyxNQUFKLENBQVdFLElBQXZCO0FBQ0gsYUFYRDtBQVlBWixpQkFBS0YsTUFBTDtBQUNIOzs7eUNBRWlCO0FBQ2QsZ0JBQUllLFdBQVcsZUFBS1gsY0FBTCxvQkFBZjtBQUNBWSxvQkFBUUMsR0FBUixDQUFZRixRQUFaO0FBQ0EsaUJBQUtoQyxPQUFMLEdBQWVnQyxTQUFTRyxTQUF4QjtBQUNBLGlCQUFLbEIsTUFBTDtBQUVIOzs7K0JBRU1tQixHLEVBQUs7QUFDUkgsb0JBQVFDLEdBQVIsQ0FBWUUsR0FBWjtBQUNBLGlCQUFLQyxhQUFMLENBQW1CRCxJQUFJWixFQUF2QjtBQUNBLGlCQUFLYyxjQUFMO0FBQ0g7OztpQ0FFUTtBQUNMO0FBQ0FMLG9CQUFRQyxHQUFSLENBQVksUUFBWjtBQUNBLGlCQUFLSyxPQUFMLENBQWEsWUFBYixFQUEyQixZQUEzQjtBQUNIOzs7bUNBRVU7QUFDUDtBQUNBLGlCQUFLQSxPQUFMLENBQWEsWUFBYixFQUEyQixZQUEzQjtBQUNIOzs7O0VBNUZrQyxlQUFLQyxJOztrQkFBckJ2RCxPIiwiZmlsZSI6ImNvdXJzZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xyXG4gIGltcG9ydCBUb2FzdCBmcm9tICd3ZXB5LWNvbS10b2FzdCdcclxuICBpbXBvcnQgYXBpIGZyb20gJy4uL2FwaS9hcGkuanMnO1xyXG4gIGltcG9ydCB0ZXN0TWl4aW4gZnJvbSAnLi4vbWl4aW5zL3Rlc3QnXHJcblxyXG4gIC8vIOW8leeUqOmhtemdoue7hOS7tlxyXG4gIGltcG9ydCBjbGFzc1ZJZGVvIGZyb20gJy4uL2NvbXBvbmVudHMvY2xhc3NWaWRlbycgXHJcbiAgaW1wb3J0IGNsYXNzQXVkaW8gZnJvbSAnLi4vY29tcG9uZW50cy9jbGFzc0F1ZGlvJyBcclxuICBpbXBvcnQgbG9ja0xpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9sb2NrTGlzdCdcclxuICBpbXBvcnQgY2xhc3NEZXRhaWwgZnJvbSAnLi4vY29tcG9uZW50cy9jbGFzc0RldGFpbCdcclxuXHJcbiAgICBpbXBvcnQgeyBcclxuICAgIFVTRVJfU1BFQ0lDQUxfSU5GTyAsXHJcbiAgICBVU0VSX0lORk9cclxuICAgIH0gZnJvbSAnLi4vdW50aWxzL2NvbnRhbnQnXHJcbiAgICBpbXBvcnQge1xyXG4gICAgICAgIGdldGluZm9jb3Vyc2VcclxuICAgIH0gZnJvbSAnLi4vYXBpL2FwaWxpc3QnXHJcbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgaW1nU2F2ZSBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAgICBjb25maWcgPSB7XHJcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfor77nqIvor6bmg4UnLFxyXG4gICAgICBuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yOiAnI2ZmZDg0NSdcclxuICAgIH1cclxuICAgJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJjbGFzc1ZJZGVvXCI6e1wieG1sbnM6d3hcIjpcIlwifSxcImxvY2tMaXN0XCI6e1wieG1sbnM6di1iaW5kXCI6XCJcIixcInYtYmluZDpoZWFkSW1nLnN5bmNcIjpcImhlYWRJbWdcIn0sXCJjbGFzc0RldGFpbFwiOntcInYtYmluZDpkZXRhaWxMaXN0Lm9uY2VcIjpcImNvbnRlbnRcIn0sXCJjbGFzc0F1ZGlvXCI6e319O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xyXG4gICAgICAgIGNsYXNzVklkZW8gOiBjbGFzc1ZJZGVvICxcclxuICAgICAgICBsb2NrTGlzdCA6IGxvY2tMaXN0ICxcclxuICAgICAgICBjbGFzc0RldGFpbCA6IGNsYXNzRGV0YWlsICxcclxuICAgICAgICBjbGFzc0F1ZGlvIDogY2xhc3NBdWRpb1xyXG4gICAgfVxyXG5cclxuICAgIG1peGlucyA9IFt0ZXN0TWl4aW5dXHJcblxyXG4gICAgZGF0YSA9IHtcclxuICAgICAgICAgY29udGVudCA6ICc8ZGl2IHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjojRkZGXCIgd2lkdGg9XCIxMDAlXCI+PGltZyBzcmM9XCJodHRwOi8vZnMueHVleGliYW8uY24vZWR1Y2hhaW4vY291cnNlLzEzL3NpbmdsZS8xLzEuanBnXCIgd2lkdGg9XCIxMDAlXCIgLz48aW1nIHNyYz1cImh0dHA6Ly9mcy54dWV4aWJhby5jbi9lZHVjaGFpbi9jb3Vyc2UvMTMvc2luZ2xlLzEvMi5qcGdcIiB3aWR0aD1cIjEwMCVcIiAvPjxpbWcgc3JjPVwiaHR0cDovL2ZzLnh1ZXhpYmFvLmNuL2VkdWNoYWluL2NvdXJzZS8xMy9zaW5nbGUvMS8zLmpwZ1wiIHdpZHRoPVwiMTAwJVwiIC8+PC9kaXY+JyAsXHJcbiAgICAgICAgIGhlYWRJbWcgOiAnJ1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXB1dGVkID0ge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBtZXRob2RzID0ge1xyXG4gICAgICBzYXZlQ292ZXIgKCkge1xyXG4gICAgICAgIFxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZXZlbnRzID0ge1xyXG5cclxuICAgIH1cclxuICAgICBzcGxpdElNZyAoc3RyaW5nKSB7XHJcbiAgICAgICAgICAgIC8vIOWIm+W7uuepuuaVsOe7hOWwhuWOn+aOpeWPo+S4reeahGltZ+aKveemu+WHuuadpVxyXG4gICAgICAgICAgICBsZXQgX3RoaXVzID0gdGhpcyBcclxuICAgICAgICAgICAgbGV0IGltZ1JlZyA9IC88aW1nLio/KD86PnxcXC8+KS9naSA7XHJcbiAgICAgICAgICAgIGxldCBzcmNSZWcgPSAvc3JjPVtcXCdcXFwiXT8oW15cXCdcXFwiXSopW1xcJ1xcXCJdPy9pIDtcclxuICAgICAgICAgICAgdmFyIGFyciA9IHN0cmluZy5tYXRjaChpbWdSZWcpIDtcclxuICAgICAgICAgICAgdmFyIGltZ0xpc3QgPSBbXSA7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgc3JjID0gYXJyW2ldLm1hdGNoKHNyY1JlZyk7XHJcbiAgICAgICAgICAgICAgICAvL+iOt+WPluWbvueJh+WcsOWdgFxyXG4gICAgICAgICAgICAgICAgaW1nTGlzdC5wdXNoKHNyY1sxXSkgO1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coaW1nTGlzdClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBfdGhpdXMuYXJyTGlzdCA9IGltZ0xpc3RcclxuICAgICAgICAgICAgX3RoaXVzLiRhcHBseSgpXHJcbiAgICAgICAgfVxyXG4gICAgZ2V0SW5mb2NvdXJzZSAoY291cnNlSWQpIHtcclxuICAgICAgICB2YXIgdGhhdCA9IHRoaXMgOyBcclxuICAgICAgICBsZXQgdG9rZW5JZCA9ICB3ZXB5LmdldFN0b3JhZ2VTeW5jKFVTRVJfU1BFQ0lDQUxfSU5GTykgO1xyXG4gICAgICAgIGdldGluZm9jb3Vyc2Uoe1xyXG4gICAgICAgICAgcXVlcnk6IHtcclxuICAgICAgICAgICAgdG9rZW4gOiB0b2tlbklkICxcclxuICAgICAgICAgICAgaWQgOiBjb3Vyc2VJZFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGlkIDogY291cnNlSWRcclxuICAgICAgICB9KS50aGVuKHJlc3AgPT4ge1xyXG4gICAgICAgICAgIHZhciBybHQgPSByZXNwLmRhdGE7XHJcbiAgICAgICAgICAgLy/lrZjlgqh0b2tlblxyXG4gICAgICAgICAgICB0aGF0LmRldGFpbCA9IHJsdC5yZXN1bHQudHJ5Q29udGVudCA7XHJcbiAgICAgICAgICAgIHRoYXQudHlwZSA9IHJsdC5yZXN1bHQudHlwZSA7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhhdC4kYXBwbHkoKVxyXG4gICAgfVxyXG5cclxuICAgIGdldFVzZXJIZWFkVW1nICgpIHtcclxuICAgICAgICBsZXQgdXNlckluZm8gPSB3ZXB5LmdldFN0b3JhZ2VTeW5jKFVTRVJfSU5GTylcclxuICAgICAgICBjb25zb2xlLmxvZyh1c2VySW5mbylcclxuICAgICAgICB0aGlzLmhlYWRJbWcgPSB1c2VySW5mby5hdmF0YXJVcmxcclxuICAgICAgICB0aGlzLiRhcHBseSgpXHJcblxyXG4gICAgfVxyXG5cclxuICAgIG9uTG9hZChvcHQpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhvcHQpXHJcbiAgICAgICAgdGhpcy5nZXRJbmZvY291cnNlKG9wdC5pZClcclxuICAgICAgICB0aGlzLmdldFVzZXJIZWFkVW1nKClcclxuICAgIH1cclxuXHJcbiAgICBvbkhpZGUoKSB7XHJcbiAgICAgICAgLy8g5Zyo5b2T5YmN5ZGo5pyf5YaF6ZSA5q+BYXVkaW/nmoTmkq3mlL7nirbmgIHvvIzlm6DkuLrliIfmjaLpobXpnaLkuoYs5omA5Lul55SoaW52b2tl6LCD55SoYXVkaW/nu4Tku7bmlrnms5VcclxuICAgICAgICBjb25zb2xlLmxvZyhcIumAgOWHuuW9k+WJjemhtemdolwiKVxyXG4gICAgICAgIHRoaXMuJGludm9rZShcImNsYXNzQXVkaW9cIiwgXCJwYXVzZUF1ZGlvXCIpIDtcclxuICAgIH1cclxuXHJcbiAgICBvblVubG9hZCgpIHtcclxuICAgICAgICAvLyDlnKjlvZPliY3lkajmnJ/lhoXplIDmr4FhdWRpb+eahOaSreaUvueKtuaAge+8jOWboOS4uui/lOWbnuS4iuS4gOmhtemdoueahOaXtuWAmeivpemhtemdouiiq+mUgOavgeS6hizmiYDku6XnlKhpbnZva2XosIPnlKhhdWRpb+e7hOS7tuaWueazlVxyXG4gICAgICAgIHRoaXMuJGludm9rZShcImNsYXNzQXVkaW9cIiwgXCJwYXVzZUF1ZGlvXCIpIDtcclxuICAgIH0gICBcclxuICB9XHJcblxyXG4iXX0=