'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _cuImg = require('./cuImg.js');

var _cuImg2 = _interopRequireDefault(_cuImg);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
//    import VolItem from 'volItem';
// 引用btn组件


var lockList = function (_wepy$component) {
    _inherits(lockList, _wepy$component);

    function lockList() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, lockList);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = lockList.__proto__ || Object.getPrototypeOf(lockList)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
            listData: {
                default: {
                    amount: 2

                }
            },
            headImg: {}
        }, _this.components = {
            cuImg: _cuImg2.default
        }, _this.data = {}, _this.methods = {
            onShareAppMessage: function onShareAppMessage() {
                // if (res.from === 'button') {
                //     // 来自页面内转发按钮
                //     console.log(res.target)
                // }
                return {
                    title: '学习宝免费课程试听',
                    path: '/pages/index',
                    success: function success(res) {
                        // 转发成功
                    },
                    fail: function fail(res) {
                        // 转发失败
                    }
                };
            },
            moreClass: function moreClass(event) {
                wx.navigateTo({
                    url: '../pages/index'
                });
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(lockList, [{
        key: 'onLoad',
        value: function onLoad() {
            console.log(this.list);
        }
    }, {
        key: 'load',
        value: function load(singles) {
            this.singles = singles;
            this.$apply();
        }
    }]);

    return lockList;
}(_wepy2.default.component);

exports.default = lockList;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvY2tMaXN0LmpzIl0sIm5hbWVzIjpbImxvY2tMaXN0IiwicHJvcHMiLCJsaXN0RGF0YSIsImRlZmF1bHQiLCJhbW91bnQiLCJoZWFkSW1nIiwiY29tcG9uZW50cyIsImN1SW1nIiwiZGF0YSIsIm1ldGhvZHMiLCJvblNoYXJlQXBwTWVzc2FnZSIsInRpdGxlIiwicGF0aCIsInN1Y2Nlc3MiLCJyZXMiLCJmYWlsIiwibW9yZUNsYXNzIiwiZXZlbnQiLCJ3eCIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJjb25zb2xlIiwibG9nIiwibGlzdCIsInNpbmdsZXMiLCIkYXBwbHkiLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNJOzs7O0FBR0E7Ozs7Ozs7Ozs7O0FBRko7QUFDSTs7O0lBRXFCQSxROzs7Ozs7Ozs7Ozs7Ozs4TEFDakJDLEssR0FBUTtBQUNKQyxzQkFBVztBQUNQQyx5QkFBVTtBQUNOQyw0QkFBUzs7QUFESDtBQURILGFBRFA7QUFPSkMscUJBQVU7QUFQTixTLFFBWVJDLFUsR0FBYTtBQUNWQztBQURVLFMsUUFJYkMsSSxHQUFPLEUsUUFJUEMsTyxHQUFVO0FBQ05DLCtCQUFtQiw2QkFBWTtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUFPO0FBQ1BDLDJCQUFPLFdBREE7QUFFUEMsMEJBQU0sY0FGQztBQUdMQyw2QkFBUyxpQkFBVUMsR0FBVixFQUFlO0FBQ3RCO0FBQ0QscUJBTEk7QUFNTEMsMEJBQU0sY0FBVUQsR0FBVixFQUFlO0FBQ25CO0FBQ0Q7QUFSSSxpQkFBUDtBQVVILGFBaEJLO0FBaUJORSx1QkFBVyxtQkFBVUMsS0FBVixFQUFpQjtBQUN4QkMsbUJBQUdDLFVBQUgsQ0FBYztBQUNWQyx5QkFBSztBQURLLGlCQUFkO0FBR0g7QUFyQkssUzs7Ozs7aUNBd0JBO0FBQ05DLG9CQUFRQyxHQUFSLENBQVksS0FBS0MsSUFBakI7QUFDSDs7OzZCQUVLQyxPLEVBQVM7QUFDWCxpQkFBS0EsT0FBTCxHQUFlQSxPQUFmO0FBQ0EsaUJBQUtDLE1BQUw7QUFDSDs7OztFQXBEaUMsZUFBS0MsUzs7a0JBQXRCMUIsUSIsImZpbGUiOiJsb2NrTGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gICAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XHJcbi8vICAgIGltcG9ydCBWb2xJdGVtIGZyb20gJ3ZvbEl0ZW0nO1xyXG4gICAgLy8g5byV55SoYnRu57uE5Lu2XHJcbiAgICBpbXBvcnQgIGN1SW1nIGZyb20gJy4vY3VJbWcnXHJcbiAgICBleHBvcnQgZGVmYXVsdCBjbGFzcyBsb2NrTGlzdCBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcclxuICAgICAgICBwcm9wcyA9IHtcclxuICAgICAgICAgICAgbGlzdERhdGEgOiB7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0IDoge1xyXG4gICAgICAgICAgICAgICAgICAgIGFtb3VudCA6IDIgXHJcbiAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgaGVhZEltZyA6IHtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY29tcG9uZW50cyA9IHtcclxuICAgICAgICAgICBjdUltZyA6IGN1SW1nXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgZGF0YSA9IHtcclxuICAgICAgICAgICBcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBtZXRob2RzID0ge1xyXG4gICAgICAgICAgICBvblNoYXJlQXBwTWVzc2FnZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgLy8gaWYgKHJlcy5mcm9tID09PSAnYnV0dG9uJykge1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIC8vIOadpeiHqumhtemdouWGhei9rOWPkeaMiemSrlxyXG4gICAgICAgICAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKHJlcy50YXJnZXQpXHJcbiAgICAgICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICflrabkuaDlrp3lhY3otLnor77nqIvor5XlkKwnLFxyXG4gICAgICAgICAgICAgICAgcGF0aDogJy9wYWdlcy9pbmRleCcsXHJcbiAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyDovazlj5HmiJDlip9cclxuICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgZmFpbDogZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIOi9rOWPkeWksei0pVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG1vcmVDbGFzczogZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgICAgICAgICB3eC5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICAgICAgICAgICAgICB1cmw6ICcuLi9wYWdlcy9pbmRleCdcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgb25Mb2FkICgpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5saXN0KVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGxvYWQgKHNpbmdsZXMpIHtcclxuICAgICAgICAgICAgdGhpcy5zaW5nbGVzID0gc2luZ2xlcztcclxuICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG4iXX0=