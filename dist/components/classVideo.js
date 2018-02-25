'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var classVideo = function (_wepy$component) {
  _inherits(classVideo, _wepy$component);

  function classVideo() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, classVideo);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = classVideo.__proto__ || Object.getPrototypeOf(classVideo)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
      src: {
        default: 'http://fs.xuexibao.cn/educhain/course/13/1.mp4'
      }
    }, _this.methods = {
      createPaper: function createPaper() {
        wx.navigateTo({
          url: '../pages/imgSave'
        });
      }
    }, _this.watch = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(classVideo, [{
    key: 'onLoad',
    value: function onLoad() {
      var that = this;
    }
  }]);

  return classVideo;
}(_wepy2.default.component);

exports.default = classVideo;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsYXNzVmlkZW8uanMiXSwibmFtZXMiOlsiY2xhc3NWaWRlbyIsInByb3BzIiwic3JjIiwiZGVmYXVsdCIsIm1ldGhvZHMiLCJjcmVhdGVQYXBlciIsInd4IiwibmF2aWdhdGVUbyIsInVybCIsIndhdGNoIiwidGhhdCIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsVTs7Ozs7Ozs7Ozs7Ozs7OExBQ25CQyxLLEdBQVE7QUFDSkMsV0FBTTtBQUNIQyxpQkFBVTtBQURQO0FBREYsSyxRQU1SQyxPLEdBQVU7QUFDUkMsaUJBRFEseUJBQ0s7QUFDWEMsV0FBR0MsVUFBSCxDQUFjO0FBQ1pDLGVBQUs7QUFETyxTQUFkO0FBR0Q7QUFMTyxLLFFBYVZDLEssR0FBUSxFOzs7Ozs2QkFKQztBQUNQLFVBQUlDLE9BQU8sSUFBWDtBQUVEOzs7O0VBbkJxQyxlQUFLQyxTOztrQkFBeEJYLFUiLCJmaWxlIjoiY2xhc3NWaWRlby5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgY2xhc3NWaWRlbyBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcclxuICBwcm9wcyA9IHtcclxuICAgICAgc3JjIDoge1xyXG4gICAgICAgICBkZWZhdWx0IDogJ2h0dHA6Ly9mcy54dWV4aWJhby5jbi9lZHVjaGFpbi9jb3Vyc2UvMTMvMS5tcDQnXHJcbiAgICAgIH1cclxuICB9XHJcblxyXG4gIG1ldGhvZHMgPSB7XHJcbiAgICBjcmVhdGVQYXBlcigpe1xyXG4gICAgICB3eC5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICB1cmw6ICcuLi9wYWdlcy9pbWdTYXZlJ1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuICBvbkxvYWQoKSB7XHJcbiAgICBsZXQgdGhhdCA9IHRoaXM7XHJcblxyXG4gIH1cclxuICB3YXRjaCA9IHtcclxuICAgXHJcbiAgfVxyXG59XHJcblxyXG4iXX0=