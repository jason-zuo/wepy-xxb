"use strict";

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

var Filter = function (_wepy$component) {
  _inherits(Filter, _wepy$component);

  function Filter() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Filter);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Filter.__proto__ || Object.getPrototypeOf(Filter)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
      currentTab: {
        default: 0
      },
      tabList: {
        type: Object
      }
    }, _this.methods = {
      /**
       * 点击tab切换
       */
      swichNav: function swichNav(e) {
        var that = this;
        if (this.data.currentTab == e.target.dataset.current) {
          return false;
        } else {
          that.currentTab = e.target.dataset.current;
          that.$apply();
        }
        this.$emit("currentTab", that.currentTab);
      },

      /**
       * 头部红点标识
       * @param  {[type]} dotList [description]
       * @return {[type]}         [description]
       */
      changeList: function changeList(dotList) {
        this.tabList = dotList;
      }
    }, _this.watch = {
      currentTab: function currentTab(newValue, oldValue) {
        console.log("currentTab value: " + oldValue + " -> " + newValue);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Filter, [{
    key: "onLoad",
    value: function onLoad() {
      var that = this;
    }
  }]);

  return Filter;
}(_wepy2.default.component);

exports.default = Filter;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYiAtIOWJr+acrC5qcyJdLCJuYW1lcyI6WyJGaWx0ZXIiLCJwcm9wcyIsImN1cnJlbnRUYWIiLCJkZWZhdWx0IiwidGFiTGlzdCIsInR5cGUiLCJPYmplY3QiLCJtZXRob2RzIiwic3dpY2hOYXYiLCJlIiwidGhhdCIsImRhdGEiLCJ0YXJnZXQiLCJkYXRhc2V0IiwiY3VycmVudCIsIiRhcHBseSIsIiRlbWl0IiwiY2hhbmdlTGlzdCIsImRvdExpc3QiLCJ3YXRjaCIsIm5ld1ZhbHVlIiwib2xkVmFsdWUiLCJjb25zb2xlIiwibG9nIiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxNOzs7Ozs7Ozs7Ozs7OztzTEFDbkJDLEssR0FBUTtBQUNOQyxrQkFBWTtBQUNWQyxpQkFBUztBQURDLE9BRE47QUFJTkMsZUFBUztBQUNQQyxjQUFNQztBQURDO0FBSkgsSyxRQVNSQyxPLEdBQVU7QUFDUjs7O0FBR0FDLGNBSlEsb0JBSUNDLENBSkQsRUFJSTtBQUNWLFlBQUlDLE9BQU8sSUFBWDtBQUNBLFlBQUksS0FBS0MsSUFBTCxDQUFVVCxVQUFWLElBQXdCTyxFQUFFRyxNQUFGLENBQVNDLE9BQVQsQ0FBaUJDLE9BQTdDLEVBQXNEO0FBQ3BELGlCQUFPLEtBQVA7QUFDRCxTQUZELE1BRU87QUFDTEosZUFBS1IsVUFBTCxHQUFrQk8sRUFBRUcsTUFBRixDQUFTQyxPQUFULENBQWlCQyxPQUFuQztBQUNBSixlQUFLSyxNQUFMO0FBQ0Q7QUFDRCxhQUFLQyxLQUFMLENBQVcsWUFBWCxFQUF5Qk4sS0FBS1IsVUFBOUI7QUFDRCxPQWJPOztBQWNSOzs7OztBQUtBZSxnQkFuQlEsc0JBbUJHQyxPQW5CSCxFQW1CWTtBQUNsQixhQUFLZCxPQUFMLEdBQWVjLE9BQWY7QUFDRDtBQXJCTyxLLFFBNkJWQyxLLEdBQVE7QUFDTmpCLGdCQURNLHNCQUNLa0IsUUFETCxFQUNlQyxRQURmLEVBQ3lCO0FBQzdCQyxnQkFBUUMsR0FBUix3QkFBaUNGLFFBQWpDLFlBQWdERCxRQUFoRDtBQUNEO0FBSEssSzs7Ozs7NkJBSkM7QUFDUCxVQUFJVixPQUFPLElBQVg7QUFFRDs7OztFQXRDaUMsZUFBS2MsUzs7a0JBQXBCeEIsTSIsImZpbGUiOiJ0YWIgLSDlia/mnKwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZpbHRlciBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcclxuICBwcm9wcyA9IHtcclxuICAgIGN1cnJlbnRUYWI6IHtcclxuICAgICAgZGVmYXVsdDogMFxyXG4gICAgfSxcclxuICAgIHRhYkxpc3Q6IHtcclxuICAgICAgdHlwZTogT2JqZWN0XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBtZXRob2RzID0ge1xyXG4gICAgLyoqXHJcbiAgICAgKiDngrnlh7t0YWLliIfmjaJcclxuICAgICAqL1xyXG4gICAgc3dpY2hOYXYoZSkge1xyXG4gICAgICBsZXQgdGhhdCA9IHRoaXM7XHJcbiAgICAgIGlmICh0aGlzLmRhdGEuY3VycmVudFRhYiA9PSBlLnRhcmdldC5kYXRhc2V0LmN1cnJlbnQpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhhdC5jdXJyZW50VGFiID0gZS50YXJnZXQuZGF0YXNldC5jdXJyZW50O1xyXG4gICAgICAgIHRoYXQuJGFwcGx5KCk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy4kZW1pdChcImN1cnJlbnRUYWJcIiwgdGhhdC5jdXJyZW50VGFiKVxyXG4gICAgfSxcclxuICAgIC8qKlxyXG4gICAgICog5aS06YOo57qi54K55qCH6K+GXHJcbiAgICAgKiBAcGFyYW0gIHtbdHlwZV19IGRvdExpc3QgW2Rlc2NyaXB0aW9uXVxyXG4gICAgICogQHJldHVybiB7W3R5cGVdfSAgICAgICAgIFtkZXNjcmlwdGlvbl1cclxuICAgICAqL1xyXG4gICAgY2hhbmdlTGlzdChkb3RMaXN0KSB7XHJcbiAgICAgIHRoaXMudGFiTGlzdCA9IGRvdExpc3Q7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcbiAgb25Mb2FkKCkge1xyXG4gICAgbGV0IHRoYXQgPSB0aGlzO1xyXG5cclxuICB9XHJcbiAgd2F0Y2ggPSB7XHJcbiAgICBjdXJyZW50VGFiKG5ld1ZhbHVlLCBvbGRWYWx1ZSkge1xyXG4gICAgICBjb25zb2xlLmxvZyhgY3VycmVudFRhYiB2YWx1ZTogJHtvbGRWYWx1ZX0gLT4gJHtuZXdWYWx1ZX1gKVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuIl19