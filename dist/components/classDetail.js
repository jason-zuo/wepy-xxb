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

//    import VolItem from 'volItem';
var classdetail = function (_wepy$component) {
    _inherits(classdetail, _wepy$component);

    function classdetail() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, classdetail);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = classdetail.__proto__ || Object.getPrototypeOf(classdetail)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
            detailList: {
                type: String,
                twoWay: true
            }
        }, _this.components = {
            //
        }, _this.data = {
            arrList: []
        }, _this.methods = {}, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(classdetail, [{
        key: 'splitIMg',
        value: function splitIMg(string) {
            // 创建空数组将原接口中的img抽离出来
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
            this.arrList = imgList;
            this.$apply();
        }
    }, {
        key: 'onLoad',
        value: function onLoad() {
            this.detailList = this.splitIMg(this.detailList);
        }
    }]);

    return classdetail;
}(_wepy2.default.component);

exports.default = classdetail;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsYXNzRGV0YWlsLmpzIl0sIm5hbWVzIjpbImNsYXNzZGV0YWlsIiwicHJvcHMiLCJkZXRhaWxMaXN0IiwidHlwZSIsIlN0cmluZyIsInR3b1dheSIsImNvbXBvbmVudHMiLCJkYXRhIiwiYXJyTGlzdCIsIm1ldGhvZHMiLCJzdHJpbmciLCJpbWdSZWciLCJzcmNSZWciLCJhcnIiLCJtYXRjaCIsImltZ0xpc3QiLCJpIiwibGVuZ3RoIiwic3JjIiwicHVzaCIsIiRhcHBseSIsInNwbGl0SU1nIiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDSTs7Ozs7Ozs7Ozs7O0FBQ0o7SUFDeUJBLFc7Ozs7Ozs7Ozs7Ozs7O29NQUNqQkMsSyxHQUFRO0FBQ0pDLHdCQUFXO0FBQ1BDLHNCQUFNQyxNQURDO0FBRVBDLHdCQUFRO0FBRkQ7QUFEUCxTLFFBT1JDLFUsR0FBYTtBQUNyQjtBQURxQixTLFFBSWJDLEksR0FBTztBQUNIQyxxQkFBVTtBQURQLFMsUUFJUEMsTyxHQUFVLEU7Ozs7O2lDQUdBQyxNLEVBQVE7QUFDZDtBQUNBLGdCQUFJQyxTQUFTLG9CQUFiO0FBQ0EsZ0JBQUlDLFNBQVMsK0JBQWI7QUFDQSxnQkFBSUMsTUFBTUgsT0FBT0ksS0FBUCxDQUFhSCxNQUFiLENBQVY7QUFDQSxnQkFBSUksVUFBVSxFQUFkO0FBQ0EsaUJBQUssSUFBSUMsSUFBSSxDQUFiLEVBQWdCQSxJQUFJSCxJQUFJSSxNQUF4QixFQUFnQ0QsR0FBaEMsRUFBcUM7QUFDakMsb0JBQUlFLE1BQU1MLElBQUlHLENBQUosRUFBT0YsS0FBUCxDQUFhRixNQUFiLENBQVY7QUFDQTtBQUNBRyx3QkFBUUksSUFBUixDQUFhRCxJQUFJLENBQUosQ0FBYjtBQUNBO0FBQ0g7QUFDRCxpQkFBS1YsT0FBTCxHQUFlTyxPQUFmO0FBQ0EsaUJBQUtLLE1BQUw7QUFDSDs7O2lDQUVVO0FBQ04saUJBQUtsQixVQUFMLEdBQWtCLEtBQUttQixRQUFMLENBQWMsS0FBS25CLFVBQW5CLENBQWxCO0FBQ0o7Ozs7RUFyQ29DLGVBQUtvQixTOztrQkFBekJ0QixXIiwiZmlsZSI6ImNsYXNzRGV0YWlsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcclxuLy8gICAgaW1wb3J0IFZvbEl0ZW0gZnJvbSAndm9sSXRlbSc7XHJcbiAgICBleHBvcnQgZGVmYXVsdCBjbGFzcyBjbGFzc2RldGFpbCBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcclxuICAgICAgICBwcm9wcyA9IHtcclxuICAgICAgICAgICAgZGV0YWlsTGlzdDp7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgICAgICAgICB0d29XYXk6IHRydWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGNvbXBvbmVudHMgPSB7XHJcbi8vXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgZGF0YSA9IHtcclxuICAgICAgICAgICAgYXJyTGlzdCA6IFtdXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgbWV0aG9kcyA9IHtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBzcGxpdElNZyAoc3RyaW5nKSB7XHJcbiAgICAgICAgICAgIC8vIOWIm+W7uuepuuaVsOe7hOWwhuWOn+aOpeWPo+S4reeahGltZ+aKveemu+WHuuadpVxyXG4gICAgICAgICAgICBsZXQgaW1nUmVnID0gLzxpbWcuKj8oPzo+fFxcLz4pL2dpIDtcclxuICAgICAgICAgICAgbGV0IHNyY1JlZyA9IC9zcmM9W1xcJ1xcXCJdPyhbXlxcJ1xcXCJdKilbXFwnXFxcIl0/L2kgO1xyXG4gICAgICAgICAgICB2YXIgYXJyID0gc3RyaW5nLm1hdGNoKGltZ1JlZykgO1xyXG4gICAgICAgICAgICB2YXIgaW1nTGlzdCA9IFtdIDtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHZhciBzcmMgPSBhcnJbaV0ubWF0Y2goc3JjUmVnKTtcclxuICAgICAgICAgICAgICAgIC8v6I635Y+W5Zu+54mH5Zyw5Z2AXHJcbiAgICAgICAgICAgICAgICBpbWdMaXN0LnB1c2goc3JjWzFdKSA7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhpbWdMaXN0KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuYXJyTGlzdCA9IGltZ0xpc3RcclxuICAgICAgICAgICAgdGhpcy4kYXBwbHkoKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgb25Mb2FkICAoKSB7XHJcbiAgICAgICAgICAgICB0aGlzLmRldGFpbExpc3QgPSB0aGlzLnNwbGl0SU1nKHRoaXMuZGV0YWlsTGlzdCk7XHJcbiAgICAgICAgfTtcclxuXHJcblxyXG4gICAgfVxyXG4iXX0=