'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

require('./npm/wepy-async-function/index.js');

var _contant = require('./untils/contant.js');

var _apilist = require('./api/apilist.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _default = function (_wepy$app) {
  _inherits(_default, _wepy$app);

  function _default() {
    _classCallCheck(this, _default);

    var _this2 = _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).call(this));

    _this2.config = {
      pages: ['pages/index', 'pages/imgSave', 'pages/course'],
      window: {
        backgroundTextStyle: 'light',
        navigationBarBackgroundColor: '#ffd845',
        navigationBarTitleText: '课程详情',
        navigationBarTextStyle: 'black'
      }

    };
    _this2.globalData = {
      userInfo: null
    };

    _this2.use('requestfix');
    _this2.use('promisify');
    return _this2;
  }

  _createClass(_default, [{
    key: 'onLaunch',
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var _that, userInfo;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _that = this;
                userInfo = _wepy2.default.getStorageSync(_contant.USER_INFO) || {};

                wx.login({
                  success: function success(res) {
                    console.log("==========" + res.code);
                    if (res.code) {
                      //发起网络请求
                      _that.getUserCodeHtp(res.code);
                    } else {
                      console.log('获取用户登录态失败！' + res.errMsg);
                    }
                  }
                });

              case 3:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function onLaunch() {
        return _ref.apply(this, arguments);
      }

      return onLaunch;
    }()
  }, {
    key: 'sleep',
    value: function sleep(s) {
      return new Promise(function (resolve, reject) {
        setTimeout(function () {
          resolve('promise resolved');
        }, s * 1000);
      });
    }
  }, {
    key: 'getUserCodeHtp',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(code) {
        var _this;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this = this;

                (0, _apilist.getUserCode)({
                  query: {
                    code: code
                  }
                }).then(function (resp) {
                  var rlt = resp.data;
                  //存储token
                  _wepy2.default.setStorageSync(_contant.USER_SPECICAL_INFO, rlt.result.token);
                  if (rlt.result.new == true) {
                    //说明是新用户
                    wx.getUserInfo({
                      success: function success(res) {
                        var userInfo = res.userInfo;
                        _wepy2.default.setStorageSync(_contant.USER_INFO, userInfo);
                        _this.updateUser(userInfo, rlt.result.token);
                      }
                    });
                  }
                });

              case 2:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getUserCodeHtp(_x) {
        return _ref2.apply(this, arguments);
      }

      return getUserCodeHtp;
    }()
  }, {
    key: 'updateUser',
    value: function updateUser(userInfo, token) {
      var _this = this;
      (0, _apilist.updateUser)({
        query: {
          nickname: userInfo.nickName,
          headimgurl: userInfo.avatarUrl,
          sex: userInfo.gender,
          token: token
        }
      }).then(function (resp) {
        var rlt = resp.data;
        //存储token
        console.log(rlt);
      });
    }
  }, {
    key: 'testAsync',
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        var data;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return this.sleep(3);

              case 2:
                data = _context3.sent;

              case 3:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function testAsync() {
        return _ref3.apply(this, arguments);
      }

      return testAsync;
    }()
  }, {
    key: 'getUserInfo',
    value: function getUserInfo(cb) {
      var that = this;
      if (this.globalData.userInfo) {
        return this.globalData.userInfo;
      }
      _wepy2.default.getUserInfo({
        success: function success(res) {
          that.globalData.userInfo = res.userInfo;
          cb && cb(res.userInfo);
        }
      });
    }
  }]);

  return _default;
}(_wepy2.default.app);


App(require('./npm/wepy/lib/wepy.js').default.$createApp(_default, {"noPromiseAPI":["createSelectorQuery"]}));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJjb25maWciLCJwYWdlcyIsIndpbmRvdyIsImJhY2tncm91bmRUZXh0U3R5bGUiLCJuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIm5hdmlnYXRpb25CYXJUZXh0U3R5bGUiLCJnbG9iYWxEYXRhIiwidXNlckluZm8iLCJ1c2UiLCJfdGhhdCIsImdldFN0b3JhZ2VTeW5jIiwid3giLCJsb2dpbiIsInN1Y2Nlc3MiLCJyZXMiLCJjb25zb2xlIiwibG9nIiwiY29kZSIsImdldFVzZXJDb2RlSHRwIiwiZXJyTXNnIiwicyIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0Iiwic2V0VGltZW91dCIsIl90aGlzIiwicXVlcnkiLCJ0aGVuIiwicmx0IiwicmVzcCIsImRhdGEiLCJzZXRTdG9yYWdlU3luYyIsInJlc3VsdCIsInRva2VuIiwibmV3IiwiZ2V0VXNlckluZm8iLCJ1cGRhdGVVc2VyIiwibmlja25hbWUiLCJuaWNrTmFtZSIsImhlYWRpbWd1cmwiLCJhdmF0YXJVcmwiLCJzZXgiLCJnZW5kZXIiLCJzbGVlcCIsImNiIiwidGhhdCIsImFwcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7QUFLQTs7Ozs7Ozs7Ozs7Ozs7O0FBd0JFLHNCQUFlO0FBQUE7O0FBQUE7O0FBQUEsV0FuQmZBLE1BbUJlLEdBbkJOO0FBQ1BDLGFBQU8sQ0FDTCxhQURLLEVBRUwsZUFGSyxFQUdMLGNBSEssQ0FEQTtBQU1QQyxjQUFRO0FBQ05DLDZCQUFxQixPQURmO0FBRU5DLHNDQUE4QixTQUZ4QjtBQUdOQyxnQ0FBd0IsTUFIbEI7QUFJTkMsZ0NBQXdCO0FBSmxCOztBQU5ELEtBbUJNO0FBQUEsV0FKZkMsVUFJZSxHQUpGO0FBQ1hDLGdCQUFVO0FBREMsS0FJRTs7QUFFYixXQUFLQyxHQUFMLENBQVMsWUFBVDtBQUNBLFdBQUtBLEdBQUwsQ0FBUyxXQUFUO0FBSGE7QUFJZDs7Ozs7Ozs7Ozs7O0FBR0tDLHFCLEdBQVEsSTtBQUNSRix3QixHQUFXLGVBQUtHLGNBQUwsd0JBQWtDLEU7O0FBQzdDQyxtQkFBR0MsS0FBSCxDQUFTO0FBQ1BDLDJCQUFTLGlCQUFTQyxHQUFULEVBQWM7QUFDckJDLDRCQUFRQyxHQUFSLENBQVksZUFBYUYsSUFBSUcsSUFBN0I7QUFDQSx3QkFBSUgsSUFBSUcsSUFBUixFQUFjO0FBQ1o7QUFDQVIsNEJBQU1TLGNBQU4sQ0FBcUJKLElBQUlHLElBQXpCO0FBQ0QscUJBSEQsTUFHTztBQUNMRiw4QkFBUUMsR0FBUixDQUFZLGVBQWVGLElBQUlLLE1BQS9CO0FBQ0Q7QUFDRjtBQVRNLGlCQUFUOzs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBYUNDLEMsRUFBRztBQUNSLGFBQU8sSUFBSUMsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUN0Q0MsbUJBQVcsWUFBTTtBQUNmRixrQkFBUSxrQkFBUjtBQUNELFNBRkQsRUFFR0YsSUFBSSxJQUZQO0FBR0QsT0FKTSxDQUFQO0FBS0Q7Ozs7NEZBRXFCSCxJOzs7Ozs7O0FBQ2RRLHFCLEdBQVEsSTs7QUFDWiwwQ0FBWTtBQUNSQyx5QkFBTztBQUNMVCwwQkFBTUE7QUFERDtBQURDLGlCQUFaLEVBSUtVLElBSkwsQ0FJVSxnQkFBUTtBQUNiLHNCQUFJQyxNQUFNQyxLQUFLQyxJQUFmO0FBQ0E7QUFDQSxpQ0FBS0MsY0FBTCw4QkFBd0NILElBQUlJLE1BQUosQ0FBV0MsS0FBbkQ7QUFDQSxzQkFBSUwsSUFBSUksTUFBSixDQUFXRSxHQUFYLElBQWtCLElBQXRCLEVBQTRCO0FBQ3hCO0FBQ0R2Qix1QkFBR3dCLFdBQUgsQ0FBZTtBQUNidEIsK0JBQVMsaUJBQVNDLEdBQVQsRUFBYztBQUNyQiw0QkFBSVAsV0FBV08sSUFBSVAsUUFBbkI7QUFDQSx1Q0FBS3dCLGNBQUwscUJBQStCeEIsUUFBL0I7QUFDQWtCLDhCQUFNVyxVQUFOLENBQWlCN0IsUUFBakIsRUFBMkJxQixJQUFJSSxNQUFKLENBQVdDLEtBQXRDO0FBQ0Q7QUFMWSxxQkFBZjtBQU9GO0FBQ0gsaUJBbEJIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7K0JBcUJRMUIsUSxFQUFVMEIsSyxFQUFPO0FBQ3hCLFVBQUlSLFFBQVEsSUFBWjtBQUNDLCtCQUFXO0FBQ05DLGVBQVE7QUFDTFcsb0JBQVc5QixTQUFTK0IsUUFEZjtBQUVMQyxzQkFBYWhDLFNBQVNpQyxTQUZqQjtBQUdMQyxlQUFNbEMsU0FBU21DLE1BSFY7QUFJTFQsaUJBQVFBO0FBSkg7QUFERixPQUFYLEVBT0tOLElBUEwsQ0FPVSxnQkFBUTtBQUNkLFlBQUlDLE1BQU1DLEtBQUtDLElBQWY7QUFDQTtBQUNBZixnQkFBUUMsR0FBUixDQUFZWSxHQUFaO0FBQ0QsT0FYSDtBQVlMOzs7Ozs7Ozs7Ozt1QkFHb0IsS0FBS2UsS0FBTCxDQUFXLENBQVgsQzs7O0FBQWJiLG9COzs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0NBR0ljLEUsRUFBSTtBQUNkLFVBQU1DLE9BQU8sSUFBYjtBQUNBLFVBQUksS0FBS3ZDLFVBQUwsQ0FBZ0JDLFFBQXBCLEVBQThCO0FBQzVCLGVBQU8sS0FBS0QsVUFBTCxDQUFnQkMsUUFBdkI7QUFDRDtBQUNELHFCQUFLNEIsV0FBTCxDQUFpQjtBQUNmdEIsZUFEZSxtQkFDTkMsR0FETSxFQUNEO0FBQ1orQixlQUFLdkMsVUFBTCxDQUFnQkMsUUFBaEIsR0FBMkJPLElBQUlQLFFBQS9CO0FBQ0FxQyxnQkFBTUEsR0FBRzlCLElBQUlQLFFBQVAsQ0FBTjtBQUNEO0FBSmMsT0FBakI7QUFNRDs7OztFQXhHMEIsZUFBS3VDLEciLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbmltcG9ydCAnd2VweS1hc3luYy1mdW5jdGlvbidcclxuaW1wb3J0IHsgXHJcbiAgIFVTRVJfU1BFQ0lDQUxfSU5GTyAsXHJcbiAgIFVTRVJfSU5GT1xyXG59IGZyb20gJy4vdW50aWxzL2NvbnRhbnQnXHJcblxyXG5pbXBvcnQge1xyXG4gICBnZXRVc2VyQ29kZSAsXHJcbiAgIHVwZGF0ZVVzZXIgXHJcbn0gZnJvbSAnLi9hcGkvYXBpbGlzdCcgXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgd2VweS5hcHAge1xyXG4gIGNvbmZpZyA9IHtcclxuICAgIHBhZ2VzOiBbXHJcbiAgICAgICdwYWdlcy9pbmRleCcgLFxyXG4gICAgICAncGFnZXMvaW1nU2F2ZScgLFxyXG4gICAgICAncGFnZXMvY291cnNlJ1xyXG4gICAgXSxcclxuICAgIHdpbmRvdzoge1xyXG4gICAgICBiYWNrZ3JvdW5kVGV4dFN0eWxlOiAnbGlnaHQnLFxyXG4gICAgICBuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yOiAnI2ZmZDg0NScsXHJcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfor77nqIvor6bmg4UnLFxyXG4gICAgICBuYXZpZ2F0aW9uQmFyVGV4dFN0eWxlOiAnYmxhY2snXHJcbiAgICB9LFxyXG4gICAgXHJcbiAgfVxyXG5cclxuICBnbG9iYWxEYXRhID0ge1xyXG4gICAgdXNlckluZm86IG51bGwsXHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvciAoKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgdGhpcy51c2UoJ3JlcXVlc3RmaXgnKTtcclxuICAgIHRoaXMudXNlKCdwcm9taXNpZnknKTtcclxuICB9XHJcblxyXG4gIGFzeW5jIG9uTGF1bmNoKCkge1xyXG4gICAgbGV0IF90aGF0ID0gdGhpcyA7XHJcbiAgICBsZXQgdXNlckluZm8gPSB3ZXB5LmdldFN0b3JhZ2VTeW5jKFVTRVJfSU5GTykgfHwge307XHJcbiAgICAgICAgd3gubG9naW4oe1xyXG4gICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiPT09PT09PT09PVwiK3Jlcy5jb2RlKTtcclxuICAgICAgICAgICAgaWYgKHJlcy5jb2RlKSB7XHJcbiAgICAgICAgICAgICAgLy/lj5HotbfnvZHnu5zor7fmsYJcclxuICAgICAgICAgICAgICBfdGhhdC5nZXRVc2VyQ29kZUh0cChyZXMuY29kZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+iOt+WPlueUqOaIt+eZu+W9leaAgeWksei0pe+8gScgKyByZXMuZXJyTXNnKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgfSAgICAgICAgXHJcblxyXG4gIHNsZWVwIChzKSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICByZXNvbHZlKCdwcm9taXNlIHJlc29sdmVkJylcclxuICAgICAgfSwgcyAqIDEwMDApXHJcbiAgICB9KVxyXG4gIH1cclxuIFxyXG4gIGFzeW5jIGdldFVzZXJDb2RlSHRwIChjb2RlKSB7XHJcbiAgICAgIGxldCBfdGhpcyA9IHRoaXMgO1xyXG4gICAgICBnZXRVc2VyQ29kZSh7XHJcbiAgICAgICAgICBxdWVyeToge1xyXG4gICAgICAgICAgICBjb2RlOiBjb2RlXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSkudGhlbihyZXNwID0+IHtcclxuICAgICAgICAgICB2YXIgcmx0ID0gcmVzcC5kYXRhO1xyXG4gICAgICAgICAgIC8v5a2Y5YKodG9rZW5cclxuICAgICAgICAgICB3ZXB5LnNldFN0b3JhZ2VTeW5jKFVTRVJfU1BFQ0lDQUxfSU5GTywgcmx0LnJlc3VsdC50b2tlbik7XHJcbiAgICAgICAgICAgaWYgKHJsdC5yZXN1bHQubmV3ID09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgLy/or7TmmI7mmK/mlrDnlKjmiLdcclxuICAgICAgICAgICAgICB3eC5nZXRVc2VySW5mbyh7XHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcclxuICAgICAgICAgICAgICAgICAgbGV0IHVzZXJJbmZvID0gcmVzLnVzZXJJbmZvIDtcclxuICAgICAgICAgICAgICAgICAgd2VweS5zZXRTdG9yYWdlU3luYyhVU0VSX0lORk8sIHVzZXJJbmZvKTtcclxuICAgICAgICAgICAgICAgICAgX3RoaXMudXBkYXRlVXNlcih1c2VySW5mbywgcmx0LnJlc3VsdC50b2tlbikgO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlVXNlciAodXNlckluZm8sIHRva2VuKSB7XHJcbiAgICAgICBsZXQgX3RoaXMgPSB0aGlzIDtcclxuICAgICAgICB1cGRhdGVVc2VyKHtcclxuICAgICAgICAgICAgIHF1ZXJ5IDoge1xyXG4gICAgICAgICAgICAgICAgbmlja25hbWUgOiB1c2VySW5mby5uaWNrTmFtZSAsXHJcbiAgICAgICAgICAgICAgICBoZWFkaW1ndXJsIDogdXNlckluZm8uYXZhdGFyVXJsICxcclxuICAgICAgICAgICAgICAgIHNleCA6IHVzZXJJbmZvLmdlbmRlciAsXHJcbiAgICAgICAgICAgICAgICB0b2tlbiA6IHRva2VuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pLnRoZW4ocmVzcCA9PiB7XHJcbiAgICAgICAgICAgIHZhciBybHQgPSByZXNwLmRhdGE7XHJcbiAgICAgICAgICAgIC8v5a2Y5YKodG9rZW5cclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmx0KVxyXG4gICAgICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBhc3luYyB0ZXN0QXN5bmMgKCkge1xyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHRoaXMuc2xlZXAoMylcclxuICB9XHJcblxyXG4gIGdldFVzZXJJbmZvKGNiKSB7XHJcbiAgICBjb25zdCB0aGF0ID0gdGhpc1xyXG4gICAgaWYgKHRoaXMuZ2xvYmFsRGF0YS51c2VySW5mbykge1xyXG4gICAgICByZXR1cm4gdGhpcy5nbG9iYWxEYXRhLnVzZXJJbmZvXHJcbiAgICB9XHJcbiAgICB3ZXB5LmdldFVzZXJJbmZvKHtcclxuICAgICAgc3VjY2VzcyAocmVzKSB7XHJcbiAgICAgICAgdGhhdC5nbG9iYWxEYXRhLnVzZXJJbmZvID0gcmVzLnVzZXJJbmZvXHJcbiAgICAgICAgY2IgJiYgY2IocmVzLnVzZXJJbmZvKVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxufVxyXG4iXX0=