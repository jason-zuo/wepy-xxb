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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
            navigationBarTitleText: '生成海报',
            navigationBarBackgroundColor: '#ffd845'
        }, _this.components = {}, _this.mixins = [_test2.default], _this.data = {}, _this.computed = {}, _this.methods = {
            saveCover: function () {
                var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                    var filePath, json;
                    return regeneratorRuntime.wrap(function _callee$(_context) {
                        while (1) {
                            switch (_context.prev = _context.next) {
                                case 0:
                                    // 由于微信小程序不支持网络图片直接进行保存，所以先对图片进行处理先下载到本地,同时需要将需要下载的图片域名在公众号配置
                                    filePath = "http://fs.xuexibao.cn/920efa355fd7487298fb19c374680c16.jpg";
                                    _context.next = 3;
                                    return wx.downloadFile({ url: filePath });

                                case 3:
                                    json = _context.sent;

                                    wx.saveImageToPhotosAlbum({
                                        filePath: json.data.tempFilePath,
                                        success: function success(res) {
                                            _wepy2.default.showToast({
                                                title: "图片已保存",
                                                icon: "success"
                                            });
                                        },
                                        fail: function fail(err) {
                                            _wepy2.default.showToast({
                                                title: "图片未保存",
                                                icon: "fail"
                                            });
                                        }
                                    });

                                case 5:
                                case 'end':
                                    return _context.stop();
                            }
                        }
                    }, _callee, this);
                }));

                function saveCover() {
                    return _ref2.apply(this, arguments);
                }

                return saveCover;
            }()
        }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(imgSave, [{
        key: 'onLoad',
        value: function onLoad() {}
    }]);

    return imgSave;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(imgSave , 'pages/imgSave'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImltZ1NhdmUuanMiXSwibmFtZXMiOlsiaW1nU2F2ZSIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yIiwiY29tcG9uZW50cyIsIm1peGlucyIsImRhdGEiLCJjb21wdXRlZCIsIm1ldGhvZHMiLCJzYXZlQ292ZXIiLCJmaWxlUGF0aCIsInd4IiwiZG93bmxvYWRGaWxlIiwidXJsIiwianNvbiIsInNhdmVJbWFnZVRvUGhvdG9zQWxidW0iLCJ0ZW1wRmlsZVBhdGgiLCJzdWNjZXNzIiwicmVzIiwic2hvd1RvYXN0IiwidGl0bGUiLCJpY29uIiwiZmFpbCIsImVyciIsImV2ZW50cyIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztJQUVxQkEsTzs7Ozs7Ozs7Ozs7Ozs7NExBQ25CQyxNLEdBQVM7QUFDUEMsb0NBQXdCLE1BRGpCO0FBRVBDLDBDQUE4QjtBQUZ2QixTLFFBSVRDLFUsR0FBYSxFLFFBSWJDLE0sR0FBUyxnQixRQUVUQyxJLEdBQU8sRSxRQUlQQyxRLEdBQVcsRSxRQUlYQyxPLEdBQVU7QUFDRkMscUJBREU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFTjtBQUNNQyw0Q0FIQSxHQUdXLDREQUhYO0FBQUE7QUFBQSwyQ0FJZUMsR0FBR0MsWUFBSCxDQUFnQixFQUFDQyxLQUFLSCxRQUFOLEVBQWhCLENBSmY7O0FBQUE7QUFJRUksd0NBSkY7O0FBS0pILHVDQUFHSSxzQkFBSCxDQUEwQjtBQUN4Qkwsa0RBQVdJLEtBQUtSLElBQUwsQ0FBVVUsWUFERztBQUV4QkMsK0NBRndCLG1CQUVoQkMsR0FGZ0IsRUFFWDtBQUNULDJEQUFLQyxTQUFMLENBQWU7QUFDYkMsdURBQVEsT0FESztBQUViQyxzREFBTztBQUZNLDZDQUFmO0FBSUgseUNBUHVCO0FBUXhCQyw0Q0FSd0IsZ0JBUWxCQyxHQVJrQixFQVFiO0FBQ1IsMkRBQUtKLFNBQUwsQ0FBZTtBQUNaQyx1REFBUSxPQURJO0FBRVpDLHNEQUFPO0FBRkssNkNBQWY7QUFJRjtBQWJ1QixxQ0FBMUI7O0FBTEk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQSxTLFFBdUJWRyxNLEdBQVMsRTs7Ozs7aUNBSUEsQ0FFUjs7OztFQWhEa0MsZUFBS0MsSTs7a0JBQXJCekIsTyIsImZpbGUiOiJpbWdTYXZlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XHJcbiAgaW1wb3J0IFRvYXN0IGZyb20gJ3dlcHktY29tLXRvYXN0J1xyXG4gIGltcG9ydCBhcGkgZnJvbSAnLi4vYXBpL2FwaS5qcyc7XHJcbiAgaW1wb3J0IHRlc3RNaXhpbiBmcm9tICcuLi9taXhpbnMvdGVzdCdcclxuXHJcbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgaW1nU2F2ZSBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAgICBjb25maWcgPSB7XHJcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfnlJ/miJDmtbfmiqUnLFxyXG4gICAgICBuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yOiAnI2ZmZDg0NSdcclxuICAgIH1cclxuICAgIGNvbXBvbmVudHMgPSB7XHJcblx0IFxyXG4gICAgfVxyXG5cclxuICAgIG1peGlucyA9IFt0ZXN0TWl4aW5dXHJcblxyXG4gICAgZGF0YSA9IHtcclxuICAgICBcclxuICAgIH1cclxuXHJcbiAgICBjb21wdXRlZCA9IHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgbWV0aG9kcyA9IHtcclxuICAgICAgYXN5bmMgc2F2ZUNvdmVyICgpIHtcclxuICAgICAgICAvLyDnlLHkuo7lvq7kv6HlsI/nqIvluo/kuI3mlK/mjIHnvZHnu5zlm77niYfnm7TmjqXov5vooYzkv53lrZjvvIzmiYDku6XlhYjlr7nlm77niYfov5vooYzlpITnkIblhYjkuIvovb3liLDmnKzlnLAs5ZCM5pe26ZyA6KaB5bCG6ZyA6KaB5LiL6L2955qE5Zu+54mH5Z+f5ZCN5Zyo5YWs5LyX5Y+36YWN572uXHJcbiAgICAgICAgICBsZXQgZmlsZVBhdGggPSBcImh0dHA6Ly9mcy54dWV4aWJhby5jbi85MjBlZmEzNTVmZDc0ODcyOThmYjE5YzM3NDY4MGMxNi5qcGdcIiA7XHJcbiAgICAgICAgICBjb25zdCBqc29uID0gYXdhaXQgd3guZG93bmxvYWRGaWxlKHt1cmw6IGZpbGVQYXRofSkgO1xyXG4gICAgICAgICAgd3guc2F2ZUltYWdlVG9QaG90b3NBbGJ1bSh7XHJcbiAgICAgICAgICAgIGZpbGVQYXRoIDoganNvbi5kYXRhLnRlbXBGaWxlUGF0aCxcclxuICAgICAgICAgICAgc3VjY2VzcyhyZXMpIHtcclxuICAgICAgICAgICAgICAgIHdlcHkuc2hvd1RvYXN0KHtcclxuICAgICAgICAgICAgICAgICAgdGl0bGUgOiBcIuWbvueJh+W3suS/neWtmFwiICxcclxuICAgICAgICAgICAgICAgICAgaWNvbiA6IFwic3VjY2Vzc1wiXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBmYWlsIChlcnIpIHtcclxuICAgICAgICAgICAgICAgd2VweS5zaG93VG9hc3Qoe1xyXG4gICAgICAgICAgICAgICAgICB0aXRsZSA6IFwi5Zu+54mH5pyq5L+d5a2YXCIgLFxyXG4gICAgICAgICAgICAgICAgICBpY29uIDogXCJmYWlsXCJcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBldmVudHMgPSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuIl19